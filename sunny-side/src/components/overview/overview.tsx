import Button from "../../components/button/button";
import Testimonial from "../testimonial/testimonial";

const Overview = () => {
  return (
    <div className="flex z[3] flex-col gap-3 m-4 lg:m-6 text-center  prose-xl  text-clamp lg:grid lg:grid-cols-2 lg:text-left">
      <div id="intro" className="flex flex-col gap-3">
        <h3 className="text-port-pink-base font-semibold">Sunny Choudhary</h3>
        <div className="my-4 lg:my-12">
          <h1 className="relative z-[1] text-port-yellow-ultra-dark font-bold my-0">
            User Interface Designer / Developer
          </h1>
          <span className="absolute w-8/12 h-1 rounded-lg right-0 left-0 mx-auto -rotate-2 bg-port-pink-base lg:mx-0"></span>
        </div>
        <p className="font-mono text-lg lg:text-3xl">
        Hey there! I'm a Front End designer and developer, and I'm all about creating awesome digital experiences. I've got a knack for blending design principles with coding wizardry to make things look good and work even better.
        </p>
        <p className="font-mono text-lg lg:text-3xl">Go ahead. Take a look around. If you like what you see, feel free to...</p>
        
        <div className="animate-bounce w-full h-50 flex justify-center items-center">
          <img className="w-20 h-auto rotate-180 m-0" src="/point.svg" alt="See below"/>
        </div>
        
        <div
          id="action-zone"
          className="flex flex-col gap-5 justify-around"
        >
          <Button text="Say Hi!" disabled={false} />
          {/* <a href="#" >My Work</a> */}
        </div>
      </div>
      <div id="portrait" className="relative flex justify-center items-center drop-shadow-2xl h-fit">
        {/* <img className="" src="https://assets.website-files.com/606ba6cb7fddaa4aa95b526d/60716ae1736035d3251ae4d8_Hero%20Image.png" alt="portrait"/> */}
        <img className="" src="/sunny_2.PNG" alt="portrait"/>
        <div className="absolute right-0 -bottom-8 lg:bottom-16">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Overview;
