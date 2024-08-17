import React from "react";
import styles from "./Search.module.css";
const Search = ({FontAwesomeIcon,faPlus}) => {
  return (
    <div className={styles.serchContainer}>
      <input type="search" name="" id="" placeholder="Search..." />
      <button type="button">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Search;
