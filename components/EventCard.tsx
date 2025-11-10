
import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
      <img className="h-48 w-full object-cover" src={event.image} alt={event.title} />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-naps-green font-semibold">{event.date}</div>
        <h3 className="block mt-1 text-lg leading-tight font-medium text-gray-100 hover:underline">{event.title}</h3>
        <p className="mt-2 text-gray-400">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
