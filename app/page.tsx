import ProblemSection from "@/components/ProblemSection";
import HeroSection from "../components/HeroSection";
import Cirriculum from "@/components/Curriculum";
import ProjectsSection from "@/components/ProjectsSection";
import TrustSection from "@/components/TrustSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseDetailsSection from "@/components/CourseDetailsSection";
import FAQSection from "@/components/FAQSection";
import HomeJanuaryOfferBox from "@/components/HomeJanuaryOfferBox";
import HomeBottomButtonsCTA from "@/components/HomeBottomButtonsCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <Cirriculum />
      <ProjectsSection />
      <HomeJanuaryOfferBox />
      <TrustSection />
      <StorySection />
      <TestimonialsSection />
      <HomeJanuaryOfferBox />
      <CourseDetailsSection />
      <FAQSection />
      <HomeBottomButtonsCTA />
    </main>
  );
}
