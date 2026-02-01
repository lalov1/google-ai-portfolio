import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "UT San Antonio",
            description: "I currently work at UT San Antonio as a Sr. Web Developer. I help implement new templates inside Cascade CMS by building components using the Velocity programming language. I also contribute to the Fractal Design Library System by opening and addressing issues on the GitHub repository.",
            tags: ["Velocity", "Bootstrap", "jQuery", "Cascade CMS", "fractal.js", "handlebars.js"],
            links: { demo: "https://utsa-asc.github.io/college-dls/", repo: "https://github.com/utsa-asc/college-dls" },
            img: "src/assets/utsa.jpg"
        },
        {
            title: "University of the Incarnate Word",
            description: "I worked at the University of the Incarnate Word as the Web Manager, where I helped oversee the operations of the website and mobile app. I've assisted in many large projects such as website redesign and helping implement campus services such as a calendaring system. We use Cascade CMS, which is mainly for Higher Education websites.",
            tags: ["Cascade CMS", "JavaScript", "HTML/CSS", "Bootstrap", "jQuery"],
            links: { demo: "https://www.uiw.edu/" },
            img: "src/assets/uiw.jpg"
        },
        {
            title: "Colorado State University-Pueblo",
            description: "I worked at Colorado State University-Pueblo for over 15 years, including four as a student work-study for the Webmaster on campus. During my tenure at the university, I maintained the website and worked as a Frontend Developer creating forms and applications for the Student, Faculty, and Staff Portals.",
            tags: ["jQuery", "Bootstrap", "JavaScript", "HTML/CSS", "Git", "GitHub"],
            links: { demo: "https://www.csupueblo.edu/", repo: "https://github.com/lalov1/bootstrap-forms/blob/master/index.html" },
            img: "src/assets/csu-pueblo.jpg"
        },
        {
            title: "Interactive Campus Map",
            description: "This is an interactive campus map I helped create at CSU-Pueblo using Leaflet, jQuery, and Bootstrap.",
            tags: ["JavaScript", "HTML/CSS", "LeafletJS", "jQuery", "Bootstrap"],
            links: { demo: "https://www.csupueblo.edu/about/campus/interactive-map.html", repo: "https://github.com/lalov1/campus-map" },
            img: "src/assets/interactive-map.jpg"
        },
        {
            title: "Abodio",
            description: "This is a project we worked on during our second year in the GoCodeColorado competition. The project helps an individual to see if they could put an accessory dwelling unit (tiny home) on their property. We ended up being picked as one of the three teams that won the competition.",
            tags: ["LeafletJS", "jQuery", "Bootstrap"],
            links: { demo: "https://www.sos.state.co.us/pubs/newsRoom/pressReleases/2018/PR20180608GoCodeWinners.html" },
            img: "src/assets/abodio.jpg"
        },
        {
            title: "Hits the Spot",
            description: "A project we built for the GoCodeColorado competition, which we were a runner up.",
            tags: ["LeafletJS", "jQuery", "Bootstrap"],
            links: { demo: "https://gazette.com/business/colordo-springs-teams-developing-apps-for-restaurants-water-rights-advance/article_0a1f6e48-8726-5e67-a3c1-3e0cf1b6b4b8.html" },
            img: "src/assets/hits-the-spot.jpg"
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

                            <div className="w-full md:w-3/5 relative group cursor-pointer">
                                <div className={`absolute inset-0 rounded-lg`}></div>
                                <div className={`w-full h-64 md:h-80 rounded-lg border border-slate-700/50 flex items-center justify-center`}>
                                    <span className="text-6xl grayscale-0 hover:grayscale-100 transition-all duration-300"><img src={project.img} alt={project.title} /></span>
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

                                    {project.links.repo && project.links.repo.length > 1 && (
                                        <a href={project.links.repo} className="hover:text-cyan-400 transition-colors" title={`${project.title} Repository`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    )}
                                    <a href={project.links.demo} className="hover:text-cyan-400 transition-colors" title={`${project.title} Demo`}>
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
