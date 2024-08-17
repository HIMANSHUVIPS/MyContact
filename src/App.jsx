import React from 'react';
import styles from "./App.module.css";
import fireBase from "./assets/firebase.png";
import ghost from "./assets/Animation - 1723891617600.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from './components/Navbar/NavBar';
import Search from './components/SearchBar/Search';
import NoContact from './components/NoContact/NoContact';
const App = () => {
  return (
    <div className={styles.container}>
      <NavBar fireBase={fireBase}/>
      <Search FontAwesomeIcon={FontAwesomeIcon} faPlus={faPlus}/>
      <NoContact ghost={ghost}/>
    </div>
  )
}

export default App