import React from 'react';
import resume from '../../assets/Resume.pdf'

export default function Resume() {
    return (
      <div>
        <h1>Resume Page</h1>
        <p>Download my resume <a href={resume} download="Resume.PDF">here!</a>
        </p>
      </div>
      
    );
  }