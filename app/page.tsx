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
      <TrustSection />
      <StorySection />
      <TestimonialsSection />
      <HomeJanuaryOfferBox variant="section" text="Secure your seat now, decide later after demo"/>
      <CourseDetailsSection />
      <FAQSection />
      <HomeBottomButtonsCTA />
    </main>
  );
}
