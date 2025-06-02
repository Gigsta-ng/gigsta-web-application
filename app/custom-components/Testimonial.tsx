"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "./Wrapper";
import { Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const testionials = [
    {
      message: `I needed help moving furniture on short notice. Posted on
                Gigsta and had a pro at my door within 2 hours. Incredible
                service!`,
      name: "Abasiama Okon",
      state: "Uyo, Akwa-Ibom",
      icon: "AO",
    },
    {
      message: `As a Gigsta Pro, I've been able to use my handyman skills to
                earn extra income. The platform makes it easy to find clients in
                my area.`,
      name: "Emmanuel Effiong",
      state: "Gigsta Pro",
      icon: "EE",
    },
    {
      message: `I use Gigsta whenever I need cleaning help. The service is
                reliable and the professionals are always well-vetted. Highly
                recommend!`,
      name: "Nsikak Umoren",
      state: "Uyo, Akwa-Ibom",
      icon: "NU",
    },
  ];

  return (
    <section className="py-16 bg-accent-yellow/90 text-black">
      <Wrapper className="flex-col items-start">
        <div className="space-y-6 mb-16 flex gap-8 items-end">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by Natives in Uyo
            </h2>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-white" />
                ))}
              </div>
              <span className="text-black text-xl">4.9</span>
            </div>
            <p className="text-black text-xl max-w-3xl mx-auto leading-relaxed">
              Over 20 tasks completed this week in Uyo. Join our growing
              community of satisfied customers and skilled professionals.
            </p>
          </div>
          <Badge className="bg-white text-black px-4 py-2 text-lg">
            <Users className="h-5 w-5 mr-2" />
            20+ Active Pros in Uyo
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-[5%]">
          <Carousel>
            <CarouselContent>
              {testionials.map((testimonial, index) => (
                <CarouselItem className="basis-1/3">
                  <Card key={index} className="bg-white py-16 text-black">
                    <CardContent className="p-8 space-y-6">
                      <p className="text-lg md:text-[20px] leading-relaxed">
                        {testimonial.message}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-black text-[24px] font-bold">
                            {testimonial.icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600">{testimonial.state}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
