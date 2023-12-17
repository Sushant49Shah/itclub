// import React, { useState, useEffect } from "react";
// import AlumniData from "./AlumniInfo.json";

// // importing swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // importing req module
// import { Autoplay, Pagination } from "swiper/modules";

// const AlumniSlider = () => {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteractionChange: false,
//         }}
//         modules={[Autoplay, Pagination]}
//         className="mySwiper"
//       >
//         {AlumniData.map((item, index) => {
//           const { image, alumniName, position, contact, email } = item;
//           return (
//             <SwiperSlide key={index}>
//               <div className="swip flex flex-col gap-12">
//                 <div className="alumni-img">
//                   <img
//                     src={image}
//                     className=""
//                   />
//                 </div>
//                 <div className="flex flex-col max-w-3xl">
//                   <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
//                     {alumniName}
//                   </p>
//                   <p className="post text-3xl">{position}</p>
//                   <p className="numb text-2xl">{contact}</p>
//                   <p className="Aemail text-2xl">{email}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// };

// export default AlumniSlider;


import React from "react";

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// importing req module
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../../images/Alumni/aananda_lamichane.jpeg"
import image2 from "../../images/Alumni/sagar_khanal.png"
// import image3 from "../../images/Alumni/alumni.png"
import image4 from "../../images/Alumni/sabin_basyal.png"
import image5 from "../../images/Alumni/rohit_rokaya.png"
import image6 from "../../images/Alumni/sushant_shah.jpg"
import image7 from "../../images/Alumni/rohan_shah.jpg"
import image8 from "../../images/Alumni/bhupendra_pandey.jpg"
import image9 from "../../images/Alumni/prince_parajuli.png"
import image10 from "../../images/Alumni/shekhar_shrestha.png"
import image11 from "../../images/Alumni/rivash_shrestha.jpg"
import image12 from "../../images/Alumni/niharika_acharya.png"
import image13 from "../../images/Alumni/yunisha_ghimire.jpg"
import image14 from "../../images/Alumni/krishna_jha.png"
import image15 from "../../images/Alumni/aanan_sitoula.jpg"
import image16 from "../../images/Alumni/utshav_bhattarai.jpg"
import image17 from "../../images/Alumni/nikesh_basnet.jpg"

const AlumniSlider = () => {
  return (
    <div className="alumniSwiper">
      <Swiper id="alumni-swiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteractionChange: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image1}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl leading-3">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-2 font-title">
                  Ananda Lamichhane
                  </p>
                  <p className="post text-3xl">Club Patron </p>
                  <p className="numb text-2xl"> </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image2}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Sagar Khanal
                  </p>
                  <p className="post text-3xl">President</p>
                  <p className="numb text-2xl"> 9849589647</p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            {/* <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image3}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Binu Nemkul
                  </p>
                  <p className="post text-3xl"> Vice President</p>
                  <p className="numb text-2xl">9813922878</p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide> */}

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image4}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Sabin Bashyal
                  </p>
                  <p className="post text-3xl"> Vice President</p>
                  <p className="numb text-2xl">9847369691 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image5}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Rohit Rokaya
                  </p>
                  <p className="post text-3xl">IT Head </p>
                  <p className="numb text-2xl">9849710385 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image6}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Sushant Shah
                  </p>
                  <p className="post text-3xl">Executive Member </p>
                  <p className="numb text-2xl">9741678294 </p>
                  <p className="Aemail text-2xl">sushantshah0409@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image7}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Rohan Shah
                  </p>
                  <p className="post text-3xl">Executive Member </p>
                  <p className="numb text-2xl">9765751137 </p>
                  <p className="Aemail text-2xl">rohankshah345@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image8}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Bhupendra Pandey
                  </p>
                  <p className="post text-3xl">IT Head </p>
                  <p className="numb text-2xl">9765437370 </p>
                  <p className="Aemail text-2xl">bhupenrapandey1990@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image9}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Prince Parajuli
                  </p>
                  <p className="post text-3xl">Program Incharge </p>
                  <p className="numb text-2xl">9869935123 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image10}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Shekhar Shrestha
                  </p>
                  <p className="post text-3xl">Secretary </p>
                  <p className="numb text-2xl">9843939051 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image11}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Rivash Shrestha
                  </p>
                  <p className="post text-3xl">Sponsorship Director </p>
                  <p className="numb text-2xl">9861293040 </p>
                  <p className="Aemail text-2xl">rivashshrestha5@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image12}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Niharika Acharya
                  </p>
                  <p className="post text-3xl">Treasurer </p>
                  <p className="numb text-2xl">9801860840 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image13}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Yunisha Ghimire
                  </p>
                  <p className="post text-3xl">Advisor </p>
                  <p className="numb text-2xl">9813327429 </p>
                  <p className="Aemail text-2xl">ghimire.yunisha20@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image14}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Krishna Jha
                  </p>
                  <p className="post text-3xl">Advisor </p>
                  <p className="numb text-2xl">9746345360 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image15}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Aanan Sitaula
                  </p>
                  <p className="post text-3xl">Executive Member </p>
                  <p className="numb text-2xl">9744333456 </p>
                  <p className="Aemail text-2xl"> </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image16}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Utsav Bhattarai
                  </p>
                  <p className="post text-3xl">Executive Member </p>
                  <p className="numb text-2xl">9804936105 </p>
                  <p className="Aemail text-2xl">bhattaraiutsav420@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="swip flex flex-col gap-12">
                <div className="alumni-img">
                  <img
                    src={image17}
                    className=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <p className="name text-6xl text-[#CFECEC] font-bold my-5 font-title">
                  Nikesh Basnet
                  </p>
                  <p className="post text-3xl">Executive Member </p>
                  <p className="numb text-2xl">9749231129 </p>
                  <p className="Aemail text-2xl">basnetnikesh13@gmail.com </p>
                </div>
              </div>
            </SwiperSlide>


      </Swiper>
      
    </div>
  );
};

export default AlumniSlider;
