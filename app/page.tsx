"use client";
import { ChevronRight } from "lucide-react";
import { CButton } from "./custom-components/CButton";
import Logo from "./custom-components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      Hello world
      <CButton onPress={() => {}} variant="primary"
        icon={<ChevronRight />}
        iconPosition="right">
        Gigsta
      </CButton>
       <CButton onPress={() => {}} variant="primary"  >
        Gigsta
      </CButton>
      <CButton onPress={() => {}} variant="transparent"
        icon={<ChevronRight />}
        iconPosition="right">
        Gigsta
      </CButton>
      <CButton onPress={() => {}} variant="secondary"
        icon={<ChevronRight />}
        iconPosition="right">
        Gigsta
      </CButton>
      <Logo />
    </div>
  );
}