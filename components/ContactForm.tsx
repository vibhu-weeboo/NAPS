import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 text-center transition-all duration-300 hover:shadow-emerald-500/20">
        <h3 className="text-2xl font-bold text-naps-green mb-4">Thank You!</h3>
        <p className="text-gray-300">Your message has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-emerald-500/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-md text-gray-200 focus:ring-naps-green focus:border-naps-green transition"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-md text-gray-200 focus:ring-naps-green focus:border-naps-green transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-md text-gray-200 focus:ring-naps-green focus:border-naps-green transition"
            placeholder="Let us know how we can help..."
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-naps-green hover:bg-naps-dark-green text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;