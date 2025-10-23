'use client';

import Link from 'next/link';

export default function Projects() {

    const projects = [
      {
        id: 'ticketapp',
        title: 'Ticketapp',
        description: 'Microservice Architecture - A comprehensive ticketing system',
        image: '/microserive.png',
        link: '/ticketapp',
      },
      {
        id: 'llm-chatbot',
        title: 'LLM Chatbot',
        description: 'AI Assistant with natural language processing capabilities',
        image: '',
        link: '/llm-chatbot',
      },
      {
        id: 'ecommerce',
        title: 'E-Commerce Platform',
        description: 'Full-stack solution with Angular & Java Spring Boot',
        image: 'https://www.youtube.com/watch?v=z5in-_mgEI8',
        link: '/ecommerce',
      },
    ];
  
    return (
      <section id="projects" className="py-24 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#6f9d92] via-[#c3c297] to-[#c3c297] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h3>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group bg-[#1a1e1e] rounded-lg overflow-hidden border border-[#2a2e2e] hover:border-[#c3c297] transition-all duration-300 transform hover:scale-105 cursor-pointer block"
              >
                <div className="relative h-64 bg-[#0f1313] flex items-center justify-center">
                  {project.image && (project.image.includes('youtube.com') || project.image.includes('youtu.be')) ? (
                    <iframe
                      src={`${project.image.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('v=')[1]}`}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-gray-500 text-center">
                      <div className="text-4xl mb-2">
                        {project.id === 'llm-chatbot' ? '🤖' : 
                         project.id === 'ecommerce' ? '🛒' : '📋'}
                      </div>
                      <p className="text-sm">
                        {project.id === 'llm-chatbot' ? 'AI Chatbot Interface' :
                         project.id === 'ecommerce' ? 'E-commerce Platform' : 'Project Preview'}
                      </p>
                    </div>
                  )}
                </div>
  
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block text-[#c3c297] font-semibold group-hover:underline">
                      View Details →
                    </span>
                    <span className="text-xs bg-[#c3c297] text-black px-2 py-1 rounded">
                      Detailed
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
  