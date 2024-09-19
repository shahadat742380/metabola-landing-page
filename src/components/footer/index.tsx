"use client";

// ** import core package
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// import ui component
import { Typography } from "../ui/Typography";

// import Logo and icon
import {
  IcoFacebook,
  IcoInstagram,
  IcoTwitter,
  IcoYoutube,
  LogoWhite,
} from "@/assets/svg";

// import config
import { config } from "@/config";

// import jotai
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";

// import jotai and hook form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

// ** define validation schema using zod **
const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Footer = () => {
  const location = usePathname();
  const currentYear = new Date().getFullYear();
  const setOpenModal = useSetAtom(openModalAtom);

  const handleNavigation = (section: string) => {
    // Redirect to home page with a hash anchor link
    window.location.href = `/#${section}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    toast.success("From is successfully submit....");
    reset();
  };

  return (
    <footer className="py-8 sm:pt-16 lg:pt-20 bg-primary">
      <div className="mx-auto max-w-[1336px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="shrink-0 max-w-[300px]">
            <LogoWhite />
            <Typography
              variant="Medium_H6"
              className={`block mt-[9px] text-stock`}
            >
              Lorem ipsum dolor sit amet consectetur. Malesuada feugiat nec.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Medium_H6"
                className={`block text-stock`}
                link={config.PHONE}
              >
                <span className="text-stock">Ph. No:</span> +91 95755 95775
              </Typography>
              <Typography
                variant="Medium_H6"
                className={`block text-stock`}
                link={config.EMAIL}
              >
                <span className="text-stock">Email:</span> info@Metabola.com
              </Typography>
            </div>
            <div className="flex gap-4 mt-6">
              <Link target="_blank" href={config.INSTAGRAM_URL}>
                <IcoInstagram />
              </Link>
              <Link target="_blank" href={config.TWITTER_URL}>
                <IcoTwitter />
              </Link>
              <Link target="_blank" href={config.FACEBOOK_URL}>
                <IcoFacebook />
              </Link>
              <Link target="_blank" href={config.YOUTUBE_URL}>
                <IcoYoutube />
              </Link>
            </div>
          </div>

          <div className="flex justify-between md:justify-start gap-10 md:gap-32">

            {/* Links */}
            <nav>
              <Typography
                variant="SemiBold_H5"
                className=" mb-6 block text-white"
              >
                Links
              </Typography>
              <ul className="space-y-4 text-stock">
               
                <li>
                  <Link
                    href="/"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                   Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block text-base transition-all duration-200 hover:translate-x-1 "
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Service
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Other Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-8 block text-gray_"
              >
                Others
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Contact us
                  </button>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="shrink-0 ">
            <div className="">
              <div className="max-w-[300px]">
                <Typography variant="Medium_H5" className={`block text-gray_`}>
                  Newsletter
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`block text-gray_ text-[13px] md:text-[13px] mt-2`}
                >
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </Typography>
              </div>

              <div className="mt-6 md:max-w-[306px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <input
                      {...register("email")}
                      type="text"
                      className="w-full rounded-lg border py-3 px-4 "
                      placeholder="Enter your email address "
                    />
                    {errors.email && (
                      <p className="text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-primary w-full py-3 rounded-lg text-white mt-4 text-base md:text-xl font-semibold"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t  pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <Typography variant="Medium_H6" className="text-gray_ block">
              © Copyright {currentYear}, All Rights Reserved by hungrymeh.com
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
