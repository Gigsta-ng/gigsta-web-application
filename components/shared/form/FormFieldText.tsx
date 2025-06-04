// src/components/forms/create-task/FormFieldText.tsx
"use client";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Control } from "react-hook-form";

interface FormFieldTextProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>; //Todo: Need to fix this any type parameter
	name: string;
	label: string;
	placeholder?: string;
	inputType?: React.HTMLInputTypeAttribute;
	className?: string;
}

export const FormFieldText: React.FC<FormFieldTextProps> = ({
	control,
	name,
	label,
	placeholder,
	inputType = "text",
	className,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("w-full", className)}>
					<FormLabel className="block text-sm font-semibold text-gray-800 mb-1.5">
						{label}
					</FormLabel>
					<FormControl>
						<Input
							type={inputType}
							placeholder={placeholder}
							{...field}
							className="h-12 rounded-md border-gray-300 bg-gray-100 px-4 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent-yellow focus-visible:ring-offset-0"
						/>
					</FormControl>
					<FormMessage className="mt-1 text-xs" />
				</FormItem>
			)}
		/>
	);
};
