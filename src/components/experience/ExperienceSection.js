import React from 'react';
import ExperienceRow from './ExperienceRow';

const ExperienceSection = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="section-content">
        <h2>Experience</h2>
        <div className="container-fluid text-white ">
          {/* Your experience rows go here */}
          <ExperienceRow
            startDate="October 2022"
            endDate="Present"
            position="Software Engineer"
            company="Nuom"
            location="Nottingham, England"
            duties={[
              "Development and maintenance of multiple JavaScript based web-projects",
              "Using a wide range of JavaScript frameworks, libraries and technologies"
            ]}
          />
         
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
