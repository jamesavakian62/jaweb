import Image from 'next/image';
// import styles from '../styles/Titlebar.module.css';
import React from 'react';

const Video = () => {
  return (
    <>
      <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src="/blue.mp4" />
      </video>
    </>
  );
};

export default Video;
