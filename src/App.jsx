import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import fireBase from "./assets/firebase.png";
import ghost from "./assets/Animation - 1723891617600.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavBar from './components/Navbar/NavBar';
import Search from './components/SearchBar/Search';
import NoContact from './components/NoContact/NoContact';
import { collection, getDocs , addDoc , deleteDoc ,doc} from 'firebase/firestore';
import { db } from './config/FireBase';
import Contacts from './components/Contacts/Contacts';
import Modal from './components/Modals/Modal';

const App = () => {
  const[contact,setContact] = useState([]);
  const[isOpen,setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
    console.log("hello");
    
  }
  const onClose = () => {
    setOpen(false);
  }
  const getContact = async() => {
    try{
      const contactsRef = collection(db,'contacts');
      const contactSnapshot = await getDocs(contactsRef);
      const contactList = contactSnapshot.docs.map(doc =>{
        return{
          id:doc.id,
          ...doc.data(),
        }
      });
       console.log(contactList);
      setContact(contactList);
    }
    catch(err)
    {
      console.log(err);
      
    }
  };

  const addContact =  async (contact) => {
    try{
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef,contact); 
      getContact();
    }
    catch(err)
    {
      console.log(err);
    }
  };
  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db,"contacts",id));
      getContact();
    }
    catch(err){
      console.log(err);
      
    }
  };
  useEffect(()=>{
    getContact();
  },[]);

  return (
    <div className={styles.container}>
      <NavBar fireBase={fireBase}/>
      <Search FontAwesomeIcon={FontAwesomeIcon} faPlus={faPlus} faMagnifyingGlass={faMagnifyingGlass}  onOpen={onOpen}/>
      <Contacts contact = {contact} deleteContact={deleteContact}/>
      {/* <NoContact ghost={ghost}/> */}
      <Modal isOpen={isOpen} onClose={onClose} addContact={addContact}>HI</Modal>
    </div>
  )
}

export default App