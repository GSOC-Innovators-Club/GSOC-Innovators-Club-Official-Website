import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Calendar, Instagram, Megaphone, Users, DollarSign, Share2, MessageSquare } from 'lucide-react';
import teamData from '../../database/team.json';

export const Team = () => {

  const teams = (() => {
    const iconsMap: Record<string, any> = {
      'Technical Team': Code2,
      'Event Management Team': Calendar,
      'Content Team': MessageSquare,
      'Finance Team': DollarSign,
      'Social Media and Design Team': Share2,
      'Social Media and Photography Team': Share2,
      'Administration': Users,
      'Design Team': Share2,
      'Research Team': Users,
      'Human Resource Team': Users,
      'PR and Outreach Team': Megaphone,
      'Founding Members': Users,
    };

    return Object.fromEntries(
      Object.entries(teamData.teams).map(([key, team]) => [
        key,
        {
          ...team,
          icon: iconsMap[key] ?? Users,
        },
      ])
    );
  })();

  const MemberCard = ({ member }: { member: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col w-full max-w-sm"
    >
      <div className="relative h-48 sm:h-64 w-full">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Users className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="text-google-blue font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 mb-4">{member.bio}</p>
        </div>
        <div className="flex space-x-4 justify-center mt-auto">
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
  
  // Coordinators removed — no separate section as per new structure
  
  const TeamSection = ({ title, team, icon: Icon, color }: { title: string; team: any; icon: any; color: string }) => {
    const allMembers = [team.members.lead, team.members.coLead, ...(team.members.members || [])].filter(Boolean);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Icon className={`w-8 h-8 ${color}`} />
          <h2 className="text-3xl font-bold text-center">{title}</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {allMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-80 md:w-96">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of passionate individuals working together to make open source more accessible.
          </p>
        </motion.div>
  
        {/* Render teams in requested order */}
        {[
          'Administration',
          'Human Resource Team',
          'Technical Team',
          'Research Team',
          'Design Team',
          'Finance Team',
          'Content Team',
          'Event Management Team',
          'Social Media and Photography Team',
          'PR and Outreach Team',
          'Founding Members'
        ].map((key) => {
          const team = teams[key];
          if (!team) return null;
          return (
            <TeamSection
              key={key}
              title={key}
              team={team}
              icon={team.icon}
              color={team.color}
            />
          );
        })}
      </div>
    </motion.div>
  );
};