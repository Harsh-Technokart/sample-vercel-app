import React from "react";
import Link from "next/link";

function PreviewSubmitButtons(props: { setPreview: any }) {
  return (
    <div className="submit-buttons">
      <button
        className="retake-button"
        onClick={() => {
          props.setPreview("");
        }}
      >
        Retake
      </button>
      <Link href="">
        <button
          className="submit-button"
          onClick={() => {
            console.log("the photo should be ideally submitted");
          }}
        >
          Submit
        </button>
      </Link>
    </div>
  );
}

export default PreviewSubmitButtons;
