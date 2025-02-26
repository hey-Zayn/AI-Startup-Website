// import React from 'react'
import Rectangle from "../../assests/Rectangle9.png";
import Visual from "../../assests/Visual.png";
import Visual2 from "../../assests/Visual2.png";
import Appw2 from "../../assests/AppW2.png";
import App from "../../assests/App.png";
const Feature = () => {
  return (
    <>
      <div className="w-full h-full px-10 py-20 bg-black">
        <div className="text-center ">
          <h1 className="text-white/90 text-3xl max-sm:text-2xl mb-4">
            Harness the power of AI, making <br className="max-sm:hidden" /> search engine optimization
            intuitive <br className="max-sm:hidden"/> and effective for all skill levels.
          </h1>
        </div>

        <div className="w-full h-full max-sm:h-full flex max-sm:flex-col gap-2 mb-6">
          <div className="w-[30%] max-sm:w-full h-[400px] flex flex-col justify-between p-10 border border-white/10 rounded-lg">
            <div>
            <img
              src={Visual}
              className="w-60 "
              alt="Visual representation"
            />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-xl">SEO goal setting</h2>
              <p className="text-white/70">
                Helps you set and achieve SEO <br className="max-sm:hidden"/> goals with guided
                assistance.
              </p>
            </div>
          </div>
          <div className="relative w-[70%] max-sm:w-full h-full flex flex-col justify-end gap-10   border border-black/50 rounded-lg overflow-hidden">
            <img src={Appw2} className="absolute w-[820px] top-10 left-10 " />
            <div
              className="w-full h-[400px] z-10 flex flex-col items-start justify-end"
              style={{
                backgroundImage: `url(${Rectangle})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-[400px] flex flex-col justify-end gap-2 z-20 px-10 py-10">
                <h2 className="text-white text-xl">SEO goal setting</h2>
                <p className="text-white/70">
                  Helps you set and achieve SEO <br className="max-sm:hidden"/> goals with guided
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="w-full h-full max-sm:h-full flex max-sm:flex-col gap-2">
          
          
          <div className="relative w-[70%] max-sm:w-full h-full flex flex-col justify-end gap-10   border border-black/50 rounded-lg overflow-hidden">
            <img src={App} className="absolute w-full -top-40 left-10 " />
            <div
              className="w-full h-[400px] z-10 flex flex-col items-start justify-end"
              style={{
                backgroundImage: `url(${Rectangle})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="h-[400px] flex flex-col justify-end gap-2 z-20 px-10 py-10">
                <h2 className="text-white text-xl">SEO goal setting</h2>
                <p className="text-white/70">
                  Helps you set and achieve SEO <br className="max-sm:hidden"/> goals with guided
                  assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[30%] max-sm:w-full h-[400px] flex flex-col justify-between p-10 border border-white/10 rounded-lg">
           <div>
           <img
              src={Visual2}
              className="w-60"
              alt="Visual representation"
            />
           </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-xl">SEO goal setting</h2>
              <p className="text-white/70">
                Helps you set and achieve SEO <br className="max-sm:hidden"/> goals with guided
                assistance.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Feature;
