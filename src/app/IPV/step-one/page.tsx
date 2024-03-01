"use client";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import "./step-one.css";
import UploadDiv from "@/components/IPV/page-one/upload-div";

function StepOne() {
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadOne, setUploadOne] = useState(true);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setIsLoading(true);
      setPreview(objectUrl);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsUploaded(true);
          if (uploadOne) {
            setIsError(true);
            setErrorMessage(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore sed explicabo illo officiis sit aliquid corrupti nihil quae laborum temporibus eius, quisquam repellendus doloribus quidem? Impedit ducimus odit dolore."
            );
            setUploadOne(false);
          } else {
            setIsError(false);
          }
        }, 1000);
      }, 10000);
    }
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [acceptedFiles]);

  useEffect(() => {
    console.log("loading status:", isLoading);
    console.log("");
  }, [uploadOne, isError, isUploaded, isLoading]);

  return (
    <div className="parent">
      <Link href="../">
        <ArrowBackIosIcon className="back-button" />
      </Link>
      <div
        className={
          isUploaded ? (isError ? "root-error" : "root-correct") : "root"
        }
      >
        {preview ? (
          <h3 className="root-title">Identity Verification</h3>
        ) : (
          <>
            <h3 className="root-title">Step 1/3</h3>
            <p className="root-subtitle-greyed">
              Please provide documents for identity verification
            </p>
          </>
        )}

        {preview ? (
          <div className={isLoading ? "preview-div-loading" : "preview-div"}>
            {isLoading ? (
              <div className="preview-image-loading">
                <img
                  src={preview}
                  alt="Uploaded Document"
                  className="preview-image"
                />
              </div>
            ) : (
              <img
                src={preview}
                alt="Uploaded Document"
                className="preview-image"
              />
            )}
          </div>
        ) : (
          <UploadDiv
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            isDragActive={isDragActive}
          />
        )}
      </div>
      {!isLoading && isUploaded && preview ? (
        isError ? (
          <div className="submit-wrapper">
            <button
              className="reupload-button"
              onClick={() => {
                setPreview("");
                setIsUploaded(false);
              }}
            >
              Reupload
            </button>
            <div className="error-message">{errorMessage}</div>
          </div>
        ) : (
          <div className="submit-wrapper">
            <Link href="../IPV/step-two">
              <button className="submit-button">Submit</button>
            </Link>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default StepOne;
