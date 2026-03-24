import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

export const OpenSourceEvents = () => {
  const ongoingEvents = [
    {
      title: "Google Summer of Code 2026",
      organization: "Google",
      date: "May - September 2026",
      registrationDeadline: "March 31, 2026",
      duration: "2 - 5 months",
      description: "A global program focused on bringing more student developers into open source software development.",
      link: "https://summerofcode.withgoogle.com/",
      learnmore: "https://summerofcode.withgoogle.com/about",
      registrationLink: "https://summerofcode.withgoogle.com/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/1200px-Google_Summer_of_Code_sun_logo_2022.svg.png"
    },
    {
      title: "Social Summer of Code",
      organization: "Social (formerly Script Foundation)",
      date: "June - August 2026",
      registrationDeadline: "May 30, 2026",
      duration: "3 months",
      description: "A summer program that encourages students to contribute to open source projects and build their skills.",
      link: "https://socialsummerofcode.com/",
      learnmore: "https://socialsummerofcode.com/about",
      registrationLink: "https://socialsummerofcode.com/#register",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XOebaMXwswi9Z7ZIOpdWCM_oN_Ks6OPIOw&s"
    },
    {
      title: "Nexus Spring of Code 2026",
      organization: "Nexus",
      date: "May - June 2026",
      registrationDeadline: "March 20, 2026",
      duration: "1.5 months",
      description: "A spring program for open source contributions and learning.",
      link: "https://www.nsoc.in/",
      learnmore: "https://nsoc.in/#about",
      registrationLink: "https://unstop.com/p/open-source-program-nexus-spring-of-code-1661333",
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/69ba4955ba5cf_organisation_image-i3OfWSyv5S1028710285yvwHvIzQQh.png?d=200x200"
    }
  ];

  const upcomingEvents = [
    {
      title: "Hacktoberfest 2026",
      organization: "DigitalOcean",
      date: "October 1-31, 2026",
      duration: "1 month",
      description: "A month-long celebration of open source software run by DigitalOcean.",
      link: "https://hacktoberfest.com/",
      learnmore: "https://hacktoberfest.com/about/",
      image: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hacktoberfest.com/&size=128"
    }
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

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ongoing Events</h2>
          <div className="space-y-8">
            {ongoingEvents.map((event, index) => (
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
                      <span>Program Duration: {event.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>Registration Deadline: {event.registrationDeadline}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="flex gap-4">
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
                    <motion.a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-600/90 transition"
                    >
                      Register Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
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
                      <span>Program Duration: {event.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
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
    </div>
  );
};