 import { forwardRef } from "react";
import Image from "next/image";

const FeaturesSection = forwardRef<HTMLElement>((_, ref) => {

   return (
    <section ref={ref} className="w-full overflow-hidden text-white py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 text-neutral-100" data-aos="fade-down">
          Boost Your Health with Swasthi&apos;s
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Essential Features
          </span>
        </h2>
        <p className="text-center text-sm sm:text-base mb-12 sm:mb-24 text-neutral-300" data-aos="fade-up">
          Explore Swasthi&apos;s powerful tools—from mood and fitness tracking to
          comprehensive health
          <br className="hidden sm:block" /> assessments in multiple languages.
        </p>

        <div className="relative bg-custom-gradient rounded-3xl p-6 sm:p-8" data-aos="fade-up">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1 space-y-6">
              <div className="p-4 sm:p-6 text-center sm:text-right" data-aos="fade-right">
                <div className="flex justify-center sm:justify-end">
                  <Image
                  unoptimized={true}
                  quality={100}
                    width={50}
                    height={50}
                    src="/icon1.png"
                    alt="Mood Tracking Icon"
                    className="w-full max-w-[100px] sm:max-w-[100px] object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Mood Tracking</h3>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Helps you monitor your mood patterns, offering personalized insights to maintain a balanced mind and body.
                </p>
              </div>

              <div className="p-4 sm:p-6 text-center sm:text-right" data-aos="fade-right">
                <div className="flex justify-center sm:justify-end">
                  <Image
                    unoptimized={true}
                    quality={100}
                    width={50}
                    height={50}
                    src="/icon2.png"
                    alt="Workout Tracking Icon"
                    className="w-full max-w-[100px] sm:max-w-[100px] object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Workout/ Steps/ Sleep/ Water Tracking</h3>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Track your workouts, daily steps, sleep patterns, and water intake all in one place.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 relative sm:-top-24" data-aos="zoom-in">
              <div className="shadow-lg rounded-xl overflow-hidden">
                <Image
                unoptimized={true}
                quality={100}
                  width={50}
                  height={50}
                  src="/iPhone 15.png"
                  alt="Mobile Mockup"
                  className="rounded-xl w-full max-w-[300px] sm:w-auto mx-auto object-contain"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="p-4 sm:p-6 text-center sm:text-left" data-aos="fade-left">
                <div className="flex justify-center sm:justify-start">
                  <Image
                  unoptimized={true}
                  quality={100}
                    width={100}
                    height={100}
                    src="/icon3.png"
                    alt="Multilingual Icon"
                    className="w-full max-w-[100px] sm:max-w-[100px] object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Multilingual</h3>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Support for multiple languages, making health monitoring accessible and easy for users around the globe.
                </p>
              </div>

              <div className="p-4 sm:p-6 text-center sm:text-left" data-aos="fade-left">
                <div className="flex justify-center sm:justify-start">
                  <Image
                  unoptimized={true}
                  quality={100}
                    width={50}
                    height={300}
                    src="/icon4.png"
                    alt="Health Calculators Icon"
                    className="w-full max-w-[100px] sm:max-w-[100px] object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Health Calculators</h3>
                <p className="text-neutral-300 text-xs sm:text-sm">
                  Access 14 powerful health calculators, including BMI, BMR, calorie burn, water requirement, body fat percentage, TDEE, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";


export default FeaturesSection;