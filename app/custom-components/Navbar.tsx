"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CButton } from "./CButton";

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
    <div className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-6 items-center">
        <ul className="flex gap-6 text-[20px]">
          {navList.map((navItem) => (
            <Link
              className={`${pathName === navItem.href && "text-accent-yellow"} font-semibold`}
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
  );
};

export default Navbar;
