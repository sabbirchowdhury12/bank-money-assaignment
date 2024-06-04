import Image from "next/image";
import React from "react";
import Heading from "./heading";
import Button from "./button";

const Banner = () => {
  return (
    <section className="relative flex items-center justify-between bg-black p-10 rounded">
      <div className="text-white uppercase">
        <Heading
          title="Risus habitant leo egestas mauris diam eget morbi tempus vulputate."
          sub_title="ready to get started?"
        />
      </div>

      <div>
        <Image
          className=" text-right z-10"
          src={"/banner.png"}
          alt=""
          width={500}
          height={400}
        />
      </div>
      <Image
        className="absolute left-0 bottom-0 text-right z-10"
        src={"/line.png"}
        alt=""
        width={400}
        height={400}
      />
      <Image
        className="absolute rotate-180 right-0 top-0 text-right z-0"
        src={"/line.png"}
        alt=""
        width={400}
        height={400}
      />
    </section>
  );
};

export default Banner;
