import React from 'react';

const ContactLink = ({ icon, url, text }) => (
    <a className="print-block" href={url} target="_blank" rel="nofollow">
        <span className={icon + " contact-icon icon-2-5rem"}></span>
        <span className="print-only print-inline rounded-full">{text}</span>
    </a>
);

export default ContactLink;
