import heroBg from "../../assests/herobg.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import App from "../../assests/App.png";
const Hero = () => {
  return (
    <>
      <div className="w-full h-[1165px] max-sm:h-screen bg-black">
        <div
          className="w-full h-full flex flex-col justify-center items-center overflow-hidden pt-50 max-sm:pt-10 "
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="h-full flex flex-col justify-center items-center gap-1  ">
            <div className="bg-black px-4 py-2 border border-white/40 rounded-full flex gap-1  ">
              <Badge className="bg-purple-500 text-black font-bold rounded-full ">
                New
              </Badge>
              <h4 className="text-purple-600 text-bold">
                Latest integration just arrived
              </h4>
            </div>
            <h1 className="text-white text-8xl max-sm:text-5xl  text-center font-semibold mb-4 max-sm:mt-2 max-sm:mb-2">
              Boost your <br />
              <span className="bg-gradient-to-t from-[#B372CF] to-white text-transparent bg-clip-text">
                ranking with Ai.
              </span>
            </h1>
            <h3 className="text-white text-center text-2xl max-sm:text-xl mb-4">
              Elevate your site’s visibility effortlessly with AI, where <br className="max-sm:hidden"/>
              smart technology meets user-friendly SEO tools.
            </h3>
            <div className="p-1 border-2 border-white/20 rounded-xl cursor-pointer">
              <Button className="bg-white font-bold cursor-pointer">
                Start for free
              </Button>
            </div>
          </div>

          <div className="w-full flex justify-center items-center bg-gradient-to-b from-transparent via-transparent to-black from-50% via-50% to-100%">
            <img src={App} alt="App" className="w-full h-full " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
