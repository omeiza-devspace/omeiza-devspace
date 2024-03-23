import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitting(false);
      setSubmitError('Failed to submit form. Please try again later.');
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      {submitError && <div className="text-red-500">{submitError}</div>}
      {submitSuccess && <div className="text-green-500">Form submitted successfully!</div>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="6" required></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${submitting && 'opacity-50 cursor-not-allowed'}`} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
