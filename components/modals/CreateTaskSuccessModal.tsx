"use client";

import { PartyPopper } from "lucide-react";
import type React from "react";

interface TaskSuccessContentProps {
	onClose?: () => void;
	whatsAppNumber?: string;
}

export const TaskSuccessContent: React.FC<TaskSuccessContentProps> = ({
	whatsAppNumber = "2347060799114",
}) => {
	const whatsAppLink = `https://wa.me/${whatsAppNumber.replace(
		/[^0-9]/g,
		"",
	)}?text=${encodeURIComponent(
		"Hello Gigsta, I need quicker help with my recently posted task.",
	)}`;

	return (
		<div className="text-center p-6 md:p-8">
			<div className="flex items-center justify-center mb-4">
				<h2 className="text-xl md:text-2xl font-bold text-gray-800 mr-2">
					Thanks for posting your task on Gigsta! 🎉
				</h2>
				<PartyPopper className="h-7 w-7 text-purple-500" />
			</div>
			<p className="text-gray-600 text-sm md:text-base mb-3">
				We're connecting you with a nearby Pro.
			</p>
			<p className="text-gray-600 text-sm md:text-base">
				Need quicker help? Tap below to chat with us on{" "}
				<a
					href={whatsAppLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-green-500 font-semibold hover:underline"
				>
					WhatsApp
				</a>
			</p>
		</div>
	);
};
