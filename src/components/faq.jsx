"use client";
import React from "react";
import Heading from "./heading";
import { Slide } from "react-awesome-reveal";

const FAQData = [
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    title: "the best financial accounting app ever!",
    description:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
];

const FAQ = () => {
  return (
    <section id="faq">
      <Heading title="FAQ" sub_title="Frequently asked questions" />
      <Slide direction="right">
        <div className="grid grid-cols-2 mt-5 gap-4 ">
          {FAQData.map((data, ind) => (
            <div
              className={`p-5 mb-4 ${
                ind === 1 || ind === 2 || ind === 5
                  ? "text-black"
                  : "bg-primary  rounded text-white"
              }`}
              key={ind}
            >
              <p className="capitalize mb-2 font-bold text-lg">{data.title}</p>
              <p className="opacity-70 text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default FAQ;
