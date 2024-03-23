import React from 'react';

const ContactBadge = ({ icon, text, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default ContactBadge;
