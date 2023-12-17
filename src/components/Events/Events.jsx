import React from "react";
import EventsSlider from "./EventsSlider";

const Events = () => {
  return (
    <>
      <div
        id="events"
        className="pc bg-gradient-to-b from-gray-800 to-black h-auto w-full py-5 text-white "
      >
        <div className="">
          <h1 className="text-7xl font-title font-bold mt-28 mb-10 flex justify-center items-center">
            Events
          </h1>
          <p className="text-2xl flex flex-col justify-center items-center">
            Eventful Moments: A Snapshot of Activities
          </p>
          <EventsSlider />
        </div>
      </div>

      {/* Mobile  */}
      <div
        id="eventsM"
        className="hidden mob bg-gradient-to-b from-gray-800 to-black h-auto w-full p-5 text-white "
      >
        <div className="">
          <h1 className="text-5xl font-title font-bold mb-5 flex justify-center items-center">
            Events
          </h1>
          <p className="text-2xl">
            Eventful Moments: A Snapshot of Activities
          </p>
          <EventsSlider />
        </div>
        <div className="text-xl my-2 flex justify-center items-center p-5 font-title2 font-bold text-blue-500">Swipe Right or Left for more</div>
    </div>
    </>
  );
};

export default Events;
