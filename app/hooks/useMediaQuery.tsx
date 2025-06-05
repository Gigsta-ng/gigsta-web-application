import { useEffect, useState } from "react";

const useMediaQuery = () => {
	// Initialize with actual window dimensions immediately
	const [screenWidth, setScreenWidth] = useState<number>(() => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
		return 1024; // Default to desktop size for SSR
	});

	const [screenHeight, setScreenHeight] = useState<number>(() => {
		if (typeof window !== "undefined") {
			return window.innerHeight;
		}
		return 768; // Default height for SSR
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const updateScreenDimensions = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		};

		// Set initial values on mount (handles SSR->CSR hydration)
		updateScreenDimensions();

		window.addEventListener("resize", updateScreenDimensions, {
			passive: true,
		});

		return () => window.removeEventListener("resize", updateScreenDimensions);
	}, []); // Empty dependency array - no infinite loop

	return { screenHeight, screenWidth };
};

export default useMediaQuery;
