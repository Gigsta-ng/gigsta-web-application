"use client";

import { FormFieldCheckboxGroup } from "@/components/shared/form/FormFieldCheckboxGroup";
import { FormFieldSelect } from "@/components/shared/form/FormFieldSelect";
import { FormFieldText } from "@/components/shared/form/FormFieldText";
import { Form } from "@/components/ui/form";
import {
	availabilityOptions,
	experienceOptions,
	gigstaServiceGroups,
	uyoLocations,
} from "@/lib/config/services";
import {
	type ProRegistrationFormValues,
	proRegistrationSchema,
} from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CButton } from "./CButton";

interface ProRegistrationFormProps {
	onFormSubmitSuccess?: () => void;
}

export const ProRegistrationForm: React.FC<ProRegistrationFormProps> = ({
	onFormSubmitSuccess,
}) => {
	const form = useForm<ProRegistrationFormValues>({
		resolver: zodResolver(proRegistrationSchema),
		defaultValues: {
			fullName: "",
			phoneNumber: "",
			services: [],
			experience: undefined,
			availability: undefined,
			locationInUyo: undefined,
		},
	});

	const { formState } = form;

	const onSubmit = async (values: ProRegistrationFormValues) => {
		toast.loading("Submitting your application...");
		console.log("Pro Registration Values:", values);

		await new Promise((resolve) => setTimeout(resolve, 1500));
		const success = Math.random() > 0.2;

		toast.dismiss();
		if (success) {
			toast.success("Application Submitted!", {
				description: "We'll review your details and get back to you soon.",
			});
			form.reset();
			onFormSubmitSuccess?.();
		} else {
			toast.error("Submission Failed", {
				description: "Please check your details and try again.",
			});
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-5 px-1 py-2"
			>
				<FormFieldText
					control={form.control}
					name="fullName"
					label="Full Name"
					placeholder="Enter your name"
				/>
				<FormFieldText
					control={form.control}
					name="phoneNumber"
					label="Phone Number (WhatsApp)"
					placeholder="Enter your phone number"
					inputType="tel"
				/>
				<FormFieldCheckboxGroup
					control={form.control}
					name="services"
					label="Type of Service"
					subLabel="( Select 4 max )"
					groups={gigstaServiceGroups}
					maxSelections={4}
				/>
				<FormFieldSelect
					control={form.control}
					name="experience"
					label="Experience"
					placeholder="Select experience level"
					options={experienceOptions}
				/>
				<FormFieldSelect
					control={form.control}
					name="availability"
					label="Availability"
					placeholder="Select availability"
					options={availabilityOptions}
				/>
				<FormFieldSelect
					control={form.control}
					name="locationInUyo"
					label="Where in Uyo are you located?"
					placeholder="Select your location"
					options={uyoLocations}
				/>
				<div className="flex justify-center pt-4">
					<CButton
						type="submit"
						variant="primary"
						disabled={formState.isSubmitting}
						onPress={() => {}}
						className="w-full sm:w-auto"
					>
						{formState.isSubmitting ? "Submitting..." : "Submit"}
					</CButton>
				</div>
			</form>
		</Form>
	);
};
