import { z } from "zod";
import {
	allServiceIds,
	availabilityOptions,
	budgetRanges,
	experienceOptions,
	taskTypes,
	uyoLocations,
} from "./config/services";

export const taskFormSchema = z.object({
	fullName: z.string().min(1, "Full name is required."),
	phoneNumber: z
		.string()
		.min(1, "Phone number is required.")
		.regex(/^[+]?[0-9\s.-]{7,20}$/, "Invalid phone number format."),
	taskType: z.enum(taskTypes, {
		errorMap: () => ({ message: "Please select a valid task type." }),
	}),
	taskLocation: z.string().min(1, "Task location is required."),
	preferredDateTime: z.date({
		required_error: "Preferred date and time are required.",
		invalid_type_error: "Invalid date/time format.",
	}),
	budget: z.enum(budgetRanges, {
		errorMap: () => ({ message: "Please select a budget range." }),
	}),
	taskDescription: z.string().optional(),
});

export const contactFormSchema = z.object({
	name: z.string().min(1, { message: "Name is required." }),
	email: z.string().email({ message: "Invalid email address." }),
	phone: z
		.string()
		.optional()
		.refine(
			(val) => !val || /^[+]?[0-9\s.-]{7,20}$/.test(val),
			"Invalid phone number format.",
		),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters long." }),
});

export const proRegistrationSchema = z.object({
	fullName: z.string().min(1, "Full name is required."),
	phoneNumber: z
		.string()
		.min(1, "Phone number is required.")
		.regex(/^[+]?[0-9\s.-]{7,20}$/, "Invalid phone number format."),
	services: z
		.array(z.string())
		.min(1, "Please select at least one service.")
		.max(4, "You can select a maximum of 4 services.")
		.refine(
			(items) => items.every((item) => allServiceIds.includes(item)),
			"Invalid service selected.",
		),
	experience: z.enum(experienceOptions, {
		errorMap: () => ({ message: "Please select your experience level." }),
	}),
	availability: z.enum(availabilityOptions, {
		errorMap: () => ({ message: "Please select your availability." }),
	}),
	locationInUyo: z.enum(uyoLocations, {
		errorMap: () => ({ message: "Please select your location in Uyo." }),
	}),
});

export type ContactUsFormSchema = z.infer<typeof contactFormSchema>;

export type TaskFormValues = z.infer<typeof taskFormSchema>;

export type ProRegistrationFormValues = z.infer<typeof proRegistrationSchema>;
