"use client";

import { useEffect, useRef, useState } from "react";

type AnimationDirection = "up" | "down" | "left" | "right";

interface UseScrollAnimationOptions {
	threshold?: number;
	rootMargin?: string;
	direction?: AnimationDirection;
	delay?: number;
	once?: boolean;
}

export function useScrollAnimation({
	threshold = 0.1,
	rootMargin = "0px",
	direction = "up",
	delay = 0,
	once = true,
}: UseScrollAnimationOptions = {}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const currentRef = ref.current;
		if (!currentRef) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
					}, delay);

					if (once) {
						observer.unobserve(currentRef);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				threshold,
				rootMargin,
			},
		);

		observer.observe(currentRef);

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [threshold, rootMargin, delay, once]);

	const getTransformValue = () => {
		switch (direction) {
			case "up":
				return "translateY(20px)";
			case "down":
				return "translateY(-20px)";
			case "left":
				return "translateX(20px)";
			case "right":
				return "translateX(-20px)";
			default:
				return "translateY(20px)";
		}
	};

	const animationStyle = {
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? "translate(0)" : getTransformValue(),
		transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
	};

	return { ref, animationStyle, isVisible };
}
