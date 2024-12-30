<<<<<<< HEAD
import { forwardRef } from "react";
import Image from "next/image";

const pricingData = [
  {
    title: "Beginner",
    price: "₹ 99",
    period: "/month",
    subscriptionType: "Monthly Subscription",
    description:
      "Perfect for beginners to start their health journey with essential tools and insight",
    features: [
      "Access to all basic health calculators",
      "Access to all tracking features",
      "Daily Health tips and Brain Games",
      "Cancel anytime, no commitment",
    ],
    tag: "Save 20%",
    tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
    cardStyle: "bg-[#262626] h-auto",
  },
  {
    title: "Pro",
    price: "₹ 249",
    period: "/3 month",
    subscriptionType: "Quarterly Subscription",
    description:
      "Ideal for those seeking enhanced features and more in-depth health analysis.",
    features: [
      "All Beginner features included",
      "Monthly smart reports for all calculators",
      "Detailed Insights",
      "Priority customer support",
    ],
    tag: "Save 30%",
    tagColor: "bg-white",
    cardStyle: "bg-gradient-to-r from-[#D84315] to-[#FFC107] h-[480px] text-xl",
  },
  {
    title: "Elite",
    price: "₹ 799",
    period: "/year",
    subscriptionType: "Annual Subscription",
    description:
      "For dedicated users who want the full Swasthi experience with maximum value.",
    features: [
      "All Pro features included",
      "Yearly reports and advanced analytics",
      "Unlimited access to all premium content",
      "Early access to new features & updates",
    ],
    tag: "Save 40%",
    tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
    cardStyle: "bg-[#262626] h-auto",
  },
];

const Pricing = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="overflow-hidden flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-[600px] gap-6 py-10"
    >
      {pricingData.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col items-start p-6 rounded-[16px] w-full max-w-[354px] ${plan.cardStyle} cursor-pointer`}
          data-aos="fade-up"
          data-aos-delay={index * 200} // Adds delay to stagger animations
        >
          <div className="w-full flex justify-between items-center">
            <h1
              className="text-[24px] text-[#F5F5F5] font-bold"
              data-aos="fade"
              data-aos-delay={index * 300}
            >
              {plan.title}
            </h1>
            <span
              className={`text-[12px] text-black font-bold py-1 px-3 rounded ${plan.tagColor}`}
              data-aos="fade"
              data-aos-delay={index * 400}
            >
              {plan.tag}
            </span>
          </div>
          <h2
            className="text-[18px] text-[#D4D4D4] font-normal mt-2"
            data-aos="fade"
            data-aos-delay={index * 500}
          >
            Starting at
          </h2>
          <h1
            className="text-[48px] text-[#F5F5F5] font-bold mt-2"
            data-aos="fade"
            data-aos-delay={index * 600}
          >
            {plan.price}{" "}
            <span className="text-[14px] font-normal">{plan.period}</span>
          </h1>
          <h3
            className="text-[18px] text-[#F5F5F5] font-medium mt-4"
            data-aos="fade"
            data-aos-delay={index * 700}
          >
            {plan.subscriptionType}
          </h3>
          <p
            className="text-[14px] text-[#E5E5E5] font-normal mt-2"
            data-aos="fade"
            data-aos-delay={index * 800}
          >
            {plan.description}
          </p>
          <div
            className="mt-6 flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay={index * 900}
          >
            {plan.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center gap-2 text-[#F5F5F5] text-[14px]"
              >
                <Image
                  unoptimized={true}
                  quality={100}
                  width={20}
                  height={20}
                  src="/check-circle-1.png"
                  alt="none"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
});

Pricing.displayName = "Pricing";

export default Pricing;
=======
// import { forwardRef } from "react";
// import Image from "next/image";

// const pricingData = [
//   {
//     title: "Beginner",
//     price: "₹ 99",
//     period: "/month",
//     subscriptionType: "Monthly Subscription",
//     description:
//       "Perfect for beginners to start their health journey with essential tools and insight",
//     features: [
//       "Access to all basic health calculators",
//       "Access to all tracking features",
//       "Daily Health tips and Brain Games",
//       "Cancel anytime, no commitment",
//     ],
//     tag: "Save 20%",
//     tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
//     cardStyle: "bg-[#262626] h-auto",
//   },
//   {
//     title: "Pro",
//     price: "₹ 249",
//     period: "/3 month",
//     subscriptionType: "Quarterly Subscription",
//     description:
//       "Ideal for those seeking enhanced features and more in-depth health analysis.",
//     features: [
//       "All Beginner features included",
//       "Monthly smart reports for all calculators",
//       "Detailed Insights",
//       "Priority customer support",
//     ],
//     tag: "Save 30%",
//     tagColor: "bg-white",
//     cardStyle: "bg-gradient-to-r from-[#D84315] to-[#FFC107] h-[480px] text-xl",
//   },
//   {
//     title: "Elite",
//     price: "₹ 799",
//     period: "/year",
//     subscriptionType: "Annual Subscription",
//     description:
//       "For dedicated users who want the full Swasthi experience with maximum value.",
//     features: [
//       "All Pro features included",
//       "Yearly reports and advanced analytics",
//       "Unlimited access to all premium content",
//       "Early access to new features & updates",
//     ],
//     tag: "Save 40%",
//     tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
//     cardStyle: "bg-[#262626] h-auto",
//   },
// ];

// const Pricing = forwardRef<HTMLElement>((_, ref) => {
//   return (
//     <section
//       ref={ref}
//       className="overflow-hidden flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-[600px] gap-6 py-10"
//     >
//       {pricingData.map((plan, index) => (
//         <div
//           key={index}
//           className={`flex flex-col items-start p-6 rounded-[16px] w-full max-w-[354px] ${plan.cardStyle} cursor-pointer`}
//           data-aos="fade-up"
//           data-aos-delay={index * 200} // Adds delay to stagger animations
//         >
//           <div className="w-full flex justify-between items-center">
//             <h1
//               className="text-[24px] text-[#F5F5F5] font-bold"
//               data-aos="fade"
//               data-aos-delay={index * 300}
//             >
//               {plan.title}
//             </h1>
//             <span
//               className={`text-[12px] text-black font-bold py-1 px-3 rounded ${plan.tagColor}`}
//               data-aos="fade"
//               data-aos-delay={index * 400}
//             >
//               {plan.tag}
//             </span>
//           </div>
//           <h2
//             className="text-[18px] text-[#D4D4D4] font-normal mt-2"
//             data-aos="fade"
//             data-aos-delay={index * 500}
//           >
//             Starting at
//           </h2>
//           <h1
//             className="text-[48px] text-[#F5F5F5] font-bold mt-2"
//             data-aos="fade"
//             data-aos-delay={index * 600}
//           >
//             {plan.price}{" "}
//             <span className="text-[14px] font-normal">{plan.period}</span>
//           </h1>
//           <h3
//             className="text-[18px] text-[#F5F5F5] font-medium mt-4"
//             data-aos="fade"
//             data-aos-delay={index * 700}
//           >
//             {plan.subscriptionType}
//           </h3>
//           <p
//             className="text-[14px] text-[#E5E5E5] font-normal mt-2"
//             data-aos="fade"
//             data-aos-delay={index * 800}
//           >
//             {plan.description}
//           </p>
//           <div
//             className="mt-6 flex flex-col gap-3"
//             data-aos="fade-up"
//             data-aos-delay={index * 900}
//           >
//             {plan.features.map((feature, featureIndex) => (
//               <div
//                 key={featureIndex}
//                 className="flex items-center gap-2 text-[#F5F5F5] text-[14px]"
//               >
//                 <Image
//                   unoptimized={true}
//                   quality={100}
//                   width={20}
//                   height={20}
//                   src="/check-circle-1.png"
//                   alt="none"
//                 />
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// });

// Pricing.displayName = "Pricing";

// export default Pricing;


import { forwardRef } from "react";
import Image from "next/image";

const pricingData = [
  {
    title: "Beginner",
    price: "₹ 99",
    period: "/month",
    subscriptionType: "Monthly Subscription",
    description:
      "Perfect for beginners to start their health journey with essential tools and insight",
    features: [
      "Access to all basic health calculators",
      "Access to all tracking features",
      "Daily Health tips and Brain Games",
      "Cancel anytime, no commitment",
    ],
    tag: "Save 20%",
    tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
    cardStyle: "bg-[#262626] h-auto",
  },
  {
    title: "Pro",
    price: "₹ 249",
    period: "/3 month",
    subscriptionType: "Quarterly Subscription",
    description:
      "Ideal for those seeking enhanced features and more in-depth health analysis.",
    features: [
      "All Beginner features included",
      "Monthly smart reports for all calculators",
      "Detailed Insights",
      "Priority customer support",
    ],
    tag: "Save 30%",
    tagColor: "bg-white",
    cardStyle: "bg-gradient-to-r from-[#D84315] to-[#FFC107] h-[480px] text-xl",
  },
  {
    title: "Elite",
    price: "₹ 799",
    period: "/year",
    subscriptionType: "Annual Subscription",
    description:
      "For dedicated users who want the full Swasthi experience with maximum value.",
    features: [
      "All Pro features included",
      "Yearly reports and advanced analytics",
      "Unlimited access to all premium content",
      "Early access to new features & updates",
    ],
    tag: "Save 40%",
    tagColor: "bg-gradient-to-r from-[#D84315] to-[#FFC107] text-neutral-50",
    cardStyle: "bg-[#262626] h-auto",
  },
];

const Pricing = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="overflow-hidden flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-[600px] gap-6 py-10"
    >
      {pricingData.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col items-start p-6 rounded-[16px] w-full max-w-[354px] ${plan.cardStyle} cursor-pointer`}
          data-aos="fade-up"
          data-aos-delay={index * 200} // Adds delay to stagger animations
        >
          <div className="w-full flex justify-between items-center">
            <h1
              className="text-[24px] text-[#F5F5F5] font-bold"
              data-aos="fade"
              data-aos-delay={index * 300}
            >
              {plan.title}
            </h1>
            <span
              className={`text-[12px] text-black font-bold py-1 px-3 rounded ${plan.tagColor}`}
              data-aos="fade"
              data-aos-delay={index * 400}
            >
              {plan.tag}
            </span>
          </div>
          <h2
            className="text-[18px] text-[#D4D4D4] font-normal mt-2"
            data-aos="fade"
            data-aos-delay={index * 500}
          >
            Starting at
          </h2>
          <h1
            className="text-[48px] text-[#F5F5F5] font-bold mt-2"
            data-aos="fade"
            data-aos-delay={index * 600}
          >
            {plan.price}{" "}
            <span className="text-[14px] font-normal">{plan.period}</span>
          </h1>
          <h3
            className="text-[18px] text-[#F5F5F5] font-medium mt-4"
            data-aos="fade"
            data-aos-delay={index * 700}
          >
            {plan.subscriptionType}
          </h3>
          <p
            className="text-[14px] text-[#E5E5E5] font-normal mt-2"
            data-aos="fade"
            data-aos-delay={index * 800}
          >
            {plan.description}
          </p>
          <div
            className="mt-6 flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay={index * 900}
          >
            {plan.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center gap-2 text-[#F5F5F5] text-[14px]"
              >
                <Image
                  unoptimized={true}
                  quality={100}
                  width={20}
                  height={20}
                  src="/check-circle-1.png"
                  alt="none"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
});

Pricing.displayName = "Pricing";

export default Pricing;
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
