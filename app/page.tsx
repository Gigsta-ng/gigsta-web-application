import ActionCards from "./custom-components/ActionCards";
import Footer from "./custom-components/Footer";
import HeroSection from "./custom-components/HeroSection";
import HowItWorks from "./custom-components/HowItWorks";
import Testimonial from "./custom-components/Testimonial";
import WhatsappBtn from "./custom-components/WhatsappBtn";

export default function GigstaLanding() {
	return (
		<div className="min-h-screen text-white">
			<HeroSection />
			<ActionCards />
			<HowItWorks />
			<Testimonial />
			<Footer />
			<WhatsappBtn />
		</div>
	);
}
