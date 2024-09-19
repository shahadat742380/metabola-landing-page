"use client";

// ** import core package
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** import third party package
import { Menu, X } from "react-feather";

// import component
import BtnPrimary from "../ui/BtnPrimary";

// import logo
import { Logo } from "@/assets/svg";

const sectionIds: { [key: string]: string } = {
  home: "home",
  aboutUs: "aboutUs",
  treatment: "treatment",
  blog: "blog",
  contactUs: "contact-us",
};

const navLinks = [
  { section: "home", text: "Home" },
  { section: "aboutUs", text: "About us" },
  { section: "treatment", text: "Treatment" },
  { section: "blog", text: "Blogs" },
  { section: "contactUs", text: "Contact us" },
];

const Navbar = () => {
  const location = usePathname();

  function getInitialActiveSection() {
    return location === "/blog" ? "blog" : "home";
  }

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialActiveSection());

  const handleScroll = () => {
    const targetHeight = window.innerHeight / 2;
    for (const [section, id] of Object.entries(sectionIds)) {
      const sectionElement = document?.getElementById(id);
      const rect = sectionElement?.getBoundingClientRect();
      if (
        rect?.top &&
        rect?.top <= targetHeight &&
        rect?.bottom &&
        rect?.bottom >= targetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveSection(location === "/blog" ? "blog" : "home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
  }, [expanded]);

  const getNavLinkClass = (sectionName: string) =>
    activeSection === sectionName ? "text-primary font-semibold" : "text-gray_";

  return (
    <header className="py-4 lg:py-[26px] bg-white shadow-md !z-[9999] sticky top-0">
      <div className="max-w-[1336px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link href="/" className="text-primary_ flex gap-3 items-center">
              <Logo />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              className="text-primary"
              type="button"
              onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              aria-expanded={expanded}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <Menu className="text-accent" />
              </span>

              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <X className="text-accent" />
              </span>
            </button>
          </div>
          {/* desktop nav */}
          <div className="hidden lg:flex lg:gap-8 lg:items-center lg:justify-center">
            {navLinks.map((link) => (
              <Link
                href={
                  location === "/"
                    ? `#${sectionIds[link.section]}`
                    : `/#${sectionIds[link.section]}`
                }
                key={link.section}
              >
                <div
                  className={`${getNavLinkClass(
                    link.section
                  )} nav-links hover:text-primary duration-500`}
                >
                  {link.text}
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
            <BtnPrimary content="Book Now" />
          </div>
        </div>

        {/*  Mobile nav */}
        <nav
          className={`absolute ${
            expanded ? "flex lg:hidden " : "hidden"
          }  left-0 w-full  max-lg:h-[calc(100dvh-50px)] !z-[9999999] bg-white overflow-x-hidden   flex-col `}
        >
          <div className="px-5 py-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                onClick={() => setExpanded(false)}
                className="block text-[20px] font-semibold mt-4 md:mt-10"
                href={`#${sectionIds[link.section]}`}
                key={link.section}
              >
                <h1 className="text-primaryBlack">{link.text}</h1>
              </Link>
            ))}
          </div>

          <div className="shadow-t p-6">
            <BtnPrimary
              onClick={() => {
                setExpanded((prevExpanded) => !prevExpanded);
              }}
              content="Book Now"
              className="w-full px-0 md:text-base"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
