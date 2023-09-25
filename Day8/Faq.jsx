import React, { useState, useEffect } from 'react';
import './Faq.css'
const questions = [
  {
    id: 1,
    question: 'How do I schedule a service appointment for my home appliances?',
    answer:
      'You can schedule a service appointment for your home appliances by calling our customer support hotline at [phone number] or using our online booking system on our website.',
  },
  {
    id: 2,
    question: 'What are your service hours for home appliance repairs?',
    answer:
      'Our service center is open from [opening time] to [closing time] every day of the week, including weekends. Please visit our contact page for more details.',
  },
  {
    id: 3,
    question: 'Do you provide emergency repair services for home appliances?',
    answer:
      'Yes, we offer emergency repair services for home appliances. If you have an urgent issue with your appliance, please call us immediately, and we will dispatch a technician as soon as possible.',
  },
  {
    id: 4,
    question: 'How can I request removal or disposal of old appliances?',
    answer:
      'To request removal or disposal of old appliances, please contact our customer support team. We offer eco-friendly disposal options to ensure proper recycling and disposal of your old appliances.',
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = questions.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const Question = ({ question, answer }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
      setActive(!isActive);
    };

    return (
      <div className='question-wrapper'>
        <div className='question'>
          <h3>{question}</h3>
          <button onClick={handleClick}>
            <svg
              className={isActive ? 'active' : ''}
              viewBox='0 0 320 512'
              width='100'
              title='angle-down'
            >
              <path
                d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'
                fill='#000000'
              />
            </svg>
          </button>
        </div>
        <div className={isActive ? 'answer active' : 'answer'}>{answer}</div>
      </div>
    );
  };

  return (
    <div className='container'>
      <h2 className='heading'>How can we help you with your home appliances?</h2>
      <Searchbar onSearchChange={handleSearchChange} />
      <section className='faq'>
        {searchResults.map((item) => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

const Searchbar = ({ onSearchChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearchChange(e);
  };

  return (
    <form>
      <svg viewBox='0 0 512 512' width='100' title='search'>
        <path
          d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
          fill='#000000'
        />
      </svg>
      <input
        className='searchbar'
        type='text'
        placeholder='Describe your appliance issue'
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default FAQ;
