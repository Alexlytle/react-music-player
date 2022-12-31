import React from "react";
// import { playAudio } from "../utilss";

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
  song
}) => {

  /*
    Since the Library song component is being mapped over this alows access to the state 
    of the component that was clicked on. For example name or id of the song. 
    With the varibale newSongs this is basicly a tab highlight feature. if the song id is the same
    as the one we currently clicked on then set then return the rest of the song data but update the active to true
    else update the active to false 
  */
  const songSelectHandler = async () => {
   
    await setCurrentSong(song);
    
    const newSongs = songs.map((song) => {
      if (song.id === id) {

        return {
          ...song,
          active: true,
        };

      } else {
 
        return {
          ...song,
          active: false,
        };

      }
    });

 
    setSongs(newSongs);

    //Play audio
    if (isPlaying) audioRef.current.play();

  };
  return (
    <div
      onClick={songSelectHandler}
     
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
