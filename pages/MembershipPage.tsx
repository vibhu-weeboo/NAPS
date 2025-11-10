import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import BackButton from '../components/BackButton';

const BenefitItem: React.FC<{ title: string, description: string }> = ({ title, description }) => (
  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/20">
    <h3 className="text-xl font-semibold text-naps-green">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);

const MembershipPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <BackButton />
        <div className="py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-50">Become a NAPS Member</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join a vibrant community of pharmacy students and unlock a world of opportunities.
          </p>
        </div>

        <div className="py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 mb-12 transition-all duration-300 hover:shadow-emerald-500/10">
              <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Why Join Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <BenefitItem 
                  title="Networking"
                  description="Connect with peers, professionals, and international students to build your professional network."
                />
                <BenefitItem 
                  title="Skill Development"
                  description="Participate in workshops, seminars, and competitions to enhance your clinical and soft skills."
                />
                <BenefitItem 
                  title="Global Opportunities"
                  description="Gain access to IPSF events, student exchange programs, and international conferences."
                />
                <BenefitItem 
                  title="Leadership Experience"
                  description="Take on leadership roles within NAPS and contribute to projects that make a real impact."
                />
              </div>
            </div>

            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-100 mb-4">Ready to Join?</h2>
               <p className="text-gray-300 mb-8">
                  Membership registration for the upcoming academic year will open soon. Follow our social media channels for the latest updates!
               </p>
               <div className="flex justify-center items-center space-x-6 mt-8">
                  <a href="https://www.facebook.com/share/14LDzFJ1ZTz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-naps-green transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-naps-green transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                      <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-naps-green transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                      <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://www.tiktok.com/@naps.mmr?_r=1&_t=ZS-91Ho5loWoum" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-naps-green transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                      <span className="sr-only">TikTok</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-naps-green transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <span className="sr-only">Twitter</span>
                  </a>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-100 mb-4">Have Questions About Membership?</h2>
                  <p className="text-gray-300">
                      Fill out the form below, and our team will get back to you with more information.
                  </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;