import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import ComponentWrapper from "@/components/IPV/page-one/ComponentWrapper";
import "./step-one.css";

function StepOne() {
  return (
    <div className="parent">
      <Link href="../">
        <ArrowBackIosIcon className="back-button" />
      </Link>
      <ComponentWrapper />
    </div>
  );
}

export default StepOne;
