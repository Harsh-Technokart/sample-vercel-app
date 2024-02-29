import React from "react";
import Geolocation from "./geolocation";
import ResultTopbar from "./resultTopbar";
import Submit from "./submit";

function Result(props: {
  hasPhoto: any;
  photoRef: any;
  closePhoto: any;
  longitude: any;
  latitude: any;
  setLongitude: any;
  setLatitude: any;
}) {
  return (
    <div className="result-parent">
      <div className={"result " + (props.hasPhoto ? "hasPhoto" : "")}>
        <ResultTopbar closePhoto={props.closePhoto} />
        <canvas ref={props.photoRef} className="photo-itself" />
        <Geolocation
          longitude={props.longitude}
          latitude={props.latitude}
          setLatitude={props.setLatitude}
          setLongitude={props.setLongitude}
        />
        <Submit closePhoto={props.closePhoto} />
      </div>
    </div>
  );
}

export default Result;
