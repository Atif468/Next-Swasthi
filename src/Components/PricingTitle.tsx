"use client";

import Image from "next/image";

const PricingTitle = () =>  {
  return (
    <div
      className="w-full max-w-[823px] aos-init aos-animate h-auto mt-10 mx-auto space-y-4 px-4"
      data-aos="fade-up"
    >
      <div className="w-full h-auto" data-aos="fade-up" data-aos-delay="300">
        <p className="font-roboto text-[28px] sm:text-[36px] md:text-[40px] font-black leading-[1.25] text-center decoration-skip-ink-none text-neutral-200">
          Subscription: Best and Simple&nbsp;
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
            }}
          >
            Pricing
          </span>
        </p>
      </div>

      <div
        className="w-full max-w-[600px] h-auto mx-auto mt-6"
        data-aos="fade-up"
      >
        <p className="text-neutral-300 font-roboto text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.25] text-center underline-offset-auto decoration-slice">
          Choose the Swasthi plan that fits your needs and budget. Enjoy
          flexible pricing options with full access to all premium features
        </p>
      </div>

      <Image
        unoptimized={true}
        quality={100}
        width={20}
        height={20}
        src="./Buttons.png"
        alt="trial"
        className="w-[80%] sm:w-[60%] md:w-[300px] mx-auto cursor-pointer"
        data-aos="fade-up"
      />
    </div>
  );
}


PricingTitle.displayName = "DefaultLayout";

export default PricingTitle;