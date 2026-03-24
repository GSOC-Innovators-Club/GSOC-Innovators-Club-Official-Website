import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Projects = () => {
  const [projectStars, setProjectStars] = useState<{[key: string]: number}>({});

  const projects = [
    {
      title: "Talk Space",
      image: "/Projects/talk space.png",
      description: "Talk Space is a video calling application built with Go, TypeScript, and Kotlin that allows users to connect with random people online for spontaneous conversations, similar to Omegle. It provides a platform for meeting new people virtually through video calls.",
      tech: ["Go", "TypeScript", "Kotlin"],
      github: "https://github.com/GSOC-Innovators-Club/Talk-Space",
      demo: "" // Empty demo for now
    }
  ];

  const fetchStars = async (githubUrl: string) => {
    try {
      const urlParts = githubUrl.split('/');
      const owner = urlParts[urlParts.length - 2];
      const repo = urlParts[urlParts.length - 1];
      
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (response.ok) {
        const data = await response.json();
        setProjectStars(prev => ({ ...prev, [githubUrl]: data.stargazers_count }));
      }
    } catch (error) {
      console.error('Error fetching stars:', error);
    }
  };

  useEffect(() => {
    projects.forEach(project => {
      if (project.github) {
        fetchStars(project.github);
      }
    });
  }, []);

  const getStars = (githubUrl: string) => {
    return projectStars[githubUrl] ?? 0;
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our open-source projects and contributions to the developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 flex items-center"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 flex items-center"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-5 h-5 mr-1" />
                    <span>{getStars(project.github)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};