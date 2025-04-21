import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Calendar, Instagram, Megaphone, Camera, Users, DollarSign, Share2, MessageSquare } from 'lucide-react';

export const Team = () => {
  const coordinators = [
    {
      name: "Ankur Prajapati",
      role: "Club Coordinator",
      image: "/Ankur Prajapati.jpg",
      bio: "Aspiring Tech Founder",
      linkedin: "https://www.linkedin.com/in/ankur-prajapati-a38b5a251/",
    },
    
  ];

  const teams = {
    "Technical Team": {
      icon: Code2,
      color: "text-google-blue",
      members: {
        lead: {
          name: "Ayushman Ray",
          role: "Technical Team Lead",
          image: "/Technical Team/Anshuman Ray.png",
          linkedin: "https://www.linkedin.com/in/ayushman-ray-16b265251/",
        },
        coLead: 
        {
          name: "Bindupautra Jyotibrat",
          role: "Technical Team Co-Lead",
          image: "/Technical Team/Bindupautra Jyotibrat.jpg",
          bio: "AI & ML Enthusiast",
          github: "https://github.com/jyotibrat",
          linkedin: "https://linkedin.com/in/jyotibrat",
          
        },
        members: [
          {
            name: "Harsh Jain",
            role: "Technical Team Member",
            image: "/Technical Team/Harsh Jain.jpeg",
            bio: "Backend Developer || promise I am not tech support",
            github: "https://github.com/Hj-codes",
            linkedin: "https://www.linkedin.com/in/hjworks17/"
          },
          {
          name: "Tushar Kumar Gupta",
          role: "Technical Team Member",
          image: "/Technical Team/TUSHAR KUMAR GUPTA - TECH TEAM.png",
          },
          {
            name: "Omkar Sahay",
            role: "Technical Team Member",
            image: "/Technical Team/OMKAR TECH TEAM.png",
          },
          {
            name: "Shreyash Satadeve",
            role: "Technical Team Member",
            image: "/Technical Team/SHREYASH SATA- TECH TEAM.png",
          },
          {
            name: "Anshika Garg",
            role: "Technical Team Member",
            image: "/Technical Team/ANSHIKA - TECH TEAM.png",
          },
        ]
      }
    },
    "Photography Team": {
      icon: Camera,
      color: "text-google-red",
      members: {
        lead: {
          name: "Shashwat Roy",
          role: "Photography Lead",
          image: "/Photography Team/SHASHWAT ROY.png",
          bio: "Pixel perfectionist",
          github: "https://github.com/shashwat",
          linkedin: "https://www.linkedin.com/in/shashwat-roy-955308315/",
          instagram: "https://www.instagram.com/shasharchives/"
        },
        coLead: {
          name: "Yash Goyal",
          role: "Photography Team Member",
          image: "/Photography Team/YASH GOYAL.png",
          bio: "Passionate photographer capturing moments that tell a story.",
          linkedin: "https://www.linkedin.com/in/yash-goyal-786723333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram: "https://www.instagram.com/clicks_for_memories_?igsh=enR3aW9yeW1xOXRx"
        },
        members: []
      }
    },
    "Event Management Team": {
      icon: Calendar,
      color: "text-google-green",
      members: {
        lead: {
          name: "Himanshu Gupta",
          role: "Event Management Team Lead",
          image: "/Event Management Team/Himanshu Gupta.jpg",
          bio: "Creating unforgettable experiences!",
          github: "https://github.com/HimanshuO2",
          linkedin: "https://www.linkedin.com/in/himanshyou/",
          instagram: "https://www.instagram.com/heyhammy02/"
        },
        coLead: {
          name: "Shraddha Sinha",
          role: "Event Management Team Co-Lead",
          image: "/Event Management Team/Shraddha Sinha 1- EVENT MANGEMENT.png",
          bio: "CSE student",
        },
          members: [
          {
            name: "Apoorva Singh",
            role: "Events Management Team Co-Lead",
            image: "/Event Management Team/Apoorva Singh - EVENT MANGEMENT.png",
          },
          {
            name: "Diya Tanwani",
            role: "Event Management Member",
            image: "/Event Management Team/Diya tanwani - event mangement.png",
            bio: "Persistence beats talent",
            github: "https://github.com/DiyaTanwani",
            linkedin: "https://www.linkedin.com/in/diya-tanwani-894414328/",
            instagram: "https://www.instagram.com/diya_tanwanii"
          },
          {
            name: "Venya Rajput",
            role: "Event Management Team Member",
            image: "/Event Management Team/Venya Rajput  - EVENT MANGEMENT.png",
            bio: "AI & ML Developer",
            instagram: "https://www.instagram.com/_venyarajput_?igsh=YzM3MWg1dGc4cjVr"
          },
          {
            name: "Shreya Raj",
            role: "Event Management Team Member",
            image: "/Event Management Team/Shreya Raj.png",
            bio: "Web Developer",
            linkedin: "https://www.linkedin.com/in/shreya-raj-9313b0284/",
            instagram: "https://www.instagram.com/shrey_aa.25?igsh=MWw5Y2dhbHNzcXZvbw=="
          },
          {
            name: "Rishi Dewangan",
            role: "Event Management Team Member",
            image: "/Event Management Team/RISHI DEWANGAN - 24BAI10811.png",
          },
          {
            name: "Vidushi Chhajed",
            role: "Event Management Team Member",
            image: "/Event Management Team/Vidushi Chhajed-1- EVENT MANAGEMENT.png",
          },
          {
            name: "Ananya Sharma",
            role: "Event Management Team Member",
            image: "/Event Management Team/ANANYA SHARMA - EVENT MANGEMENT.png",
          },
          {
            name: "Pranjali Verma",
            role: "Event Management Team Member",
            image: "/Event Management Team/Pranjali Verma- event managent.png",
            bio: "Aspiring Software Developer with expertise in Java, Web Development, and AI.",
            github: "https://github.com/Pranjali2331",
            linkedin: "https://www.linkedin.com/in/pranjali-verma-567637251/",
            instagram: "https://www.instagram.com/_pranjali_verma_?igsh=MWxsbDU1aWhzNGZxcA%3D%3D&utm_source=qr"
          },
          {
            name: "Abhinav Kumar Mishra",
            role: "Event Management Team Member",
            image: "/Event Management Team/Abhinav Kumar Mishra - EVENT MANGEMENT.png",
          },
          {
            name: "Shreya Sharma",
            role: "Event Management Team Member",
            image: "/Event Management Team/Shreya Sharma - 1- EVENT MANGEMENT.png",
            bio: "Software Developer",
          },
          {
            name: "Adhya Sparsh",
            role: "Event Management Team Member",
            image: "/Event Management Team/Adhya Sparsh- event management.png",
            bio: "Tech Enthusiast & Innovative Problem Solver",
          }
        ]
      }
    },
    "Content Team": {
      icon: MessageSquare,
      color: "text-purple-500",
      members: {
        lead: {
          name: "Vaidehi Gupta",
          role: "Content Team Lead",
          image: "/Content Team/Vaidehi Gupta CONTENT TEAM.png",
        },
        coLead: {
          name: "Shreya Prakash",
          role: "Content Team Co-Lead",
          image: "/Content Team/SHREYA PRAKSH - CONTENT TEAM.png",
        },
        members: [
          {
            name: "Shreya Gupta",
            role: "Content Team Member",
            image: "/Content Team/SHREYA GUPTA - CONTENT TTEAM.png",
          },
        ]
      }
    },
    "Finance Team": {
      icon: DollarSign,
      color: "text-emerald-500",
      members: {
        lead: {
          name: "Tejas Tandon",
          role: "Finance Team Lead",
          image: "/Finance Team/TEJAS TANDON.png",
        },
        coLead: {
          name: "Trisha Kapoor",
          role: "Finance Team Co-Lead",
          image: "/Finance Team/TRISHA KAPOOR.png",
          bio: "Aspiring AI Engineer",
        },
        members: [
          {
            name: "Mishti Singh",
            role: "Finance Team Member",
            image: "/Finance Team/Mishti Singh.png",
            bio: "Tech Fanatic. Learning, building, and embracing the challenges.",
            github: "https://github.com/mishti",
            linkedin: "https://www.linkedin.com/in/mishti-singh-7b3a3b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            instagram: "https://www.instagram.com/mishtiiii_s?igsh=YzVzeXJmY2s2ZXcw"
          }
        ]
      }
    },
    "Social Media and Design Team": {
      icon: Share2,
      color: "text-pink-500",
      members: {
        lead: {
          name: "Raunit Kumar",
          role: "Social Media and Design Team Lead",
          image: "/Social Media and Design Team/RAUNIT.png",
        },
        coLead: {
          name: "Ashish Raj",
          role: "Social Media and Design Team Co-Lead",
          image: "/Social Media and Design Team/ASHISH.png",
          bio: "Website Design and Development",
          linkedin: "https://www.linkedin.com/in/ashish-raj-504760319/"
        },
        members: [
          {
            name: "Vaishnavi Singh",
            role: "Social Media and Design Team Member",
            image: "/Social Media and Design Team/VAISHNAVI.png",
          }
        ]
      }
    },
    "PR and Outreach Team": {
      icon: Megaphone,
      color: "text-yellow-500",
      members: {
        lead: {
          name: "Aarushi Saki",
          role: "PR & Outreach Team Lead",
          image: "/PR and Outreach Team/AARUSHI SAKI.png",
        },
        coLead: {
          name: "Deepesh Kabra",
          role: "PR & Outreach Team Co-Lead",
          image: "/PR and Outreach Team/DEEPESH.png",
          bio: "Constantly growing, endlessly curious.",
          github: "https://github.com/Deepeshkabra",
          linkedin: "https://www.linkedin.com/in/deepesh-kabra-0aa027252/",
          instagram: "https://www.instagram.com/deepesh_kabra/"
        },
        members: [
          {
            name: "Ritu Raj Singh",
            role: "PR & Outreach Team Member",
            image: "/PR and Outreach Team/RITU RAJ SINGH.png",
          },
          {
            name: "Saara Magar",
            role: "PR & Outreach Team Member",
            image: "/PR and Outreach Team/SAARA MAGAR.png",
          }
        ]
      }
    }
  };

  const MemberCard = ({ member }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col w-full max-w-sm"
    >
      <div className="relative h-48 sm:h-64 w-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
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
  
  // For Club Coordinators section - special handling for a single coordinator
  const CoordinatorsSection = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Users className="w-8 h-8 text-google-blue" />
          <h2 className="text-3xl font-bold text-center">Club Coordinators</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {coordinators.map((coordinator) => (
            <div key={coordinator.name} className="w-full sm:w-96">
              <MemberCard member={coordinator} />
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  const TeamSection = ({ title, team, icon: Icon, color }) => {
    const allMembers = [team.members.lead, team.members.coLead, ...team.members.members];
    
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
  
        <CoordinatorsSection />
  
        {Object.entries(teams).map(([key, team]) => (
          <TeamSection
            key={key}
            title={key.split(/(?=[A-Z])/).join(' ')}
            team={team}
            icon={team.icon}
            color={team.color}
          />
        ))}
      </div>
    </motion.div>
  );
};