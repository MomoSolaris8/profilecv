export default function Contact() {
    return (
      <section id="contact" className="py-24 px-6 bg-[#0f1313]">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#6f9d92] via-[#c3c297] to-[#c3c297] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h3>
  
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free
            to reach out if you'd like to work together!
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yuheydemann@outlook.de"
              className="px-8 py-3 bg-[#c3c297] hover:bg-[#b3b287] text-[#0a0e0e] font-semibold rounded-full transition-all transform hover:scale-105"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/yu-h-54686414a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#6f9d92] hover:bg-[#5f8d82] text-white font-semibold rounded-full transition-all transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MomoSolaris8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#c3c297] hover:bg-[#b3b287] text-[#0a0e0e] font-semibold rounded-full transition-all transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
  