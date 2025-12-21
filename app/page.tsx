import ProblemSection from "@/components/ProblemSection";
import HeroSection from "../components/HeroSection";
import Cirriculum from "@/components/Curriculum";
import ProjectsSection from "@/components/ProjectsSection";
import TrustSection from "@/components/TrustSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseDetailsSection from "@/components/CourseDetailsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <Cirriculum />
      <ProjectsSection />
      <TrustSection />
      <StorySection />
      <TestimonialsSection />
      <CourseDetailsSection />
      {/* <CTASection /> */}
      <FAQSection />
    </main>
  );
}
