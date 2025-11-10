import React from 'react';
import ContactForm from '../components/ContactForm';
import BackButton from '../components/BackButton';

const ContactPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <BackButton />
        <div className="py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-50">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question, suggestion, or partnership opportunity? We'd love to hear from you. Fill out the form below or email us directly.
          </p>
        </div>

        <div className="py-10 max-w-2xl mx-auto">
          <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center space-x-3 bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700">
                  <svg className="w-6 h-6 text-naps-green" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  <a href="mailto:napsmyanmarofficial@gmail.com" className="text-lg text-gray-300 hover:text-naps-green transition-colors duration-300">
                      napsmyanmarofficial@gmail.com
                  </a>
              </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;