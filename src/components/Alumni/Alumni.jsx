import React from "react";
import AlumniSlider from "./AlumniSlider";

const Alumni = () => {
  return (
    <>
    <div id="alumni" className="pc bg-gradient-to-b from-black to-gray-800 w-full h-auto flex flex-col items-center  text-white">
      <div className="box0">
        <h1 className="text-7xl font-title font-bold mt-28">Alumni Page!</h1>
      </div>
      <div className="box1 mx-10 mb-10 mt-20">
        <p className="text-2xl">
          We take immense pride in our vibrant and growing community of IT CLUB
          Alumni. Our alumni are the heart and soul of our organization, and
          their accomplishments are a testament to the spirit of innovation and
          excellence that defines our club.
        </p>
      </div>
      <div className="box2 mx-10 mb-10 mt-10">
        <div>
          <p className="text-2xl">
            As an IT CLUB alumnus, join a lifelong network of like-minded
            individuals in diverse tech industries such as software development,
            data science, cybersecurity, AI, and more.
          </p>
        </div>
        <div className="flex flex-col mx-28 my-1">
          <p className="text-5xl my-10 flex flex-col items-center text-white">
            Benefits of being an IT CLUB Alumnus:
          </p>
          <p className="text-2xl py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Networking Opportunities:
            </span>
            Connect with alumni, industry professionals, and current members for
            valuable connections.
          </p>
          <p className="text-2xl py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Career Growth:
            </span>
            Access top tech companies, startups, and mentoring relationships for
            professional advancement.
          </p>
          <p className="text-2xl py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Lifelong Learning:
            </span>
            Stay updated with tech trends through webinars, workshops, and
            talks.
          </p>
          <p className="text-2xl py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Mentorship and Support:
            </span>
            Guide and support current members in their journey.
          </p>
          <p className="text-2xl py-1">
            <span className=" text-3xl text-gray-500 font-bold pr-3">
              Reconnect with Memories:
            </span>
            Relive exciting moments through alumni events and gatherings.
          </p>
        </div>
      </div>
      <section id="alumniInfo" className="information">
        <div className="container mx-auto"  id='alumniS'>
          <div className="flex flex-col items-center text-center">
            <h1 className=" text-6xl before:content-alumniSlider relative before:absolute before:opacity-40 before:-top-8 before:-left-64 my-32 font-para font-bold">
              Our Alumni
            </h1>
          </div>
          <AlumniSlider/>
        </div>
        <div className="text-2xl my-5 flex justify-center items-center p-5 font-title2 font-bold text-blue-500">Swipe Right or Left for more
    </div>
      </section>
    </div>


    {/* Mobile */}
    <div id="alumniM" className="hidden mob bg-gradient-to-b from-black to-gray-800 w-full h-auto text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-title font-bold pt-10">Alumni Page!</h1>
      </div>
      <div className="box1 mx-5 mt-10">
        <p className="text-xl">
          We take immense pride in our vibrant and growing community of IT CLUB
          Alumni. Our alumni are the heart and soul of our organization, and
          their accomplishments are a testament to the spirit of innovation and
          excellence that defines our club.
        </p>
      </div>
      <div className="box2 mx-5 my-10">
        <div>
          <p className="text-xl">
            As an <span className="text-blue-600 text-2xl">IT CLUB</span> alumnus, join a lifelong network of like-minded
            individuals in diverse tech industries such as software development,
            data science, cybersecurity, AI, and more.
          </p>
        </div>
        <div className="flex flex-col my-1">
          <p className="text-3xl my-10 flex flex-col items-center text-white">
            Benefits of being our Alumnus:
          </p>
          <p className="text-lg py-1">
            <span className=" text-xl text-gray-500 font-bold pr-2">
            Networking Opportunities:
            </span>
            Connect with alumni, industry professionals, and current members for
            valuable connections.
          </p>
          <p className="text-lg py-1">
            <span className=" text-xl text-gray-500 font-bold pr-2">
              Career Growth:
            </span>
            Access top tech companies, startups, and mentoring relationships for
            professional advancement.
          </p>
          <p className="text-lg py-1">
            <span className=" text-xl text-gray-500 font-bold pr-2">
              Lifelong Learning:
            </span>
            Stay updated with tech trends through webinars, workshops, and
            talks.
          </p>
          <p className="text-lg py-1">
            <span className=" text-xl text-gray-500 font-bold pr-2">
              Mentorship and Support:
            </span>
            Guide and support current members in their journey.
          </p>
          <p className="text-lg py-1">
            <span className=" text-xl text-gray-500 font-bold pr-2">
              Reconnect with Memories:
            </span>
            Relive exciting moments through alumni events and gatherings.
          </p>
        </div>
      </div>
      <section id="alumniInfo" className="information">
        <div className="container mx-auto"  id='alumniS'>
          <div className="flex flex-col items-center text-center">
            <h1 className=" text-5xl my-10 font-para font-bold">
              Our Alumni
            </h1>
          </div>
          <div>
          <AlumniSlider/>
          </div>
          <div className="text-xl flex justify-center items-center font-title2 font-bold text-blue-500 relative bottom-[4em]">Swipe Right or Left for more
    </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default Alumni;
