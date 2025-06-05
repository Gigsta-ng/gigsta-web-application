import type { PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{ className?: string }>;

const Wrapper = ({ children, className }: WrapperProps) => {
	return (
		<div
			className={`${className} lg:px-20 md:px-10 md:py-10 px-4 lg:py-8 py-4 flex`}
		>
			{children}
		</div>
	);
};

export default Wrapper;
