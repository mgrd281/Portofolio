import React, { useEffect } from 'react';
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Palette,
    PenTool,
    BarChart,
    Phone,
    Mail,
    ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const PortfolioTwo = () => {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const [showBackToTop, setShowBackToTop] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const roles = [
        'Online Marketing Specialist',
        'E-Commerce Expert',
        'SEO Specialist',
        'Web Developer'
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Scroll Progress
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2d2d2d] via-[#383838] to-[#2d2d2d] text-white font-sans selection:bg-[#ff5722] selection:text-white">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[60]">
                <div
                    className="h-full bg-gradient-to-r from-[#ff5722] to-[#f4511e] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-[#2d2d2d]/95 backdrop-blur-md z-50 py-4 border-b border-white/5 mt-1">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative">
                            {/* Hexagon Background */}
                            <svg width="35" height="35" viewBox="0 0 100 100" className="transform group-hover:rotate-180 transition-transform duration-500">
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ff5722', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#f4511e', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                {/* Hexagon Shape */}
                                <polygon
                                    points="50,5 90,30 90,70 50,95 10,70 10,30"
                                    fill="url(#logoGradient)"
                                    className="drop-shadow-lg"
                                />
                            </svg>
                            {/* MG Letters */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-black text-sm tracking-tighter" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>MG</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white tracking-wide">Mgrdegh</span>
                            <span className="text-[10px] text-[#ff5722] font-semibold">Digital Expert</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10 text-base font-medium">
                        <a href="#home" className="text-[#ff5722] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ff5722] transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-[#ff5722] relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#ff5722] after:transition-all transition-colors">About</a>
                        <a href="#services" className="text-gray-300 hover:text-[#ff5722] relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#ff5722] after:transition-all transition-colors">Services</a>
                        <a href="#portfolio" className="text-gray-300 hover:text-[#ff5722] relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#ff5722] after:transition-all transition-colors">Gallery</a>
                        <a href="#contact" className="text-gray-300 hover:text-[#ff5722] relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#ff5722] after:transition-all transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-[#ff5722] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#ff5722] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#ff5722] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-[#2d2d2d]/98 backdrop-blur-lg border-b border-white/5 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 py-6 space-y-4">
                        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-[#ff5722] font-medium hover:translate-x-2 transition-transform">Home</a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-[#ff5722] font-medium hover:translate-x-2 transition-all">About</a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-[#ff5722] font-medium hover:translate-x-2 transition-all">Services</a>
                        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-[#ff5722] font-medium hover:translate-x-2 transition-all">Gallery</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-[#ff5722] font-medium hover:translate-x-2 transition-all">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
                <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
                    <div className="flex-1 space-y-6" data-aos="fade-right">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white/90">Hello, It's Me</h3>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                            Mgrdegh<br /><span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Ghazarian</span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 min-h-[4rem] flex items-center">
                            I'm a <span className="text-[#ff5722] ml-3">
                                {text}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h2>
                        <p className="text-gray-300/90 max-w-xl leading-relaxed text-lg pt-4">
                            Please hold your breath as we dive into a world full of creativity with Mgrdegh.
                            Experte für E-Commerce, SEO und digitales Marketing.
                        </p>

                        <div className="flex gap-4 pt-8">
                            <a href="#" className="w-14 h-14 flex items-center justify-center border-2 border-[#ff5722]/50 rounded-full text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-lg hover:shadow-[#ff5722]/50 transition-all duration-300 transform hover:scale-110">
                                <Facebook size={22} />
                            </a>
                            <a href="#" className="w-14 h-14 flex items-center justify-center border-2 border-[#ff5722]/50 rounded-full text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-lg hover:shadow-[#ff5722]/50 transition-all duration-300 transform hover:scale-110">
                                <Instagram size={22} />
                            </a>
                            <a href="#" className="w-14 h-14 flex items-center justify-center border-2 border-[#ff5722]/50 rounded-full text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-lg hover:shadow-[#ff5722]/50 transition-all duration-300 transform hover:scale-110">
                                <Linkedin size={22} />
                            </a>
                            <a href="#" className="w-14 h-14 flex items-center justify-center border-2 border-[#ff5722]/50 rounded-full text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-lg hover:shadow-[#ff5722]/50 transition-all duration-300 transform hover:scale-110">
                                <Twitter size={22} />
                            </a>
                        </div>

                        <div className="pt-4">
                            <a href="#portfolio" className="inline-block px-12 py-4 bg-gradient-to-r from-[#ff5722] to-[#f4511e] rounded-full font-bold text-white text-lg hover:from-[#f4511e] hover:to-[#e64a19] transition-all shadow-[0_10px_40px_rgba(255,87,34,0.4)] hover:shadow-[0_15px_50px_rgba(255,87,34,0.6)] transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
                                <span className="relative z-10">My Portfolio</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center relative" data-aos="fade-left">
                        <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px]">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 border-2 border-[#ff5722]/30 rounded-full animate-ping"></div>
                            <div className="absolute inset-8 border-2 border-[#ff5722]/20 rounded-full animate-pulse"></div>
                            {/* Orange Glow Background */}
                            <div className="absolute inset-0 bg-[#ff5722] rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                            {/* Main Orange Circle */}
                            <div className="absolute inset-6 bg-gradient-to-br from-[#ff5722] via-[#ff6f3c] to-[#ff5722] rounded-full shadow-[0_0_80px_rgba(255,87,34,0.5)]"></div>
                            {/* Image */}
                            <img
                                src="/avatar-orange.png"
                                alt="Profile"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-auto object-contain drop-shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500"
                                style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1 flex justify-center relative" data-aos="fade-right">
                        <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px]">
                            {/* Decorative circles */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff5722]/20 to-transparent rounded-full blur-2xl"></div>
                            {/* Orange Glow Background */}
                            <div className="absolute inset-0 bg-[#ff5722] rounded-full blur-[100px] opacity-25"></div>
                            {/* Main Orange Circle */}
                            <div className="absolute inset-8 bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-full shadow-[0_0_60px_rgba(255,87,34,0.4)] transform hover:scale-105 transition-transform duration-500"></div>
                            {/* Image */}
                            <img
                                src="/avatar-orange.png"
                                alt="About Me"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain drop-shadow-2xl z-10"
                                style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }}
                            />
                        </div>
                    </div>

                    <div className="flex-1 space-y-6" data-aos="fade-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            About <span className="text-[#ff5722]">Me</span>
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Artist & Designer!
                        </h3>
                        <p className="text-gray-300/90 leading-relaxed text-lg">
                            Hello, I am Mgrdegh and my nickname is (Nemo). I am a third-year student in the Faculty of Systems and Information. I live in Egypt, Cairo Governorate. I am an ambitious person and I have many goals. I worked in many fields until I found my specialty, which is graphics or design in general. I have a talent for drawing. I am a skilled artist. I worked in many Saudi and Egyptian companies in addition to working as a freelancer. I won the admiration of many clients. In addition, I have certificates in graphic design from the Applied Society and a programming certificate from Harvard University Online.
                        </p>
                        <button className="px-10 py-4 bg-gradient-to-r from-[#ff5722] to-[#f4511e] rounded-full font-bold text-white text-lg hover:from-[#f4511e] hover:to-[#e64a19] transition-all shadow-[0_10px_40px_rgba(255,87,34,0.4)] hover:shadow-[0_15px_50px_rgba(255,87,34,0.6)] transform hover:-translate-y-1 hover:scale-105 mt-4">
                            Read More
                        </button>
                    </div>
                </div>
            </section>


            {/* Statistics Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { number: '50+', label: 'Projekte Abgeschlossen', icon: '📊' },
                        { number: '30+', label: 'Zufriedene Kunden', icon: '👥' },
                        { number: '5+', label: 'Jahre Erfahrung', icon: '⭐' },
                        { number: '98%', label: 'Erfolgsrate', icon: '🎯' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="relative group bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-500 text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-5xl mb-4">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold text-[#ff5722] mb-2">{stat.number}</div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                            <div className="absolute inset-0 bg-[#ff5722]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-28 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Meine <span className="text-[#ff5722]">Fähigkeiten</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Spezialisiert auf digitales Marketing und moderne Web-Technologien
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-6">Marketing Skills</h3>
                        <div className="space-y-6">
                            {[
                                { skill: 'SEO & SEM', level: 95 },
                                { skill: 'Google Ads', level: 90 },
                                { skill: 'Social Media Marketing', level: 85 },
                                { skill: 'E-Commerce Strategy', level: 92 },
                                { skill: 'Content Marketing', level: 88 }
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white font-medium">{item.skill}</span>
                                        <span className="text-[#ff5722] font-bold">{item.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#ff5722] to-[#f4511e] rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                        <div className="space-y-6">
                            {[
                                { skill: 'HTML & CSS', level: 95 },
                                { skill: 'JavaScript & React', level: 85 },
                                { skill: 'Shopify Development', level: 90 },
                                { skill: 'WordPress', level: 88 },
                                { skill: 'Analytics & Tracking', level: 92 }
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white font-medium">{item.skill}</span>
                                        <span className="text-[#ff5722] font-bold">{item.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#ff5722] to-[#f4511e] rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Our <span className="text-[#ff5722]">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Professionelle Dienstleistungen für Ihren digitalen Erfolg
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div
                        className="relative group bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#ff5722]/20"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        {/* Icon Container */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[#ff5722]/20 blur-2xl rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-[#ff5722]/30">
                                <Palette size={40} className="text-white" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#ff5722] transition-colors duration-300">
                            E-Commerce Strategy
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 mb-6 text-center leading-relaxed">
                            Entwicklung maßgeschneiderter Verkaufsstrategien für Amazon, eBay und eigene Webshops.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-6">
                            {['Marktanalyse', 'Produktoptimierung', 'Umsatzsteigerung'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="w-full px-6 py-3 bg-transparent border-2 border-[#ff5722]/30 text-[#ff5722] rounded-full font-semibold hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] transition-all duration-300 transform group-hover:scale-105">
                            Mehr erfahren
                        </button>

                        {/* Corner Decoration */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff5722]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Service 2 */}
                    <div
                        className="relative group bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#ff5722]/20"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[#ff5722]/20 blur-2xl rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-[#ff5722]/30">
                                <PenTool size={40} className="text-white" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#ff5722] transition-colors duration-300">
                            Content & Design
                        </h3>

                        <p className="text-gray-400 mb-6 text-center leading-relaxed">
                            Erstellung von ansprechenden Produktbildern, A+ Content und Werbematerialien.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Produktfotografie', 'Grafikdesign', 'Branding'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full px-6 py-3 bg-transparent border-2 border-[#ff5722]/30 text-[#ff5722] rounded-full font-semibold hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] transition-all duration-300 transform group-hover:scale-105">
                            Mehr erfahren
                        </button>

                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff5722]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Service 3 */}
                    <div
                        className="relative group bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#ff5722]/20"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[#ff5722]/20 blur-2xl rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-[#ff5722]/30">
                                <BarChart size={40} className="text-white" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#ff5722] transition-colors duration-300">
                            Performance Marketing
                        </h3>

                        <p className="text-gray-400 mb-6 text-center leading-relaxed">
                            Optimierung von Google Ads und Social Media Kampagnen für maximalen ROI.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Google Ads', 'Meta Ads', 'Analytics'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full px-6 py-3 bg-transparent border-2 border-[#ff5722]/30 text-[#ff5722] rounded-full font-semibold hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] transition-all duration-300 transform group-hover:scale-105">
                            Mehr erfahren
                        </button>

                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff5722]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </section>

            {/* Latest Project Section */}
            <section id="portfolio" className="py-28 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Latest <span className="text-[#ff5722]">Project</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Entdecken Sie meine neuesten Arbeiten im Bereich Online Marketing und Webentwicklung
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Shopify Fashion Store",
                            category: "E-Commerce Website",
                            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2340&auto=format&fit=crop",
                            tags: ["Shopify", "Liquid", "Tailwind CSS", "SEO"],
                            description: "A complete overhaul of a high-traffic fashion retailer's online store. We focused on improving the user journey, optimizing mobile performance, and integrating a custom inventory management system.",
                            features: ["Custom Theme Development", "Advanced Product Filtering", "Multi-currency Support", "Instagram Feed Integration"],
                            link: "#",
                            github: "#"
                        },
                        {
                            title: "SEO Growth Campaign",
                            category: "Online Marketing",
                            image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2340&auto=format&fit=crop",
                            tags: ["SEO", "Google Analytics", "Content Strategy", "Backlinking"],
                            description: "A comprehensive SEO strategy for a B2B software company. Within 6 months, we achieved a 150% increase in organic traffic and a 40% boost in lead generation through targeted content and technical optimization.",
                            features: ["Keyword Research & Strategy", "Technical SEO Audit", "Content Marketing Plan", "Link Building Campaign"],
                            link: "#",
                            github: "#"
                        },
                        {
                            title: "Google Ads Strategy",
                            category: "Performance Marketing",
                            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
                            tags: ["Google Ads", "PPC", "Conversion Optimization", "A/B Testing"],
                            description: "Managed a high-budget PPC campaign for a financial services provider. By optimizing landing pages and refining audience targeting, we reduced the Cost Per Acquisition (CPA) by 35% while scaling spend.",
                            features: ["Campaign Structure Optimization", "Ad Copy Testing", "Landing Page CRO", "Detailed Reporting Dashboard"],
                            link: "#",
                            github: "#"
                        },
                        {
                            title: "Corporate Website",
                            category: "Web Development",
                            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf7d?q=80&w=2338&auto=format&fit=crop",
                            tags: ["React", "Node.js", "PostgreSQL", "Framer Motion"],
                            description: "Developed a modern, responsive corporate website for a renewable energy firm. The site features interactive data visualizations, a secure client portal, and a CMS for easy content updates.",
                            features: ["Responsive Design", "Interactive Maps", "Secure Client Login", "CMS Integration"],
                            link: "#",
                            github: "#"
                        },
                        {
                            title: "Social Media Branding",
                            category: "Content Marketing",
                            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2274&auto=format&fit=crop",
                            tags: ["Instagram", "TikTok", "Content Creation", "Community Mgmt"],
                            description: "Revamped the social media presence of a lifestyle brand. Through consistent, high-quality visual storytelling and community engagement, we grew their follower base by 50k in one year.",
                            features: ["Visual Identity Guide", "Content Calendar", "Influencer Partnerships", "Engagement Strategy"],
                            link: "#",
                            github: "#"
                        },
                        {
                            title: "Email Automation",
                            category: "CRM & Marketing",
                            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop",
                            tags: ["Klaviyo", "Automation Flows", "Copywriting", "Segmentation"],
                            description: "Implemented a sophisticated email marketing automation system for an e-commerce brand. Setup included welcome series, abandoned cart recovery, and post-purchase follow-ups, resulting in a 25% revenue uplift.",
                            features: ["Automated Workflows", "Customer Segmentation", "A/B Testing", "Performance Analytics"],
                            link: "#",
                            github: "#"
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/5 hover:border-[#ff5722]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff5722]/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <span className="px-4 py-2 bg-[#ff5722]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content Container */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs rounded-full border border-white/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                                    {project.title}
                                </h3>

                                {/* Divider */}
                                <div className="w-16 h-1 bg-gradient-to-r from-[#ff5722] to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                {/* Action Button */}
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff5722] to-[#f4511e] text-white font-bold rounded-full hover:from-[#f4511e] hover:to-[#e64a19] transition-all transform hover:scale-105 shadow-lg shadow-[#ff5722]/30"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#ff5722]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#ff5722]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <button className="px-12 py-4 bg-transparent border-2 border-[#ff5722] text-[#ff5722] font-bold rounded-full hover:bg-[#ff5722] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff5722]/50">
                        Alle Projekte anzeigen
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Contact <span className="text-[#ff5722]">Me!</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Lassen Sie uns zusammenarbeiten und Ihre digitalen Ziele erreichen
                    </p>
                </div>

                <form className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                    {/* Full Name */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Vollständiger Name"
                            className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 group-hover:border-[#ff5722]/30"
                        />
                        <div className="absolute inset-0 bg-[#ff5722]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="E-Mail Adresse"
                            className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 group-hover:border-[#ff5722]/30"
                        />
                        <div className="absolute inset-0 bg-[#ff5722]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Mobile */}
                    <div className="relative group">
                        <input
                            type="tel"
                            placeholder="Telefonnummer"
                            className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 group-hover:border-[#ff5722]/30"
                        />
                        <div className="absolute inset-0 bg-[#ff5722]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Subject */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Betreff"
                            className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 group-hover:border-[#ff5722]/30"
                        />
                        <div className="absolute inset-0 bg-[#ff5722]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 relative group">
                        <textarea
                            rows="6"
                            placeholder="Ihre Nachricht"
                            className="w-full bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-white placeholder-gray-500 resize-none transition-all duration-300 group-hover:border-[#ff5722]/30"
                        ></textarea>
                        <div className="absolute inset-0 bg-[#ff5722]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center mt-6">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-gradient-to-r from-[#ff5722] to-[#f4511e] rounded-full font-bold text-white text-lg hover:from-[#f4511e] hover:to-[#e64a19] transition-all shadow-[0_10px_40px_rgba(255,87,34,0.4)] hover:shadow-[0_15px_50px_rgba(255,87,34,0.6)] transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                Nachricht senden
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </form>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-16" data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
                        <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <Phone size={24} className="text-white" />
                        </div>
                        <h4 className="text-white font-bold mb-2">Telefon</h4>
                        <p className="text-gray-400 text-sm">+49 152 27322222</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
                        <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <Mail size={24} className="text-white" />
                        </div>
                        <h4 className="text-white font-bold mb-2">E-Mail</h4>
                        <p className="text-gray-400 text-sm">mgrdegh@web.de</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#ff5722]/50 transition-all duration-300 text-center group hover:transform hover:-translate-y-2">
                        <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <Linkedin size={24} className="text-white" />
                        </div>
                        <h4 className="text-white font-bold mb-2">LinkedIn</h4>
                        <p className="text-gray-400 text-sm">Connect with me</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-sm">Copyright © 2025 by Mgrdegh | Alle Rechte vorbehalten</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-gray-400 hover:text-[#ff5722] transition-colors">
                                <Phone size={16} />
                                <span className="text-sm">+49 152 27322222</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 hover:text-[#ff5722] transition-colors">
                                <Mail size={16} />
                                <span className="text-sm">mgrdegh@web.de</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-[#ff5722] to-[#f4511e] rounded-full text-white shadow-2xl shadow-[#ff5722]/50 hover:shadow-[#ff5722]/70 transition-all transform hover:scale-110 hover:-translate-y-1 z-50 animate-bounce"
                    aria-label="Back to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl bg-[#2d2d2d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#ff5722] rounded-full text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Image Section */}
                                <div className="relative h-64 md:h-full min-h-[300px]">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] via-transparent to-transparent md:bg-gradient-to-r"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 flex flex-col h-full max-h-[90vh] overflow-y-auto custom-scrollbar">
                                    <span className="text-[#ff5722] font-bold tracking-wider text-sm mb-2 uppercase">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        {selectedProject.title}
                                    </h2>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-[#ff5722] rounded-full"></span>
                                            Key Features
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-white font-semibold mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex gap-4 pt-6 border-t border-white/10">
                                        <a
                                            href={selectedProject.link}
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#ff5722] hover:bg-[#f4511e] text-white font-bold rounded-full transition-all transform hover:scale-105"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={selectedProject.github}
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all transform hover:scale-105"
                                        >
                                            <Github size={18} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioTwo;
