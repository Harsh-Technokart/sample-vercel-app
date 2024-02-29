"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 6000);
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "80vh",
      }}
    >
      <h1>Oops; the page you are looking for does not exist 😬</h1>
      <br />
      Redirecting in {counter}...
    </div>
  );
}

export default NotFound;
