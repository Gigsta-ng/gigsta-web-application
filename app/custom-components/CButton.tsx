"use client";
import type React from "react";
import type { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

type WithIcon = {
	icon: React.ReactNode;
	iconPosition: "left" | "right";
};
type WithoutIcon = {
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
};
type CButtonProps = PropsWithChildren<{
	disabled?: boolean;
	onPress: () => void;
	type?: "submit" | "";
	className?: string;
	variant: "primary" | "secondary" | "transparent";
}> &
	(WithIcon | WithoutIcon);

export const CButton = ({
	disabled,
	onPress,
	className,
	variant,
	icon,
	iconPosition,
	children,
}: CButtonProps) => {
	return (
		<button
			type="button"
			onClick={onPress}
			disabled={disabled}
			className={cn(
				className,
				{
					"bg-accent-yellow text-accent-bg hover:bg-accent-yellow/90":
						variant === "primary",
					"bg-transparent hover:bg-white/15 backdrop:blur-lg hover:border-gray-100 hover:border":
						variant === "transparent",
					"bg-white text-black border-[1px] border-accent-yellow":
						variant === "secondary",
				},
				`relative overflow-hidden text-[14px] md:text-[18px] flex items-center font-bold hover:scale-105 w-max h-max py-4 px-8 rounded-lg transition active:animate-bounce outline-none cursor-pointer border-none ${
					icon && "justify-between gap-8"
				}`,
			)}
		>
			{variant === "primary" && (
				<>
					<span className="w-[2px] bg-accent-bg h-full absolute left-3 -top-4 rotate-45" />
					<span className="w-[2px] bg-accent-bg h-[140%] absolute left-[15px] -top-4 rotate-45" />
					<span className="w-[2px] bg-accent-bg h-full absolute right-3 -bottom-4 rotate-45" />
					<span className="w-[2px] bg-accent-bg h-[140%] absolute right-[15px] -bottom-4 rotate-45" />
				</>
			)}
			{icon && iconPosition === "left" && icon}
			<span className="z-5">{children}</span>
			{icon && iconPosition === "right" && icon}
		</button>
	);
};
