import React from "react";
import "./video.scss";
const Video = () => {
  return (
    <div className="main_div">
      <h1 className="heading1_Video">Watch the demo</h1>

      <video
        width="550"
        height="365"
        margin-bottom="50px"
        controls
        autoPlay
        poster="https://media.istockphoto.com/photos/easy-pose-tranquil-lakeside-meditation-at-sunrise-picture-id484370054?b=1&k=20&m=484370054&s=170667a&w=0&h=YTNrzL5AXRSsQDYS0QBYQOiHGrv_WiuyC7vZ_DnygSM="
        className="random"
      >
        <source src={""} />
      </video>
    </div>
  );
};
export default Video;