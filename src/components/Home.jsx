import React from "react";
import "./component.css";
import "../index.css";
import Hero from "../images/Hero.png";
import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="pc home-main flexCenter bg-gradient-to-b from-black to-gray-800 h-screen w-full text-white py-20"
      >
        <div className="home-left absolute wrapper">
          <h1 className="title static-txt animate-from-right p-7">
            Welcome <br />
            to the <br />
            <p className="dynamic-txts">
              <span className=" text-8xl font-title">IT Club </span>
            </p>
          </h1>
          <p className="content text-2xl py-16">
            The IT Club is a community of tech enthusiasts who come together to
            learn, share knowledge, and explore the fascinating world of
            technology.
          </p>

          <div className="stats flex">
            <span className="stat px-10 text-4xl">
              <h1>Likes:</h1>
              <CountUp start={1000} end={2000} duration={5} />
              <span className=" text-red-400 font-bold text-5xl">+</span>
            </span>
            <span className="stat px-10 text-4xl">
              <h1>Shares:</h1>
              <CountUp start={100} end={500} duration={5} />
              <span className=" text-red-400 font-bold text-5xl">+</span>
            </span>
            <span className="stat px-10 text-4xl">
              <h1>Follower:</h1>
              <CountUp start={10000} end={20000} duration={5} />
              <span className=" text-red-400 font-bold text-5xl">+</span>
            </span>
          </div>
        </div>

        <div className="home-right relative right-[0%]">
          <div className="">
            <img src={Hero} alt="" className="w-[500px] h-[500px]" />
          </div>
        </div>
      </div>

      {/* Mobile  */}
      <div
        id="homeM"
        className="hidden mob pt-24 bg-gradient-to-b from-black to-gray-800 h-screen w-screen text-white"
      >
        <div className="w-screen flex flex-col gap-2 p-3">
          <div className="flex flex-row justify-between items-center gap-20 pb-10">
            <div className="hero-left">
              <h1 className="animate-from-right text-3xl">
                Welcome <br />
                to the <br />
                <p className="">
                  <span className="font-title text-6xl">IT Club </span>
                </p>
              </h1>
            </div>
            <div className="hero-right">
              <img src={Hero} alt="" className="w-52" />
            </div>
          </div>
          <p className="text-xl p-3">
            The IT Club is a community of tech enthusiasts who come together to
            learn, share knowledge, and explore the fascinating world of
            technology.
          </p>

          <div className="stats flex text-2xl p-5 gap-5">
            <span className="stat">
              <h1>Likes:</h1>
              <CountUp start={1000} end={2000} duration={5} />
              <span className=" text-red-400 font-bold text-2xl">+</span>
            </span>
            <span className="stat">
              <h1>Shares:</h1>
              <CountUp start={100} end={500} duration={5} />
              <span className=" text-red-400 font-bold text-2xl">+</span>
            </span>
            <span className="stat">
              <h1>Follower:</h1>
              <CountUp start={10000} end={20000} duration={5} />
              <span className=" text-red-400 font-bold text-2xl">+</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
