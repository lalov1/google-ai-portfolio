import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 text-center">
            <div className="container mx-auto px-6 max-w-2xl">
                <h2 className="text-cyan-400 font-mono text-lg mb-4">04. What's Next?</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-400 text-lg mb-12">
                    Although I'm not currently seeking new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:lallo.vigil@gmail.com"
                    className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400/10 transition-colors duration-300"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
