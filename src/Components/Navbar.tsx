import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js

interface NavbarProps {
  scrollToFeatures: () => void;
  scrollToHowItWorks: () => void;
  scrollToPricing: () => void;
  scrollToHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToFeatures,
  scrollToHowItWorks,
  scrollToPricing,
  scrollToHome,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle the "Download Now" button click
  const handleDownloadClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=fit.swasthi.app&pli=1",
      "_blank"
    );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 px-4 md:px-11 py-4 flex items-center justify-between shadow-md transition duration-300">
        <div className="flex items-center space-x-2 ml-5 cursor-pointer">
          {/* Make the logo clickable to go to the top of the page */}
          <Image
            src="/Logo.png"
            alt="logo"
            width={32}
            height={32}
            onClick={(e) => {
              e.preventDefault();
              scrollToHome(); // Scroll to home
            }}
            className="w-8 h-8"
          />
          <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            <Image
              src="/Swasthi.png"
              alt="Swasthi"
              width={100}
              height={24}
              onClick={(e) => {
                e.preventDefault();
                scrollToHome(); // Scroll to home
              }}
              className="h-6 w-auto"
            />
          </h1>
        </div>

        <ul className="hidden md:space-x-8 sm:flex space-x-6">
          {["Home", "Features", "How It Works", "Pricing"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Home") {
                    scrollToHome(); // Handle Home scroll
                  } else if (item === "Features") {
                    scrollToFeatures();
                  } else if (item === "How It Works") {
                    scrollToHowItWorks();
                  } else if (item === "Pricing") {
                    scrollToPricing(); // Handle Pricing scroll
                  }
                }}
                className="relative flex items-center space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:rounded-lg after:bg-orange-400 after:transition-all after:duration-500 hover:after:w-[110%] rounded-lg text-neutral-200 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block mr-5">
          <button
            className="bg-gradient-to-r from-orange-500 to-yellow-500 font-bold text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-300"
            onClick={handleDownloadClick}
          >
            Download Now
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-3xl text-orange-500"
          aria-label="Open Sidebar"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Close sidebar when clicked outside
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full backdrop-blur-3xl shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-orange-500 text-2xl"
            aria-label="Close Sidebar"
          >
            x
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6 h-full backdrop-blue-3xl">
          {["Home", "Features", "How It Works", "Pricing"].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === "Home") {
                    scrollToHome();
                  } else if (item === "Features") {
                    scrollToFeatures();
                  } else if (item === "How It Works") {
                    scrollToHowItWorks();
                  } else if (item === "Pricing") {
                    scrollToPricing();
                  }
                  setIsSidebarOpen(false); // Close sidebar after click
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg p-4 flex items-center space-x-3"
              >
                {item}
              </a>
            </li>
          ))}
          <div className="md:block mr-5">
            <button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 font-bold text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-300"
              onClick={handleDownloadClick}
            >
              Download Now
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;