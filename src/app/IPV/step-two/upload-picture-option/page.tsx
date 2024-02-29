"use client";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Backbutton from "@/utils/backbutton";
import Preview from "@/components/IPV/page-two/upload-picture-option/preview";
import Upload from "@/components/IPV/page-two/upload-picture-option/upload";
import "./upload-picture.css";

function UploadPicture() {
  const [preview, setPreview] = useState("");
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, acceptedFiles]);

  return (
    <div className="upload-parent">
      <Backbutton redirect="../IPV/step-two" />
      <div {...getRootProps()}>
        {preview ? (
          <Preview preview={preview} setPreview={setPreview} />
        ) : (
          <Upload getInputProps={getInputProps} isDragActive={isDragActive} />
        )}
      </div>
    </div>
  );
}

export default UploadPicture;
