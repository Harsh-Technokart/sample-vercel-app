import React from "react";
import UploadDiv from "./upload-div";
import PreviewDiv from "./preview-div";

function UploadAndPreview(props: {
  isUploaded: Boolean;
  isError: Boolean;
  isLoading: Boolean;
  preview: any;
  getInputProps: any;
  getRootProps: any;
  isDragActive: any;
}) {
  return (
    <div
      className={
        props.isUploaded
          ? props.isError
            ? "root-error"
            : "root-correct"
          : "root"
      }
    >
      {props.preview ? (
        <h3 className="root-title">Identity Verification</h3>
      ) : (
        <>
          <h3 className="root-title">Step 1/3</h3>
          <p className="root-subtitle-greyed">
            Please provide documents for identity verification
          </p>
        </>
      )}

      {props.preview ? (
        <PreviewDiv isLoading={props.isLoading} preview={props.preview} />
      ) : (
        <UploadDiv
          getInputProps={props.getInputProps}
          getRootProps={props.getRootProps}
          isDragActive={props.isDragActive}
        />
      )}
    </div>
  );
}

export default UploadAndPreview;
