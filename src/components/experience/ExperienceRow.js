import React from 'react';

const ExperienceRow = ({ startDate, endDate, position, company, location, duties }) => {
  return (
    <div className="flex flex-wrap items-start mb-6">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-bold">{startDate} - {endDate}</p>
        <p className="text-xl font-semibold">{position}</p>
        <p className="text-base">{company} ({location})</p>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <p className="text-lg font-bold">Duties:</p>
        <ul className="list-disc list-inside">
          {duties.map((duty, index) => (
            <li key={index} className="text-base">{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceRow;
