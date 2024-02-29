import React from "react";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

export default function UploadDiv(props: {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
}) {
  return (
    <div className="upload-div" {...props.getRootProps()}>
      <input {...props.getInputProps()} />
      <div className="id-icon-wrapper">
        <BrandingWatermarkIcon
          style={{ backgroundColor: "#acc2f4", color: "#002e96" }}
        />
      </div>
      <br />
      {props.isDragActive ? (
        <p> You can also drop files here to upload! </p>
      ) : (
        <div className="upload-div-text">
          <p className="id-title"> Government ID Card</p>
          <p className="id-subtitle">
            Upload a picture of your Government issued ID for a quick scan
          </p>
        </div>
      )}
    </div>
  );
}
