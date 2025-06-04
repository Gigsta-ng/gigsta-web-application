"use client";

import { WhatsappIcon } from "@/public/icons/__index__";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface ProRegistrationSuccessContentProps {
	onClose?: () => void;
}

interface ProRegistrationSuccessContentProps {
	onClose?: () => void;
}

export const ProRegistrationSuccessContent: React.FC<
	ProRegistrationSuccessContentProps
> = () => {
	const whatsAppNumber = "2347060799114";

	const whatsAppLink = `https://wa.me/${whatsAppNumber.replace(
		/[^0-9]/g,
		"",
	)}?text=${encodeURIComponent(
		"Hello Gigsta, I need quicker help with my recently posted task.",
	)}`;

	return (
		<div className="text-center p-6 md:p-8">
			<h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
				You're Almost In! 🎉
			</h2>

			<div className="flex items-center">
				<p className="text-gray-600 text-sm md:text-base mb-3">
					To complete your onboarding, please join our{" "}
					<Link
						href={whatsAppLink}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block hover:scale-105 transition-transform "
					>
						<Image
							src={WhatsappIcon}
							alt="Whatsapp Icon"
							className="h-5 w-5 translate-y-1.5"
						/>
					</Link>{" "}
					group.
				</p>
			</div>
			<p className="text-gray-600 text-sm md:text-base mb-3">
				That&apos;s where we share gig updates and next steps.
			</p>
		</div>
	);
};
