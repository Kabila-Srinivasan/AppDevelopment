import React from 'react';
import './Testimonials.css'
const TestimonialPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Swetha',
      occupation: 'Homeowner',
      content:
        'I had a fantastic experience with Home Appliance Service Centre. They fixed my refrigerator quickly and at a reasonable price. I highly recommend their services!',
      imageUrl: 'https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg', // Replace with the actual image URL
    },
    {
      id: 2,
      name: 'Shakthi',
      occupation: 'Chef',
      content:
        'As a professional chef, my kitchen appliances are crucial. Home Appliance Service Centre has been my go-to for repairs. They are fast, reliable, and skilled.',
      imageUrl: 'https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=', // Replace with the actual image URL
    },
  ];

  return (
    <section className="testimonial-page">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="testimonial-content">{testimonial.content}</div>
              <div className="testimonial-info">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-details">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-occupation">
                    {testimonial.occupation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
