import Image from "next/image";
import React from "react";
import assets from "../image";

const Logo = () => {
	return (
		<div className="flex md:gap-4 gap-2 items-center">
			<Image
				src={assets.icons.gigsta}
				alt="gigsta_logo"
				className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
				width={50}
				height={50}
			/>
			<span className="md:text-[38px] text-[25px] font-bold">Gigsta</span>
		</div>
	);
};

export default Logo;
