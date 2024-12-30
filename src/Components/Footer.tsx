<<<<<<< HEAD
import Image from "next/image";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { useState } from "react"; // Import useState to manage modal state

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  return (
    <footer className="bg-custom-gradient text-white py-8">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap justify-evenly space-y-8 md:space-y-0">
        {/* Logo and Description Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <div className="flex items-center space-x-2">
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Logo.png"
              alt="logo"
            />
            <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <Image
                src="/Swasthi.png"
                alt="Swasthi Logo"
                width={96}
                height={24}
              />
            </h1>
          </div>
          <p className="mt-2 text-sm text-neutral-200">
            Swasthi is your all-in-one health app for personalized wellness
            insights, progress tracking, and daily motivation. Available on
            Android and iOS. Join our community today!
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:help-support@fitnearn.com">
              <Image
                src="/email.png"
                alt="Email Icon"
                width={16}
                height={16}
                className="inline mr-2"
              />
              help-support@fitnearn.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://x.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fitearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-700 p-2 rounded-full"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/fit-n-earn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="bg-gray-700 p-2 rounded-full"
            >
              <TiSocialLinkedin />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-4 text-sm text-justify">
            {["Home", "Features", "How it works", "Pricing"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 text-gray-200">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help & Support Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-4 text-sm text-justify">
            {[
              {
                label: "About us",
                href: "/Aboutus",
              },
              {
                label: "Terms & Conditions",
                href: "/TermsAndConditions",
              },
              {
                label: "Privacy Policy",
                href: "/PrivacyPolicy",
              },
              {
                label: "Data Deletion Policy",
                href: "/DataDeletionPolicy",
              },
              {
                label: "Return and Refund Policy",
                href: "/ReturnAndRefund",
              },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Download App</h4>
          <div className="flex flex-wrap gap-2">
            {/* App Store Button */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="relative inline-flex h-auto w-[200px] bg-gradient-to-r from-orange-600 to-yellow-500 border-2 border-white rounded-[8px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                    <span>
                      <Image
                        src="/apple.png"
                        alt="App Store"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Download on the
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                <h6>Coming Soon</h6>
                <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                  Scan & Download
                  <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                    SWASTHI
                  </span>
                  App
                </h4>
              </DialogContent>
            </Dialog>

            {/* Google Play Button */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="relative inline-flex h-auto w-[200px] bg-gradient-to-r from-orange-600 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="29"
                        className="w-[22px] md:w-[27px] h-[25px] md:h-[29px]"
                        viewBox="0 0 27 29"
                        fill="none"
                      >
                        <path
                          d="M4.91987 28.0649C4.28691 28.4735 3.52669 28.5971 2.81348 28.4288L15.3455 15.9102L19.4071 19.9674L4.91987 28.0649Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M1.2577 27.4095C0.908256 26.9453 0.707031 26.3754 0.707031 25.7724V3.47296C0.707031 2.87003 0.908256 2.30009 1.2577 1.83594L14.0581 14.6226L1.2577 27.4095Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M24.7073 17.004L21.057 19.0442L16.6318 14.6238L21.0573 10.2031L24.708 12.2436C25.5825 12.733 26.1047 13.6228 26.1047 14.6238C26.1047 15.6248 25.5825 16.5144 24.7073 17.004Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M15.3446 13.3383L2.81348 0.820392C3.01887 0.772034 3.228 0.746094 3.43703 0.746094C3.95382 0.746094 4.46869 0.892876 4.91912 1.18356L19.4064 9.28092L15.3446 13.3383Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Get it on
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                
                <div className="hidden">
                <DialogTitle>Hello</DialogTitle>
                </div>
                
                <Image
                  src="/qrcode.png"
                  alt="Swasthi QR Code"
                  width={200}
                  height={200}
                />
                <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                  Scan & Download{" "}
                  <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                    SWASTHI
                  </span>{" "}
                  App
                </h4>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <br />
      <hr className="m-auto w-[85%] pt-10" />
      <div className="flex flex-col md:flex-row justify-between text-center text-sm px-28 space-y-4 md:space-y-0">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>Made with ❤️ in India</p>
        <p>Design and Developed by FitnEarn</p>
      </div>
    </footer>
  );
};

export default Footer;
=======
import Image from "next/image";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { useState } from "react"; // Import useState to manage modal state

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  return (
    <footer className="bg-custom-gradient text-white py-8">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap justify-evenly space-y-8 md:space-y-0">
        {/* Logo and Description Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <div className="flex items-center space-x-2">
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Logo.png"
              alt="logo"
            />
            <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <Image
                src="/Swasthi.png"
                alt="Swasthi Logo"
                width={96}
                height={24}
              />
            </h1>
          </div>
          <p className="mt-2 text-sm text-neutral-200">
            Swasthi is your all-in-one health app for personalized wellness
            insights, progress tracking, and daily motivation. Available on
            Android and iOS. Join our community today!
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:help-support@fitnearn.com">
              <Image
                src="/email.png"
                alt="Email Icon"
                width={16}
                height={16}
                className="inline mr-2"
              />
              help-support@fitnearn.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://x.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fitearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-700 p-2 rounded-full"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/fit-n-earn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="bg-gray-700 p-2 rounded-full"
            >
              <TiSocialLinkedin />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-4 text-sm text-justify">
            {["Home", "Features", "How it works", "Pricing"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 text-gray-200">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help & Support Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-4 text-sm text-justify">
            {[
              {
                label: "About us",
                href: "/Aboutus",
              },
              {
                label: "Terms & Conditions",
                href: "/TermsAndConditions",
              },
              {
                label: "Privacy Policy",
                href: "/PrivacyPolicy",
              },
              {
                label: "Data Deletion Policy",
                href: "/DataDeletionPolicy",
              },
              {
                label: "Return and Refund Policy",
                href: "/ReturnAndRefund",
              },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Download App</h4>
          <div className="flex flex-wrap gap-2">
            {/* App Store Button */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="relative inline-flex h-auto w-[200px] bg-gradient-to-r from-orange-600 to-yellow-500 border-2 border-white rounded-[8px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                    <span>
                      <Image
                        src="/apple.png"
                        alt="App Store"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Download on the
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                <h6>Coming Soon</h6>
                <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                  Scan & Download
                  <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                    SWASTHI
                  </span>
                  App
                </h4>
              </DialogContent>
            </Dialog>

            {/* Google Play Button */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button
                  className="relative inline-flex h-auto w-[200px] bg-gradient-to-r from-orange-600 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="29"
                        className="w-[22px] md:w-[27px] h-[25px] md:h-[29px]"
                        viewBox="0 0 27 29"
                        fill="none"
                      >
                        <path
                          d="M4.91987 28.0649C4.28691 28.4735 3.52669 28.5971 2.81348 28.4288L15.3455 15.9102L19.4071 19.9674L4.91987 28.0649Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M1.2577 27.4095C0.908256 26.9453 0.707031 26.3754 0.707031 25.7724V3.47296C0.707031 2.87003 0.908256 2.30009 1.2577 1.83594L14.0581 14.6226L1.2577 27.4095Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M24.7073 17.004L21.057 19.0442L16.6318 14.6238L21.0573 10.2031L24.708 12.2436C25.5825 12.733 26.1047 13.6228 26.1047 14.6238C26.1047 15.6248 25.5825 16.5144 24.7073 17.004Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M15.3446 13.3383L2.81348 0.820392C3.01887 0.772034 3.228 0.746094 3.43703 0.746094C3.95382 0.746094 4.46869 0.892876 4.91912 1.18356L19.4064 9.28092L15.3446 13.3383Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Get it on
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                
                <div className="hidden">
                <DialogTitle>Hello</DialogTitle>
                </div>
                
                <Image
                  src="/qrcode.png"
                  alt="Swasthi QR Code"
                  width={200}
                  height={200}
                />
                <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                  Scan & Download{" "}
                  <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                    SWASTHI
                  </span>{" "}
                  App
                </h4>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <br />
      <hr className="m-auto w-[85%] pt-10" />
      <div className="flex flex-col md:flex-row justify-between text-center text-sm px-28 space-y-4 md:space-y-0">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>Made with ❤️ in India</p>
        <p>Design and Developed by FitnEarn</p>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
