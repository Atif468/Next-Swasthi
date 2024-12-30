 import Image from "next/image";

export default function DetailedProgress() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden md:flex-row justify-between px-4 md:px-10">
      <div
        className="w-full md:w-[463px] h-auto md:h-[600px] gap-10 ml-0 md:ml-10 px-4 md:px-0"
        data-aos="fade-up"
      >
        <div className="w-full h-auto md:h-[255px] gap-[12px]">
          <div
            className="w-full h-auto md:h-[177px]"
            data-aos="slide-right"
            data-aos-delay="0"
          >
            <p className="font-roboto text-[24px] md:text-[40px] font-black leading-[32px] md:leading-[58.59px] text-left text-neutral-100">
              Detailed Progress Tracking with Smart{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
                }}
              >
                Health Reports
              </span>
            </p>
          </div>
          <div
            className="w-full md:w-[423px] h-auto my-2"
            data-aos="slide-left"
            data-aos-delay="0"
          >
            <p className="text-neutral-300 text-xs md:text-base">
              Stay informed and motivated with Swasthi&apos;s advanced progress
              tracking, offering weekly, monthly, and yearly smart reports for
              all your health metrics.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[423px] h-auto my-5 space-y-4">
          <div
            className="w-full h-auto gap-[16px] flex"
            data-aos="slide-right"
            data-aos-delay="0"
          >
            <div className="w-10 md:w-16 my-0.5">
              <Image
                unoptimized={true}
                quality={100}
                width={50}
                height={50}
                src="/check_circle.png"
                alt="check_circle"
              />
            </div>
            <div className="space-y-2 mr-5">
              <p className="font-roboto text-[14px] md:text-[20px] font-bold leading-[18px] md:leading-[23.44px] text-left text-neutral-50">
                Comprehensive Insights
              </p>
              <p className="font-roboto text-xs md:text-[14px] font-normal leading-[14px] md:leading-[16px] text-left text-neutral-300">
                Monitor your health journey with detailed reports on BMI, BMR,
                calorie burn, water intake, and more—analyzing data trends over
                time for smarter decision-making.
              </p>
            </div>
          </div>
          <div
            className="w-full h-auto gap-[16px] flex"
            data-aos="slide-left"
            data-aos-delay="0"
          >
            <div className="w-10 md:w-16 my-0.5">
              <Image
                unoptimized={true}
                quality={100}
                width={50}
                height={50}
                src="/check_circle.png"
                alt="check_circle"
              />
            </div>
            <div className="space-y-2 mr-5">
              <p className="font-roboto text-[14px] md:text-[20px] font-bold leading-[18px] md:leading-[23.44px] text-left text-neutral-50">
                Customizable Reports
              </p>
              <p className="font-roboto text-xs md:text-[14px] font-normal leading-[14px] md:leading-[16px] text-left text-neutral-300">
                Choose from weekly, monthly, or yearly views to see your
                progress and identify patterns that help you optimize your
                fitness and wellness goals.
              </p>
            </div>
          </div>
          <div
            className="w-full h-auto gap-[16px] flex"
            data-aos="slide-right"
            data-aos-delay="0"
          >
            <div className="w-10 md:w-16 my-0.5">
              <Image
                unoptimized={true}
                quality={100}
                width={50}
                height={50}
                src="/check_circle.png"
                alt="check_circle"
              />
            </div>
            <div className="space-y-2 mr-5">
              <p className="font-roboto text-[14px] md:text-[20px] font-bold leading-[18px] md:leading-[23.44px] text-left text-neutral-50">
                Visual Analytics
              </p>
              <p className="font-roboto text-xs md:text-[14px] font-normal leading-[14px] md:leading-[16px] text-left text-neutral-300">
                Leverage easy-to-understand graphs and charts that present your
                health data visually, making it easier to stay on track and
                motivated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[500px] h-auto md:h-[600px] flex flex-col items-center md:mr-11 mt-4 md:mt-0 px-4 md:px-0 cursor-pointer animate-floating">
        <Image
          unoptimized={true}
          quality={100}
          width={250}
          height={250}
          src="/Group 1000005330.png"
          alt="Health Progress Visualization"
          className="w-96 max-w-xs md:max-w-full z-50"
        />
      </div>
    </div>
  );
}