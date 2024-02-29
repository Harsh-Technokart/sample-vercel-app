import React from "react";

function PreviewDiv(props: { isLoading: Boolean; preview: string }) {
  return (
    <div className={props.isLoading ? "preview-div-loading" : "preview-div"}>
      {props.isLoading ? (
        <div className="preview-image-loading">
          <img
            src={props.preview}
            alt="Uploaded Document"
            className="preview-image"
          />
        </div>
      ) : (
        <img
          src={props.preview}
          alt="Uploaded Document"
          className="preview-image"
        />
      )}
    </div>
  );
}

export default PreviewDiv;
