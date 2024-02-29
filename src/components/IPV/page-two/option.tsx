"use client";
import React from "react";
import Link from "next/link";
import "./option.css";

function Option(props: {
  primary_text: string;
  secondary_text: string;
  logo: string;
  redirect: string;
}) {
  return (
    <Link style={{ textDecoration: "none" }} href={props.redirect}>
      <div className="option">
        <div className="option-logo">{props.logo}</div>
        <div className="option-text">
          <p className="option-primary-text">{props.primary_text}</p>
          <p className="option-secondary-text">{props.secondary_text}</p>
        </div>
      </div>
    </Link>
  );
}

export default Option;
