"use client";

import { FormFieldInput } from "@/components/shared/form/FormFieldInput";
import {
	MailIcon,
	MessageIcon,
	PhoneIcon,
	SendIcon,
	UserIcon,
} from "@/components/shared/icons";
import { Form } from "@/components/ui/form";
import { type ContactUsFormSchema, contactFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CButton } from "./CButton"; // Your custom button

export const ContactUsForm = () => {
	const form = useForm<ContactUsFormSchema>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const { formState } = form;

	const onSubmit = async (values: ContactUsFormSchema) => {
		toast.loading("Sending your message...");

		await new Promise((resolve) => setTimeout(resolve, 1500));

		const success = Math.random() > 0.2;

		if (success) {
			toast.dismiss();
			toast.success("Message Sent Successfully!", {
				description: "We'll get back to you as soon as possible.",
			});
			form.reset();
		} else {
			toast.dismiss();
			toast.error("Failed to Send Message", {
				description: "Please try again later.",
			});
		}
	};

	return (
		<div className="w-full max-w-2xl mx-auto md:px-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 md:space-y-8"
				>
					<FormFieldInput
						control={form.control}
						name="name"
						label="Your Name"
						placeholder="Enter your name"
						icon={<UserIcon />}
					/>
					<FormFieldInput
						control={form.control}
						name="email"
						label="Email Address"
						placeholder="Enter your email"
						icon={<MailIcon />}
						inputType="email"
					/>
					<FormFieldInput
						control={form.control}
						name="phone"
						label="Phone Number"
						placeholder="Enter your phone number"
						icon={<PhoneIcon />}
						inputType="tel"
					/>
					<FormFieldInput
						control={form.control}
						name="message"
						label="Message"
						placeholder="How can we help you?"
						icon={<MessageIcon />}
						isTextarea={true}
						iconContainerClassName="rounded-bl-lg"
					/>

					<div className="flex justify-center pt-4">
						<CButton
							type="submit"
							variant="primary"
							icon={<SendIcon />}
							iconPosition="left"
							disabled={formState.isSubmitting}
							onPress={() => {}}
							className="w-auto"
						>
							{formState.isSubmitting ? "Sending..." : "Send Message"}
						</CButton>
					</div>
				</form>
			</Form>
		</div>
	);
};
