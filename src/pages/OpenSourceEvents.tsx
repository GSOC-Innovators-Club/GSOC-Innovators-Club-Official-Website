import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

export const OpenSourceEvents = () => {
  const events = [
    {
      title: "Google Summer of Code 2025",
      organization: "Google",
      date: "March - September 2025",
      registrationDeadline: "April 8, 2025",
      description: "A global program focused on bringing more student developers into open source software development.",
      link: "https://summerofcode.withgoogle.com/",
      learnmore: "https://summerofcode.withgoogle.com/about",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/1200px-Google_Summer_of_Code_sun_logo_2022.svg.png",
      tags: ["Internship", "Coding", "Mentorship", "Open-Source"]
    },
    {
      title: "Hacktoberfest 2025",
      organization: "DigitalOcean",
      date: "October 1-31, 2025",
      registrationDeadline: "October 31, 2025",
      description: "A month-long celebration of open source software run by DigitalOcean.",
      link: "https://hacktoberfest.com/",
      learnmore: "https://hacktoberfest.com/about/",
      image: "https://owncast.online/images/hacktoberfest.png?auto=format&fit=crop&q=80",
      tags: ["Open Source", "Beginner Friendly", "1-month event"]
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Open Source Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover upcoming open source events and programs from around the world.
          </p>
        </motion.div>

        <div className="space-y-8 mb-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="text-google-blue">{event.organization}</p>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-google-blue hover:text-google-blue/80 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Registration Deadline: {event.registrationDeadline}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={event.learnmore}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-google-blue text-white px-6 py-2 rounded-lg hover:bg-google-blue/90 transition"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};