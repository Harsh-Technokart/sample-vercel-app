import React from "react";

function Submit(props: { closePhoto: any }) {
  return (
    <div className="submit-buttons">
      <button onClick={props.closePhoto} className="retake-button">
        Retake
      </button>
      <button
        className="submit-button"
        onClick={() => {
          console.log("the photo should be ideally submitted");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Submit;
