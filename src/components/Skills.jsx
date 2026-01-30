import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Next.js", "Redux"]
        },
        {
            title: "Tools & Workflow",
            skills: ["Git", "GitHub", "VS Code", "Vite", "Webpack", "npm/yarn", "Figma"]
        },
        {
            title: "Performance & Accessibility",
            skills: ["Responsive Design", "WCAG Guidelines", "SEO Best Practices", "Performance Optimization"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                    <span className="text-cyan-400 mr-2">02.</span> Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-surface p-6 rounded-lg hover:shadow-xl hover:shadow-cyan-400/10 transition-shadow duration-300 border border-slate-700/50"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <span className="text-cyan-400 mr-2">▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
