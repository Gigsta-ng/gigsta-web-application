import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type React from "react";
import type { Control } from "react-hook-form";

interface FormFieldInputProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>;
	name: string;
	label: string;
	placeholder?: string;
	icon: React.ReactNode;
	inputType?: React.HTMLInputTypeAttribute;
	isTextarea?: boolean;
	inputClassName?: string;
	iconContainerClassName?: string;
}

export const FormFieldInput: React.FC<FormFieldInputProps> = ({
	control,
	name,
	label,
	placeholder,
	icon,
	inputType = "text",
	isTextarea = false,
	inputClassName,
	iconContainerClassName,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel className="font-bold text-black text-base">
						{label}
					</FormLabel>
					<div className="relative flex items-center mt-1">
						<div
							className={cn(
								"absolute left-0 top-0 flex h-full w-16 items-center justify-center rounded-l-lg bg-accent-yellow",
								isTextarea && "rounded-bl-lg",
								iconContainerClassName,
							)}
						>
							{icon}
						</div>
						<FormControl>
							{isTextarea ? (
								<Textarea
									placeholder={placeholder}
									{...field}
									className={cn(
										"min-h-[160px] resize-none rounded-lg border-none bg-gray-100 pl-[76px] pr-4 py-4 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent-yellow focus-visible:ring-offset-0",
										inputClassName,
									)}
								/>
							) : (
								<Input
									type={inputType}
									placeholder={placeholder}
									{...field}
									className={cn(
										"h-14 rounded-lg border-none bg-gray-100 pl-[76px] pr-4 text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-accent-yellow focus-visible:ring-offset-0",
										inputClassName,
									)}
								/>
							)}
						</FormControl>
					</div>
					<FormMessage className="mt-1 text-sm" />
				</FormItem>
			)}
		/>
	);
};
