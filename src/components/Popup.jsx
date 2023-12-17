import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <input type="text" placeholder="Search"/>
        <button onClick={onClose}>Search</button>
      </div>
    </div>
  );
};

export default Popup;
