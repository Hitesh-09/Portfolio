import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Night Owl Developer 🦉",
          "Backend & FastAPI Specialist ⚡",
          "AI & Deep Learning Engineer 🤖",
          "Data Engineering & Cloud Architect ☁️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
