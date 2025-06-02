import Logo from "./custom-components/Logo";
import HeroSection from "./custom-components/HeroSection";
import Testimonial from "./custom-components/Testimonial";
import Footer from "./custom-components/Footer";
import { CButton } from "./custom-components/CButton";
import HowItWorks from "./custom-components/HowItWorks";
import ActionCards from "./custom-components/ActionCards";
import WhatsappBtn from "./custom-components/WhatsappBtn";

export default function GigstaLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ActionCards />
      <HowItWorks />
      <Testimonial />
      <Footer />
      <WhatsappBtn />
    </div>
  );
}
