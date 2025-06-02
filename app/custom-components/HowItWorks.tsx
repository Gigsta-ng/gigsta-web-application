"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "./Wrapper";
import { Briefcase, CheckCircle, User } from "lucide-react";
import { CButton } from "./CButton";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <Wrapper className="flex-col items-center">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-yellow-500">Gigsta</span> Works
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Getting things done has never been easier. Just follow these simple
            steps to get started with skilled professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <Card className="bg-gray-100 py-10 px-4 text-black text-center">
            <CardContent className="p-8 space-y-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold">Post a Task</h3>
              <p className="text-gray-700 text-lg md:text-[24px] leading-relaxed">
                Describe what you need done, when you need it, and your budget.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 py-10 px-4 text-black text-center">
            <CardContent className="p-8 space-y-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <User className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold">Get Matched</h3>
              <p className="text-gray-700 text-lg md:text-[24px] leading-relaxed">
                We connect you with a verified pro who has the skills and
                availability to help.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 py-10 px-4 text-black text-center">
            <CardContent className="p-8 space-y-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold">Job Gets Done</h3>
              <p className="text-gray-700 text-lg md:text-[24px] leading-relaxed">
                Your task is completed quickly, safely, and affordably. Rate
                your pro and book again anytime.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <CButton onPress={() => {}} variant="primary" className="">
            Get started now
          </CButton>
        </div>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
