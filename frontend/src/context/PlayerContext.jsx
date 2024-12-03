import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seeBg = useRef();
  const seeBar = useRef();

  const [track, setTrack] = useState(songsData[0]);

  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
  });
  const togglePlayPause = () => {
    if (playStatus) {
      audioRef.current.pause(); // Dừng nhạc nếu đang phát
      setPlayStatus(false); // Cập nhật trạng thái
    } else {
      audioRef.current.play(); // Phát nhạc nếu đang dừng
      setPlayStatus(true); // Cập nhật trạng thái
    }
  };

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      seeBar.current.width =
        Math.floor(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        ) + "%";
      setTime({
        currentTime: {
          seconds: Math.floor(audioRef.current.currentTime % 60),
          minutes: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          seconds: Math.floor(audioRef.current.duration % 60), // Corrected this part
          minutes: Math.floor(audioRef.current.duration / 60),
        },
      });
    };
  }, [audioRef]);

  // const play = () => {
  //     audioRef.current.play();
  //     setPlayStatus(true);
  // }

  // const pause = () => {
  //     audioRef.current.pause();
  //     setPlayStatus(false);
  // }

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    if (audioRef.current && seeBar.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seeBar.current.offsetWidth) *
        audioRef.current.duration;
    }
  };

  const contextValue = {
    seekSong,
    playWithId,
    previous,
    next,
    audioRef,
    seeBg,
    seeBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    togglePlayPause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
