import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email',
      description: 'Mail',
      href: 'mailto:urvishpandya14@gmail.com',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Linkedin className="w-8 h-8 text-white" />,
      title: 'LinkedIn',
      description: 'Connect with me',
      href: 'https://www.linkedin.com/in/urvish-pandya-2b5832216/',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Github className="w-8 h-8 text-white" />,
      title: 'GitHub',
      description: 'View my code',
      href: 'https://github.com/urvish2930/',
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-gray-400 text-lg">
          Ready to collaborate on something amazing? Let's talk!
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <a key={index} href={method.href} className="group">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400">{method.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;