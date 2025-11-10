import React from 'react';
import BackButton from '../components/BackButton';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/20">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-naps-green/20 text-naps-green">
        {icon}
      </div>
      <h3 className="ml-4 text-xl font-bold text-gray-100">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const IPSFPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <BackButton />
        <div className="py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-50">Our Global Connection: IPSF</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            NAPS is a proud member of the International Pharmaceutical Students’ Federation (IPSF), connecting our students to the world.
          </p>
        </div>

        {/* About IPSF Section */}
        <div className="py-12 max-w-4xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-emerald-500/10">
            <h2 className="text-3xl font-bold text-naps-green mb-4">About IPSF</h2>
            <p className="text-gray-300 leading-relaxed space-y-4">
              <span>The International Pharmaceutical Students’ Federation (IPSF) was founded in 1949 by eight pharmacy student associations in London, United Kingdom. The Federation now represents approximately 500,000 pharmacy students and recent graduates in 92 countries worldwide.</span>
              <span>IPSF is the leading international advocacy organisation for pharmacy and pharmaceutical science students. We promote improved public health through the provision of information, education, and networking opportunities as well as a range of publications and professional activities.</span>
              <span>IPSF initiatives focus on the areas of public health, pharmacy education, and professional development. Initiatives include multiple public health campaigns, research on issues in pharmacy education and workforce development, the Student Exchange Programme, organising international and regional events, and publication of the IPSF newsletters in pharmacy education and student exchange, among other responsibilities.</span>
            </p>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Benefits for NAPS Members</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <BenefitCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-2.172 2.172a2 2 0 01-2.828 0l-.586-.586M16.293 19.707l-.586.586a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010-2.828l2.172-2.172a2 2 0 012.828 0l.586.586" /></svg>}
                    title="Global Network"
                    description="Connect with over 500,000 pharmacy students and recent graduates from 92 countries, opening doors for international friendships and collaborations."
                />
                <BenefitCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
                    title="Flagship Events"
                    description="Participate in major international events like the IPSF World Congress and the Asia Pacific Pharmaceutical Symposium (APPS) to learn and network."
                />
                <BenefitCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>}
                    title="Student Exchange Program (SEP)"
                    description="Gain hands-on experience in pharmacy practice in another country through IPSF's renowned exchange program, broadening your cultural and professional horizons."
                />
                <BenefitCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                    title="Professional Growth"
                    description="Engage in public health campaigns, leadership training, and educational workshops that build your skills and prepare you for a successful career."
                />
            </div>
        </div>

        {/* Official Website Link */}
        <div className="text-center py-12">
            <a 
              href="https://www.ipsf.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-naps-green hover:bg-naps-dark-green text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Visit IPSF Official Website
            </a>
        </div>
      </div>
    </div>
  );
};

export default IPSFPage;