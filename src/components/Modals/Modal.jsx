import React from "react";
import styles from "./Modal.module.css";
import { Field,Form,Formik } from "formik"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/FireBase';
const Modal = ({ isOpen, onClose , addContact }) => {
 
  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <button className={styles.closeButton} onClick={onClose}>
                &times;
              </button>
              <h2 className={styles.modalHeader}>Add Customer Details</h2>
              <Formik
              initialValues={{
                name:"",
                email:"",
              }}
              onSubmit={(values)=>{
                console.log(values);
                addContact(values);
                onClose();

              }}
              >
              <Form className={styles.modalForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className={styles.actions}>
                  <button type="submit" className={styles.submitButton}>
                    Add Customer
                  </button>
                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
              </Formik>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
