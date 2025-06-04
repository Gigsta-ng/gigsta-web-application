"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import type { ServiceGroup } from "@/lib/config/services";
import { cn } from "@/lib/utils";
import type { Control } from "react-hook-form";

interface FormFieldCheckboxGroupProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>;
	name: string;
	label: string;
	subLabel?: string;
	groups: ServiceGroup[];
	maxSelections: number;
	className?: string;
}

export const FormFieldCheckboxGroup: React.FC<FormFieldCheckboxGroupProps> = ({
	control,
	name,
	label,
	subLabel,
	groups,
	maxSelections,
	className,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const selectedCount = Array.isArray(field.value)
					? field.value.length
					: 0;
				const isDisabled = selectedCount >= maxSelections;

				return (
					<FormItem className={cn("w-full", className)}>
						<div className="mb-1.5">
							<FormLabel className="block text-sm font-semibold text-gray-800">
								{label}
							</FormLabel>
							{subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
							{groups.map((group) => (
								<div key={group.groupName} className="space-y-2">
									<h4 className="text-sm font-semibold text-gray-700 flex items-center">
										<span className="mr-2 h-2.5 w-2.5 rounded-full bg-accent-yellow" />
										{group.groupName}
									</h4>
									{group.services.map((service) => (
										<FormField
											key={service.id}
											control={control}
											name={name}
											render={({ field: itemField }) => {
												const isChecked = itemField.value?.includes(service.id);
												return (
													<FormItem className="flex flex-row items-center space-x-2 space-y-0 ml-2">
														<FormControl>
															<Checkbox
																checked={isChecked}
																onCheckedChange={(checked) => {
																	const currentValue = itemField.value || [];
																	if (checked) {
																		if (currentValue.length < maxSelections) {
																			itemField.onChange([
																				...currentValue,
																				service.id,
																			]);
																		}
																	} else {
																		itemField.onChange(
																			currentValue.filter(
																				(id: string) => id !== service.id,
																			),
																		);
																	}
																}}
																disabled={!isChecked && isDisabled}
																className="data-[state=checked]:bg-accent-yellow data-[state=checked]:border-accbg-accent-yellow border-gray-400 focus-visible:ring-accbg-accent-yellow"
															/>
														</FormControl>
														<FormLabel className="text-sm font-normal text-gray-600 cursor-pointer flex items-center">
															{service.label}
														</FormLabel>
													</FormItem>
												);
											}}
										/>
									))}
								</div>
							))}
						</div>
						{selectedCount > 0 && (
							<p className="text-xs text-gray-500 mt-2">
								{selectedCount} of {maxSelections} selected.
							</p>
						)}
						<FormMessage className="mt-1 text-xs" />
					</FormItem>
				);
			}}
		/>
	);
};
