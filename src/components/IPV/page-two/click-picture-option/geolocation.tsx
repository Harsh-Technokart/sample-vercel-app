"use client";
import React, { useEffect, useState } from "react";

function Geolocation(props: {
  longitude: number | undefined;
  setLongitude: any;
  latitude: number | undefined;
  setLatitude: any;
}) {
  const [status, setStatus] = useState("Unenabled Location");

  const geolocation = () => {
    if (!navigator.geolocation) {
      setStatus("Unenabled Location");
    } else {
      setStatus("Waiting for permission...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          props.setLongitude(position.coords.longitude);
          props.setLatitude(position.coords.latitude);
          setStatus("Location loaded");
        },
        () => {
          setStatus("Permission denied");
        }
      );
    }
  };

  useEffect(() => {
    geolocation();
  }, []);

  if (status === "Unenabled Location") {
    return <div>Allow Location Tracking to move ahead</div>;
  } else if (status === "Waiting for permission...") {
    return <div>Waiting for permission...</div>;
  } else if (status === "Permission denied") {
    return <div>Permission denied. Enable location services to proceed.</div>;
  } else if (
    status === "Location loaded" &&
    props.longitude &&
    props.latitude
  ) {
    return (
      <div className="geolocation-container">
        <div className="geolocation-logo">𝕏</div>
        <div className="geolocation-text">
          <p className="geolocation-primary-text">Geo location</p>
          <p className="geolocation-secondary-text">
            latitude: {props.latitude},<br /> longitude: {props.longitude}
          </p>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default Geolocation;
