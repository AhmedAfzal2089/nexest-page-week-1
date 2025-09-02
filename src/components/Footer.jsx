import React from "react";
import MainLogo from "../assets/logo";
import { Globe, Instagram, Send, Twitter, Youtube } from "lucide-react";
import FooterSvg from "../client svgs/FooterSvg";

const Footer = () => {
  return (
    <div className="mt-5 py-20 bg-slate-900 flex flex-col gap-10 items-center lg:flex-row lg:justify-around">
      <div className="flex flex-col gap-10 mb-10 lg:mb-0">
        <div className="logo text-white">
          <FooterSvg />
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-white">
            Copyright 2025 Landify UI Kit
          </span>
          <span className="text-sm text-white">All rights reserved</span>
        </div>

        <div className="flex gap-4 text-white">
          <Instagram />
          <Globe />
          <Twitter />
          <Youtube />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-20">
        {/* Company */}
        <div>
          <div>
            <span className="font-semibold text-white">Company</span>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <span className="text-sm text-white">About us</span>
            <span className="text-sm text-white">Blog</span>
            <span className="text-sm text-white">Contact us</span>
            <span className="text-sm text-white">Pricing</span>
            <span className="text-sm text-white">Testimonials</span>
          </div>
        </div>

        {/* Support */}
        <div>
          <div>
            <span className="font-semibold text-white">Support</span>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <span className="text-sm text-white">Help Center</span>
            <span className="text-sm text-white">Terms of Service</span>
            <span className="text-sm text-white">Legal</span>
            <span className="text-sm text-white">Privacy Policy</span>
            <span className="text-sm text-white">Status</span>
          </div>
        </div>

        {/* Stay up to date */}
        <div>
          <div>
            <span className="font-semibold text-white">Stay Up to Date</span>
          </div>
          <div className="flex mt-3">
            <div className="bg-gray-100 text-gray-700 p-3 rounded-2xl text-sm flex items-center gap-3 w-full max-w-[250px]">
              <span className="flex-1">Your email address</span>
              <Send className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
