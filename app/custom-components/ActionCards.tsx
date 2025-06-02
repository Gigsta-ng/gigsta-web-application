"use client";
import React from "react";
import { CButton } from "./CButton";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "./Wrapper";
import { ChevronRight } from "lucide-react";
import assets from "../image";
import Image from "next/image";
import { FaRegClipboard } from "react-icons/fa6";

const ActionCards = () => {
  return (
    <section className="bg-white/10 md:py-10 backdrop:blur-md">
      <Wrapper>
        <div className="grid md:grid-cols-2 gap-[10%]">
          <Card className="bg-white text-black py-16">
            <CardContent className="px-10 space-y-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                <FaRegClipboard size={32} className="fill-black" />
              </div>
              <h3 className="text-2xl font-bold">Post a Task</h3>
              <p className="text-gray-600 md:text-[24px] leading-relaxed">
                Get help from vetted locals in minutes — it's quick, safe &
                reliable. From home cleaning to furniture assembly, find the
                perfect pro for any job.
              </p>
              <CButton
                variant="transparent"
                onPress={() => {}}
                icon={<ChevronRight />}
                iconPosition="right"
                className="hover:text-accent-yellow"
              >
                Get started
              </CButton>
            </CardContent>
          </Card>

          <Card className="bg-white text-black py-16">
            <CardContent className="px-10 space-y-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Image
                  src={assets.icons.naira}
                  alt="naira-icon"
                  width={32}
                  height={32}
                />{" "}
              </div>
              <h3 className="text-2xl font-bold">Become a Gigsta Pro</h3>
              <p className="text-gray-600 md:text-[24px] leading-relaxed">
                Got skills? Get matched with real jobs and earn on your own
                terms. Set your own rates, choose your schedule, and build your
                client base in Uyo.
              </p>
              <CButton
                variant="transparent"
                onPress={() => {}}
                icon={<ChevronRight />}
                iconPosition="right"
                className="hover:text-accent-yellow"
              >
                Get started
              </CButton>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
};

export default ActionCards;
