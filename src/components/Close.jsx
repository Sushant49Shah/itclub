import React,{useState} from 'react';
import Popup from "./Popup";
import {CgSearch} from "react-icons/cg";

const Close = () => {
    // Search Bar Popup and Close 
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id='close' className="flex justify-center items-center p-2">
      <div className="close flex flex-row justify-center items-center mx-2">
        <input type="text" placeholder="Search" onClick={togglePopup}/>
        <CgSearch size={30} onClick={togglePopup} className='m-2'/>
      </div>
      <button>Search</button>

      {showPopup && (
        <div className="popup-container">
          <Popup onClose={togglePopup} />
        </div>
      )}
    </div>
  );
};

export default Close;

