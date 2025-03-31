import { useState } from 'react';
import { Code2, Users, Rocket, Calendar, Menu, X, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/projects', icon: Rocket, label: 'Projects' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/open-source-events', icon: Calendar, label: 'Open Source Events' },
  ];

  const communityLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/gsoc_innovators_club/' },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://chat.whatsapp.com/gsocinnovators' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/gsoc-innovators/posts/?feedView=all' },
  ];

  return (
    <nav className="bg-white shadow-google sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="../../../public/Assets/Logos/GSOC Innovators Club Website.png"
                alt="GSOC Innovators Club Logo"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-xl font-bold text-gray-900">GSOC Innovators Club</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link flex items-center space-x-1 ${isActive(path) ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
            
            {/* Community Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowCommunity(true)}
                onMouseLeave={() => setShowCommunity(false)}
                className="nav-link flex items-center space-x-1"
              >
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </button>
              
              <AnimatePresence>
                {showCommunity && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowCommunity(true)}
                    onMouseLeave={() => setShowCommunity(false)}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                  >
                    {communityLinks.map(({ icon: Icon, label, url }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-google-blue" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Logo */}
            <div className="ml-4 flex items-center">
              <img 
                src="../../../public/Assets/Logos/VITB logo.png" // Replace with your actual logo path
                alt="Additional Logo"
                className="w-15 h-14 full" // Adjust size as needed
              />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-google-blue hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link flex items-center space-x-2 ${isActive(path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
              
              {/* Mobile Community Links */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <p className="px-4 py-2 text-sm font-medium text-gray-500">Join Community</p>
                {communityLinks.map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Right Logo - Optional if you want it to appear in mobile view */}
              <div className="border-t border-gray-200 mt-2 pt-2 flex justify-center">
                <img 
                  src="../../../public/Assets/Logos/VITB logo.png" // Same as above
                  alt="VITB Logo"
                  className="w-15 h-14 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};