import React from "react";
import Popup from "reactjs-popup";
import Popups from './Popsupmap';
import '../cssfiles/mapPopup.css';
export default PopupButton => (
    <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
    >
        <Popups />
    </Popup>
);