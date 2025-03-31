import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-google-blue">GSOC Innovators Club</h3>
            <p className="text-gray-600">
              Empowering developers to contribute to open source and make a difference in the tech community.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-google-green">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2 text-google-red" />
                <a href="mailto:contact@gsocinnovators.club" className="hover:text-google-blue transition">
                gsocinnovators.queries@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-google-red">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/GSOC-Innovators-Club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-google-blue transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/gsoc-innovators/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-google-blue transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/gsoc_innovators_club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-google-red transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} GSOC Innovators Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};