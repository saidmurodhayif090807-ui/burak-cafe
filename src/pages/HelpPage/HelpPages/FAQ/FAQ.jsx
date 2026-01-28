import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Optional: npm install react-icons
import './FAQ.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item open by default

  const faqData = [
    {
      question: "How to make order?",
      answer: "You should choose products and make an order via basket!"
    },
    {
      question: "How long does delivery takes?",
      answer: "Delivery typically takes 30-45 minutes depending on your location."
    },
    {
      question: "Is our details secure in this platform?",
      answer: "Yes, we use industry-standard encryption to protect all your personal and payment data."
    },
    {
      question: "I am blocked, what should I do?",
      answer: "Please contact our support team or administration to review your account status."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <div className="faq-card">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-header" onClick={() => toggleAccordion(index)}>
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-body">
                <p className="faq-answer">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;