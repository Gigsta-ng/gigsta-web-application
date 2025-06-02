"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CButton } from "./CButton";
import Wrapper from "./Wrapper";

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
      <div className="flex w-full justify-between items-center sticky top-0 z-50 max-md:bg-white/5 max-md:backdrop-blur-md">
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
          <CButton onPress={() => {}} variant="primary">
            Become a pro
          </CButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
