import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MonitorPage() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    arrows: false
  };

  //const imgList = JSON.parse(localStorage.getItem("imgList"));

  const [imgList, setImgList] = useState(
    JSON.parse(localStorage.getItem("imgList"))
  );

  const [announcement, setAnnouncement] = useState(
    localStorage.getItem("announcement")
  );

  return (
    <div>
      <Slider {...settings}>
        {imgList !== null
          ? imgList.map((each, index) => {
              return (
                <div key={each.id}>
                  <img src={each.img} width={1920} height={1030} />
                </div>
              );
            })
          : console.log("empty imgList")}
      </Slider>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "yellow",
          color: "black",
          textAlign: "center",
          fontSize: "3rem",
          height: 70
        }}
      >
        <marquee direction="left" scrollamount="10">
          {announcement}
        </marquee>
      </div>
    </div>
  );
}

export default MonitorPage;
