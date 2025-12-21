"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/login');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-5xl mb-4 animate-bounce">🔄</div>
        <p className="text-xl">Redirecting to login...</p>
      </div>
    </div>
  );
}
