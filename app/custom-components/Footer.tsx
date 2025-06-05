import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import assets from "../image";
import Logo from "./Logo";
import Wrapper from "./Wrapper";

const Footer = () => {
	return (
		<footer id="contact" className="pt-12 border-t border-gray-800">
			<Wrapper className="flex justify-between max-lg:flex-col lg:gap-[10%]">
				<div className="space-y-4">
					<Logo />
					<p className="text-gray-300 text-lg md:text-[24px]">
						Connecting people who need help with skilled professionals.
					</p>
				</div>

				<div className="flex-1 flex max-lg:flex-col gap-6 md:gap-10 lg:gap-[20%] max-lg:pt-10">
					<div className="space-y-4">
						<h4 className="font-bold text-xl md:text-[25px]">Quick Links</h4>
						<div className="space-y-3">
							<Link
								href="#how-it-works"
								className="block text-gray-100 hover:text-white transition-colors md:text-lg md:text-[20]"
							>
								How It Works
							</Link>
							<Link
								href="#"
								className="block text-gray-100 hover:text-white transition-colors md:text-lg md:text-[20]"
							>
								Become a Gigsta pro
							</Link>
							<Link
								href="#"
								className="block text-gray-100 hover:text-white transition-colors md:text-lg md:text-[20]"
							>
								Post a Task
							</Link>
						</div>
					</div>
					<div className="lg:space-y-4">
						<h4 className="font-bold text-xl md:text-[25px]">Contact Us</h4>
						<div className="space-y-3">
							<div className="flex items-center space-x-3 text-gray-300">
								<Phone className="h-5 w-5 max-md:w-4 max-md:h-4" />
								<span className="md:text-lg md:text-[20]">+234 704 413398</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="h-5 w-5 max-md:w-4 max-md:h-4" />
								<span className="md:text-lg md:text-[20]">
									gigsta@gigsta.com
								</span>
							</div>
						</div>
						<div className="flex flex-row-reverse max-md:pt-8 max-md:justify-start items-center gap-6">
							<div className="flex space-x-4 pt-2">
								<Link
									href="#"
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Image
										src={assets.icons.facebook}
										alt="gigsta-facebook"
										width={24}
										height={24}
									/>
								</Link>
								<Link
									href="#"
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Image
										src={assets.icons.insta}
										alt="gigsta-insta"
										width={24}
										height={24}
									/>
								</Link>
								<Link
									href="#"
									className="text-gray-100 hover:text-white transition-colors"
								>
									<Image
										src={assets.icons.tiktok}
										alt="gigsta-insta"
										width={24}
										height={24}
									/>
								</Link>
							</div>
							<p className="text-gray-400 text-lg md:text-[20px]">Follow Us</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
