import React from 'react';

// For static assets like images and PDFs placed in the 'public' folder,
// you can reference them directly from the root path '/'.
// Ensure 'rutu.jpg' and 'Rutuja_Madane_Resume.pdf' are in your public folder.
const profileImg = '/rutu.jpg';
const resumePdf = '/Rutuja_Madane_Resume.pdf';

// Main App Component
function App() {
  const projects = [
    {
      id: 1,
      title: 'Rental-Hub E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.',
      
      imageUrl: 'https://www.pptssolutions.com/wp-content/uploads/2022/04/Rental-Management-01-2-1536x1024.jpg' // You can replace this with a local image if you have one for the project
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application using React and Firebase, allowing users to create, update, and delete tasks in real-time.',
      demoLink: '#',
      githubLink: '#',
      imageUrl: 'https://placehold.co/400x250/38b2ac/ffffff?text=Project+2'
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A dynamic blog platform developed with Next.js and Markdown, featuring post creation, comments, and a search functionality.',
      demoLink: '#',
      githubLink: '#',
      imageUrl: 'https://placehold.co/400x250/ed8936/ffffff?text=Project+3'
    },
  ];

  return (
    <div className="font-inter antialiased text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50 p-4 flex justify-end items-center rounded-b-lg">
        <div className="flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 rounded-md px-3 py-2">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 rounded-md px-3 py-2">Projects</a>
          <a href="#resume" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 rounded-md px-3 py-2">Resume</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 rounded-md px-3 py-2">Contact</a>
        </div>
      </nav>

      <main className="pt-20"> {/* Padding top to prevent content from going under fixed navbar */}

        {/* Header / About Section */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 min-h-screen-minus-nav bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mx-4 my-8 shadow-lg">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
            <img
              src={profileImg} // Now references /rutu.jpg in public folder
              alt="Your Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              // Fallback for image loading errors
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/250x250/7f7f7f/ffffff?text=Image+Error'; }}
            />
          </div>
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Hello! I'm <span className="font-bold text-blue-600">Rutuja Madane</span>, a passionate web developer
              focused on creating engaging and user-friendly digital experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With a strong foundation in frontend technologies and a keen eye for design, I love
              bringing ideas to life through clean, efficient, and modern code.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a href="mailto:youremail@example.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <i className="fas fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 md:px-8 bg-gray-100 rounded-xl mx-4 my-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/7f7f7f/ffffff?text=Image+Error'; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-base">{project.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 px-4 md:px-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl mx-4 my-8 shadow-lg text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-12">My Resume</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Want to learn more about my professional journey, skills, and experiences?
              You can download my full resume below.
            </p>
            <a
              href={resumePdf} // Now references /Rutuja_Madane_Resume.pdf in public folder
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-600 text-white font-semibold text-xl rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              <i className="fas fa-download mr-3"></i> Download Resume
            </a>
            <div className="mt-12 text-left bg-white p-8 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Summary of Qualifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>5+ years experience in web development, specializing in React and modern JavaScript.</li>
                    <li>Proficient in responsive design, state management, and API integration.</li>
                    <li>Strong problem-solving skills and a passion for continuous learning.</li>
                    <li>Experience with both front-end and basic back-end development (Node.js, Express).</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Key Skills</h3>
                <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">JavaScript (ES6+)</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">HTML5 & CSS3</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Git</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">REST APIs</span>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-8 bg-white rounded-xl mx-4 my-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to new opportunities, collaborations, and conversations.
              Feel free to reach out using the form below or connect with me on social media!
            </p>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-8 rounded-t-lg mx-4 my-8 shadow-inner">
        <p className="mb-4">&copy; {new Date().getFullYear()} Rutuja Madane. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;