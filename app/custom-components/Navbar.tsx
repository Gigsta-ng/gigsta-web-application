"use client";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GrContact } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { RiMenuFoldLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import useMediaQuery from "../hooks/useMediaQuery";
import { CButton } from "./CButton";
import Logo from "./Logo";
import Wrapper from "./Wrapper";

const Navbar = () => {
	const pathName = usePathname();
	const { screenHeight, screenWidth } = useMediaQuery();
	const navList = [
		{
			label: "How it Works",
			href: "/",
			icon: <IoSettings size={24} />,
		},
		{
			label: "Service",
			href: "/services",
			icon: <VscTools size={24} />,
		},
		{
			label: "Contact",
			href: "/contact-us",
			icon: <GrContact size={25} />,
		},
	];
	return (
		<Wrapper className="w-full">
			<div
				className={`flex w-full justify-between items-center ${
					screenHeight &&
					screenHeight >= 60 &&
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					screenWidth! <= 620 &&
					"fixed left-[5%] transition-all -translate-x-[5%] w-[95%]"
				} z-50 rounded-[32px] max-md:bg-black/10 max-md:p-2 max-md:px-4 max-md:backdrop-blur-lg`}
			>
				<Logo />
				<div className="flex gap-6 items-center">
					<ul className="flex md:gap-10 lg:gap-12 text-[20px] max-lg:hidden">
						{navList.map((navItem) => (
							<Link
								className={`${
									pathName === navItem.href && "text-accent-yellow"
								} font-semibold`}
								key={navItem.label}
								href={navItem.href}
							>
								{navItem.label}
							</Link>
						))}
					</ul>
					<CButton
						className="max-sm:hidden"
						onPress={() => {}}
						variant="primary"
					>
						Become a Gigsta pro
					</CButton>
					<Drawer>
						<DrawerTrigger className="lg:hidden">
							<RiMenuFoldLine size={32} />
						</DrawerTrigger>
						<DrawerContent className="lg:hidden">
							<DrawerTitle className="hidden">
								Are you absolutely sure?
							</DrawerTitle>
							<section className="flex justify-between md:justify-center md:gap-20 px-8 py-4 gap-4">
								{navList.map((navItem) => (
									<DrawerClose key={navItem.label}>
										<Link
											className={`${
												pathName === navItem.href
													? "text-black bg-accent-yellow/20 py-[6px] px-3 rounded-3xl"
													: "text-gray-400 hover:bg-gray-100 hover:text-gray-500 p-[6px] rounded-lg"
											} font-semibold flex flex-row-reverse items-center gap-2`}
											href={navItem.href}
										>
											<span
												className={`${
													pathName === navItem.href ? "inline-flex" : "hidden"
												} text-[14px]`}
											>
												{navItem.label}
											</span>
											<span>{navItem.icon}</span>
										</Link>
									</DrawerClose>
								))}
							</section>
							<DrawerFooter>
								<DrawerClose />
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
