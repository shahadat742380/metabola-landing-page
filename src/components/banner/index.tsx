/* eslint-disable react/no-unescaped-entities */
"use client";

// import core package
import Image from "next/image";

// import images
import bg from "@/assets/images/banner/bannerBg.webp";

// import component
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "../ui/BtnPrimary";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-black pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-[83px] lg:pb-[198px]">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background image"
          className="h-full w-full object-cover object-center"
          placeholder="blur"
        />
      </div>

      <div className="relative mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[682px]">
          <Typography
            variant="Medium_H2"
            className={`block leading-tight text-white `}
          >
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography
            variant="Regular_H5"
            className="mt-4 block text-stock"
          >
            Let's partner for quantifiable growth.
          </Typography>

          <div className="mt-8 ">
            <BtnPrimary
              content={"Contact us"}
              className="bg-white text-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
