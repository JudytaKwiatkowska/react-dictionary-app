import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2>{props.phonetic.text}</h2>
    </div>
  );
}
