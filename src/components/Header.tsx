"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <nav className="relative w-full p-6 md:w-[1440px] md:h-[132px] bg-white">
      <div className="flex justify-between md:justify-center items-center md:border-b md:border-[#2A254B] ">
        {/* Logo */}
        <h1 className="text-2xl font-normal font-clash leading-[29.52px] text-[#22202E] ">
          Avion
        </h1>

        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            aria-label="Search"
            className="md:relative md:right-[44rem] flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
          >
            <CiSearch className="text-lg" />
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-[#2A254B]  hover:bg-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Search Box */}
      {isSearchOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border placeholder:text-white  bg-black/40 text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      )}

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8 md:ml-16`}
      >
        <Link
          href="/"
          className="block text-center text-[#2A254B]  border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Home
        </Link>
        <Link
          href="/"
          className="block text-center text-[#2A254B]  border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Plant Pots
        </Link>
        <Link
          href="/"
          className="block text-center text-[#2A254B]  border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Ceramics
        </Link>
        <Link
          href="/"
          className="block text-center text-[#2A254B]  border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Tables
        </Link>
        <Link
          href="/"
          className="block text-center text-[#2A254B]  border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Chairs
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Crockery
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Tableware
        </Link>
        <Link
          href="/"
          className="block text-center border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          Cutlery
        </Link>
        <Link
          href="/products"
          className="block text-center border-b border-transparent py-1 hover:border-[#2A254B] "
        >
          All Products
        </Link>
        <Link
          href="/about"
          className="block text-center border-b border-transparent py-1 hover:border-[#2A254B]"
        >
          About
        </Link>

        <div className="flex gap-4 justify-center">
          {/* User Icon */}
          <Link href="/user" aria-label="User Profile">
            <div className="md:relative md:bottom-8 md:left-[22rem] flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:bg-[#2A254B]">
              <Image
                src="/imgs/user.png"
                alt="User Profile Icon"
                width={16}
                height={16}
                className="md:w-[24px] md:h-[24px]"
              />
            </div>
          </Link>

          <Link href="/usercart" aria-label="Cart">
            <div className="md:relative md:bottom-8 md:left-[16.4rem] flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:bg-[#2A254B] ">
              <Image
                src="/imgs/cart.png"
                alt="Cart Icon"
                width={16}
                height={16}
                className="md:w-[24px] md:h-[24px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;