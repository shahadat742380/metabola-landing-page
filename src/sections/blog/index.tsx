// import component
import Image from "next/image";

// import components and icons
import { Typography } from "@/components/ui/Typography";
import { IcoRightArrow } from "@/assets/svg";

// import images
import img1 from "@/assets/images/blogs/blog1.webp";
import img2 from "@/assets/images/blogs/blog2.webp";
import img3 from "@/assets/images/blogs/blog3.webp";

const Blog = () => {
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
    <section id="blog" className="py-12  sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <Typography variant="SemiBold_H3" className="text-title block">
            Read <span className="text-primary">Our Blog</span>
          </Typography>
          <Typography variant="Regular_H6" className="text-gray_ block mt-2">
            Lorem ipsum dolor sit
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[107px] mt-10 md:mt-[57px]">
          {blogData.map((obj, idx: number) => (
            <div key={idx} className="group flex flex-col cursor-pointer">
              <div className="flex-1">
                <div className="overflow-hidden block rounded-lg">
                  <Image
                    className="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-110"
                    src={obj.img}
                    alt={obj.title}
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Typography variant="Regular_H6" className="mt-2 text-gray-600 block">
                Jan 22, 2024
                </Typography>
                <Typography variant="SemiBold_H5" className="mt-2 text-gray-900 block">
                  {obj.title}
                </Typography>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Typography
                  variant="SemiBold_H6"
                  className="block text-primary"
                >
                  Read More
                </Typography>
                <IcoRightArrow className="transition-all duration-500 transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
        <button
          className="w-fit relative mx-auto peacockGradient inline-flex items-center justify-center px-6 py-4 text-base font-semibold hover:bg-primary_/95 duration-500 text-white bg-accent rounded-md mt-7 lg:mt-12"
          role="button"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Blog;
