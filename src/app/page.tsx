"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Freature from "@/components/freature";
import Advantages from "@/components/advantages";
import Customize from "@/components/Customize";
import Testimonial from "@/components/testimonial";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero data={data} />
      <Freature data={data} />
      <Advantages />
      <Customize />
      <Testimonial data={data} />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}
