import React from 'react'
import { questions } from '../Data/FAQ'
import Reveal from '../CustomComponents/toggleReveal';

export default function FAQ() {
    const faq = questions.map((question) => (
        <Reveal
            key={question.id}
            question={question.question}
            answer={question.answer}
        />
    ));

    return (
        <div className='lg:mx-24 md:mx-12 mx-4 my-8'>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h1>
            <p className="text-md md:text-lg text-gray-600 text-center mb-10">Welcome to our FAQ section. Here, you'll find answers to some of the most common questions we receive about our services, process, and more. We've compiled these questions to help you get the information you need quickly and easily. If you have a question that isn't answered here, please don't hesitate to contact us.</p>
            {faq}
        </div>
    );
}
