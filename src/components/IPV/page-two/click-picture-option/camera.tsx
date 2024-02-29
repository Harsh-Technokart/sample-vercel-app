"use client";
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

function Camera(props: { videoRef: any; takePhoto: any }) {
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [cameraStatus, setCameraStatus] = useState("unavailable");
  const intervalId = useRef<any>(null);
  let messageArray = [
    "center yourself in the preview window",
    "it seems like your lens may be dirty",
    "are you sure you are in the frame?",
    "try changing the environment - look for a direct light source on your face",
  ];
  let index = 0;

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      ]);
    };

    const detectFaces = async () => {
      const video = props.videoRef.current;
      const canvas = faceapi.createCanvas(video);
      document.body.append(canvas);
      faceapi.matchDimensions(canvas, {
        width: 0,
        height: 0,
      });

      intervalId.current = setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();
        let myinterval;
        if (
          detections.length === 1 &&
          Math.floor(detections[0]?.detection.classScore * 100) > 50
        ) {
          console.log("shutter should be available");
          setMessage("");
          setCameraStatus("loading");
          myinterval = setTimeout(() => {
            setDisabled(false);
            setCameraStatus("loaded");
          }, 5000);
        } else {
          setCameraStatus("unavailable");
          if (myinterval) {
            setDisabled(true);
            clearTimeout(myinterval);
          }
          console.log("shutter should NOT be available");
          if (index === 4) {
            index = 0;
          }
          setDisabled(true);
          setMessage(messageArray[index]);
          index += 1;
        }
      }, 5000);
    };

    const setupFaceDetection = async () => {
      await loadModels();
      detectFaces();
    };

    setupFaceDetection();

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    console.log("intervalId.current", intervalId.current);
  }, [intervalId]);

  return (
    <div className="camera-parent-wrapper">
      <div className="camera-parent">
        <div
          className={
            cameraStatus === "unavailable" ? "camera" : "camera-detected"
          }
        >
          <video ref={props.videoRef} className="video" />
        </div>
        <button
          disabled={disabled}
          onClick={props.takePhoto}
          className={disabled ? "click-button-disabled" : "click-button"}
        >
          SNAP!
        </button>
      </div>
      {message ? <div className="error-message">{message}</div> : ""}
    </div>
  );
}

export default Camera;
