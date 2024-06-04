"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./button";

const navIitems = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About Us",
    path: "#about",
  },
  {
    name: "FAQ",
    path: "#faq",
  },
  {
    name: "Features",
    path: "#features",
  },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");

  const items = (
    <>
      {navIitems?.map((item) => {
        return (
          <a
            onClick={() => setSelected(item.path)}
            key={item.path}
            href={item.path}
            className={` font-bold rounded-md px-3 py-2 text-sm ${
              selected === item.path ? "text-primary" : "text-black"
            } `}
          >
            {item.name}
          </a>
        );
      })}
    </>
  );

  return (
    <nav className="my-5">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image src={"/logo.png"} alt="logo" height={100} width={100} />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            {" "}
            <div className="flex space-x-4">{items}</div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Button className="bg-black text-white">Download </Button>
        </div>
      </div>

      <div className="sm:hidden bg-black text-white" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">{items}</div>
      </div>
    </nav>
  );
};

export default Navbar;
