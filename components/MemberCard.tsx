import React from 'react';

// Utility to get initials from a name
const getInitials = (name: string): string => {
  const parts = name.replace(/^(Mr|Ms)\s/i, '').split(' ');
  if (parts.length > 1 && parts[0] && parts[parts.length - 1]) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-24 h-24 rounded-full bg-naps-green/30 flex items-center justify-center mx-auto mb-4 border-2 border-naps-green">
      <span className="text-3xl font-bold text-gray-100">{getInitials(name)}</span>
    </div>
  );
};

interface MemberCardProps {
  name: string;
  role: string;
  campus?: 'Yangon' | 'Mandalay';
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, campus }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/20 h-full">
      <Avatar name={name} />
      <h3 className="text-lg font-bold text-gray-50">{name}</h3>
      <p className="text-naps-green mt-1">{role}</p>
      {campus && (
        <span className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold mt-2 px-2.5 py-0.5 rounded-full">
          {campus}
        </span>
      )}
    </div>
  );
};

export default MemberCard;
