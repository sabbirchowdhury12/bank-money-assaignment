"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "./heading";
import { Slide } from "react-awesome-reveal";

const dummyData = {
  id: "01",
  name: "John Dhon",
  feedback:
    "Justo diam lorem et amet nonumy eirmod no. Ut dolore sea dolor amet elitr sanctus vero justo. Et consetetur et.The scape and with his lines thou longed that things, a tales uncouth plain but cheer. Can delphis his call.",
  avatar:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
};

const Testimonial = ({ data }) => {
  const [review, setReview] = useState(dummyData);

  const reviews = data?.testimonials;

  return (
    <section>
      <div className="text-center mb-5">
        <Heading title="testimonial" sub_title="what our users say about us?" />
      </div>

      <Slide direction="bottom" triggerOnce>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex-1">
            <Image
              className="block"
              src={"/phone-5.png"}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1">
            <p className="my-5 font-bold text-lg capitalize">
              the best financial accounting app ever!
            </p>
            <p className="opacity-70 text-sm leading-6">“{review?.feedback}”</p>
            <div className="flex gap-2 my-5">
              {reviews?.map((data) => {
                return (
                  <Image
                    onClick={() => setReview(data)}
                    key={data.id}
                    src={data?.avatar}
                    alt=""
                    height={12}
                    width={12}
                    className={`rounded-full block h-8 w-8 ${
                      data.id === review?.id ? "opacity-100" : "opacity-40 p-1"
                    }`}
                  />
                );
              })}
            </div>
            <p className="font-bold">{review?.name}</p>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Testimonial;
