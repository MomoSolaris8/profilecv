export default function About() {
    const avatarSrc = '/avater.png';
    const hasAvatar = avatarSrc.trim().length > 0;

    return (
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#6f9d92] via-[#c3c297] to-[#c3c297] bg-clip-text text-transparent">
              About Me
            </span>
          </h3>
  
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#c3c297] flex-shrink-0">
              {hasAvatar ? (
                <img
                  src={avatarSrc}
                  alt="Yu Heydemann"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#0f1313] flex items-center justify-center text-[#c3c297] text-3xl font-semibold">
                  YH
                </div>
              )}
            </div>
  
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer, focused on crafting elegant software
              solutions for complex problems(Cloud, Code & AI – The Future of Tech.). 
            </p>
          </div>
        </div>
      </section>
    );
  }
  
