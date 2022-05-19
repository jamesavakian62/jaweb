import React from 'react';
// import 'node_modules/video-react/dist/video-react.css';
// import { Player } from 'video-react';
import Video1 from '../videos/james2.mp4';

const IntroVideo = () => {
  return (
    <>
      <div>
        <a href="/intro">Back To Website</a>
      </div>
      <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
      >
        <source
          src={Video1}
          type="video/mp4"
          alt="Introduction"
          class="responsive"
          width="600"
          height="400"
        ></source>
      </video>

      <video width="400" controls>
        <source src={Video1} type="video/mp4" class="responsive" />
        Your browser does not support HTML5 video.?
      </video>
    </>
  );
};

export default IntroVideo;
