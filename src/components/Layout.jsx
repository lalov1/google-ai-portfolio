import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Lallo <span className="text-cyan-400">Vigil</span>
                    </a>

                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-surface/95 backdrop-blur-md absolute top-full left-0 w-full border-b border-white/10 shadow-xl">
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyan-400 font-medium block py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-surface py-8 mt-20 border-t border-slate-700/50">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Lallo Vigil. Built with React & Tailwind.</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="https://github.com/lalov1" className="hover:text-cyan-400 transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/lallovigil/" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                        <a href="https://codepen.io/lalov1" className="hover:text-cyan-400 transition-colors">CodePen</a>
                        <a href="https://www.freecodecamp.org/lalov1" className="hover:text-cyan-400 transition-colors">freeCodeCamp</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
