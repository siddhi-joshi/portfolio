'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'border-b border-border bg-background/80 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a 
  href="#home" 
  onClick={() => scrollToSection('home')}
  className="flex items-center gap-2 text-2xl font-bold tracking-tighter hover:opacity-70 transition"
>
  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
    <span className="text-white text-sm font-bold">SJ</span>
  </div>
  Siddhi Joshi
</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-foreground border-b-2 border-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium hover:text-muted-foreground transition py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-40 pb-32 px-6 bg-background"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-medium text-muted-foreground border border-border px-4 py-2">
                👋 Welcome
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-balance">
              Creative developer building digital experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I craft beautiful, functional applications with a focus on clean code and user-centered design. Currently exploring the intersection of mobile development and web technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:opacity-80 transition inline-flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-foreground hover:bg-secondary transition font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground">
                <p>
                  I'm an IT student and passionate developer at Shri Sant Gajanan Maharaj College of Engineering in Shegaon. 
                  My journey in technology is driven by a desire to solve real-world problems and create applications that make a difference.
                </p>
                <p>
                  With expertise spanning Android development, React Native, and full-stack web technologies, 
                  I bring a versatile skill set to every project. I'm particularly excited about building scalable mobile applications 
                  and exploring the potential of modern web frameworks.
                </p>
                <p>
                  Beyond coding, I value clean architecture, continuous learning, and collaborative problem-solving. 
                  I believe great software comes from understanding user needs and delivering solutions that exceed expectations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-border p-6 bg-background">
                <h3 className="font-bold mb-3">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech in Information Technology</p>
                <p className="text-sm font-medium">Shri Sant Gajanan Maharaj College</p>
              </div>
              <div className="border border-border p-6 bg-background">
                <h3 className="font-bold mb-3">Location</h3>
                <p className="text-sm">Mehkar, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-16">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Languages',
                skills: ['Java', 'Python', 'JavaScript', 'C++'],
              },
              {
                category: 'Frontend',
                skills: ['React', 'HTML', 'CSS', 'Bootstrap'],
              },
              {
                category: 'Mobile',
                skills: ['React Native', 'Expo', 'Android Studio', 'Firebase'],
              },
              {
                category: 'Backend & Tools',
                skills: ['MySQL', 'Git', 'VS Code', 'Linux'],
              },
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-lg font-bold border-b border-border pb-3">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="border border-border p-4 hover:border-foreground hover:bg-secondary transition duration-300 cursor-pointer"
                    >
                      <p className="font-medium text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-secondary">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold tracking-tight mb-16">Featured Projects</h2>
    
    <div className="space-y-12">
      {[
        {
          title: 'Tic Tac Toe Game',
          description: 'A fully functional cross-platform mobile game built with React Native and Expo. Features interactive gameplay with real-time state management, automatic game reset, and smooth animations.',
          tech: ['React Native', 'Expo', 'JavaScript'],
          highlights: ['Cross-platform', 'Real-time gameplay', 'Responsive design'],
          github: 'https://github.com/siddhi-joshi/tic-tac-toe',
        },
        {
          title: 'Student Feedback System',
          description: 'A comprehensive web application that enables secure feedback submission and automated report generation for faculty. Built with modern web technologies featuring form validation and robust database connectivity.',
          tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
          highlights: ['Form validation', 'Report generation', 'Database integration'],
          github: 'https://github.com/siddhi-joshi/student-feedback-system', 
        },
        {
          title: 'Employee Payroll System',
          description: 'A professional Java-based console application automating complex payroll processing. Demonstrates solid OOP principles with a modular architecture for handling both full-time and part-time employee calculations.',
          tech: ['Java', 'OOP', 'Database Design'],
          highlights: ['Object-oriented design', 'Modular architecture', 'Automated calculations'],
          github: 'https://github.com/siddhi-joshi/employee-payroll-system',
        },
      ].map((project, idx) => (
        <a
          key={idx}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-border p-8 md:p-10 hover:border-foreground transition duration-300 group bg-background cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold group-hover:translate-x-2 transition duration-300">
              {project.title}
            </h3>
            <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground transition opacity-0 group-hover:opacity-100" />
          </div>
          
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 bg-primary text-primary-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs px-3 py-1 border border-border text-muted-foreground"
                >
                  ✓ {highlight}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in learning about new opportunities, collaborations, and interesting projects. 
              Feel free to reach out anytime—I'd love to hear from you!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              target="_blank"
              href="mailto:siddhijoshi2605@gmail.com"
              className="border border-border p-8 hover:border-foreground hover:bg-secondary transition duration-300 group"
            >
              <Mail size={28} className="mb-4 group-hover:translate-y-[-4px] transition duration-300" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
                siddhijoshi2605@gmail.com
              </p>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/siddhi-joshi05/"
              className="border border-border p-8 hover:border-foreground hover:bg-secondary transition duration-300 group"
            >
              <Linkedin size={28} className="mb-4 group-hover:translate-y-[-4px] transition duration-300" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
                Connect with me
              </p>
            </a>

            <a
              target="_blank"
              href="https://github.com/siddhi-joshi"
              className="border border-border p-8 hover:border-foreground hover:bg-secondary transition duration-300 group"
            >
              <Github size={28} className="mb-4 group-hover:translate-y-[-4px] transition duration-300" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
                View my work
              </p>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>Developed with ❤️ by Siddhi Joshi</p>
        </div>
      </footer>
    </main>
  );
}
