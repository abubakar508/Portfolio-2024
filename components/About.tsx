"use client";
import React, { useState } from "react";
import WebThree from "./WebThree";
import WebTwo from "./WebTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  const [data, setData] = useState(0);
  const SwitchElement = [
    {
      name: "WEB 2.0",
      component: <WebTwo key="web2" />, // Store the component directly
    },
    {
      name: "WEB 3.0",
      component: <WebThree key="web3" />, // Store the component directly
    },
  ];

  const handleItemClick = (index: number) => {
    setData(index >= 0 && index < SwitchElement.length ? index : 0);
  };

  return (
    <div id="about" className="h-screen flex flex-col text-center space-y-4 items-center justify-evenyl lg:px-[200px]">
      <div className="px-3 space-y-3 flex flex-col md:w-[800px]">
        <h1 className="text-2xl font-bold lg:text-3xl">
          I am <span className="text-accent font-extrabold">Abisma</span>. A
          developer from Nairobi, Kenya. I focus on building robust systems in
          the internet with the help of different programming languages.
        </h1>
        <span className="font-medium text-[14px] lg:text-base">
          Exploring the intersection of blockchain technology and full-stack
          development to create innovative decentralized solutions.
        </span>
      </div>
      <div className=" flex flex-col space-y-5">
        <div >
          <span className=" text-4xl font-black text-accent">
            Web 2.0
          </span>
        </div>
        <WebTwo />
        <div >
          <span className=" text-4xl font-black text-accent">
            Web 3.0
          </span>
        </div>
        <WebThree />
      </div>
    </div>
  );
};

export default About;
