import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Rocket, Github, Calendar, Users, Link as LinkIcon } from 'lucide-react';
import { SplineScene } from "@/components/ui/spline";
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const valueNum = parseInt(value.replace('+', ''));

  useEffect(() => {
    let start = 0;
    const end = valueNum;
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [valueNum, duration]);

  return <span>{count}{value.includes('+') ? '+' : ''}</span>;
};

// Community Modal Component
const CommunityModal = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const communityLinks = [
    { 
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/gsoc_innovators_club/',
      color: 'bg-pink-500'
    },
    { 
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/company/gsoc-innovators/',
      color: 'bg-blue-600'
    },
    { 
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/GSOC-Innovators-Club',
      color: 'bg-gray-800'
    },
    { 
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: 'https://chat.whatsapp.com/gsocinnovators',
      color: 'bg-green-500'
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalVariants}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Join Our Community</h2>
        <div className="grid grid-cols-2 gap-4">
          {communityLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
            >
              <i className={`fab fa-${link.icon}`}></i>
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const upcomingEvents = [
    {
      title: "Summer of CodeFest '25",
      date: "April 13-14, 2025",
      description: "This event will have a Seminar and an innovative Hackathon. Learn how to prepare for GSOC and increase your chances of selection. Also compete in a hackathon with peers in building innovative projects.",
      image: "/Events/poster.jpg"
    },
    
  ];

  // Enhanced scroll animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Hero Section with dark background */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800">
        <motion.div 
          style={{ opacity: heroOpacity }} 
          className="min-h-screen relative flex items-center pt-20"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-google-blue/10 via-transparent to-google-yellow/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
          </div>

          <motion.div 
            // style={{ scale: heroScale, y: contentY }}
            className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center"
          >
            <div className="max-w-2xl text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Build the future with {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-blue via-google-red to-google-yellow animate-gradient">
                  GSOC Innovators Club
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
              >
                Join our community of passionate developers contributing to open-source and preparing for Google Summer of Code.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.button 
                  onClick={() => setShowCommunityModal(true)}
                  className="btn-primary text-lg px-8 py-3 rounded-full font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(66, 133, 244, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Join Now
                  <Rocket className="w-5 h-5" />
                </motion.button>
                
                <motion.button 
                  onClick={() => navigate('/open-source-events')}
                  className="btn-outline text-lg px-8 py-3 rounded-full font-medium text-white border-2 border-white hover:bg-white hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </div>
            
            {/* 3D Robot with enhanced styling */}
            <div className="w-full top-20 md:top-6 md:w-1/2 h-[500px] md:h-[600px] relative mt-12 md:mt-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section with counting animation */}
        <motion.div 
          className="relative z-10 bg-gray-800/80 backdrop-blur-md border-t border-b border-gray-700 py-12"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {[
                { value: "40+", label: "Active Members", icon: Users },
                { value: "1+", label: "Projects", icon: Github },
                { value: "1+", label: "Events", icon: Calendar }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center">
                    <stat.icon className="w-12 h-12 text-google-blue mb-4" />
                    <h3 className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter value={stat.value} duration={1.5} />
                    </h3>
                    <p className="text-lg text-gray-300">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-white py-24 flex justify-center">
        <div className="max-w-4xl w-full px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us in our upcoming workshops and events</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-google-blue mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link
                    to="/events"
                    className="text-google-blue hover:text-google-blue/80 font-medium flex items-center justify-center gap-2"
                  >
                    Learn More
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-google-blue text-white px-8 py-3 rounded-full hover:bg-google-blue/90 transition-colors"
            >
              View All Events
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-google-blue to-google-green py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to start your open-source journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of developers who are building the future with open-source.
            </p>
            <motion.button 
              onClick={() => navigate('/open-source-events')}
              className="bg-white text-google-blue text-lg px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Community Modal */}
      <AnimatePresence>
        {showCommunityModal && (
          <CommunityModal
            isOpen={showCommunityModal}
            onClose={() => setShowCommunityModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};