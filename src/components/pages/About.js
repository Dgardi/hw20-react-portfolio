import React from 'react';
import selfie from "../../assets/selfie.png"

export default function About() {
  return (

    <div>
      <p className="bigName">DAVID GARDINER </p>
      <img src= {selfie} alt="Selfie" className="selfie"/>

      <h1>About Me</h1>
      <p>
        Hi, my name is David Gardiner. I'm a graduate of the Trilogy Full Stack Developer bootcamp
        program through Georgia Tech. 

        I'm currently pursuing a career in web development, with the current skill set to deploy 
        applications built with a MERN stack. 
      </p>
    </div>
  );
}
