"use client";
import Image from "next/image";
import React from "react";
import assets from "./image";
import { usePathname } from "next/navigation";
import { CButton } from "./custom-components/CButton";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  const pathName = usePathname();
  return (
    <div className="w-full mmin-h-max flex items-center justify-center py-20 flex-col gap-10">
      <Image src={assets.images["not-found"]} alt="" width={400} height={400} />
      <div className="text-[32px]">
        We couldn&apos;t find{" "}
        <span className="text-accent-yellow">&quot;{pathName}&quot;</span>
      </div>
      <p>Seems you serached a wrong page</p>
      <Link href={"/"}>
        <CButton
          onPress={() => {}}
          variant="primary"
          icon={<LogOutIcon />}
          iconPosition="right"
        >
          Back to Home
        </CButton>
      </Link>
    </div>
  );
};

export default NotFound;
