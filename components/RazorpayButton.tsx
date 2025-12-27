"use client";
import React, { useState } from 'react';

type Props = {
  courseId: string;
  courseName: string;
  amount: number; // rupees
  className?: string;
  children?: React.ReactNode;
  prefill?: { name?: string; email?: string; contact?: string };
};

async function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve(true);
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Razorpay SDK failed to load'));
    document.body.appendChild(script);
  });
}

export default function RazorpayButton({ courseId, courseName, amount, className, children, prefill }: Props) {
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  // On mount, check if user is logged in and already enrolled
  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const meRes = await fetch('/api/auth/me');
        if (meRes.ok) {
          const meData = await meRes.json();
          const user = meData?.user;
          if (user && Array.isArray(user.enrolledCourses)) {
            const already = user.enrolledCourses.some((c: any) => c.courseId === courseId || c.courseName === courseName);
            if (already && mounted) setEnrolled(true);
          }
        }
      } catch (e) {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, [courseId, courseName]);

  const handleClick = async () => {
    try {
      setLoading(true);

      // Check if user is logged in
      const meRes = await fetch('/api/auth/me');
      if (meRes.status === 401) {
        // Not logged in — ask user to login and redirect to login page
        alert('Please log in to continue to payment.');
        const next = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = `/login?next=${next}`;
        return;
      }

      const meData = await meRes.json();
      const user = meData?.user;

      // If user already enrolled, block checkout and mark enrolled
      if (user && Array.isArray(user.enrolledCourses)) {
        const already = user.enrolledCourses.some((c: any) => c.courseId === courseId || c.courseName === courseName);
        if (already) {
          setEnrolled(true);
          alert('You are already enrolled in this course.');
          return;
        }
      }
      await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      const res = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          courseId,
          courseName,
          userId: user?.id,
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Could not create order');

      const options: any = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: courseName,
        description: courseName,
        order_id: data.orderId,
        handler: async function (response: any) {
          // verify on server
          const verifyRes = await fetch('/api/payments/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              purchaseId: data.purchaseId,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok && verifyData.valid) {
            // mark enrolled and disable button
            setEnrolled(true);
            alert('Payment successful — you are now enrolled!');
          } else {
            alert('Payment verification failed. If the amount was deducted, contact support.');
          }
          setLoading(false);
        },
        prefill: prefill || {},
        theme: { color: '#6b21a8' },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error('Razorpay error', err);
      alert(err.message || 'Payment failed to start');
      setLoading(false);
    }
  };

  // Render a non-button interactive element to avoid nesting <button> inside other buttons
  const isDisabled = loading || enrolled;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      onClick={() => { if (!isDisabled) handleClick(); }}
      onKeyDown={handleKeyDown}
      aria-disabled={isDisabled}
      className={className}
    >
      {loading ? 'Processing...' : enrolled ? (children ? 'Enrolled' : 'Enrolled') : (children ?? `Enroll Now (₹${amount})`)}
    </div>
  );
}
