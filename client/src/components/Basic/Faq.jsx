import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const faqData = [
  {
    question: 'What is webinar software?',
    answer: 'Webinar software allows you to create, host, and manage webinars to engage with your audience through live video, audio, and interactive features.',
  },
  {
    question: 'How do marketers leverage webinar software and webinar platforms?',
    answer: 'Marketers use webinar software to generate leads, nurture existing leads, demonstrate products, and engage with their audience in real-time.',
  },
  {
    question: 'What are some types of webinars or use cases?',
    answer: 'Webinars can be used for educational purposes, product demos, onboarding sessions, corporate communication, and training sessions.',
  },
  {
    question: 'How do marketers measure the success of a webinar?',
    answer: 'Marketers measure success through metrics such as attendance rates, engagement levels, lead generation, and conversion rates post-webinar.',
  },
  {
    question: 'What makes Welcome’s webinar software different?',
    answer: 'Welcome’s webinar software offers a unique combination of interactive features, ease of use, and robust analytics to help you get the most out of your webinars.',
  },
  {
    question: 'Can Welcome’s webinar software be used for virtual events or virtual conferences?',
    answer: 'Yes, Welcome’s webinar software is versatile and can be used to host virtual events, conferences, and other large-scale online gatherings.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-[100vw]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row space-y-8 md:space-y-0">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold text-gray-900 mt-[120px] mr-6">Frequently asked questions</h1>
        </div>
        <div className="md:w-2/3 space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900"
              >
                {faq.question}
                <span className="ml-4">{activeIndex === index ? '-' : '+'}</span>
              </button>
              <CSSTransition
                in={activeIndex === index}
                timeout={300}
                classNames="answer"
                unmountOnExit
              >
                <div className="mt-2 text-gray-700 text-left">
                  {faq.answer}
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;


