'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EcommercePage() {

  const project = {
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
    demo: 'https://ecommerce-demo.netlify.app',
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
                  <div className="text-8xl mb-4">🛒</div>
                  <p className="text-gray-400">E-commerce Platform</p>
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
            {project.image && (project.image.includes('youtube.com') || project.image.includes('youtu.be')) ? (
              <iframe
                src={`${project.image.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&playlist=${project.image.split('v=')[1]}`}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-8xl mb-4">🛒</div>
                  <p className="text-gray-400">E-commerce Platform</p>
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
            {project.description} This project demonstrates full-stack development expertise 
            with modern frameworks and cloud technologies. Built with scalability and user 
            experience in mind, it showcases comprehensive e-commerce functionality.
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
