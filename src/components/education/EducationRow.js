import React from 'react';

const EducationRow = ({ period, title, level, institution, location }) => {
  return (
    <div className="row education-row">
      <div className="col-xl-3">
        <p className="h5 mark">{period}</p>
      </div>
      <div className="col-md-6 col-xl-5 ml-3 ml-xl-0">
        <p className="h4">{title}<br />({level})</p>
      </div>
      <div className="col-md-5 col-xl-4 ml-3 ml-md-0">
        <p className="h5">{institution}<br />{location}</p>
      </div>
    </div>
  );
};

export default EducationRow;
