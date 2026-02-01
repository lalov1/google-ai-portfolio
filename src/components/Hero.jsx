import React from 'react';
import heroImg from '../assets/lallo-vigil-comic.png';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-cyan-400 font-medium mb-4 text-lg">Hi, my name is</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Lallo Vigil<span className="text-cyan-400">.</span>
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-8">
                            I build things for the web.
                        </h2>
                        <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                            I'm a frontend developer specializing in building exceptional digital experiences.
                            Currently, I'm focused on creating accessible, human-centered products using
                            <span className="text-cyan-400"> React</span> and <span className="text-cyan-400">Tailwind CSS</span>.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400/10 transition-colors duration-300"
                            >
                                Check out my work!
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-cyan-400 text-background font-bold rounded hover:bg-cyan-300 transition-colors duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg transform translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 bg-surface rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                                <img src={heroImg} alt="Animated photo of Lallo Vigil" />
                                <div className="w-full h-full bg-gradient-to-br from-surface to-slate-700 flex items-center justify-center">
                                    <span className="text-6xl">👨‍💻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
