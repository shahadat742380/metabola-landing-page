"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import component and icons
import { Typography } from "@/components/ui/Typography";
import { IcoStar } from "@/assets/svg";

// import images
import avatar1 from "@/assets/images/testimonials/avatar1.png";
import avatar2 from "@/assets/images/testimonials/avatar2.png";
import avatar3 from "@/assets/images/testimonials/avatar3.png";

const Testimonials = () => {
  const content = [
    {
      img: avatar1,
      name: "Devon Lane",
      role: "President of Sales",
      desc: "Lorem ipsum dolor sit amet consectetur. Vitae quis mauris facilisis pharetra massa eget. Vestibulum penatibus id ipsum ultrices viverra tristique libero risus. Volutpat lacus morbi eget ultrices faucibus elit sed. Sit mattis risus ut.",
    },
    {img: avatar2,
      name: "Courtney Henry",
      role: "Dog Trainer",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum lectus condimentum pretium eu vitae. Facilisis cras ut id faucibus tincidunt vitae. Cras sed laoreet nisi sapien fusce dolor gravida. Et amet dignissim ullamcorper purus.",
    },
    {img: avatar3,
      name: "Robert Fox",
      role: "Medical Assistant",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat metus ut mollis nunc. Lacinia nibh nibh consectetur dolor. Sit orci urna pellentesque non at. Ornare non sed faucibus sit quis. Vitae condimentum ut lorem morbi et.",
    },
    {
      img: avatar1,
      name: "Devon Lane",
      role: "President of Sales",
      desc: "Lorem ipsum dolor sit amet consectetur. Vitae quis mauris facilisis pharetra massa eget. Vestibulum penatibus id ipsum ultrices viverra tristique libero risus. Volutpat lacus morbi eget ultrices faucibus elit sed. Sit mattis risus ut.",
    },
    {img: avatar2,
      name: "Courtney Henry",
      role: "Dog Trainer",
      desc: "Lorem ipsum dolor sit amet consectetur. Vestibulum lectus condimentum pretium eu vitae. Facilisis cras ut id faucibus tincidunt vitae. Cras sed laoreet nisi sapien fusce dolor gravida. Et amet dignissim ullamcorper purus.",
    },
    {img: avatar3,
      name: "Robert Fox",
      role: "Medical Assistant",
      desc: "Lorem ipsum dolor sit amet consectetur. Consequat metus ut mollis nunc. Lacinia nibh nibh consectetur dolor. Sit orci urna pellentesque non at. Ornare non sed faucibus sit quis. Vitae condimentum ut lorem morbi et.",
    },
   
  ];
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-primary">
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center">
          <div className="text-center ">
            <Typography variant="SemiBold_H3" className="block text-white">
              We Value Their Feedback and Trust
            </Typography>
            <Typography variant="Regular_H6" className="text-white block mt-2">
              Unlocking the Secret to Client Satisfaction
            </Typography>
          </div>

          <div className="mt-10 md:mt-12  lg:mt-[68px]">
            <div className="max-w-[1228px] w-[calc(100vw-60px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-40px)] xl:w-[90vw] relative block ">
              <Swiper
                slidesPerView={1}
                spaceBetween={41}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1600: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                  },
                }}
                loop
                modules={[Pagination, Autoplay]}
                autoplay={{
                  disableOnInteraction: true,
                }}
                className="mySwiper"
              >
                {content.map((obj, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white duration-500 cursor-pointer rounded-2xl hover:shadow-lg overflow-hidden border mb-20 pt-8 pb-10 pl-[29px] pr-[43px]">
                      <div className="flex flex-col justify-between flex-1 ">
                        <div className="flex-1">
                          <div className="flex gap-[5px] items-center">
                            {[...new Array(5)].map((star, idx) => (
                              <p key={idx}>
                                <IcoStar />
                              </p>
                            ))}
                          </div>

                          <blockquote className="flex-1 mt-4">
                            <Typography
                              variant="Regular_H6"
                              className="block text-gray_"
                            >
                              {obj?.desc}
                            </Typography>
                          </blockquote>
                        </div>

                        <div className="flex items-center mt-[34px] justify-between">
                          <div className="flex items-center">
                            <Image src={obj?.img} alt={obj.name} className="rounded-full h-[43px] w-43px" />
                            <div className="ml-4">
                              <Typography
                                variant="Bold_H6"
                                className="block text-gray_ !text-base"
                              >
                                {" "}
                                {obj?.name}
                              </Typography>
                              <Typography
                                variant="Regular_H7"
                                className="block text-gray_ text-[13px] mt-[2px]"
                              >
                                {" "}
                                {obj?.role}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
