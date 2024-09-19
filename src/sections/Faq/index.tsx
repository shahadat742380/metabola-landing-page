"use client";

// import core package
import { useState } from "react";

// import components
import { Typography } from "@/components/ui/Typography";

//  import icons
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

interface FaqProps {
  bgColor?: string;
}

const Faq: React.FC<FaqProps> = ({ bgColor }) => {
  const [faq, setFaq] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur. Turpis id.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ornare egestas viverra pellentesque adipiscing lorem elit turpis congue. Elit in volutpat eget amet habitasse risus mus nec bibendum. Leo sit cursus id elit dictum. Viverra sit condimentum aliquam lectus tortor. Magna ipsum sit nulla in vitae amet ultricies. Vitae euismod sit mattis volutpat dui purus et. Turpis volutpat fermentum vel integer nunc tortor nunc libero in. Phasellus tortor.",
      open: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ornare egestas viverra pellentesque adipiscing lorem elit turpis congue. Elit in volutpat eget amet habitasse risus mus nec bibendum. Leo sit cursus id elit dictum. Viverra sit condimentum aliquam lectus tortor. Magna ipsum sit nulla in vitae amet ultricies. Vitae euismod sit mattis volutpat dui purus et. Turpis volutpat fermentum vel integer nunc tortor nunc libero in. Phasellus tortor.",
      open: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. At in elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ornare egestas viverra pellentesque adipiscing lorem elit turpis congue. Elit in volutpat eget amet habitasse risus mus nec bibendum. Leo sit cursus id elit dictum. Viverra sit condimentum aliquam lectus tortor. Magna ipsum sit nulla in vitae amet ultricies. Vitae euismod sit mattis volutpat dui purus et. Turpis volutpat fermentum vel integer nunc tortor nunc libero in. Phasellus tortor.",
      open: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Ornare montes et.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ornare egestas viverra pellentesque adipiscing lorem elit turpis congue. Elit in volutpat eget amet habitasse risus mus nec bibendum. Leo sit cursus id elit dictum. Viverra sit condimentum aliquam lectus tortor. Magna ipsum sit nulla in vitae amet ultricies. Vitae euismod sit mattis volutpat dui purus et. Turpis volutpat fermentum vel integer nunc tortor nunc libero in. Phasellus tortor.",
      open: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Elementum ornare egestas viverra pellentesque adipiscing lorem elit turpis congue. Elit in volutpat eget amet habitasse risus mus nec bibendum. Leo sit cursus id elit dictum. Viverra sit condimentum aliquam lectus tortor. Magna ipsum sit nulla in vitae amet ultricies. Vitae euismod sit mattis volutpat dui purus et. Turpis volutpat fermentum vel integer nunc tortor nunc libero in. Phasellus tortor.",
      open: false,
    },
    
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-[100px] bg-background">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[1336px]  ">
        <div className="text-center">
          <Typography variant="Medium_H3" className={`text-title block`}>
            Frequently <span className="text-primary">Asked Questions</span>
          </Typography>
          <Typography
            variant="Regular_H6"
            className=" block mt-2 mx-auto max-w-[700px]"
          >
            Everything you need to know about the product and billing.
          </Typography>
        </div>
        <div className="max-w-[799px] mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div key={index}>
              <div
                className={`border rounded-2xl transition-all duration-300 bg-white  cursor-pointer hover:bg-gray-50 py-4 px-8 `}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`flex text-lg md:text-xl font-semibold text-black_  !text-start`}
                  >
                    {" "}
                    {item.question}{" "}
                  </span>

                  {!item.open ? (
                    <FaPlus className="text-primary text-2xl" />
                  ) : (
                    <FaRegWindowMinimize className="text-primary text-2xl" />
                  )}
                </button>

                <div
                  className={`${
                    item.open ? "block " : "hidden"
                  }  mt-4 text-dark_gray `}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} className="font-medium text-gray_"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
