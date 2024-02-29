import React from "react";
import Logo from "@/components/logo";
import Avatar from "@mui/material/Avatar";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div style={{ marginLeft: "2rem" }}>
        <Logo />
      </div>
      <Avatar className="topbar-avatar">T</Avatar>
    </div>
  );
}

export default Topbar;
