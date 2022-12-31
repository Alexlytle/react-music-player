import React from "react";


/*
  This is showing the information about the song.
  We passed down the currentsong and isplaying values as props from our main app
  If the song is playing we add a class name of rotate song which spins the image

*/
const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "rotateSong" : ""}
        src={currentSong.cover}
        alt=""
      />

      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
