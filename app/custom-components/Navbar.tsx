"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CButton } from "./CButton";
import Wrapper from "./Wrapper";
import { RiMenuFoldLine } from "react-icons/ri";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const pathName = usePathname();
  const navList = [
    {
      label: "How it Works",
      href: "/",
    },
    {
      label: "Service",
      href: "/service",
    },
    {
      label: "Contact",
      href: "/contact-us",
    },
  ];
  return (
    <Wrapper className="w-full">
      <div className="flex w-full justify-between items-center max-md:sticky top-0 z-50 rounded-[32px] max-md:bg-white/10 max-md:p-2 max-md:px-4 max-md:backdrop-blur-md">
        <Logo />
        <div className="flex gap-6 items-center">
          <ul className="flex gap-6 text-[20px] max-sm:hidden">
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
            Become a pro
          </CButton>
          <Drawer>
            <DrawerTrigger>
              <RiMenuFoldLine size={32} />
            </DrawerTrigger>
            <DrawerContent className="max-md:hidden">
              <DrawerHeader>
                <DrawerTitle className="hidden">Are you absolutely sure?</DrawerTitle>
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
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose></DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
