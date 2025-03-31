import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, X, Users, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

// Event Modal Component
const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 md:h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto flex-1">
            <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
              {event.capacity && (
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Capacity: {event.capacity}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
              
              {event.agenda && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Agenda</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {event.agenda.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {event.requirements && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Requirements</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {event.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            {event.registrationLink ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-google-blue text-white px-6 py-2 rounded-lg hover:bg-google-blue/90 transition text-center"
              >
                Register Now
              </a>
            ) : (
              <button
                disabled
                className="w-full md:w-auto bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
              >
                Registration Coming Soon
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const events = {
    upcoming: [
      {
        title: "TBA",
        date: "April 13, 2025",
        time: "TBA",
        location: "Offline",
        description: "This event will have a Seminar and an innovative Hackathon. Learn how to prepare for GSOC and increase your chances of selection. Also compete in a hackathon with peers in building innovative projects.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
        capacity: "TBA",
        registrationLink: "https://example.com/register/gsoc-event", // Add your registration link here
        agenda: [
          "Introduction to GSOC",
          "Introduction to Github",
          "Fun Activities",
          "Hackathon"
        ],
        requirements: [
          "Basic programming knowledge",
          "GitHub account",
          "Laptop with internet connection"
        ]
      },
    ],
    ongoing: [],
    past: []
  };

  const EventCard = ({ event, isPast = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
        <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{event.description}</p>
        <button
          onClick={() => setSelectedEvent(event)}
          className="text-google-blue hover:text-google-blue/80 font-medium flex items-center gap-2"
        >
          Learn More
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  const EventSection = ({ title, events, isPast = false }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={event.title} event={event} isPast={isPast} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting workshops, hackathons, and tech talks.
          </p>
        </motion.div>

        {events.upcoming.length > 0 && (
          <EventSection title="Upcoming Events" events={events.upcoming} />
        )}
        
        {events.ongoing.length > 0 && (
          <EventSection title="Ongoing Events" events={events.ongoing} />
        )}
        
        {events.past.length > 0 && (
          <EventSection title="Past Events" events={events.past} isPast={true} />
        )}

        <AnimatePresence>
          {selectedEvent && (
            <EventModal
              event={selectedEvent}
              isOpen={!!selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};