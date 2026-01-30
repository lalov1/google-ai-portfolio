import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time data visualization, inventory management, and order tracking.",
            tags: ["React", "Tailwind CSS", "Chart.js", "Node.js"],
            links: { demo: "#", repo: "#" }
        },
        {
            title: "Task Management App",
            description: "A productivity application helping teams organize projects with Kanban boards, drag-and-drop interfaces, and collaboration features.",
            tags: ["React", "Redux", "Firebase", "Styled Components"],
            links: { demo: "#", repo: "#" }
        },
        {
            title: "Weather Forecast App",
            description: "A beautiful weather application providing detailed forecasts, radar maps, and severe weather alerts using a third-party API.",
            tags: ["JavaScript", "HTML/CSS", "OpenWeatherMap API"],
            links: { demo: "#", repo: "#" }
        }
    ];

    // Colors for placeholder project images
    const bgColors = ["bg-blue-900", "bg-purple-900", "bg-emerald-900"];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 flex items-center">
                    <span className="text-cyan-400 mr-2">03.</span> Some Things I've Built
                </h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                            {/* Project Image Placeholder */}
                            <div className="w-full md:w-3/5 relative group cursor-pointer">
                                <div className={`absolute inset-0 ${bgColors[index]} opacity-40 group-hover:opacity-0 transition-opacity duration-300 rounded-lg`}></div>
                                <div className={`w-full h-64 md:h-80 ${bgColors[index]} rounded-lg border border-slate-700/50 flex items-center justify-center`}>
                                    <span className="text-6xl opacity-30">🖥️</span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <p className="text-cyan-400 font-mono text-sm mb-2">Featured Project</p>
                                <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors cursor-pointer">
                                    {project.title}
                                </h3>

                                <div className={`bg-surface p-6 rounded-lg text-gray-400 mb-6 shadow-xl ${index % 2 === 0 ? 'md:-ml-16 relative z-10' : 'md:-mr-16 relative z-10'}`}>
                                    {project.description}
                                </div>

                                <ul className={`flex flex-wrap text-sm font-mono text-gray-400 mb-8 gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    {project.tags.map((tag, idx) => (
                                        <li key={idx} className="whitespace-nowrap">{tag}</li>
                                    ))}
                                </ul>

                                <div className={`flex gap-6 text-gray-300 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    <a href={project.links.repo} className="hover:text-cyan-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a href={project.links.demo} className="hover:text-cyan-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
