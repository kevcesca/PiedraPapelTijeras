import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'


const Modal = ({ onClose, children }) => {

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={handleModalClick}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;