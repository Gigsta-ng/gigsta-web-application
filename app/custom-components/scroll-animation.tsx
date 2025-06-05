"use client";

import type { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ScrollAnimationProps {
	children: ReactNode;
	direction?: "up" | "down" | "left" | "right";
	delay?: number;
	threshold?: number;
	className?: string;
}

export default function ScrollAnimation({
	children,
	direction = "up",
	delay = 0,
	threshold = 0.1,
	className = "",
}: ScrollAnimationProps) {
	const { ref, animationStyle } = useScrollAnimation({
		direction,
		delay,
		threshold,
	});

	return (
		<div ref={ref} style={animationStyle} className={className}>
			{children}
		</div>
	);
}
