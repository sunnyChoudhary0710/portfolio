"use client";
import Image from "next/image";
import { Data_Array } from "@/app/constants/constants";

const Carousel = () => {
	return (
		<section className="w-full bg-port-yellow-ultra-light py-12 prose-xl">
			<div className="flex flex-col gap-8">
				<h2 className="px-6 font-notosans max-w-screen-2xl w-full m-auto lg:px-0">
					Carousel{" "}
					<span className="relative after:inline-text-underliner">Title</span>
				</h2>
				<div className="invisibility-scroll overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
					{Data_Array.map((item) => {
						return (
							<article className="w-3/4 lg:w-1/5 inline-block mx-5 lg:mx-8 snap-start scroll-ml-9 lg:scroll-mx-12">
								<Image
									className="rounded-t-full m-0"
									blurDataURL={item.blurDataUrl}
									src={item.src}
									quality={75}
									width={500}
									height={300}
									style={{ width: "auto", height: "auto" }}
									alt={item.alt}
									placeholder="blur"
								></Image>
								<section className="p-4 whitespace-normal bg-port-yellow-light text-port-yellow-ultra-dark m-0">
									<h2 className="m-0">{item.title}</h2>
									<p className="m-0 leading-9">{item.body}</p>
								</section>
							</article>
						);
					})}
				</div>
				<div className="flex flex-row gap-5 items-start px-9 lg:px-12">
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
