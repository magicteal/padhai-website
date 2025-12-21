import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyAIHeroSection from "@/components/WhyAIHeroSection";
import RealityCheck from "@/components/RealityCheck";
import AISuperpower from "@/components/AISuperpower";
import ScreenTimeMyth from "@/components/ScreenTimeMyth";
import BangaloreAdvantage from "@/components/BangaloreAdvantage";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import WhyAIFinalCTA from "@/components/WhyAIFinalCTA";

export default function WhyAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhyAIHeroSection />
      <RealityCheck />
      <AISuperpower />
      <ScreenTimeMyth />
      <BangaloreAdvantage />
      <WhoIsThisFor />
      <WhyAIFinalCTA />
    </div>
  );
}
