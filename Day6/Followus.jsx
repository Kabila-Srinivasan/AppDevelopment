import React from 'react';
import './Followus.css';

function FollowUs() {
  const socialMediaLinks = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/pre.homeservice/',
    },
    {
      platform: 'Twitter',
      link: 'https://twitter.com/whirlpoolcare?lang=en/',
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/service_points/',
    },
  ];

  return (
    <div className="follow-us">
      <h2>Follow Us</h2>
      <div className="social-links">
        {socialMediaLinks.map((socialLink, index) => (
          <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${socialLink.platform.toLowerCase()}`}
          >
            {socialLink.platform}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FollowUs;
