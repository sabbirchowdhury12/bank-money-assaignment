"use client";
import Button from "./button";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

const Hero = ({ data }: any) => {
  const hero = data?.hero;
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between relative mt-5"
    >
      <Slide direction="left" triggerOnce>
        <div className="frist">
          <div>
            <div className="content mb-10">
              <div className="relative">
                {/* Gradient background */}
                <div className="absolute top-[-40px] left-40 rounded-full blur-lg -z-20 bg-gradient-to-t from-[#FDE598] to-[#FF5555] w-40 h-32" />

                {/* Heading */}

                <h2 className="uppercase md:max-w-[600px] text-4xl font-bold z-50">
                  {hero?.headline}
                </h2>
              </div>

              <p className="md:max-w-[600px] opacity-50 text-sm my-5">
                {hero?.subheadline}
              </p>
              <div className="flex gap-2">
                <Button className="bg-black text-white">
                  {" "}
                  <span> {hero?.ctaButtons[0].text}</span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
                <Button className=" text-black border ">
                  {" "}
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Media / Play_Circle">
                      <g id="Vector">
                        <path
                          d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 15V9L15 12L10 15Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </svg>{" "}
                  {hero?.ctaButtons[1].text}
                </Button>
              </div>
            </div>

            <div className="badge mt5">
              <Image
                className="block"
                src={"/badge.png"}
                alt=""
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="image">
          <Image src={"/phone.png"} alt="" width={500} height={500} />
        </div>
      </Slide>

      <Image
        className="absolute top-0 left-0"
        src={"/star.png"}
        alt=""
        width={48}
        height={48}
      />
      <Image
        className="absolute top-50 left-0"
        src={"/star.png"}
        alt=""
        width={48}
        height={48}
      />
      <Image
        className="absolute top-0 right-0"
        src={"/star.png"}
        alt=""
        width={48}
        height={48}
      />
    </div>
  );
};

export default Hero;
