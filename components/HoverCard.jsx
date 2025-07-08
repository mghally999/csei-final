import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const HoverCard = ({ item }) => {
  return (
    <Link
      href={item.href || `/services/${item.slug}`}
      className="md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-white lg:p-11 p-8 group relative overflow-hidden dark:bg-darkmode"
      data-aos="fade-up"
      data-aos-delay={item.delay || "300"}
      data-aos-duration="1000"
    >
      <div>
        <div className="lg:pb-20 pb-10 overflow-hidden">
          <div className="transition-transform duration-500 group-hover:scale-105">
            <Image
              src={item.icon || item.imageSrc || "/fallback.jpg"}
              alt={item.title}
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>

        <div className="pt-8 border-t-2 flex justify-between dark:border-dark_border">
          <p className="text-midnight_text text-[22px] leading-[2rem] font-medium group-hover:text-primary dark:text-white">
            {item.title}
          </p>
          <span>
            <Icon
              icon="ei:chevron-right"
              className="text-midnight_text group-hover:text-primary text-[35px] leading-[2.87rem] dark:text-white"
            />
          </span>
        </div>

        <div className="absolute w-full h-fit lg:py-3.75 py-11 px-8 top-0 group-hover:opacity-100 opacity-0 start-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-[url('/images/services/service-bg.png')] before:bg-primary before:bg-opacity-70 before:w-full before:h-full before:absolute before:top-0 before:start-0">
          <p className="text-white lg:text-lg text-xs font-normal relative z-10">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HoverCard;
