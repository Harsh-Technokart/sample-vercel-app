import React from "react";
import Logo from "@/components/logo";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Avatar } from "@mui/material";

function ResultTopbar(props: { closePhoto: any }) {
  return (
    <>
      <div className="topbar">
        <Logo />
        <Avatar className="topbar-avatar">T</Avatar>
      </div>
      <div className="back-button-parent">
        <ArrowBackIosIcon className="back-button" onClick={props.closePhoto} />
      </div>
    </>
  );
}

export default ResultTopbar;
