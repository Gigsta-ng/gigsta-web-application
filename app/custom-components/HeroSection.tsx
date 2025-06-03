"use client";
import React from "react";
import { CButton } from "./CButton";
import Wrapper from "./Wrapper";
import { ChevronRight } from "lucide-react";
import heroImg from "../../public/images/hero-image.png"

const HeroSection = () => {
  const bg = {
    backgroundImage: `url(${heroImg.src})`,
    backgroundPosition: "bottom right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "105%"
  };
  return (
    <section className={`pt-[100px] pb-10 md:py-32 `} style={bg}>
      <Wrapper className="flex-col gap-6">
          <div className="space-y-8 max-md:flex flex-col items-center">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl max-md:text-center font-bold leading-tight text-white">
                Need help? Got skills?
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl max-md:text-center font-bold text-yellow-500 leading-tight">
                Gigsta gets you connected
              </h2>
            </div>

            <p className="text-gray-300 text-sm md:text-[22px] max-w-xl max-md:text-center leading-relaxed">
              Get fast, reliable help with cleaning, errands, repairs & more in
              Uyo. Or earn money by offering your skills, join <span className="text-accent-yellow">Gigsta</span> now
            </p>

            <div className="flex flex-col max-md:items-center  md:flex-row gap-4">
              <CButton
                onPress={() => {}}
                variant="secondary"
                icon={<ChevronRight />}
                iconPosition="right"
              >
                Post a Task
              </CButton>
              <CButton onPress={() => {}} variant="primary">
                Become a pro
              </CButton>
            </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
