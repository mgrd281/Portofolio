import { useEffect, useState } from 'react';
import { Code, Globe, Smartphone, Mail, Linkedin, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { supabase } from '../supabase';
import CardProject from '../components/CardProject';

const PortfolioModern = () => {
  const [projects, setProjects] = useState([]);
  const stats = {
    completedProjects: 120,
    clientSatisfaction: 95,
    yearsExperience: 10
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true });
        
        if (data) {
          setProjects(data);
          // Keep default stats (120+, 95%, 10+) as shown in the image
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to localStorage
        const cachedProjects = localStorage.getItem('projects');
        if (cachedProjects) {
          const parsed = JSON.parse(cachedProjects);
          setProjects(parsed);
          // Keep default stats (120+, 95%, 10+) as shown in the image
        }
      }
    };

    fetchProjects();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom web solutions built with modern technologies'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Mobile and web applications for iOS and Android'
    },
    {
      icon: Globe,
      title: 'Website Hosting',
      description: 'Reliable hosting and deployment services'
    }
  ];

  const techStack = ['HTMLS', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030014]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-white">
              Mgrdegh
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-[#ff6b35] transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-[#ff6b35] transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-[#ff6b35] transition-colors">Projects</a>
              <a href="#contact" className="text-white hover:text-[#ff6b35] transition-colors">Contacts</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-5 lg:space-y-6" data-aos="fade-right">
              <div className="flex items-center gap-2">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none">Hello.</h1>
                <div className="w-2.5 h-2.5 bg-[#ff6b35] rounded-full mt-2"></div>
              </div>
              
              <div className="h-1 w-24 bg-[#ff6b35]"></div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">I&apos;m Mgrdegh</h2>
              
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Software Developer</h3>
              
              <div className="flex flex-wrap gap-4 pt-4 lg:pt-6">
                <a href="#contact">
                  <button className="px-6 py-3 lg:px-8 lg:py-3.5 bg-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#ff5722] transition-all text-sm lg:text-base">
                    Got a project?
                  </button>
                </a>
                <a href="/">
                  <button className="px-6 py-3 lg:px-8 lg:py-3.5 bg-[#1a1a1a] border-2 border-[#ff6b35] text-white font-semibold rounded-lg hover:bg-[#2a2a2a] transition-all text-sm lg:text-base">
                    My resume
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0" data-aos="fade-left">
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                {/* Dark gradient background behind circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/15 via-[#ff5722]/8 to-transparent rounded-full blur-2xl"></div>
                
                {/* Main Orange Circle Frame - thicker border */}
                <div className="absolute inset-0 border-[8px] sm:border-[10px] border-[#ff6b35] rounded-full shadow-[0_0_30px_rgba(255,107,53,0.3)]"></div>
                
                {/* Profile Image Container */}
                <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full overflow-hidden">
                  <img 
                    src="/Profile.jpg" 
                    alt="Mgrdegh Ghazarian" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Arrows - Left (pointing right) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-10 md:-translate-x-12 text-[#ff6b35] opacity-60">
                  <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                {/* Decorative Arrows - Right (pointing left) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-10 md:translate-x-12 text-[#ff6b35] opacity-60 rotate-180">
                  <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-8 px-6 lg:px-10 bg-[#030014]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6" data-aos="fade-up">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="text-white text-base md:text-lg font-normal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Services Sidebar */}
            <div className="lg:col-span-1" data-aos="fade-right">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#ff6b35]"></div>
                
                <div className="space-y-6 pl-12">
                  {services.map((service, index) => (
                    <div key={index} className="relative group">
                      {/* Dot */}
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#ff6b35] rounded-full"></div>
                      
                      {/* Service Card */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white">About me</h2>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    {stats.completedProjects} +
                  </div>
                  <div className="text-gray-400 text-sm">Completed Projects</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    {stats.clientSatisfaction} %
                  </div>
                  <div className="text-gray-400 text-sm">Client satisfaction</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                    {stats.yearsExperience} +
                  </div>
                  <div className="text-gray-400 text-sm">Years of experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-10 bg-[#030014]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-center gap-4" data-aos="fade-up">
            <div className="h-12 w-1 bg-[#ff6b35]"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <div key={project.id || index} data-aos="fade-up" data-aos-delay={index * 100}>
                <CardProject
                  Img={project.Img}
                  Title={project.Title}
                  Description={project.Description}
                  Link={project.Link}
                  id={project.id}
                />
              </div>
            ))}
          </div>

          {projects.length > 6 && (
            <div className="text-center mt-12" data-aos="fade-up">
              <a href="#projects">
                <button className="px-8 py-3 border-2 border-[#ff6b35] text-[#ff6b35] font-semibold rounded-lg hover:bg-[#ff6b35]/10 transition-all transform hover:scale-105">
                  View All Projects
                </button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a 
              href="mailto:mgrdegh@gmx.de" 
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#ff6b35]/10 hover:border-[#ff6b35]/50 transition-all"
            >
              <Mail className="w-5 h-5 text-[#ff6b35]" />
              <span className="text-white">mgrdegh@gmx.de</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mgrdegh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-[#ff6b35]/10 hover:border-[#ff6b35]/50 transition-all"
            >
              <Linkedin className="w-5 h-5 text-[#ff6b35]" />
              <span className="text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-10 border-t border-white/10 bg-[#0a0a1a]">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Mgrdegh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioModern;

