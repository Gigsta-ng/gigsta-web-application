import type { Metadata } from "next";
import { ContactUsForm } from "../custom-components/ContactUsForm";

export const metadata: Metadata = {
	title: "Contact Us | Gigsta",
	description:
		"Get in touch with Gigsta for inquiries, support, or feedback. Our team is ready to assist you and ensure your questions are answered promptly.",
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<ContactUsForm />
		</main>
	);
}
