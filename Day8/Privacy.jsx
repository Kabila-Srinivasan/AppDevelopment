import React from 'react';
import './Privacy.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-content">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="privacy-policy-intro">
          At Home Appliance Service Centre, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information
        </p>

        <h2 className="privacy-policy-section-title">Information We Collect</h2>
        <p className="privacy-policy-text">
          We collect the following types of personal information when you use our services:
        </p>
        <ul className="privacy-policy-list">
          <li>Your name</li>
          <li>Contact information, including email address and phone number</li>
          <li>Service-related information, including appliance details and service history</li>
        </ul>

        <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
        <p className="privacy-policy-text">
          We use your personal information for the following purposes:
        </p>
        <ul className="privacy-policy-list">
          <li>Providing and improving our appliance repair services</li>
          <li>Communicating with you about your service requests</li>
          <li>Sending you service updates and promotional offers</li>
        </ul>

        <h2 className="privacy-policy-section-title">Information Sharing and Disclosure</h2>
        <p className="privacy-policy-text">
          We may share your personal information with third parties in the following circumstances:
        </p>
        <ul className="privacy-policy-list">
          <li>With service technicians to fulfill your repair requests</li>
          <li>With trusted partners for marketing and promotional purposes (you can opt out at any time)</li>
          <li>As required by law or to protect our rights</li>
        </ul>

        <h2 className="privacy-policy-section-title">Security</h2>
        <p className="privacy-policy-text">
          We take security measures to protect your personal information from unauthorized access and disclosure
        </p>

        <h2 className="privacy-policy-section-title">Changes to this Privacy Policy</h2>
        <p className="privacy-policy-text">
          We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page
        </p>

        <h2 className="privacy-policy-section-title">Contact Us</h2>
        <p className="privacy-policy-text">
          If you have any questions or concerns about our Privacy Policy, please <a href="/contact" className="privacy-policy-link">contact us</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
