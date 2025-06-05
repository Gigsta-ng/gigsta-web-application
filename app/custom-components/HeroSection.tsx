"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import heroImg from "../../public/images/hero-image.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { CButton } from "./CButton";
import Wrapper from "./Wrapper";

const HeroSection = () => {
	const { screenWidth } = useMediaQuery();
	const isMobile = screenWidth && screenWidth < 1024;

	const bg = {
		backgroundImage: isMobile
			? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg.src})`
			: `url(${heroImg.src})`,
		backgroundPosition: "bottom right",
		backgroundSize: isMobile ? "contain" : "47.9%",
		backgroundRepeat: "no-repeat",
		backgroundPositionX: "95%",
	};

	return (
		<section className="pt-[100px] pb-10 md:py-20" style={bg}>
			<Wrapper className="flex-col gap-6">
				<div className="space-y-8 max-md:flex flex-col items-center">
					<div className="space-y-2">
						<h1 className="text-4xl md:text-5xl lg:text-7xl max-md:text-center font-bold leading-tight text-white">
							Need help? Got skills?
						</h1>
						<h2 className="text-3xl md:text-5xl lg:text-7xl max-md:text-center font-bold text-yellow-500 leading-tight">
							Gigsta gets you
						</h2>
						<h2 className="text-3xl md:text-5xl lg:text-7xl max-md:text-center font-bold text-yellow-500 leading-tight">
							Connected
						</h2>
					</div>

					<p className="text-gray-300 text-sm md:text-[22px] max-w-xl max-md:text-center leading-relaxed">
						Get fast, reliable help with cleaning, errands, repairs & more in
						Uyo. Or earn money by offering your skills, join{" "}
						<span className="text-accent-yellow">Gigsta</span> now
					</p>

					<div className="flex flex-col max-md:items-center  md:flex-row gap-4">
						<CButton
							onPress={() => {}}
							variant="secondary"
							icon={<ChevronRight />}
							iconPosition="right"
							className="border-[2px] border-accent-yellow"
						>
							Post a Task
						</CButton>
						<CButton
							onPress={() => {}}
							variant="primary"
							className="border-none"
						>
							Become a Gigsta pro
						</CButton>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};

export default HeroSection;
