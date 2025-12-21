import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseHeroSection from "@/components/CourseHeroSection";
import WhyCourseGrid from "@/components/WhyCourseGrid";
import CourseSyllabus from "@/components/CourseSyllabus";
import AgeBatches from "@/components/AgeBatches";
import CoursePricing from "@/components/CoursePricing";
import CourseFAQ from "@/components/CourseFAQ";

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CourseHeroSection />
      <WhyCourseGrid />
      <CourseSyllabus />
      <AgeBatches />
      <CoursePricing />
      <CourseFAQ />
    </div>
  );
}
