import React from 'react';
import profileImg from '../assets/lallo-vigil.jpg';

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
                            My name is Lallo Vigil (<span className="text-cyan-400">pronounced La Low V hill</span>). I'm a web developer based in San Antonio, TX.
                        </p>
                        <p>
                            I graduated from Colorado State University-Pueblo. My major was <span className="text-cyan-400">Mass Communications with an emphasis in New Media Studies</span>, and also received a minor in <span className="text-cyan-400">Computer Information Systems with an emphasis in Web Development</span>. Upon my graduation, I was hired as a Web Developer for Colorado State University-Pueblo's Information Technology department, where I worked for 11 years. I then accepted a new opportunity in San Antonio, TX, as a Web Manager at the University of the Incarnate Word and then at Randolph Brooks Federal Credit Union.
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at <span className="text-cyan-400"> UT San Antonio</span>, as a <span className="text-cyan-400">Sr. Web Developer</span>.
                            My main focus these days is building accessible, inclusive products and digital experiences for the university.
                        </p>
                        <p>
                            When I'm not at the computer, I'm usually hanging out with my family, listening to 90's Hip Hop and Podcasts, or working out.
                        </p>
                    </div>

                    <div className="md:w-2/5 flex justify-center md:justify-start">
                        <div className="relative group w-64 h-64">
                            <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-slate-700 rounded-lg overflow-hidden group-hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center">
                                <img src={profileImg} alt="Lallo Vigil" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
