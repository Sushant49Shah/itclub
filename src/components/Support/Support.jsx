import React, { useState } from "react";
import img1 from "../../images/Alumni/rohit_rokaya.png";
import img2 from "../../images/Alumni/sushant_shah.jpg";
import img3 from "../../images/Alumni/rohan_shah.jpg";
import img4 from "../../images/Alumni/sagar_khanal.png";
import img5 from "../../images/Alumni/sabin_basyal.png";
import img6 from "../../images/Alumni/bhupendra_pandey.jpg";

import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";

const Support = () => {
  const [copyTextGmail, setCopyTextGmail] = useState(
    "ccrcitclub2077@gmail.com"
  );
  const [copiedGamil, setCopiedGamil] = useState(false);
  const handleCopyClickGmail = () => {
    navigator.clipboard
      .writeText(copyTextGmail)
      .then(() => {
        setCopiedGamil(true);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };
  const [copyTextCont, setCopyTextCont] = useState("+977-9841414141");
  const [copiedCont, setCopiedCont] = useState(false);
  const handleCopyClickCont = () => {
    navigator.clipboard
      .writeText(copyTextCont)
      .then(() => {
        setCopiedCont(true);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };

  const [fromsMsg, setFromsMsg] = useState(false);
  const handleSendMsg = () => {
    setFromsMsg(!fromsMsg);
    if (fromsMsg == true) {
      document.getElementById("msg-forms").innerText =
        "Your message is sent. Thank you!"; //Wanted to make the reverse button but cant make
    }
  }; // Make these! Means style it, Just written only ryt now!
  return (
    <div>
      <div
        id="support"
        className="pc w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white pt-12"
      >
        <h1 className="text-7xl font-title font-bold text-white flex flex-col justify-center items-center p-10">
          Support Page!
        </h1>
        <div className="get-intouch">
          <div className="text-5xl p-4 mx-20 mt-8 titlekumbh">
            <h1>Get In Touch with:</h1>
          </div>
          <div className="support flex flex-col justify-center items-center ">
            <h1 className="text-5xl p-5 font-oswald">
              Our Teams are here to help
            </h1>
            <div className="members">
              <div className="frame1 p-2 my-4">
                <div className="flex justify-center items-center p-5 font-title2 text-5xl text-[#94a8ac] font-bold ">
                  <h1>Technical Support</h1>
                </div>
                <div className="content flex flex-row gap-24 p-1">
                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Rohit Rokya</h2>
                    </a>
                    <img src={img1} alt="" className="w-32 rounded-full" />
                    <span>IT Head</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/rohitrokaaya" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img2} alt="" className="w-32 rounded-full" />
                    <span>Executive Member</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/sushant.shah.313" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Rohan Shah</h2>
                    </a>
                    <img src={img3} alt="" className="w-32 rounded-full" />
                    <span>Executive Member</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/rohanbirbikramshah" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame2  p-2 m-5">
                <div className="flex justify-center items-center p-5 font-title2 text-5xl text-[#94a8ac] font-bold ">
                  <h1>Other Support</h1>
                </div>
                <div className="content flex flex-row gap-24 p-10">
                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sagar Khanal</h2>
                    </a>
                    <img src={img4} alt="" className="w-32 rounded-full" />
                    <span>President</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/profile.php?id=100056865650041" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sabin Basyal</h2>
                    </a>
                    <img src={img5} alt="" className="w-32 rounded-full" />
                    <span>Vice President</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/profile.php?id=100081209059919" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Bhupendra Pandey</h2>
                    </a>
                    <img src={img6} alt="" className="w-32 rounded-full" />
                    <span>Webmaster</span>
                    <div className="sociallinks flex flex-col p-5 gap-3">
                      <a href="https://www.facebook.com/awm.fan.5" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" text-5xl mt-5 flex justify-center items-center font-title2 ">
          Any Queries?
        </h1>
        <div className="contactUs w-full h-auto flex flex-row justify-between p-10">
          <div className="left w-[30%] p-5 flex flex-col justify-center">
            <div className="flex justify-center items-center text-xl my-10 gap-3">
              Click to copy <AiFillCaretDown />
            </div>
            <div className="gmail flex flex-col">
              <div
                onClick={handleCopyClickGmail}
                className="flex flex-row items-center p-3 gap-5 hover:text-[#6AD053] cursor-pointer"
              >
                <SiGmail size={50} /> <span>Gmail</span>
                <p>{copyTextGmail}</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span>{copiedGamil ? "CopiedGamil!" : ""}</span>
              </div>
            </div>
            <div className="contactNum flex flex-col">
              <div
                onClick={handleCopyClickCont}
                className="flex items-center p-3 gap-5 hover:text-[#4285f4] cursor-pointer"
              >
                <BiSolidPhoneCall size={50} /> <span>Call Us</span>
                <p>{copyTextCont}</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span>{copiedCont ? "CopiedNumber!" : ""}</span>
              </div>
            </div>
          </div>

          <div className="right w-[70%] p-2">
            <div className="container">
              <h1 className=" text-3xl text-blue-300 font-para p-4">
                Send Us Message:{" "}
              </h1>
              <div
                id="msg-forms"
                className="flex flex-col p-3 gap-3 text-[18px]"
              >
                <div className="mem-name flex flex-row items-center gap-3">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" />
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" />
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message">
                  Hello there!,
                </textarea>
                <div className="button">
                  <button
                    className="border-2 rounded-xl p-3 bg-[#20AD96]"
                    onClick={handleSendMsg}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile  */}

      <div
        id="supportM"
        className="hidden mob w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white"
      >
        <h1 className="text-5xl font-title font-bold text-white flex flex-col justify-center items-center pt-8">
          Support Page!
        </h1>
        <div className="get-intouch">
          <div className="mx-5 mt-6 titlekumbhM">
            <h1>Get In Touch with:</h1>
          </div>
          <div className="support flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-oswald">
              Our Teams are here to help
            </h1>
            <div className="members">
              <div className="frame1 p-2 my-4">
                <div className="flex justify-center items-center p-5 font-title2 text-4xl text-[#94a8ac] font-bold ">
                  <h1>Technical Support</h1>
                </div>
                <div className="content flex flex-col gap-2 p-1">
                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Rohit Rokya</h2>
                    </a>
                    <img src={img1} alt="" className="w-32 rounded-full" />
                    <span>IT Head</span>
                    <div className="sociallinks flex flex-row p-5 gap-4">
                      <a href="https://www.facebook.com/rohitrokaaya" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-1 p-2 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sushant Shah</h2>
                    </a>
                    <img src={img2} alt="" className="w-32 rounded-full" />
                    <span>Executive Member</span>
                    <div className="sociallinks flex flex-row p-5 gap-5">
                      <a href="https://www.facebook.com/sushant.shah.313" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Rohan Shah</h2>
                    </a>
                    <img src={img3} alt="" className="w-32 rounded-full" />
                    <span>Executive Member</span>
                    <div className="sociallinks flex flex-row p-5 gap-5">
                      <a href="https://www.facebook.com/rohanbirbikramshah" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame2  p-2 m-5">
                <div className="flex justify-center items-center p-5 font-title2 text-5xl text-[#94a8ac] font-bold ">
                  <h1>Other Support</h1>
                </div>
                <div className="content flex flex-col gap-2 p-1">
                  <div className="per gap-2 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sagar Khanal</h2>
                    </a>
                    <img src={img4} alt="" className="w-32 rounded-full" />
                    <span>President</span>
                    <div className="sociallinks flex flex-row p-5 gap-5">
                      <a href="https://www.facebook.com/profile.php?id=100056865650041" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Sabin Basyal</h2>
                    </a>
                    <img src={img5} alt="" className="w-32 rounded-full" />
                    <span>Vice President</span>
                    <div className="sociallinks flex flex-row p-5 gap-5">
                      <a href="https://www.facebook.com/profile.php?id=100081209059919" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="per  gap-3 p-10 flex flex-col items-center ">
                    <a href="#alumniS" className="text-2xl">
                      <h2>Bhupendra Pandey</h2>
                    </a>
                    <img src={img6} alt="" className="w-32 rounded-full" />
                    <span>Webmaster</span>
                    <div className="sociallinks flex flex-row p-5 gap-5">
                      <a href="https://www.facebook.com/awm.fan.5" target="_blank">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-blue-500 duration-200">
                          <FaFacebook size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Facebook
                          </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#C13584] duration-200">
                          <AiFillInstagram size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Instagram
                          </span>
                        </div>
                      </a>
                      <a href="mailto:ccrcitclub2077@gmail.com">
                        <div className="flex flex-row gap-1 cursor-pointer hover:text-[#4285f4] duration-200">
                          <SiGmail size={30} />
                          <span className="flex flex-row justify-center items-center">
                            Gmail
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" text-3xl mt-3 flex justify-center items-center font-title2 ">
          Any Queries?
        </h1>
        <div className="contactUs w-full h-auto flex flex-col justify-between p-10">
          <div className="left flex flex-col justify-center">
            <div className="flex justify-center items-center text-xl my-1 gap-3">
              Click below to copy <AiFillCaretDown />
            </div>
            <div className="gmail flex flex-col">
              <div
                onClick={handleCopyClickGmail}
                className="flex flex-row items-center p-2 gap-5 hover:text-[#6AD053] cursor-pointer"
              >
                <span>Gmail:</span>
                <p>{copyTextGmail}</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span>{copiedGamil ? "CopiedGamil!" : ""}</span>
              </div>
            </div>
            <div className="contactNum flex flex-col">
              <div
                onClick={handleCopyClickCont}
                className="flex items-center p-2 gap-5 hover:text-[#4285f4] cursor-pointer"
              >
                <span>Call Us:</span>
                <p>{copyTextCont}</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <span>{copiedCont ? "CopiedNumber!" : ""}</span>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="container">
              <h1 className=" text-2xl text-blue-300 font-para font-bold p-4">
                Send Us Message:{" "}
              </h1>
              <div
                id="msg-formsM"
                className="flex flex-col gap-3 text-[16px]"
              >
                <div className="mem-name flex flex-col gap-1">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" placeholder="First name" />
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" placeholder="Last name" />
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                <label htmlFor="messageM">Message</label>
                <textarea type="text" id="messageM">
                  Hello there!,
                </textarea>
                <div className="button flex justify-center items-center">
                  <button
                    className="border-2 rounded-xl p-3 bg-[#20AD96]"
                    onClick={handleSendMsg}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
