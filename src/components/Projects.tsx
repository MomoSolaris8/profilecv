export default function Projects() {
    const projects = [
      {
        title: 'Ticketapp',
        description: 'micorservice',
        image: '/microserive.png',
      },
      {
        title: 'LLM Chatboot',
        description: 'An integrated Large Language Model (LLM)',
        image: '',
      },
      {
        title: 'E-Commerce Platform with Angular & Java Springboot',
        description: '',
        image: 'https://www.youtube.com/watch?v=z5in-_mgEI8',
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
              <div
                key={index}
                className="group bg-[#1a1e1e] rounded-lg overflow-hidden border border-[#2a2e2e] hover:border-[#c3c297] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 bg-[#0f1313] flex items-center justify-center">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
  
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <span className="inline-block text-[#c3c297] font-semibold group-hover:underline">
                    View Project →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  