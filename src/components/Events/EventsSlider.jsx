import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "../component.css";

import slide_image_1 from "../../images/events/Clubinterview.jpg";
import slide_image_2 from "../../images/events/AfterClubInterview.jpg";
import slide_image_3 from "../../images/events/AtKUITMEET.jpg";
import slide_image_4 from "../../images/events/CCRCItFest.jpg";
import slide_image_5 from "../../images/events/EnthusiasticMindsAttendingWorkshop.jpg";
import slide_image_6 from "../../images/events/Farewell.jpg";
import slide_image_7 from "../../images/events/ITians.jpg";
import slide_image_8 from "../../images/events/KUITMEETvisit.jpg";
import slide_image_9 from "../../images/events/OrphanagesHome.jpg";
import slide_image_10 from "../../images/events/PrizesOfITFest.jpg";
import slide_image_11 from "../../images/events/donationToOrphanage.jpg";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const EventsSlider = () => {
  const containerStyle = {
    maxWidth: "124rem",
    padding: "4rem 1rem",
    margin: "0 auto",
  };

  const swiperContainerStyle = {
    height: "52rem",
    padding: "2rem 0",
    position: "relative",
  };

  const swiperSlideStyle = {
    width: "37rem",
    height: "42rem",
    position: "relative",
  };

  const sliderControlerStyle = {
    position: "relative",
    bottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sliderArrowStyle = {
    background: "#E9E7FA",
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    left: "42%",
    transform: "translateX(-42%)",
    filter: "drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.5))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "2rem",
  };

  const sliderButtonTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  // Ref to the Swiper instance
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleReadMore = () => {
    // const collection = document.getElementsByClassName("alumniContent");
    // for (let i = 0; i < collection.length; i++) {
    //   collection[i].innerText = 'Bla bla bla';
    // } 
    //  APPLY TW VAYO BUT SABAI MA VAYOOOOOO
  };
  return (
    <div className="eventsSlider" style={containerStyle}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={swiperContainerStyle}
        ref={swiperRef} // Assign the ref to the Swiper instance
      >
        {/* Buttons for navigating backward and forward */}
        <div className="" style={sliderControlerStyle}>
          <div className="swip-pag absolute top-[-400px] px-[2000px] left-[-950px] font-bold">
            <div
              className="swiper-button-prev slider-arrow"
              style={{ ...sliderArrowStyle, left: "30%" }}
              onClick={handlePrevClick} // Add onClick event to navigate backward
            >
              <ion-icon
                name="arrow-back-outline"
                style={sliderButtonTextStyle}
              ></ion-icon>
            </div>
            <div
              className="swiper-button-next slider-arrow"
              style={{ ...sliderArrowStyle, left: "54%" }}
              onClick={handleNextClick} // Add onClick event to navigate forward
            >
              <ion-icon
                name="arrow-forward-outline"
                style={sliderButtonTextStyle}
              ></ion-icon>
            </div>
          </div>
        </div>
        <div className="events-swiper">
          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Club Interview
            </p>
            <img src={slide_image_1} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              After Club Interview
            </p>
            <img src={slide_image_2} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              At KU IT MEET
            </p>
            <img src={slide_image_3} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              CCRC It Fest
            </p>
            <img src={slide_image_4} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Minds Attending Workshop
            </p>
            <img src={slide_image_5} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Farewell
            </p>
            <img src={slide_image_6} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              ITians
            </p>
            <img src={slide_image_7} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              KU IT MEET Visit
            </p>
            <img src={slide_image_8} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Orphanages Home
            </p>
            <img src={slide_image_9} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Prizes of ITFest
            </p>
            <img src={slide_image_10} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          <SwiperSlide style={swiperSlideStyle}>
            <p className="flex flex-col justify-center items-center text-5xl text-blue-100 font-oswald p-5">
              Donation To Orphanage
            </p>
            <img src={slide_image_11} alt="slide_image" />
            <p className="alumniContent text-2xl text-blue-200 font-kumbhsans my-8">
              Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste, ea!...
              <button className="text-[18px]" onClick={handleReadMore}>
                Read More
              </button>
            </p>
          </SwiperSlide>

          {/* Rest of the slides... */}
        </div>
      </Swiper>
    </div>
  );
};

export default EventsSlider;
