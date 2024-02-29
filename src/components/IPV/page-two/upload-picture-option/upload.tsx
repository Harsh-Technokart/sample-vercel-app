import Backbutton from "@/utils/backbutton";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Upload(props: { getInputProps: any; isDragActive: boolean }) {
  return (
    <div>
      <div className="upload-card">
        <input {...props.getInputProps()} />
        <CloudUploadIcon style={{ fontSize: "75px" }} />
        <br />
        {props.isDragActive ? (
          <p> You can also drop files here to upload! </p>
        ) : (
          <p> Upload Files</p>
        )}
      </div>
    </div>
  );
}

export default Upload;
