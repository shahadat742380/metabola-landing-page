// import core package
import React from "react";
import Image from "next/image";

// import images
import image from "@/assets/images/about/Logo.png";

// import ui
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "@/components/ui/BtnPrimary";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="py-16 md:py-20 lg:py-[100px] bg-background "
    >
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <Image
            src={image}
            height={256}
            width={526}
            alt="about image"
            className="object-cover"
          />
        </div>
        <div className="py-10 lg:py-[69px]">
          <Typography variant="Regular_H5" className="text-gray_ block">
            About us
          </Typography>
          <Typography variant="SemiBold_H3" className="text-black_ mt-2 block">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography variant="Regular_H6" className="block mt-6 text-gray_">
            Lorem ipsum dolor sit amet consectetur. Fermentum volutpat egestas
            interdum bibendum. Urna nibh lectus cursus tortor sagittis fringilla
            sagittis a. Consequat dolor amet faucibus tincidunt. Consectetur
            massa integer purus mi risus leo
          </Typography>
          <Typography variant="Regular_H6" className="block mt-6 text-gray_">
            Egestas lacus bibendum praesent vitae. Aliquet cursus maecenas
            volutpat velit scelerisque nunc facilisi congue eu. Quam vulputate
            ornare morbi lacinia lacus felis sit. Ullamcorper ac at tellus
            consequat.
          </Typography>

          <div className="mt-6 md:mt-8 lg:mt-12">
            <BtnPrimary content="Know more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
