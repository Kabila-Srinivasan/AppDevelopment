import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonialsData = [
    {
      name: 'John Doe',
      review: 'Excellent service! They fixed my appliance quickly and efficiently. I highly recommend them.',
    },
    {
      name: 'Jane Smith',
      review: 'I ve been a customer for years, and they never disappoint. Fast and reliable service every time.',
    },
    {
      name: 'Mike Johnson',
      review: 'I had an emergency appliance issue, and they came to the rescue. Thank you for your prompt assistance!',
    },
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial-list">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="review">{testimonial.review}</p>
            <p className="name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
