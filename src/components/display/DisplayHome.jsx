import React, { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
// import { albumsData } from "../../assets/frontend-assets/assets";
import { songsData } from "../../assets/frontend-assets/assets";
import AlbumItem from "../albumItem/AlbumItem";
import SongItem from "../songItem/SongItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { PlayerContext } from "../../context/PlayerContext";
function DisplayHome() {
  const { playWithId, songsData, albumData } = useContext(PlayerContext);

  const [isHovered, setIsHovered] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6, // Hiển thị 3 album cùng lúc
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Màn hình nhỏ hơn 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  let sliderRef = null;
  return (
    <>
      <Navbar />

      <div
        className="mb-4 pt-24 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>

        {/* Nút Prev */}
        {isHovered && (
          <button
            className="absolute -left-2 top-[60%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.slickPrev()}
          >
            <BiChevronLeft />
          </button>
        )}

        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {albumData.map((album) => (
            <AlbumItem key={album._id} {...album} />
          ))}
        </Slider>

        {/* Nút Next */}
        {isHovered && (
          <button
            className="absolute -right-2 top-[60%] transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.slickNext()}
          >
            <BiChevronRight />
          </button>
        )}
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song) => (
            <SongItem key={song._id} {...song} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
