import React from 'react';

const AwardCard = ({ date, competition, rank, category }) => {
  return (
    <div className="awards-column col-md-6 col-lg-4">
      <div className="card">
        <div className="card-header">
          <p className="mark awards-date">{date}</p>
        </div>
        <div className="card-body awards-card-body">
          <p className="">{competition}</p>
        </div>
        <div className="card-footer awards-card-footer">
          <span className="fas fa-award awards-icon icon-2rem"></span>
          <p className="awards-rank">{rank}</p>
          <p className="">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
