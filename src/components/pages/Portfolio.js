import React, {useState} from 'react';
import proj1 from "../../assets/brew.JPG"
import proj2 from "../../assets/lend.JPG"
import proj3 from "../../assets/jate.JPG"
import proj4 from "../../assets/planner.JPG"
import proj5 from "../../assets/passgen.JPG"




export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div>
        <a href="https://github.com/Dgardi/beer_buddy">
        <img src={proj1} alt="Project 1" className="project"/>
        </a>
      </div>

      <div>
        <a href="https://github.com/Dgardi/LEND_Inventory_Management">
        <img src={proj2} alt="Project 2" className="project"/>
        </a>
      </div>

      <div>
        <a href="https://github.com/Dgardi/hw19-text-editor.git">
        <img src={proj3} alt="Project 3" className="project"/>
        </a>
      </div>

      <div>
        <a href="https://github.com/Dgardi/hw5-workday-scheduler.git">
        <img src={proj4} alt="Project 4" className="project"/>
        </a>
      </div>

      <div>
        <a href="https://github.com/Dgardi/hw3-js-password-generator.git">
        <img src={proj5} alt="Project 5" className="project"/>
        </a>
      </div>

    </div>
  );
}
