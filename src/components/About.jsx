import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                    <span className="text-cyan-400 mr-2">01.</span> About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-3/5 text-gray-400 text-lg leading-relaxed space-y-6">
                        <p>
                            Hello! My name is Alex and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes —
                            turns out hacking together buttons and gradients taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an
                            <span className="text-cyan-400"> advertising agency</span>, a
                            <span className="text-cyan-400"> start-up</span>, and a
                            <span className="text-cyan-400"> huge corporation</span>.
                            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                        <p>
                            When I'm not at the computer, I'm usually hanging out with my cat, reading a sci-fi novel, or hiking.
                        </p>
                    </div>

                    <div className="md:w-2/5 flex justify-center md:justify-start">
                        <div className="relative group w-64 h-64">
                            <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-slate-700 rounded-lg overflow-hidden group-hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-4xl">👋</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
