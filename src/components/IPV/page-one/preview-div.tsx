import React from "react";
import Image from "next/image";

function PreviewDiv(props: { isLoading: Boolean; preview: string }) {
  return (
    <div className={props.isLoading ? "preview-div-loading" : "preview-div"}>
      {props.isLoading ? (
        <div className="preview-image-loading">
          <Image
            src={props.preview}
            alt="Uploaded Document"
            className="preview-image"
            width={300} // Set the width of the image
            height={300} // Set the height of the image
            // layout="responsive" // Set layout to responsive
            style={{ objectFit: "contain" }}
          />
        </div>
      ) : (
        <Image
          src={props.preview}
          alt="Uploaded Document"
          className="preview-image"
          layout="responsive" // Set layout to responsive
          width={300} // Set the width of the image
          height={300} // Set the height of the image
          style={{ objectFit: "contain" }}
        />
      )}
    </div>
  );
}

export default PreviewDiv;
