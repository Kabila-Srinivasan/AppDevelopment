import React from 'react';
import './Services.css';

function Services() {
  const servicesData = [
    {
      title: 'Appliance Repair',
      description: 'We offer professional repair services for all major home appliances.',
    },
    {
      title: 'Appliance Installation',
      description: 'Our experts can install new appliances in your home efficiently and safely.',
    },
    {
      title: 'Maintenance Plans',
      description: 'Sign up for our maintenance plans to keep your appliances running smoothly.',
    },
    {
      title: 'Emergency Repairs',
      description: 'We provide 24/7 emergency repair services to address urgent issues.',
    },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
