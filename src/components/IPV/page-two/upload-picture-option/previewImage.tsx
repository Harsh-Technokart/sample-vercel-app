import React from "react";

function PreviewImage(props: { preview: any }) {
  return (
    <div className="preview-container">
      <img
        src={props.preview}
        alt="Uploaded"
        style={{ maxWidth: "100%", maxHeight: "40vh" }}
      />
    </div>
  );
}

export default PreviewImage;
