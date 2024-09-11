import React from 'react';
import styles from "./Contacts.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
const Contacts = ({ contact,deleteContact }) => {

  return (
    <div className={styles.container}>
      {contact.map((item) => (
        <div className={styles.contactCard} key={item.id}>
          <div className={styles.contactIcon}>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <div className={styles.contactDetail}>
            <p className={styles.contactName}>
              {item.name} <FontAwesomeIcon icon={faUser} />
            </p>
            <p className={styles.contactEmail}>
              {item.email} <FontAwesomeIcon icon={faEnvelope} />
            </p>
          </div>
          <div className={styles.contactActions}>
            <FontAwesomeIcon icon={faEdit} className={styles.actionIcon} title="Edit" />
            <FontAwesomeIcon icon={faTrash} className={styles.actionIcon} title="Delete" onClick={()=>{deleteContact(item.id)}}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
