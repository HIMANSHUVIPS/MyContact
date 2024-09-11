import React from "react";
import styles from "./Search.module.css";
const Search = ({FontAwesomeIcon,faPlus,faMagnifyingGlass,onOpen}) => {
  return (
    <div className={styles.serchContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
      <input type="search" name="" id="" placeholder="Search..." className={styles.input}/>
      <button type="button" onClick={onOpen}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Search;
