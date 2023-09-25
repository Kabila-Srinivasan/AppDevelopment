import React from 'react';
import './Myservice.css';

function MyServiceCentre() {
  return (
    <div className="service-center-container">
      <h1>Welcome to My Service Centre</h1>
      <p>
        We are your trusted home appliance service center, dedicated to
        providing top-notch repair and maintenance services for all your
        appliances.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Refrigerator Repair</li>
        <li>Washing Machine Repair</li>
        <li>Dishwasher Repair</li>
        <li>Oven and Stove Repair</li>
        <li>Microwave Repair</li>
        <li>And much more...</li>
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        Our team of skilled technicians is highly experienced and trained to
        handle a wide range of appliance brands and models. We prioritize
        efficiency, quality, and customer satisfaction.
      </p>
      <p>
        Whether it's a minor repair or a major appliance overhaul, we are
        committed to getting your appliances back to optimal working condition.
      </p>
      <h2>Contact Us</h2>
      <p>
        For inquiries or to schedule a service appointment, please contact us
        at:
      </p>
      <address>
        <strong>My Service Centre</strong>
        <br />
        123 Appliance Street
        <br />
        Coimbatore,TamilNadu,641001
        <br />
        Phone: (638) 484-2423
        <br />
        Email: info@myservicecentre.com
      </address>
    </div>
  );
}

export default MyServiceCentre;
