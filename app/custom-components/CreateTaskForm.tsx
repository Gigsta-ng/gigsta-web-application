"use client";

import { FormFieldDateTime } from "@/components/shared/form/FormFieldDateTime";
import { FormFieldSelect } from "@/components/shared/form/FormFieldSelect";
import { FormFieldText } from "@/components/shared/form/FormFieldText";
import { FormFieldTextarea } from "@/components/shared/form/FormFieldTextArea";
import { Form } from "@/components/ui/form";
import { budgetRanges, taskTypes } from "@/lib/config/services";
import { type TaskFormValues, taskFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CButton } from "./CButton";

interface CreateTaskFormProps {
	onFormSubmitSuccess?: () => void;
}

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
	onFormSubmitSuccess,
}) => {
	const form = useForm<TaskFormValues>({
		resolver: zodResolver(taskFormSchema),
		defaultValues: {
			fullName: "",
			phoneNumber: "",
			taskType: undefined,
			taskLocation: "",
			preferredDateTime: undefined,
			budget: undefined,
			taskDescription: "",
		},
	});

	const { formState } = form;

	const onSubmit = async (values: TaskFormValues) => {
		toast.loading("Submitting your task...");
		console.log("Form Values:", values);

		await new Promise((resolve) => setTimeout(resolve, 1500));

		const success = Math.random() > 0.2;

		toast.dismiss();
		if (success) {
			toast.success("Task Submitted Successfully!", {
				description: "We'll link you with the right person soon.",
			});
			form.reset();
			onFormSubmitSuccess?.();
		} else {
			toast.error("Failed to Submit Task", {
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
				<FormFieldSelect
					control={form.control}
					name="taskType"
					label="Task Type"
					placeholder="Select task type"
					options={taskTypes}
				/>
				<FormFieldText
					control={form.control}
					name="taskLocation"
					label="Task Location"
					placeholder="Enter Address"
				/>
				<FormFieldDateTime
					control={form.control}
					name="preferredDateTime"
					label="Preferred Date/Time"
				/>
				<FormFieldSelect
					control={form.control}
					name="budget"
					label="What's your budget for this task?"
					placeholder="Select budget range"
					options={budgetRanges}
				/>
				<FormFieldTextarea
					control={form.control}
					name="taskDescription"
					label="Brief Task Description"
					placeholder="Provide details about the task"
					rows={3}
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
