'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TicketappPage() {

  const project = {
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
    demo: 'https://ticketapp-demo.netlify.app'
  };

  return (
    <div className="min-h-screen bg-[#0a0e0e] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#6f9d92] via-[#c3c297] to-[#c3c297] bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333] text-white px-6 py-3 rounded-lg hover:bg-[#444] transition-colors"
                >
                  View Code
                </a>
              </div>
              <div className="flex gap-8 text-sm text-gray-400">
            
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] bg-[#0f1313] rounded-lg overflow-hidden border border-[#2a2e2e] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📋</div>
                  <p className="text-gray-400">Microservice Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstration Section */}
      <section className="py-16 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Demonstration</h2>
          <div className="relative h-[500px] lg:h-[600px] bg-[#0f1313] rounded-lg overflow-hidden border border-[#2a2e2e]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-8xl mb-4">📋</div>
                  <p className="text-gray-400">Microservice Architecture</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {project.description} This project demonstrates advanced microservice architecture 
            patterns and modern development practices. Built with scalability and maintainability 
            in mind, it showcases real-world problem-solving skills.
          </p>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#c3c297] mr-3 mt-1">•</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#1a1e1e] border border-[#2a2e2e] rounded-lg p-4 text-center hover:border-[#c3c297] transition-colors"
              >
                <span className="text-[#c3c297] font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Challenges Faced</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-[#1a1e1e] border border-[#2a2e2e] rounded-lg p-6">
                <div className="flex items-start">
                  <span className="text-[#c3c297] mr-4 mt-1 text-xl">•</span>
                  <p className="text-gray-300 text-lg">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Solutions Implemented</h2>
          <div className="space-y-6">
            {project.solutions.map((solution, index) => (
              <div key={index} className="bg-[#1a1e1e] border border-[#2a2e2e] rounded-lg p-6">
                <div className="flex items-start">
                  <span className="text-[#c3c297] mr-4 mt-1 text-xl">•</span>
                  <p className="text-gray-300 text-lg">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-16 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-6xl text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center text-[#c3c297] hover:text-[#a8a882] transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
