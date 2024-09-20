

// import component
import BtnPrimary from "@/components/ui/BtnPrimary";
import { Typography } from "@/components/ui/Typography";

// import image
import founder from "@/assets/images/founder/doctor.png"
import Image from "next/image";

const Founder = () => {
  return (
    <section id="services" className="relative pt-12 md:pt-16 lg:pt-20 bg-background">
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <Typography variant="SemiBold_H3" className=" block">
            Meet <span className="text-primary">our founder</span>
          </Typography>
          <Typography variant="Regular_H6" className="text-gray_ block mt-2">
            Supporting text
          </Typography>
        </div>
        <div className="mt-12 lg:mt-[144px]">
          <div className="max-w-[400px]">
            <Typography variant="Regular_H4">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper mattis egestas
              tortor in porta. Vel ullamcorper imperdiet lacinia habitant est
              dictum. Risus dolor proin amet sit tristique lectus eget
            </Typography>
          </div>
          <BtnPrimary content={"GET IN TOUCH"} className="mt-[34px]" />
        </div>
      </div>
      <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 flex justify-center mt-6 lg:mt-0">
        <Image src={founder} alt="founder image" />
      </div>
      <div className="lg:mt-10  bg-primary">
        <div className="pt-[50px] pb-[56px] flex justify-between items-center gap-2 sm:gap-6 mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
          <div>
            <Typography
              variant="Bold_H3"
              className="block text-white md:text-[31px]"
            >
              Dr. Mansoor
            </Typography>
            <Typography variant="Regular_H6" className="block text-white">
              Founder , Metabola.
            </Typography>
          </div>
          <div>
            <Typography
              variant="Bold_H3"
              className="block text-white md:text-[31px]"
            >
              Dr. Mansoor
            </Typography>
            <Typography variant="Regular_H6" className="block text-white">
              Founder , Metabola.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
