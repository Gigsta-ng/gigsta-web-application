// src/components/forms/create-task/FormFieldSelect.tsx
"use client";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { Control } from "react-hook-form";

interface FormFieldSelectProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>;
	name: string;
	label: string;
	placeholder?: string;
	options: readonly { value: string; label: string }[] | readonly string[];
	className?: string;
}

export const FormFieldSelect: React.FC<FormFieldSelectProps> = ({
	control,
	name,
	label,
	placeholder,
	options,
	className,
}) => {
	const selectOptions = options.map((opt) =>
		typeof opt === "string" ? { value: opt, label: opt } : opt,
	);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("w-full", className)}>
					<FormLabel className="block text-sm font-semibold text-gray-800 mb-1.5">
						{label}
					</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className="h-12 rounded-md border-gray-300 bg-gray-100 px-4 text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-accent-yellow focus:ring-offset-0">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{selectOptions.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage className="mt-1 text-xs" />
				</FormItem>
			)}
		/>
	);
};
