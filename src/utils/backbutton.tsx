import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./backbutton.css";
import Link from "next/link";

function Backbutton(props: { redirect: string }) {
  return (
    <div>
      <Link href={props.redirect}>
        <ArrowBackIosIcon className="back-button" />
      </Link>
    </div>
  );
}

export default Backbutton;
