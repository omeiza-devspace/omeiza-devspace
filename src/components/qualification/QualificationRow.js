import React from 'react';

const QualificationRow = ({ date, title }) => {
  return (
    <div className="row qualifications-row">
      <div className="col-sm-4 col-md-3">
        <p className="h5 mark">{date}</p>
      </div>
      <div className="col-sm-8 col-md-9 ml-3 ml-sm-0">
        <p className="h4">{title}</p>
      </div>
    </div>
  );
};

export default QualificationRow;
