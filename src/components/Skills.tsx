export default function Skills() {
    const skillCategories = [
      {
        title: 'Code',
        icon: '💻',
        skills: [
          { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
          { name: 'Kotlin', icon: 'https://skillicons.dev/icons?i=kotlin' },
          { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
          { name: 'Spring Boot', icon: 'https://skillicons.dev/icons?i=spring' },
          { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
        ],
      },
      {
        title: 'Platforms',
        icon: '🌐',
        skills: [
          { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
          { name: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes' },
          { name: 'Android', icon: 'https://skillicons.dev/icons?i=androidstudio' },
          { name: 'Terraform', icon: 'https://skillicons.dev/icons?i=terraform' },
        ],
      },
      {
        title: 'Tools',
        icon: '🛠️',
        skills: [
          { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
          { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
          { name: 'LLMs', emoji: '🤖' },
          { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
        ],
      },
    ];
  
    return (
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#6f9d92] via-[#c3c297] to-[#c3c297] bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h3>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#1a1e1e] rounded-lg p-8 border border-[#2a2e2e] hover:border-[#c3c297] transition-all"
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h4 className="text-2xl font-bold text-[#c3c297] text-center mb-6">
                  {category.title}
                </h4>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3 text-gray-300">
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                      )}
                      {skill.emoji && <span className="text-xl">{skill.emoji}</span>}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  