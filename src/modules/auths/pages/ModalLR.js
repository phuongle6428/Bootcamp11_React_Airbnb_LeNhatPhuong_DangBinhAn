import React from 'react'
import { Modal } from 'react-bootstrap';
import images from "./../../../image/images.png";
import anh from "./../../../image/anh.png";
import styles from "./../styles/styles.module.css";
export default function ModalLR(props) {
  return (
    <>
      <Modal
        show
        size="lg"
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
