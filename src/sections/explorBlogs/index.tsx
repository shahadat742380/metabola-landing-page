// import core package
import Image from "next/image";

// import typography
import { Typography } from "@/components/ui/Typography";

// Import image
import leftImg from "@/assets/images/exploreBlog/leftImg.png";
import img1 from "@/assets/images/exploreBlog/blog1.png";
import img2 from "@/assets/images/exploreBlog/blog2.png";
import img3 from "@/assets/images/exploreBlog/blog3.png";

import { FaArrowRight } from "react-icons/fa6";

const ExploreBlogs = () => {
  const blogData = [
    {
      img: img1,
      title: "Nonprofit Summit: Direct and Expand Your Programs Sessions",
    },
    {
      img: img2,
      title: "Nonprofit Summit: Direct and Expand Your Programs Sessions",
    },
    {
      img: img3,
      title: "Nonprofit Summit: Direct and Expand Your Programs Sessions",
    },
  ];

  return (
    <section id="blog" className="bg-background py-10 md:py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Typography variant="Medium_H3" className="block text-black">
            Explore Our Blog
          </Typography>
          <Typography
            variant="Regular_H6"
            className="block text-description mt-3"
          >
            Lorem Ipsum is simply dummy text
          </Typography>
        </div>
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Left blog */}
          <div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden w-full rounded-xl">
                <Image
                  src={leftImg}
                  alt="image"
                  width={596}
                  height={447}
                  className="w-full object-cover scale-100 group-hover:scale-105 duration-500"
                />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H4" className="block text-black">
                  Nonprofit Summit: Direct and Expand Your Programs Sessions
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className=" text-primary mt-4 flex gap-2 items-center cursor-pointer"
                >
                  Read More{" "}
                  <FaArrowRight className="group-hover:ml-1 duration-500" />
                </Typography>
              </div>
            </div>
          </div>
          {/* right blogs */}
          <div className="space-y-8">
            {blogData.map((data, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start group w-full cursor-pointer"
              >
                <div className=" lg:col-span-2 overflow-hidden rounded-lg h-[204px] ">
                  <Image
                    src={data.img}
                    alt="blog image"
                    height={204}
                    width={272}
                    className=" object-cover scale-100 group-hover:scale-105 duration-500 h-full w-full"
                  />
                </div>
                <div className="lg:col-span-3">
                  <Typography variant="Medium_H4" className="block text-black">
                    {data.title}
                  </Typography>
                  <Typography
                    variant="Regular_H6"
                    className=" text-primary mt-4 flex gap-2 items-center cursor-pointer"
                  >
                    Read More{" "}
                    <FaArrowRight className="group-hover:ml-1 duration-500" />
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16  ">
          <Typography
            variant="Medium_H6"
            className="text-primary block cursor-pointer border-b-2 border-b-primary max-w-[150px] pb-2 mx-auto text-center"
          >
            Read all Blogs
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ExploreBlogs;
