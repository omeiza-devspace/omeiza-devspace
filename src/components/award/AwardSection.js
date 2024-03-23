import React from 'react';
import AwardCard from './AwardCard';

const AwardsSection = () => {
  return (
    <section className="resume-section section-color-light" id="awards">
      <div className="section-content">
        <h2>Awards</h2>
        <div className="container-fluid">
          <AwardCard
            date="April 2006"
            competition="Nemzetközi Kenguru Matematikaverseny (International Mathematical Kangaroo)"
            rank="National 13th place"
            category="in Mathematics"
          />
          <AwardCard
            date="April 2006"
            competition="Országos Műszaki Tanulmányi Verseny (National Technical Study Competition)"
            rank="National 6th place"
            category="in Electronics"
          />
          {/* Add more AwardCard components for other awards */}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
