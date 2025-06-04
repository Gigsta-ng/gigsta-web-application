"use client";
import { format, setHours, setMinutes, setSeconds } from "date-fns";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { Control } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormFieldDateTimeProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: Control<any>;
	name: string;
	label: string;
	className?: string;
}

const hours = Array.from({ length: 12 }, (_, i) =>
	(i + 1).toString().padStart(2, "0"),
);
const minutes = ["00", "15", "30", "45"];
const ampmOptions = ["AM", "PM"];

export const FormFieldDateTime: React.FC<FormFieldDateTimeProps> = ({
	control,
	name,
	label,
	className,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const selectedDate = field.value instanceof Date ? field.value : null;

				const [displayDate, setDisplayDate] = useState<Date | undefined>(
					selectedDate || undefined,
				);
				const [hour, setHour] = useState<string>(
					selectedDate ? format(selectedDate, "hh") : "09",
				);
				const [minute, setMinute] = useState<string>(
					selectedDate ? format(selectedDate, "mm") : "00",
				);
				const [ampm, setAmpm] = useState<string>(
					selectedDate ? format(selectedDate, "a") : "AM",
				);
				const [isPopoverOpen, setIsPopoverOpen] = useState(false);

				useEffect(() => {
					if (field.value instanceof Date) {
						const newDate = field.value;
						setDisplayDate(newDate);
						setHour(format(newDate, "hh"));
						setMinute(format(newDate, "mm"));
						setAmpm(format(newDate, "a"));
					} else if (field.value === null || field.value === undefined) {
						setDisplayDate(undefined);
					}
				}, [field.value]);

				const handleDateTimeChange = (
					newDate?: Date,
					newHour?: string,
					newMinute?: string,
					newAmpm?: string,
				) => {
					const dateToUse = newDate || displayDate || new Date();
					const hourToUse = newHour || hour;
					const minuteToUse = newMinute || minute;
					const ampmToUse = newAmpm || ampm;

					let h = Number.parseInt(hourToUse, 10);

					if (ampmToUse === "PM" && h < 12) h += 12;
					if (ampmToUse === "AM" && h === 12) h = 0;

					const finalDate = setSeconds(
						setMinutes(
							setHours(dateToUse, h),
							Number.parseInt(minuteToUse, 10),
						),
						0,
					);
					field.onChange(finalDate);
					setDisplayDate(finalDate);
				};

				return (
					<FormItem className={cn("w-full", className)}>
						<FormLabel className="block text-sm font-semibold text-gray-800 mb-1.5">
							{label}
						</FormLabel>
						<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
							<PopoverTrigger asChild>
								<FormControl>
									<Button
										variant="outline"
										className={cn(
											"w-full h-12 rounded-md border-gray-300 bg-gray-100 px-3 text-left font-normal justify-between hover:bg-gray-200",
											!field.value && "text-muted-foreground",
										)}
									>
										{field.value instanceof Date ? (
											<p className="text-black">
												{format(field.value, "MM-dd-yyyy hh:mm a")}
											</p>
										) : (
											<span>Pick a date and time</span>
										)}
										<ChevronDown className="ml-2 h-4 w-4 opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={displayDate}
									onSelect={(newDate) => {
										if (newDate) {
											setDisplayDate(newDate);
											handleDateTimeChange(newDate, hour, minute, ampm);
										}
									}}
									initialFocus
									disabled={(date) =>
										date < new Date(new Date().setHours(0, 0, 0, 0))
									}
								/>
								<div className="p-4 border-t border-gray-200">
									<p className="text-sm font-medium mb-2">Select Time</p>
									<div className="flex items-center space-x-2">
										<Select
											value={hour}
											onValueChange={(newHour) => {
												setHour(newHour);
												handleDateTimeChange(
													displayDate,
													newHour,
													minute,
													ampm,
												);
											}}
										>
											<SelectTrigger className="w-[80px]">
												<SelectValue placeholder="HH" />
											</SelectTrigger>
											<SelectContent>
												{hours.map((h) => (
													<SelectItem key={h} value={h}>
														{h}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<span>:</span>
										<Select
											value={minute}
											onValueChange={(newMinute) => {
												setMinute(newMinute);
												handleDateTimeChange(
													displayDate,
													hour,
													newMinute,
													ampm,
												);
											}}
										>
											<SelectTrigger className="w-[80px]">
												<SelectValue placeholder="MM" />
											</SelectTrigger>
											<SelectContent>
												{minutes.map((m) => (
													<SelectItem key={m} value={m}>
														{m}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<Select
											value={ampm}
											onValueChange={(newAmpm) => {
												setAmpm(newAmpm);
												handleDateTimeChange(
													displayDate,
													hour,
													minute,
													newAmpm,
												);
											}}
										>
											<SelectTrigger className="w-[80px]">
												<SelectValue placeholder="AM/PM" />
											</SelectTrigger>
											<SelectContent>
												{ampmOptions.map((a) => (
													<SelectItem key={a} value={a}>
														{a}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>
							</PopoverContent>
						</Popover>
						<FormMessage className="mt-1 text-xs" />
					</FormItem>
				);
			}}
		/>
	);
};
