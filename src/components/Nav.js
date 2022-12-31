import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {

  /*
    Importing the  setLibraryStatus, libraryStatus from our props and simply toggling the state back and forth from true
    to false. Using the ternanry operator to show and hide the css class that opens the nav
  */
  const openLibraryHandler = () => {
   
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button
  
        className={libraryStatus ? "library-active" : ""}
     
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
