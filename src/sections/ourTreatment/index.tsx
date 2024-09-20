// import core package
import Image, { StaticImageData } from "next/image";

// import image
import img1 from "@/assets/images/treatment/img1.png";
import img2 from "@/assets/images/treatment/img2.png";
import img3 from "@/assets/images/treatment/img3.png";
import img4 from "@/assets/images/treatment/img4.png";
import img5 from "@/assets/images/treatment/img5.png";

// import component
import { Typography } from "@/components/ui/Typography";

interface CardData {
  img: StaticImageData;
  title: string;
  des: string;
}

const OurTreatment = () => {
  const cardData: CardData[] = [
    {
      img: img1,
      title: "Collagen Bed Therapy",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
    {
      img: img2,
      title: "CoolSculpting",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
    {
      img: img3,
      title: "Lymphatic Drainage",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
    {
      img: img4,
      title: "LED Light Therapy",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
    {
      img: img5,
      title: "Fat-Dissolving",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
    {
      img: img1,
      title: "Fat-Dissolving ",
      des: "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Volutpat odio nunc magna aenean",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-[100px] bgImg treatment-bg bg-background"
    >
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <Typography variant="SemiBold_H3" className=" block">
            Our <span className="text-primary">Treatment</span>
          </Typography>
          <Typography variant="Regular_H6" className="text-gray_ block mt-2">
            Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
            simply dummy
          </Typography>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-[196px] mt-[181px]">
            {cardData.map((data, idx) => (
              <div
                key={idx}
                className="relative px-[22px] pt-[149px] pb-[72px] bg-white hover:shadow-lg  duration-300 rounded-3xl lg:rounded-[32px] text-center"
              >
                <div className="absolute left-1/2 -translate-x-1/2 -top-[109px]  h-[218px] w-[202px] rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={data.img}
                    alt={data.title}
                    height={218}
                    width={202}
                    className="object-contain"
                  />
                </div>
                <Typography
                  variant="SemiBold_H3"
                  className="text-black_ block md:text-[31px]"
                >
                  {data?.title}
                </Typography>
                <Typography
                  variant="Regular_H5"
                  className="text-gray_ mt-4 block"
                >
                  {data?.des}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTreatment;
