import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Option from "@/components/IPV/page-two/option";
import Link from "next/link";
import "./step-two.css";

function StepTwo() {
  return (
    <div className="parent">
      <Link href="../IPV/step-one">
        <ArrowBackIosIcon className="back-button" />
      </Link>
      <div className="root">
        <h3 className="root-title">Step 2/3</h3>
        <p className="root-subtitle">Choose either of an option</p>
        <Option
          logo={"𝕏"}
          primary_text="Selfie Check"
          secondary_text="Get a face shot by following the instructions that will be provided."
          redirect="/IPV/step-two/click-picture-option"
        />
        <Option
          logo={"𝕏"}
          primary_text="Share your picture"
          secondary_text="Provide us with a photograph"
          redirect="/IPV/step-two/upload-picture-option"
        />
      </div>
    </div>
  );
}

export default StepTwo;
