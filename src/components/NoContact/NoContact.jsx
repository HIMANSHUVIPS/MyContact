import React from "react";
import styles from "./NoContact.module.css";
const NoContact = ({ghost}) => {
  return (
    <div className={styles.emptyContainer}>
      <img src={ghost} alt="" srcset="" />
    </div>
  );
};

export default NoContact;
