"use client";
import Image from "next/image";
import React from "react";
import Heading from "./heading";
import { Slide } from "react-awesome-reveal";

const Advantages = () => {
  return (
    <section
      id="about"
      className="flex  flex-col md:flex-row justify-center items-center gap-4"
    >
      <Slide direction="left" className="flex-1" triggerOnce>
        <div className="flex-1">
          <Heading title="advatnages" sub_title="why choose Uifry?" />

          <p className="my-5 font-bold text-lg">Clever Notifications</p>
          <p className="opacity-70 text-sm leading-6">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="image ">
          <Image
            className="block"
            src={"/phone-3.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </Slide>
    </section>
  );
};

export default Advantages;
