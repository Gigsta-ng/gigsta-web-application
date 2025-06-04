import type { Metadata } from "next";
import Image from "next/image";
import { ContactUsForm } from "../custom-components/ContactUsForm";
import Heading from "../custom-components/Heading";
import Wrapper from "../custom-components/Wrapper";

export const metadata: Metadata = {
	title: "Contact Us | Gigsta",
	description:
		"Get in touch with Gigsta for inquiries, support, or feedback. Our team is ready to assist you and ensure your questions are answered promptly.",
};

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Wrapper className="flex-col">
				<Heading heading="Contact Us" />
				<div className="bg-[#F5F5F5] text-black rounded-lg p-8">
					<div className="flex items-center mb-8">
						<div className="w-3 h-3 rounded-full bg-yellow-400 mr-3" />
						<p className="text-lg font-semibold">
							{"Questions, feedback, or bookings? We’re listening!"}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 lg:py-8">
						<div className="space-y-14">
							<div className="flex items-center">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/phone.svg"
										alt="phone icon"
										width={40}
										height={40}
										className="object-contain"
									/>
								</div>
								<div className="ml-4 text-xl">
									<h3 className="font-bold">Phone</h3>
									<p>07044413998</p>
								</div>
							</div>

							<div className="flex items-center">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/whatsapp.svg"
										alt="phone icon"
										width={40}
										height={40}
										className="object-contain"
									/>
								</div>
								<div className="ml-4 text-xl">
									<h3 className="font-bold">WhatsApp</h3>
									<p>+2347044413998</p>
								</div>
							</div>

							<div className="flex items-center">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/email.svg"
										alt="phone icon"
										width={40}
										height={40}
										className="object-contain"
									/>
								</div>
								<div className="ml-4 text-xl">
									<h3 className="font-bold">Email</h3>
									<p>gigsta.gig@gmail.com</p>
								</div>
							</div>

							<div className="flex items-center">
								<div className="w-8 h-8 flex items-center justify-center">
									<Image
										src="/icons/location.svg"
										alt="phone icon"
										width={40}
										height={40}
										className="object-contain"
									/>
								</div>
								<div className="ml-4 text-xl">
									<h3 className="font-bold">Location</h3>
									<p>Uyo</p>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h3 className="text-xl font-bold mb-4 text-center">
								Send Us a Message
							</h3>
							<ContactUsForm />
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	);
}
