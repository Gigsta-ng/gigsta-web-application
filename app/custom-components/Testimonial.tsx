"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-react";
import { Users } from "lucide-react";
import { useRef } from "react";
import React from "react";
import { FaStar } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Testimonial = () => {
	const plugin = useRef(Autoplay({}));

	const testimonials = [
		{
			message: `I needed help moving furniture on short notice. Posted on
                Gigsta and had a pro at my door within 2 hours. Incredible
                service!`,
			name: "Abasiama Okon",
			state: "Uyo, Akwa-Ibom",
			icon: "AO",
		},
		{
			message: `As a Gigsta Pro, I've been able to use my handyman skills to
                earn extra income. The platform makes it easy to find clients in
                my area.`,
			name: "Emmanuel Effiong",
			state: "Gigsta Pro",
			icon: "EE",
		},
		{
			message: `I use Gigsta whenever I need cleaning help. The service is
                reliable and the professionals are always well-vetted. Highly
                recommend!`,
			name: "Nsikak Umoren",
			state: "Uyo, Akwa-Ibom",
			icon: "NU",
		},
		{
			message: `I needed help moving furniture on short notice. Posted on
                Gigsta and had a pro at my door within 2 hours. Incredible
                service!`,
			name: "Abasiama Okon",
			state: "Uyo, Akwa-Ibom",
			icon: "AO",
		},
		{
			message: `As a Gigsta Pro, I've been able to use my handyman skills to
                earn extra income. The platform makes it easy to find clients in
                my area.`,
			name: "Emmanuel Effiong",
			state: "Gigsta Pro",
			icon: "EE",
		},
		{
			message: `I use Gigsta whenever I need cleaning help. The service is
                reliable and the professionals are always well-vetted. Highly
                recommend!`,
			name: "Nsikak Umoren",
			state: "Uyo, Akwa-Ibom",
			icon: "NU",
		},
	];

	return (
		<section className="py-16 bg-white/10 backdrop-blur-md text-white">
			<Wrapper className="flex-col items-start w-full">
				<div className="space-y-6 mb-16 flex gap-8 max-lg:flex-col lg:items-end">
					<div className="space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold">
							Trusted by Natives in Uyo
						</h2>
						<div className="flex items-center space-x-2">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<FaStar
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
										className="md:h-6 md:w-6 w-4 h-4 fill-accent-yellow"
									/>
								))}
							</div>
							<span className="text-white text-lg md:text-xl">4.9</span>
						</div>
						<p className="text-WHITE md:text-xl max-w-3xl mx-auto leading-relaxed">
							Over 20 tasks completed this week in Uyo. Join our growing
							community of satisfied customers and skilled professionals.
						</p>
					</div>
					<div className="bg-white text-black px-4 flex items-center rounded-lg font-semibold py-2 w-max md:text-lg">
						<Users className="h-5 w-5 mr-2" />
						20+ Active Pros in Uyo
					</div>
				</div>
				<Carousel
					opts={{
						align: "start",
						loop: true,
						active: true,
					}}
					className="w-full text-black"
				>
					<CarouselContent className="-ml-2 md:-ml-4">
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
							>
								<Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
									<CardContent className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[280px] md:min-h-[320px]">
										<div className="space-y-4 md:space-y-6">
											<div className="flex-1">
												<p className="text-base md:text-lg leading-relaxed text-gray-700 italic">
													&quot;{testimonial.message}&quot;
												</p>
											</div>

											<div className="flex items-center space-x-3 md:space-x-4 pt-4">
												<div className="w-10 h-10 md:w-12 md:h-12 bg-accent-yellow rounded-full flex items-center justify-center shadow-md">
													<span className="text-white text-sm md:text-base font-bold">
														{testimonial.icon}
													</span>
												</div>
												<div>
													<p className="font-semibold text-base md:text-lg text-gray-900">
														{testimonial.name}
													</p>
													<p className="text-sm md:text-base text-gray-500">
														{testimonial.state}
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					<div className="hidden md:block">
						<CarouselPrevious className="left-0 md:-translate-x-8 lg:-translate-x-12" />
						<CarouselNext className="right-0 md:translate-x-8 lg:translate-x-12" />
					</div>

					{/* Mobile navigation dots */}
					<div className="flex justify-center mt-6 md:hidden space-x-2">
						{testimonials.map((_, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className={`w-2 h-2 rounded-full ${
									index ? "bg-accent-yellow" : "bg-gray-300"
								}`}
							/>
						))}
					</div>
				</Carousel>
			</Wrapper>
		</section>
	);
};

export default Testimonial;
