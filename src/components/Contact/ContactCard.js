// components/ContactCard.js
import React from 'react';

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default ContactCard;
