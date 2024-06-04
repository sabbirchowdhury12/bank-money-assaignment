"use client";
import Image from "next/image";
import React from "react";
import Heading from "./heading";
import { Fade, Slide } from "react-awesome-reveal";

const Freature = ({ data }) => {
  const features = data?.features;

  return (
    <Fade>
      <section
        id="features"
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-4"
      >
        <div className="image flex-1">
          <Image
            className="block"
            src={"/phone-2.png"}
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div className="freature flex-1 text-center md:text-start">
          <Heading title="FEATURES" sub_title="uifry premium" />

          {features?.map((d, ind) => {
            return (
              <div className="mt-5" key={ind}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2 capitalize font-bold">
                  <Image
                    src={d.icon}
                    className="block"
                    alt=""
                    height={20}
                    width={20}
                  />
                  <p>{d.title}</p>
                </div>
                <p className="opacity-70 text-sm leading-6"> {d.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default Freature;
