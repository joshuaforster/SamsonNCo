import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting through the browser

    const form = new FormData();

    for (const name in formData) {
      form.append(name, formData[name]);
    }

    // Append the form-name. This is critical for Netlify to recognize the form
    form.append('form-name', 'contact');

    try {
      // Post the form data using fetch to the current page URL ("/")
      const response = await fetch('/', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      });

      if (response.ok) {
        // Redirect or handle the success scenario
        // Example: Redirect to a thank-you page
        window.location = '/thank-you';
      } else {
        // Handle server errors or invalid responses
        alert('Server error, please try again later.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Submission error', error);
      alert('Submission failed, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="max-w-lg mx-auto my-10 bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Room Inquiry:</label>
        <select name="role" value={formData.role} onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="both">Both</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
      </div>
    </form>
  );
}
