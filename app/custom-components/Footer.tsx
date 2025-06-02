import React from "react";
import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-gray-800">
      <Wrapper className="flex justify-between max-sm:flex-col lg:gap-[10%]">
        <div className="space-y-4">
          <Logo />
          <p className="text-gray-300 text-lg md:text-[24px]">
            Connecting people who need help with skilled professionals.
          </p>
        </div>

        <div className="flex-1 flex gap-[20%] max-md:pt-10">
          <div className="space-y-4">
            <h4 className="font-bold text-xl md:text-[25px]">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="#how-it-works"
                className="block text-gray-300 hover:text-white transition-colors text-lg md:text-[20]"
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-lg md:text-[20]"
              >
                Become a Pro
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-lg md:text-[20]"
              >
                Post a Task
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xl md:text-[25px]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span className="text-lg md:text-[20]">+234 704 413398</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span className="text-lg md:text-[20]">gigsta@gigsta.com</span>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-6">
              <div className="flex space-x-4 pt-2">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-gray-400 text-lg md:text-[20px]">Follow Us</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
