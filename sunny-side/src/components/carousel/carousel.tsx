"use client";
const Carousel = () => {
    return (
       <section className="w-full bg-port-yellow-ultra-light py-12 prose-xl">
            <div className=" flex flex-col gap-8">
                <h2 className="relative font-notosans">Carousel <span className="text-underliner">Title</span></h2>
                <div className="">Carousel content</div>
                <div className="lex flex-col gap-5 items-start h-10">
                    <a className="rotate-90 ">
                        <img className="w-32 h-auto" src="https://assets.website-files.com/60cb4bd708d6339998f073d0/60cb58c220a93462da33eab7_arrow-right.svg" alt="Go Left"></img>
                    </a>
                    <a className=" w-12 h-auto">
                    <img src="https://assets.website-files.com/60cb4bd708d6339998f073d0/60cb58c220a93462da33eab7_arrow-right.svg" alt="Go Right"></img>
                    </a>
                </div>
            </div>
       </section>
    )
}

export default Carousel;