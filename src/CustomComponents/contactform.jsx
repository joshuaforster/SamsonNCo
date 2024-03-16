// import React from 'react';


// const ContactForm = () => {
//   const [formData, setFormData] = React.useState({
//     firstName: '',
//     lastName: '',
//     contactNumber: '',
//     postcode: '',
//     email: '',
//     enquiry: '',
//     subject: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you might handle the form submission, e.g., sending data to your server or directly to Netlify via an AJAX call
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto my-8 border border-gray-600 rounded p-8" data-netlify="true" name="contactForm">
//       <input type="hidden" name="form-name" value="contactForm" />
//       <p className='text-center text-gray-800 text-2xl text-bold'>Fill in the box to find out more</p>
//       <div className="flex flex-wrap -mx-2">
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap -mx-2">
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <input
//             type="text"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             placeholder="Contact Number"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <input
//             type="text"
//             name="postcode"
//             value={formData.postcode}
//             onChange={handleChange}
//             placeholder="Postcode"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email Address"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <select 
//           name="enquiry" 
//           value={formData.enquiry} 
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="" disabled>Select an option</option>
//           <option value="kitchen">Kitchen</option>
//           <option value="bathroom">Bathroom</option>
//           <option value="kitchen-bathroom">Kitchen and Bathroom</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <textarea
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           placeholder="Tell us about your enquiry..."
//           className="w-full p-2 h-32 border border-gray-300 rounded-md"
//         />
//       </div>
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Contact Us
//       </button>
//     </form>
//   );
// };

import React from 'react'

export default function ContactForm(){

  return(
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}



