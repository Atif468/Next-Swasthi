"use client";

import { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import HealthJourney from "../Components/1";
import FeaturesSection from "../Components/2";
import Footer from "../Components/Footer";
import Download from "../Components/4";
import DetailedProgress from "../Components/3";
import HowitWorks from "../Components/HowitWorks";
import PricingTitle from "../Components/PricingTitle";
import Pricing from "../Components/Prices";
import HowitWorksMobile from "../Components/5";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Main() {
  const featuresRef = useRef<HTMLElement | null>(null);
  const howItWorksDesktopRef = useRef<HTMLElement | null>(null);
  const howItWorksMobileRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    if (window.innerWidth >= 768 && howItWorksDesktopRef.current) {
      howItWorksDesktopRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (howItWorksMobileRef.current) {
      howItWorksMobileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full bg-black">
      <Navbar
        scrollToHome={scrollToHome}
        scrollToFeatures={scrollToFeatures}
        scrollToHowItWorks={scrollToHowItWorks}
        scrollToPricing={scrollToPricing}
      />
      <Link href="/AboutUs">AboutUs</Link>
      <HealthJourney />
      <FeaturesSection ref={featuresRef} />
      <DetailedProgress />
      <div className="w-full">
        <HowitWorks ref={howItWorksDesktopRef} />
        <HowitWorksMobile ref={howItWorksMobileRef} />
      </div>
      <PricingTitle />
      <Pricing ref={pricingRef} />
      <Download />
      <Footer />
    </div>
  );
}
