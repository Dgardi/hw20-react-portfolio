import React from 'react';
import resume from '../../assets/Resume.pdf'

export default function Resume() {
    return (
      <div>
        <h1>Resume Page</h1>
        <p>
        <a href={resume} download="Resume.PDF">Download my resume here!</a>
        </p>
      </div>
      
    );
  }