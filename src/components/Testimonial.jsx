import React from 'eact';
import './Testimonial.css';

const testimonial = [
  {
    name: 'John Doe',
    title: 'Marketing Specialist',
    quote: 'I landed my dream job thanks to this ATS analyzer! The feedback was spot on and incredibly helpful.',
    image: 'john-doe.jpg'
  },
  {
    name: 'Jane Smith',
    title: 'Software Engineer',
    quote: 'A game-changer for job seekers. The AI suggestions made my resume unbeatable.',
    image: 'jane-smith.jpg'
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Success Stories</h1>
      <p>Our ATS analyzer has helped numerous job seekers land their dream jobs. Here's what some of them have to say:</p>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt={testimonial.name} />
          <p>{testimonial.quote}</p>
          <p>— {testimonial.name}, {testimonial.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;