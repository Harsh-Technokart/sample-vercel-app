import React from "react";
import Link from "next/link";

function SubmissionLogic(props: {
  isLoading: boolean;
  isUploaded: boolean;
  isError: boolean;
  preview: any;
  setPreview: any;
  setIsUploaded: any;
  errorMessage: any;
}) {
  return (
    <>
      {!props.isLoading && props.isUploaded && props.preview ? (
        props.isError ? (
          <div className="submit-wrapper">
            <button
              className="reupload-button"
              onClick={() => {
                props.setPreview("");
                props.setIsUploaded(false);
              }}
            >
              Reupload
            </button>
            <div className="error-message">{props.errorMessage}</div>
          </div>
        ) : (
          <Link href="../IPV/step-two">
            <div className="submit-wrapper">
              <button className="submit-button">Submit</button>
            </div>
          </Link>
        )
      ) : (
        ""
      )}
    </>
  );
}

export default SubmissionLogic;
