<<<<<<< HEAD
import { Timeline } from "./ui/timeline";
import { useState, forwardRef } from "react";
import Image from "next/image";

interface ContentType {
  title: string;
  heading: string;
  description: string;
  image: string;
}

const Data: ContentType[] = [
  {
    title: "Download App",
    heading: "",
    description:
      "Download Swasthi on your favourite device. Available on both iOS and Android platforms.",
    image: "Frame 2608478.png",
  },
  {
    title: "Create Account",
    heading: "7 days free trial",
    description:
      "Sign up easily using your email or social accounts like Google or Apple. Enjoy a 7-day free trial with full access to all premium features.",
    image: "Frame 2608479.png",
  },
  {
    title: "You're Done",
    heading: "Enjoy the Experience",
    description:
      "Explore the app's amazing features, track your progress, and share Swasthi with friends and family to inspire their health journey.",
    image: "Frame 2608479 (1).png",
  },
];

const HowitWorksMobile = forwardRef<HTMLElement>((_, ref) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle image click to play video
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };


  return ( 
    <>
      <section ref={ref} className="block md:hidden w-full">
        <Timeline data={Data} />
        <div className="w-[80%] max-w-[720px] mx-auto" data-aos="zoom-out">
          {/* Clickable video image */}
          {!isVideoPlaying ? (
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Video.png"
              alt="video_img"
              className="translate-y-[-60px] cursor-pointer w-full h-auto"
              onClick={handleVideoClick}
            />
          ) : (
            // Display video in place of image when clicked
            <iframe
              width="100%"
              height="400"
              src="/-034a-434f-ab20-1f24ac408882.mp4"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </section>
    </>
  );
});

// Assign a displayName to the forwardRef component
HowitWorksMobile.displayName = "HowitWorksMobile";

export default HowitWorksMobile;
=======
import { Timeline } from "./ui/timeline";
import { useState, forwardRef } from "react";
import Image from "next/image";

interface ContentType {
  title: string;
  heading: string;
  description: string;
  image: string;
}

const Data: ContentType[] = [
  {
    title: "Download App",
    heading: "",
    description:
      "Download Swasthi on your favourite device. Available on both iOS and Android platforms.",
    image: "Frame 2608478.png",
  },
  {
    title: "Create Account",
    heading: "7 days free trial",
    description:
      "Sign up easily using your email or social accounts like Google or Apple. Enjoy a 7-day free trial with full access to all premium features.",
    image: "Frame 2608479.png",
  },
  {
    title: "You're Done",
    heading: "Enjoy the Experience",
    description:
      "Explore the app's amazing features, track your progress, and share Swasthi with friends and family to inspire their health journey.",
    image: "Frame 2608479 (1).png",
  },
];

const HowitWorksMobile = forwardRef<HTMLElement>((_, ref) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle image click to play video
  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };


  return ( 
    <>
      <section ref={ref} className="block md:hidden w-full">
        <Timeline data={Data} />
        <div className="w-[80%] max-w-[720px] mx-auto" data-aos="zoom-out">
          {/* Clickable video image */}
          {!isVideoPlaying ? (
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Video.png"
              alt="video_img"
              className="translate-y-[-60px] cursor-pointer w-full h-auto"
              onClick={handleVideoClick}
            />
          ) : (
            // Display video in place of image when clicked
            <iframe
              width="100%"
              height="400"
              src="/-034a-434f-ab20-1f24ac408882.mp4"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </section>
    </>
  );
});

// Assign a displayName to the forwardRef component
HowitWorksMobile.displayName = "HowitWorksMobile";

export default HowitWorksMobile;
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
