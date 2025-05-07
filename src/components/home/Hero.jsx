import React from "react";
import { useState } from "react";
import { MessageSquare, Menu, X, CheckCircle, AlertTriangle } from "lucide-react";
import styles from "./Hero.module.css"


export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`${styles.hero} relative w-full  bg-white overflow-hidden `}>
      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white rounded-b-lg md:rounded-b-[40px] py-5 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="">
              <img
                src="./assets/home/hero/feedback-logo.png"
                alt="Logo"
              />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center">
                Product
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center">
                Partnerships
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <button>Pricing</button>
            <div className="relative group">
              <button className="flex items-center">
                Company
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-200 transition">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} style={{ cursor: "pointer" }} />
            ) : (
              <Menu size={24} style={{ cursor: "pointer" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <div className="px-4 py-2 hover:bg-slate-800 rounded">
                <button className="flex items-center w-full justify-between">
                  Product
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="px-4 py-2 hover:bg-slate-800 rounded">
                <button className="flex items-center w-full justify-between">
                  Partnerships
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <button className="px-4 py-2 text-left hover:bg-slate-800 rounded">
                Pricing
              </button>
              <div className="px-4 py-2 hover:bg-slate-800 rounded">
                <button className="flex items-center w-full justify-between">
                  Company
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-2 px-4 pt-2 border-t border-slate-700">
                <button className="bg-slate-100 text-slate-800 px-4 py-2 rounded-md hover:bg-slate-200 transition">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className={`mx-auto text-center mt-10`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:leading-[76px]">
          Understand Why Users Leave,
          <br />
          Build Better Extensions
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4 md:px-0">
          Collect valuable insights from users who uninstall your plugins.
          Transform exit experiences into opportunities for growth and
          improvement.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Start for free
          </button>

          <div className="flex  flex-col lg:flex-row items-center space-x-2">
            <span className="text-gray-500">
              Want to talk or get a live demo?
            </span>
            <a
              href="#"
              className="text-gray-700 font-medium flex items-center hover:underline"
            >
              Get in touch <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Logos */}

      <div className={`w-full ${styles.hero_logos} absolute bottom-0 hidden lg:block`}>
        <img src="./assets/home/hero/hero-logos.png" alt="" className="w-full"  />
      </div>
    </div>
  );
}
