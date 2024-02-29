"use client";
import React, { useEffect, useState } from "react";
import "../app/loading.css";

function Loadingtext() {
  const phrases = ["Loading...", "Please wait...", "Almost there..."];
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let timeoutId: NodeJS.Timeout | undefined;

    const typeText = () => {
      if (currentCharIndex <= phrases[currentPhraseIndex].length) {
        setDisplayedText((prevText) =>
          phrases[currentPhraseIndex].substring(0, currentCharIndex)
        );
        currentCharIndex++;
        timeoutId = setTimeout(typeText, 100); // Adjust typing speed here (in milliseconds)
      } else {
        currentCharIndex = 0;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        timeoutId = setTimeout(typeText, 1000); // Adjust pause between phrases here (in milliseconds)
      }
    };

    typeText();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  return (
    <div className="text">
      {displayedText}
      <p className="cursor">|</p>
    </div>
  );
}

export default Loadingtext;
