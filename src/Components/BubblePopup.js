import React from 'react';
import Modal from 'react-modal';
import './BubblePopup.css';

Modal.setAppElement('#root');

export const ImagePopup = ({ imageUrl, onClose }) => {
    return (
      <div className="image-popup">
        <div className="bubble">
          <img href={imageUrl} src={imageUrl} alt="Popup" />
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };