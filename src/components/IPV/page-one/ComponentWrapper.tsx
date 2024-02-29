"use client";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import UploadAndPreview from "@/components/IPV/page-one/UploadAndPreview";
import SubmissionLogic from "@/components/IPV/page-one/SubmissionLogic";

function ComponentWrapper() {
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
              "Error Error Error Error Error Error (reupload to fiↄc)"
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
  }, [acceptedFiles, preview, uploadOne]);

  return (
    <>
      <UploadAndPreview
        isUploaded={isUploaded}
        isError={isError}
        isLoading={isLoading}
        preview={preview}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragActive}
      />
      <SubmissionLogic
        isLoading={isLoading}
        isUploaded={isUploaded}
        isError={isError}
        preview={preview}
        setPreview={setPreview}
        setIsUploaded={setIsUploaded}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default ComponentWrapper;
