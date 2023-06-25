"use client";
import Image from "next/image";
import { Data_Array } from "@/app/constants/constants";

const Carousel = () => {
  return (
    <section className="w-full bg-port-yellow-ultra-light py-12 prose-xl">
      <div className="flex flex-col gap-8">
        <h2 className="font-notosans max-w-screen-2xl w-full px-8 m-auto lg:px-12">
          Carousel{" "}
          <span className="relative after:inline-text-underliner">Title</span>
        </h2>
        <div className="overflow-x-auto whitespace-nowrap">
          {Data_Array.map((item) => {
            return (
              <article className=" inline-block mx-8">
                <Image
                  className="rounded-full"
                  blurDataURL={item.blurDataUrl}
                  src={item.src}
                  quality={75}
                  width={500}
                  height={800}
                  style={{ width: "auto", height: "auto" }}
                  alt={item.alt}
                  placeholder="blur"
                ></Image>
              </article>
            );
          })}
        </div>
        <div className="flex flex-row gap-5 items-start px-8 lg:px-12">
          <a className="px-7 py-4 rounded-full bg-port-yellow-light transition-all hover:bg-port-pink-base hover:-translate-x-2 hover:cursor-pointer">
            <img
              className="rotate-180 w-11 h-auto m-0"
              src="arrow.svg"
              alt="Go Left"
            ></img>
          </a>
          <a className="px-7 py-4 h-fit rounded-full bg-port-yellow-light transition-all hover:bg-port-pink-base hover:translate-x-2  hover:cursor-pointer">
            <img
              className="w-11 h-auto m-0"
              src="arrow.svg"
              alt="Go Right"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
