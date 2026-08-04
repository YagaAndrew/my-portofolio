"use client";
import Logo from "@/components/Helper/Logo";
import { NavLinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12-vh] z-100 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* NavLinks */}
        <div className="hidden-lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-green-500 dark:hover:text-green-200 font-semibold transition-all duration-200"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4 p-6">
          {/* Cv Buttons */}
          <a
            href="/CV Andrew Yaga Novianta.pdf"
            className="box-border relative z-20 insline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden
      font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-300
      ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download Cv</span>
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Burger Menu */}
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
