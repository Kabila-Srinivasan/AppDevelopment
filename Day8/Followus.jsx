import React from 'react';
import './Followus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function FollowUs() {
  const socialMediaLinks = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/pre.homeservice/',
      icon: faFacebook,
    },
    {
      platform: 'Twitter',
      link: 'https://twitter.com/whirlpoolcare?lang=en/',
      icon: faTwitter,
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/service_points/',
      icon: faInstagram,
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
            <FontAwesomeIcon icon={socialLink.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default FollowUs;
