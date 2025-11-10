import React from 'react';
import { VISIONS, MISSIONS, OBJECTIVES, TEAM_MEMBERS } from '../constants';
import BackButton from '../components/BackButton';
import MemberCard from '../components/MemberCard';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <svg className="w-5 h-5 text-naps-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    </div>
    <span className="text-gray-400">{children}</span>
  </li>
);

const SectionCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-emerald-500/10">
    <h3 className="text-2xl font-bold text-naps-green mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <BackButton />
        <div className="py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-50">About NAPS</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Learn about our guiding principles that drive us to empower the next generation of pharmacists in Myanmar.
          </p>
        </div>

        {/* Members Section */}
        <div className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Meet Our Executive Committee</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The driving force behind NAPS, our dedicated team of student leaders works tirelessly to create opportunities and support for pharmacy students across the nation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <MemberCard key={index} name={member.name} role={member.role} campus={member.campus} />
            ))}
          </div>
        </div>

        <div className="py-12">
          <div className="space-y-12">
            <SectionCard title="Our Vision" items={VISIONS} />
            <SectionCard title="Our Mission" items={MISSIONS} />
            <SectionCard title="Our Objectives" items={OBJECTIVES} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
