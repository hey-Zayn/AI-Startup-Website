// import React from 'react'
import client from "../../assests/clients.png";
import Testimonial from "../../assests/Testimonial.png";
import clients from "../../assests/clients.png";
import avatar from "../../assests/avatar.png";

const Client = () => {
  return (
    <>
      <div className="w-full h-screen bg-black pt-10">
        <div className="w-full h-[40%] text-center ">
          <h1 className="text-white text-6xl font-semi-bold">Our Clients</h1>
          <h3 className="text-white/50">
            Hear firsthand how our solutions have{" "}
            <br className="max-sm:hidden" /> boosted online success for users
            like you.
          </h3>
        </div>
        <div
          className="w-full h-[60%]"
          style={{
            backgroundImage: `url(${client})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${Testimonial})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${clients})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={avatar} alt="" />
            </div>
            <div>
              <h1 className="text-white">HJello</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
