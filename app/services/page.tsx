import Image from "next/image";
import Heading from "../custom-components/Heading";
import Wrapper from "../custom-components/Wrapper";

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-black text-white pt-[70px] md:pt-0 pb-10 md:py-20">
			<Wrapper className="flex-col">
				<Heading heading="Our Services" />
				<div className="bg-[#F5F5F5] text-black rounded-lg p-4 md:p-8">
					<div className="flex items-center mb-8">
						<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400 mr-3" />
						<p className="text-base md:text-lg font-semibold">
							{"Need a hand? We've got a Gigsta pro for that."}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-4">
						<div className="flex flex-col items-center">
							<h3 className="text-lg lg:text-xl font-bold mb-4">
								Office / Home cleaning
							</h3>
							<div className="h-40 w-40 relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg">
								<Image
									src="/images/cleaner.svg"
									alt="Office and home cleaning service"
									width={160}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<h3 className="text-lg lg:text-xl font-bold mb-4">
								Furniture Assembly
							</h3>
							<div className="h-40 w-40 relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg">
								<Image
									src="/images/technician.svg"
									alt="Furniture assembly service"
									width={160}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<h3 className="text-lg lg:text-xl font-bold mb-4">
								Handyman Services
							</h3>
							<div className="h-40 w-40 relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg">
								<Image
									src="/images/painter.svg"
									alt="Handyman services"
									width={160}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
						<div className="flex flex-col items-center">
							<h3 className="text-lg lg:text-xl font-bold mb-4">
								Delivery Errands
							</h3>
							<div className="h-40 w-40 relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg">
								<Image
									src="/images/plumber.svg"
									alt="Delivery errands service"
									width={160}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>

						<div className="flex flex-col items-center">
							<h3 className="text-lg lg:text-xl font-bold mb-4">Moving Help</h3>
							<div className="h-40 w-40 relative transition-all duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-lg">
								<Image
									src="/images/errand-guy.svg"
									alt="Moving help service"
									width={160}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
}
