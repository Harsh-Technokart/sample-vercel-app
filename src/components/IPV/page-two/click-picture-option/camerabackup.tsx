"use client";
import React, { useEffect } from "react";
import * as faceapi from "face-api.js";

function Camera(props: { videoRef: any; takePhoto: any }) {
  useEffect(() => {
    if (props.videoRef) {
      console.log("tryna load the model");
      async () => {
        await loadModels().then(() => {
          console.log("model loaded");
        });
      };
    }
  }, []);

  const loadModels = async () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then((res: any) => {
      console.log("think the model just loaded", res);
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(
          props.videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceExpressions();
      console.log("faces WERE detected:", detections);
      props.videoRef.current.innerHtml = faceapi.createCanvasFromMedia(
        props.videoRef.current
      );
      faceapi.matchDimensions(props.videoRef.current, {
        width: 940,
        height: 650,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });

      faceapi.draw.drawDetections(props.videoRef.current, resized);
      faceapi.draw.drawFaceLandmarks(props.videoRef.current, resized);
      faceapi.draw.drawFaceExpressions(props.videoRef.current, resized);
    }, 1000);
  };

  return (
    <div className="camera-parent">
      <div className="camera">
        <video ref={props.videoRef} className="video" />
      </div>
      <button onClick={props.takePhoto} className="click-button">
        SNAP!
      </button>
    </div>
  );
}

export default Camera;
