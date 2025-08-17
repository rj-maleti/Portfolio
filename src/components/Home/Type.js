import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
  options={{
    strings: [
      "Data Analyst",
      "Business Intelligence Enthusiast",
      "Python & SQL Developer",
      "Power BI & Tableau Specialist",
      "Machine Learning Practitioner",
      "Open Source Contributor",
      "Core Member, Athletics Society IIT Jodhpur",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 90,
  }}
/>

  );
}

export default Type;
