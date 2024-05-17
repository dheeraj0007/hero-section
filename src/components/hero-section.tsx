"use client";
import { useEffect, useState } from "react";
import AnimatedText from "./animated-text";
import { Reveal } from "./reveal";
import { RoughNotation } from "react-rough-notation";

import Image from "next/image";
import { ParallaxText } from "./sliding";

const texts = [
  "Instant payments",
  "Lower transaction",
  "FeesSeamless",
  "No Chargebacks",
];

const images = [
  "/logo1.jpg",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.jpg",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Reveal width="100%">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-20 h-[90vh] mt-20 md:mt-0">
          <div className="md:w-[60vw]">
            <div>
              <div className="text-4xl md:text-5xl lg:text-7xl tracking-tighter text-[#2d1f6b] ">
                <AnimatedText text={texts[index]} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter">
                with{" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#8247ff"
                  strokeWidth={1}
                  padding={2}
                  iterations={2}
                >
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#8247ff"
                    strokeWidth={1}
                    padding={5}
                    iterations={2}
                  >
                    {" "}
                    Open Banking
                  </RoughNotation>
                </RoughNotation>
              </h1>
              <p className="text-xl md:mt-6 tracking-tight leading-6 text-gray-500 pt-5 md:pt-0">
                Our advanced technology and secure systems provide a safe and
                reliable way to transfer funds, allowing you to benefit from
                reduced processing times and improved efficiency.
              </p>
              <button className="text-xl bg-[#8247ff] text-white p-5 rounded-full mt-10 hover:scale-90 transition-all transform">
                Get Started {"->"}
              </button>
            </div>
          </div>
          <div className="md:w-[40vw]">
            <Image src={"/hero.svg"} alt="hero" width={1000} height={1000} />
          </div>
        </div>
      </Reveal>
      <div className="flex flex-col md:flex-row py-20 md:py-0 pb-20 px-10 md:px-20 items-center">
        <p>Trusted by 2000+ Banks, 19 Countries and counting ...</p>
        <ParallaxText baseVelocity={-3}>
          <Image
            src={images[0]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
          <Image
            src={images[1]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
          <Image
            src={images[2]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
          <Image
            src={images[3]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
          <Image
            src={images[4]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
          <Image
            src={images[5]}
            alt="first image"
            width={100}
            height={100}
            className="mx-10"
          />
        </ParallaxText>
      </div>
    </>
  );
};

export default HeroSection;
