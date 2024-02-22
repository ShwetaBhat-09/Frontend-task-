import { ChevronRight, Facebook, Linkedin, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <hr className="my-8" />
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h1 className="max-w-sm text-3xl font-bold">
              Subscribe to our Newsletter
            </h1>
            <form
              action=""
              className="mt-4 inline-flex w-full items-center md:w-3/4"
            >
              <input
                className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-500">
                  Company
                </p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <hr className="mt-6" />
      <section className="relative overflow-hidden py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <Logo />
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <p className="font-medium hover:text-gray-700" href="#">
                All &copy; are reserved Made with ❤️
              </p>
            </div>
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Facebook />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Linkedin />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Mail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
