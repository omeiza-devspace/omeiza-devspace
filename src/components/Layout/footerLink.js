import React from 'react';

const FooterLink = ({ href, iconClass, text }) => {
    return (
      <a className="block mb-2 print:block print:mb-0" href={href} target="_blank" rel="nofollow">
        <span className={iconClass}></span>
        <span className="hidden print:inline text-white-600">{text}</span>
      </a>
    );
};

export default FooterLink;


{/* <Links>
{social.map(({ id, name, link, icon }) => (
  <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
    <img width="24" src={icon} alt={name} />
  </a>
))}
</Links> */}