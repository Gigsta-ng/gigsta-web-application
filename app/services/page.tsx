import { PostTaskModal } from "@/components/modals/PostTaskModal";
import { BecomeProModal } from "@/components/modals/ProRegistrationModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services | Gigsta",
	description:
		"Gigsta connects individuals needing task assistance with verified professionals. Describe your task, schedule, and budget, and find a professional who fits your needs for quick, safe, and affordable project completion.",
};

export default function ServicesPage() {
	return (
		<main className="min-h-screen text-black bg-gray-50 flex flex-col items-center justify-center p-24">
			<h1 className="text-4xl mb-8">Welcome!</h1>
			<div className="flex flex-row gap-2 justify-center items-center">
				<PostTaskModal />
				<BecomeProModal />
			</div>
		</main>
	);
}
