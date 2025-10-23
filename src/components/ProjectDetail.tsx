'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const projectData = {
    'ticketapp': {
      title: 'Ticketapp - Microservice Architecture',
      description: 'A comprehensive ticketing system built with microservice architecture',
      image: '/microserive.png',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'Redis'],
      features: [
        'User authentication and authorization',
        'Ticket creation and management',
        'Real-time notifications',
        'File upload and management',
        'Admin dashboard',
        'API rate limiting',
        'Database optimization'
      ],
      challenges: [
        'Implementing microservice communication',
        'Managing data consistency across services',
        'Handling high concurrent user loads',
        'Ensuring service reliability and fault tolerance'
      ],
      solutions: [
        'Used event-driven architecture with message queues',
        'Implemented distributed transactions with saga pattern',
        'Applied caching strategies with Redis',
        'Implemented circuit breaker pattern for service resilience'
      ],
      github: 'https://github.com/yourusername/ticketapp',
      demo: 'https://ticketapp-demo.netlify.app',
    },
    'llm-chatbot': {
      title: 'LLM Chatbot - AI Assistant',
      description: 'An intelligent chatbot powered by Large Language Models with natural language processing capabilities',
      image: '',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'WebSocket', 'PostgreSQL', 'Docker'],
      features: [
        'Natural language conversation',
        'Context-aware responses',
        'Multi-language support',
        'Real-time chat interface',
        'Conversation history',
        'Custom model fine-tuning',
        'API integration capabilities',
        'User session management'
      ],
      challenges: [
        'Optimizing response time for real-time chat',
        'Managing conversation context and memory',
        'Handling API rate limits and costs',
        'Implementing secure API key management',
        'Creating intuitive user interface'
      ],
      solutions: [
        'Implemented streaming responses for better UX',
        'Used conversation memory with sliding window approach',
        'Applied intelligent caching and request batching',
        'Implemented secure environment variable management',
        'Created responsive React components with real-time updates'
      ],
      github: 'https://github.com/yourusername/llm-chatbot',
      demo: 'https://llm-chatbot-demo.netlify.app',
    },
    'ecommerce': {
      title: 'E-Commerce Platform - Full Stack',
      description: 'A complete e-commerce solution built with Angular frontend and Java Spring Boot backend',
      image: 'https://www.youtube.com/watch?v=z5in-_mgEI8',
      technologies: ['Angular', 'TypeScript', 'Java Spring Boot', 'MySQL', 'JWT', 'Stripe API', 'AWS S3', 'Docker'],
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'User registration and authentication',
        'Payment processing with Stripe',
        'Order management system',
        'Admin dashboard for inventory',
        'Image upload and management',
        'Email notifications',
        'Responsive mobile design'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing large product catalogs efficiently',
        'Handling concurrent user sessions',
        'Optimizing database queries for performance',
        'Creating seamless user experience across devices'
      ],
      solutions: [
        'Integrated Stripe for secure payment processing',
        'Implemented pagination and caching for product listings',
        'Used Redis for session management and caching',
        'Optimized database with proper indexing and query optimization',
        'Applied responsive design principles and mobile-first approach'
      ],
      github: 'https://github.com/yourusername/ecommerce-platform',
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#1a1e1e] rounded-lg p-6 max-w-md mx-4">
          <h2 className="text-xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-gray-400 mb-4">The requested project could not be found.</p>
          <button
            onClick={onClose}
            className="bg-[#c3c297] text-black px-4 py-2 rounded hover:bg-[#a8a882] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1e1e] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-[#2a2e2e]">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Demonstration Section */}
        {project.image && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Demonstration</h2>
            <div className="relative h-[400px] bg-[#0f1313] rounded-lg overflow-hidden border border-[#2a2e2e]">
              {project.image.includes('youtube.com') || project.image.includes('youtu.be') ? (
                <iframe
                  src={`${project.image.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('v=')[1]}`}
                  title={project.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description} This project demonstrates advanced microservice architecture 
                  patterns and modern development practices. Built with scalability and maintainability 
                  in mind, it showcases real-world problem-solving skills.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-[#c3c297] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Project Details</h4>
                  <div className="space-y-2 text-gray-300">

                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technologies' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-[#0f1313] border border-[#2a2e2e] rounded-lg p-3 text-center"
                  >
                    <span className="text-[#c3c297] font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Challenges Faced</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-[#c3c297] mr-3 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'solutions' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Solutions Implemented</h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-[#c3c297] mr-3 mt-1">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#2a2e2e] flex justify-between items-center">
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white px-4 py-2 rounded hover:bg-[#444] transition-colors"
              >
                View Code
              </a>
            )}
      
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
