import ActionCards from "./custom-components/ActionCards";
import Footer from "./custom-components/Footer";
import HeroSection from "./custom-components/HeroSection";
import HowItWorks from "./custom-components/HowItWorks";
import Testimonial from "./custom-components/Testimonial";
import WhatsappBtn from "./custom-components/WhatsappBtn";
import ScrollAnimation from "./custom-components/scroll-animation";

export default function GigstaLanding() {
	return (
		<div className="min-h-screen text-white">
			<HeroSection />
			<ScrollAnimation>
				<ActionCards />
			</ScrollAnimation>

			<ScrollAnimation delay={100}>
				<HowItWorks />
			</ScrollAnimation>

			<ScrollAnimation delay={200}>
				<Testimonial />
			</ScrollAnimation>

			<ScrollAnimation delay={300}>
				<Footer />
			</ScrollAnimation>
			<WhatsappBtn />
		</div>
	);
}
