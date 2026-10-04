import React from "react";
import { Link } from "react-router-dom";
import rechiLogo from "../assets/rechi_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#3a2012] text-[#fff8ef] border-t border-[#633920]/40 font-sans select-none">

      {/* ==================================================
          MAIN CONTENT AREA
      ================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ==================================================
              LEFT SECTION: LOGO & LOCATE US
          ================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Logo + Brand Name */}
            <Link
              to="/"
              className="group flex items-center gap-1.5 select-none w-fit"
            >
              <div className="relative flex h-12 w-11 items-center justify-center overflow-hidden shrink-0">
                <img
                  src={rechiLogo}
                  alt="Rechi Construction Logo"
                  className="h-[260%] w-[260%] max-w-none object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="leading-none flex flex-col justify-center">
                <span
                  className="block text-base sm:text-lg font-bold tracking-[0.12em] text-[#fff7eb]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  RECHI CONSTRUCTION
                </span>

                <span
                  className="block text-xs font-semibold tracking-[0.18em] text-[#e5a652] mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  PVT. LTD.
                </span>
              </div>
            </Link>

            {/* Locate Us Section */}
            <div className="space-y-4">

              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#e5a652]">
                  Locate Us
                </h3>

                <div className="h-[2px] w-8 bg-[#e5a652]/60 rounded-full" />
              </div>

              <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#dfd3c7]">

                <p className="font-semibold text-white text-base tracking-wide">
                  Rechi Construction Pvt. Ltd.
                </p>

                <p className="max-w-md text-[#d1c2b5] leading-relaxed">
                  220, Dum Dum Park, Near Boys High School, Kolkata 700055.
                </p>

                {/* Contact Info */}
                <div className="pt-2 space-y-2 border-t border-[#54331e] text-xs sm:text-sm">

                  {/* Contact Person */}
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-xs uppercase tracking-wider text-[#a89485] font-semibold w-28 shrink-0">
                      Contact Person
                    </span>

                    <span className="text-[#e5a652] font-semibold">
                      Mr. Sajjan Kr. Mandal
                    </span>
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-xs uppercase tracking-wider text-[#a89485] font-semibold w-28 shrink-0">
                      Contact No.
                    </span>

                    <a
                      href="tel:+919051800151"
                      className="text-white hover:text-[#e5a652] font-semibold transition-colors"
                    >
                      +91 9051800151
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-xs uppercase tracking-wider text-[#a89485] font-semibold w-28 shrink-0">
                      Email
                    </span>

                    <div className="inline-flex flex-wrap gap-x-1">
                      <a
                        href="mailto:rechiconstruction@yahoo.in"
                        className="text-[#d1c2b5] hover:text-[#e5a652] transition-colors underline underline-offset-2 decoration-[#684128]"
                      >
                        rechiconstruction@yahoo.in
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT SECTION: ABOUT COMPANY / NAVIGATION
          ================================================== */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 lg:pt-1">

            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#e5a652]">
                About Company
              </h3>

              <div className="h-[2px] w-8 bg-[#e5a652]/60 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-1 text-xs sm:text-sm">

              {/* ==================================================
                  FIRST NAVIGATION COLUMN
              ================================================== */}
              <ul className="space-y-2.5">

                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Home
                    </span>
                  </Link>
                </li>

                {/* About */}
                <li>
                  <Link
                    to="/about"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      About Us
                    </span>
                  </Link>
                </li>

                {/* Other Services */}
                <li>
                  <Link
                    to="/other-services"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Other Services
                    </span>
                  </Link>
                </li>

                {/* Enquiry */}
                <li>
                  <Link
                    to="/enquire"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Enquiry
                    </span>
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Contact Us
                    </span>
                  </Link>
                </li>

              </ul>

              {/* ==================================================
                  SECOND NAVIGATION COLUMN
              ================================================== */}
              <ul className="space-y-2.5">

                {/* Completed Projects */}
                <li>
                  <Link
                    to="/projects/completed"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Completed Projects
                    </span>
                  </Link>
                </li>

                {/* Ongoing Projects */}
                <li>
                  <Link
                    to="/projects/ongoing"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Ongoing Projects
                    </span>
                  </Link>
                </li>

                {/* Upcoming Projects */}
                <li>
                  <Link
                    to="/projects/upcoming"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Upcoming Projects
                    </span>
                  </Link>
                </li>

                {/* Privacy Policy */}
                <li>
                  <Link
                    to="/privacy-policy"
                    className="group flex items-center gap-2 text-[#d1c2b5] hover:text-[#e5a652] transition-all duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#e5a652] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <span className="font-medium tracking-wide">
                      Privacy Policy
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          COPYRIGHT / BOTTOM BAR
      ================================================== */}
      <div className="border-t border-[#522d17] bg-[#27140a] px-6 py-3.5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">

          {/* Copyright */}
          <p className="text-xs text-[#a89485] text-center md:text-left leading-relaxed">
            Copyright © {currentYear} and All Rights Reserved by{" "}
            <span className="text-white font-medium">
              Rechi Construction Pvt. Ltd.
            </span>{" "}
            | Developed by{" "}
            <span className="text-[#e5a652] font-semibold tracking-wide">
              TEAM LOGIC
            </span>
          </p>

          {/* Privacy Policy */}
          <Link
            to="/privacy-policy"
            className="text-xs text-[#a89485] hover:text-[#e5a652] font-medium tracking-wide transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 shrink-0">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b5998] text-white transition-transform duration-200 hover:scale-110 shadow-sm"
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1da1f2] text-white transition-transform duration-200 hover:scale-110 shadow-sm"
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
