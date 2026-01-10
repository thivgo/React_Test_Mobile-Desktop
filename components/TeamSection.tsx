import React from 'react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  { name: 'Enncalne Colamio', role: 'Comite de Compromiss', imageUrl: 'https://picsum.photos/id/64/200/200' },
  { name: 'Roum Kitad', role: 'Culture Frontera', imageUrl: 'https://picsum.photos/id/65/200/200' },
  { name: 'Mera Cianna', role: 'Marte, Mo Vidas', imageUrl: 'https://picsum.photos/id/338/200/200' },
  { name: 'Pluge Parnso', role: 'Caffee Plical Es', imageUrl: 'https://picsum.photos/id/91/200/200' },
];

const TeamSection: React.FC = () => {
  return (
    <section className="hidden md:block mt-16 mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Nossa Equipe</h2>
      <div className="grid grid-cols-4 gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;