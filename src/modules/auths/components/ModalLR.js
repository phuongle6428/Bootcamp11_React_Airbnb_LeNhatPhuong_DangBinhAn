import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styles from "./../styles/styles.module.css";
export default function ModalLR(props) {
  const history = useHistory()
  const handleClose = () => {
    history.push("/")
  };
  return (
    <>
      <Modal
        show
        size="lg"
        onHide={handleClose}
        backdrop="static"
        contentClassName={styles.modalWidth}
        keyboard={false}>
        <div className="row">
          <div className={`${styles.airbnb} col-6`}>
          </div>
          <div className="col-6">
            {props.children}
          </div>
      </div>
      </Modal>
    </>
  )
}
