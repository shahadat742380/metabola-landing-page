"use client";

// import core package
import Image from "next/image";

// import images
import bg1 from "@/assets/images/hero/hero1.webp";
import bg2 from "@/assets/images/hero/hero2.webp";
import bg3 from "@/assets/images/hero/hero3.webp";

// import components
import { Typography } from "@/components/ui/Typography";

// import third party package
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import component
import BtnPrimary from "@/components/ui/BtnPrimary";
import BtnSecondary from "@/components/ui/BtnSecondary";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  minTablet: {
    breakpoint: { max: 750, min: 550 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 550, min: 350 },
    items: 1,
  },
  minMobile: {
    breakpoint: { max: 350, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <section>
      <Carousel
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={false}
        className={`hero w-full`}
        responsive={responsive}
      >
        {/* Slider 1 */}
        <section className="relative overflow-hidden py-16 sm:py-20  lg:py-64 h-full">
          <div className="absolute inset-0 h-full">
            <Image
              width={1512}
              height={896}
              src={bg1}
              alt="Background image"
              placeholder="blur"
              className="h-full w-full object-cover object-right   md:origin-top-left  md:object-center"
            />
          </div>
          {/* Gradient effect */}
          <div className=" absolute inset-0 "></div>

          <div className="relative mx-auto flex max-w-[1336px] items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[625px]">
              <Typography
                variant="SemiBold_H2"
                className={`block leading-tight text-black_ `}
              >
                Discover <span className="text-primary">Non-Surgical</span>{" "}
                Weight Loss That Works—Tailored Just for You
              </Typography>
              <Typography
                variant="Regular_H4"
                className="mt-6 block max-w-[598px] text-black_ md:mt-10 "
              >
                Effective, non-invasive treatments to help you lose stubborn fat
                and feel your best.
              </Typography>

              <div className="mt-6 flex gap-4 md:mt-14">
                <BtnSecondary content={"Contact us"} />
                <BtnPrimary content={"Book Now"} />
              </div>
            </div>
          </div>
        </section>
        {/* Slider 2 */}
        <section className="relative overflow-hidden py-16 sm:py-20  lg:py-64 h-full">
          <div className="absolute inset-0 h-full">
            <Image
              width={1512}
              height={896}
              src={bg2}
              alt="Background image"
              placeholder="blur"
              className="h-full w-full object-cover object-right   md:origin-top-left  md:object-center"
            />
          </div>
          {/* Gradient effect */}
          <div className=" absolute inset-0 "></div>

          <div className="relative mx-auto flex max-w-[1336px] items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[625px]">
              <Typography
                variant="SemiBold_H2"
                className={`block leading-tight text-black_ `}
              >
                Eliminate <span className="text-white">Stubborn Fat</span> with
                Innovative Body Contouring Solutions
              </Typography>
              <Typography
                variant="Regular_H4"
                className="mt-6 block max-w-[598px] text-black_ md:mt-10 "
              >
                Target and reduce unwanted fat with safe, non-surgical solutions
              </Typography>

              <div className="mt-6 flex gap-4 md:mt-14">
                <BtnSecondary content={"Contact us"} />
                <BtnPrimary content={"Book Now"} />
              </div>
            </div>
          </div>
        </section>
        {/* Slider 3 */}
        <section className="relative overflow-hidden py-16 sm:py-20  lg:py-64 h-full">
          <div className="absolute inset-0 h-full">
            <Image
              width={1512}
              height={896}
              src={bg3}
              alt="Background image"
              placeholder="blur"
              className="h-full w-full object-cover object-right   md:origin-top-left  md:object-center"
            />
          </div>
          {/* Gradient effect */}
          <div className=" absolute inset-0 "></div>

          <div className="relative mx-auto flex max-w-[1336px] items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[625px]">
              <Typography
                variant="SemiBold_H2"
                className={`block leading-tight text-black_ `}
              >
                Transform <span className="text-white">Your Health</span> with
                Metabola’s Holistic Weight Loss Solutions
              </Typography>
              <Typography
                variant="Regular_H4"
                className="mt-6 block max-w-[598px] text-black_ md:mt-10 "
              >
                Achieve lasting weight loss through holistic, science-backed
                wellness programs
              </Typography>

              <div className="mt-6 flex gap-4 md:mt-14">
                <BtnSecondary content={"Contact us"} />
                <BtnPrimary content={"Book Now"} />
              </div>
            </div>
          </div>
        </section>
      </Carousel>
    </section>
  );
};

export default Hero;
