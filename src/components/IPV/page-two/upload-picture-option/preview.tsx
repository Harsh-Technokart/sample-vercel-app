import React from "react";
import PreviewImage from "./previewImage";
import Geolocation from "./geolocation";
import PreviewSubmitButtons from "./preview-submit-buttons";

function Preview(props: { preview: any; setPreview: any }) {
  return (
    <>
      <PreviewImage preview={props.preview} />
      <Geolocation />
      <PreviewSubmitButtons setPreview={props.setPreview} />
    </>
  );
}

export default Preview;
