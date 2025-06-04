"use client";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { Control } from "react-hook-form";

interface FormFieldTextareaProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>;
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	rows?: number;
}

export const FormFieldTextarea: React.FC<FormFieldTextareaProps> = ({
	control,
	name,
	label,
	placeholder,
	className,
	rows = 4,
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
						<Textarea
							placeholder={placeholder}
							{...field}
							rows={rows}
							className="min-h-[100px] rounded-md border-gray-300 bg-gray-100 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent-yellow focus-visible:ring-offset-0"
						/>
					</FormControl>
					<FormMessage className="mt-1 text-xs" />
				</FormItem>
			)}
		/>
	);
};
