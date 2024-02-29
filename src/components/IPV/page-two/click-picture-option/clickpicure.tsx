"use client";
import React, { useState, useRef, useEffect } from "react";
import { closePhoto, takePhoto, getVideo } from "@/utils/click-picture";
import Backbutton from "@/utils/backbutton";
import Camera from "./camera";
import Result from "./result";
import "./clickpicture.css";

function ClickPicture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();

  const takePhotoWrapper = () => {
    takePhoto(photoRef, videoRef, setHasPhoto);
  };

  const closePhotoWrapper = () => {
    closePhoto(photoRef, setHasPhoto);
  };

  useEffect(() => {
    getVideo(videoRef);
    return () => {
      if (videoRef.current) {
        let vid = videoRef.current;
        let stream = vid.srcObject as MediaStream;
        if (stream) {
          let tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, [videoRef]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <Backbutton redirect="../step-two" />
      {domLoaded && typeof window !== "undefined" && (
        <Camera takePhoto={takePhotoWrapper} videoRef={videoRef} />
      )}
      <Result
        hasPhoto={hasPhoto}
        photoRef={photoRef}
        closePhoto={closePhotoWrapper}
        longitude={longitude}
        latitude={latitude}
        setLongitude={setLongitude}
        setLatitude={setLatitude}
      />
    </div>
  );
}

export default ClickPicture;
