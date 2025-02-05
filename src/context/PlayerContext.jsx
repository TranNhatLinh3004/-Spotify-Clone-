import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { API } from "../main";
// import { songsData } from "../assets/frontend-assets/assets";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [songsData, setSongsData] = useState([]);
  const audioRef = useRef();
  const seeBg = useRef();
  const seeBar = useRef();

  const [track, setTrack] = useState({});

  const [playStatus, setPlayStatus] = useState(false);

  const [albumData, setAlbumData] = useState([]);

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

  const getSongData = async () => {
    try {
      const response = await axios.get(`${API}/api/song/list`);
      setSongsData(response.data.songs);
      setTrack(response.data.songs[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getAlbumData = async () => {
    try {
      const response = await axios.get(`${API}/api/album/list`);
      setAlbumData(response.data.albums);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSongData();
    getAlbumData();
  }, []);
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
    audioRef.current &&
      (audioRef.current.ontimeupdate = () => {
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
      });
  }, [audioRef]);

  const playWithId = async (id) => {
    await songsData.map((item) => {
      if (item._id === id) {
        setTrack(item);
      }
    });
    await audioRef.current.play();
    setPlayStatus(true);
  };
  const previous = async () => {
    songsData.map(async (item, index) => {
      if (item._id === track._id && index > 0) {
        await setTrack(songsData[index - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  const next = async () => {
    songsData.map(async (item, index) => {
      if (item._id === track._id && index < songsData.length - 1) {
        await setTrack(songsData[index + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  const seekSong = (e) => {
    if (audioRef.current && seeBg.current) {
      // Lấy kích thước và vị trí của thanh tiến trình đầy đủ
      const rect = seeBg.current.getBoundingClientRect();

      // Xác định vị trí click so với thanh tiến trình
      const x = e.clientX - rect.left;
      const width = rect.width;

      // Tính thời gian mới tương ứng
      const newTime = (x / width) * audioRef.current.duration;

      // Cập nhật thời gian phát
      audioRef.current.currentTime = newTime;
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
    songsData,
    albumData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
