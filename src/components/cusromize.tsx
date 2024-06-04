import Image from "next/image";
import React from "react";

const Customize = () => {
  return (
    <section className="flex  flex-col md:flex-row justify-center items-center gap-4">
      <div className="image">
        <Image
          className="block"
          src={"/phone-4.png"}
          alt=""
          width={600}
          height={600}
        />
      </div>{" "}
      <div className=" flex-1">
        <p className="my-5 font-bold text-lg">fully customizable</p>

        <p className="opacity-70 text-sm leading-6">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </section>
  );
};

export default Customize;
