import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UPCOMING_EVENTS, RECENT_EVENTS } from '../constants';
import EventCard from '../components/EventCard';
import { Event } from '../types';

type EventType = 'upcoming' | 'recent';

const ActivityCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/20">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-naps-green/20 text-naps-green">
        {icon}
      </div>
      <h3 className="ml-4 text-xl font-bold text-gray-100">{title}</h3>
    </div>
    <div className="text-gray-400 space-y-3">{children}</div>
  </div>
);

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventType>('upcoming');

  const eventsToShow: Event[] = activeTab === 'upcoming' ? UPCOMING_EVENTS : RECENT_EVENTS;

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-50 leading-tight opacity-0 animate-fade-in-up">
            Welcome to NAPS – National Association of Pharmacy Students 💚
          </h1>
          <p 
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Connecting future pharmacists of Myanmar to the world through learning, leadership, and global opportunities.
          </p>
          <div 
            className="mt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Link 
              to="/membership" 
              className="inline-block bg-naps-green hover:bg-naps-dark-green text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Us
            </Link>
          </div>

          {/* Animated Wave SVG */}
          <div 
            className="w-full h-20 mt-10 relative overflow-hidden opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <div className="absolute top-0 left-0 w-[200%] h-full animate-wave">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
                <path 
                  fill="rgba(16, 185, 129, 0.4)" 
                  d="M0,20 C120,40 240,0 360,20 C480,40 600,0 720,20 C840,40 960,0 1080,20 C1200,40 1320,0 1440,20 L1440,40 L0,40 Z"
                />
              </svg>
            </div>
            <div 
              className="absolute top-0 left-0 w-[200%] h-full animate-wave"
              style={{animationDuration: '4s', animationDirection: 'reverse'}}
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 40" preserveAspectRatio="none">
                <path 
                  fill="rgba(16, 185, 129, 0.6)" 
                  d="M0,24 C120,0 240,48 360,24 C480,0 600,48 720,24 C840,0 960,48 1080,24 C1200,0 1320,48 1440,24 L1440,40 L0,40 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Empowering Future Pharmacists</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The National Association of Pharmacy Students (NAPS) is a student-led organization uniting pharmacy students across Myanmar. 💊 We aim to empower future pharmacists through learning, leadership, and international collaboration as a proud member of IPSF. 🌍💚
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-black/20 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Events & Webinars</h2>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-800 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'upcoming' ? 'bg-naps-green text-white shadow' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'recent' ? 'bg-naps-green text-white shadow' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Recent Events
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsToShow.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

       {/* Activities & Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Activities & Events</h2>
            <p className="text-2xl font-semibold text-naps-green mb-4">Empowering Students Through Action & Experience</p>
            <p className="text-lg text-gray-300">
              At NAPS, we believe learning goes beyond the classroom. Through our events and activities, pharmacy students gain knowledge, leadership skills, and real-world experience, while connecting with peers across Myanmar and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ActivityCard
              title="Academic & Professional Events"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
            >
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Workshops & Seminars:</span> Educational sessions led by professionals on pharmacy, healthcare, or leadership.</li>
                <li><span className="font-semibold">Pharmacy Knowledge Sharing:</span> Events that promote proper medicine use, antibiotic awareness, etc.</li>
                <li><span className="font-semibold">Research Presentations / Student Conferences:</span> Opportunities for students to present their studies.</li>
              </ul>
            </ActivityCard>
            
            <ActivityCard
              title="IPSF International Programs"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-2.172 2.172a2 2 0 01-2.828 0l-.586-.586M16.293 19.707l-.586.586a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010 2.828l2.172-2.172a2 2 0 012.828 0l.586.586" /></svg>}
            >
              <p className="mb-3">As part of IPSF, NAPS members can join international opportunities such as:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>APPS (Asia Pacific Pharmaceutical Symposium)</li>
                <li>IPSF World Congress</li>
                <li>Student Exchange Program (SEP)</li>
                <li>Online Trainings & Leadership Development</li>
              </ul>
              <p className="mt-3">These events connect our members to a global community of future pharmacists.</p>
            </ActivityCard>

            <ActivityCard
              title="Public Health Campaigns"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            >
               <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Health Awareness Campaigns:</span> Promoting topics like antibiotic resistance, vaccination, and mental health.</li>
                <li><span className="font-semibold">Community Outreach:</span> Volunteering to provide basic health education to the public.</li>
                <li><span className="font-semibold">World Health Days:</span> Participating in IPSF global health campaigns.</li>
              </ul>
            </ActivityCard>

            <ActivityCard
              title="Leadership & Social Events"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            >
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">National General Assembly (NGA):</span> Gathering of pharmacy students nationwide to discuss plans and policies.</li>
                <li><span className="font-semibold">Leadership & Soft Skill Trainings:</span> Building communication, teamwork, and management skills.</li>
                <li><span className="font-semibold">Fun & Networking Activities:</span> Game nights, socials, and cultural exchange events.</li>
              </ul>
            </ActivityCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;