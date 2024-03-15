import React, { useState } from 'react';
import Button from './button';

const ContactForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    enquiry: '',
    subject: '',
    postcode: ''
  });

  // Handle change in form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto my-8 border border-gray-600 rounded p-8" data-netlify="true">
      <p className='text-center text-gray-800 text-2xl text-bold'>Fill in the box to find out more</p>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            placeholder="Postcode"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <select 
          name="enquiry" 
          value={formData.enquiry} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>Select an option</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="kitchen-bathroom">Kitchen and Bathroom</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Tell us about your enquiry..."
          className="w-full p-2 h-32 border border-gray-300 rounded-md"
        />
      </div>
      <Button>Contact Us</Button>
    </form>
  );
};

export default ContactForm;
