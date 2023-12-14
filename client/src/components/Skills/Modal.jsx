import React, { useState } from 'react';

const Modal = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'visible' : ''}`}>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <p>This is your modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
