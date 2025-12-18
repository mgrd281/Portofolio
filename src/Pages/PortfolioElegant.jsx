import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, Linkedin, TrendingUp, Target, Award, Briefcase, BarChart, Users, CheckCircle, Download, Search, Megaphone, Zap, Globe, ArrowRight, Lightbulb, HelpCircle, Star, ChevronUp, Sun, Moon } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Theme Hook
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
};

// Theme Toggle Button Component
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 opacity-100' 
              : 'rotate-180 opacity-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 opacity-100' 
              : '-rotate-180 opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

// Scroll Progress Indicator Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

// Animated Counter Component
const CounterAnimation = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (hasAnimated || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const increment = end / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

// Back to Top Button Component
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 md:w-12 md:h-12 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 z-50 flex items-center justify-center touch-target ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

// Mobile Contact FAB
const MobileContactFAB = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 z-50 flex items-center justify-center md:hidden touch-target animate-pulse-glow"
      aria-label="Contact"
    >
      <Mail className="w-6 h-6" />
    </button>
  );
};

// Active Section Tracker
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

// Toast Notification Component
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-24 right-8 px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-fadeInUp ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <CheckCircle className="w-5 h-5 text-white" />
      <span className="text-white font-medium">{message}</span>
    </div>
  );
};

// Page Loader Component
const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
        <p className="text-orange-500 text-xl font-bold">Loading...</p>
      </div>
    </div>
  );
};

// Mobile Bottom Sheet Component
const MobileBottomSheet = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-[70] md:hidden animate-slideUp">
        <div className="bg-gray-900 rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

// Pull to Refresh Component
const PullToRefresh = ({ onRefresh }) => {
  const [pulling, setPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const startY = useRef(0);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && touchStartY > 0) {
        const currentY = e.touches[0].clientY;
        const distance = currentY - touchStartY;
        
        if (distance > 0 && distance < 100) {
          setPulling(true);
          setPullDistance(distance);
        }
      }
    };

    const handleTouchEnd = () => {
      if (pullDistance > 60) {
        onRefresh();
      }
      setPulling(false);
      setPullDistance(0);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pullDistance, onRefresh]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 flex justify-center transition-all duration-300 z-50 md:hidden ${
        pulling ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: `translateY(${pullDistance - 40}px)` }}
    >
      <div className="bg-orange-500 px-4 py-2 rounded-full shadow-lg">
        <div className={`w-6 h-6 border-2 border-white border-t-transparent rounded-full ${
          pullDistance > 60 ? 'animate-spin' : ''
        }`}></div>
      </div>
    </div>
  );
};

// Swipeable Projects Component
const useSwipeGesture = (onSwipeLeft, onSwipeRight) => {
  const touchStart = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEnd.current = { x: 0, y: 0 };
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchMove = (e) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchEnd = () => {
    if (!touchStart.current.x || !touchEnd.current.x) return;
    
    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};

// Typewriter Effect Component with Loop (Type -> Delete -> Repeat)
const TypewriterLoopEffect = ({ text, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typeSpeed);
    } else if (!isDeleting && charIndex === text.length) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, typeSpeed, deleteSpeed, pauseTime, charIndex, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-orange-500">|</span>
    </span>
  );
};
const PortfolioElegant = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [toast, setToast] = useState(null);
  const [headerBlur, setHeaderBlur] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBlur(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setToast({ message: 'Vielen Dank! Ich werde mich bald bei Ihnen melden.', type: 'success' });
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { icon: Search, title: 'SEO & SEM', description: 'Suchmaschinenoptimierung und Suchmaschinenmarketing', level: 95 },
    { icon: Megaphone, title: 'Google Ads', description: 'Kampagnen-Management und Optimierung', level: 92 },
    { icon: BarChart, title: 'Analytics', description: 'Google Analytics, Datenanalyse und Reporting', level: 90 },
    { icon: TrendingUp, title: 'Social Media Marketing', description: 'Facebook Ads, Instagram Marketing', level: 88 },
    { icon: Zap, title: 'Content Marketing', description: 'Content-Strategie und Erstellung', level: 85 },
    { icon: Globe, title: 'E-Mail Marketing', description: 'Kampagnen und Automatisierung', level: 87 }
  ];

  const experiences = [
    {
      title: 'Online Marketing Spezialist',
      company: 'Digital Career Institute',
      period: '2023 - Heute',
      description: 'Weiterbildung im Bereich Online Marketing mit Fokus auf Google Ads, SEO und Social Media Marketing. Praktische Erfahrung in der Verwaltung von E-Commerce-Shops und digitalen Marketingkampagnen.',
      skills: ['Google Ads', 'SEO', 'Social Media', 'Analytics'],
      result: '4+ Zertifikate erworben',
      icon: Award
    },
    {
      title: 'E-Commerce Manager',
      company: 'Verschiedene Unternehmen',
      period: '2019 - 2023',
      description: 'Verwaltung und Optimierung von mehreren Verkaufsplattformen. Steigerung des Online-Umsatzes um durchschnittlich 300% durch gezielte Marketingstrategien und Conversion-Optimierung.',
      skills: ['Shopify', 'CRO', 'Google Ads', 'Meta Ads'],
      result: '+300% Umsatzsteigerung, 6+ Shops verwaltet',
      icon: Briefcase
    },
    {
      title: 'Digital Marketing Consultant',
      company: 'Freelance',
      period: '2018 - 2019',
      description: 'Beratung von Unternehmen bei der Entwicklung und Umsetzung digitaler Marketingstrategien. Fokus auf ROI-Optimierung und messbare Ergebnisse.',
      skills: ['SEO', 'Content Marketing', 'Analytics', 'CRO'],
      result: 'Conversion Optimierung für 10+ Projekte',
      icon: TrendingUp
    }
  ];

  const services = [
    {
      icon: Search,
      title: 'SEO & Suchmaschinenoptimierung',
      description: 'Mehr organische Besucher und bessere Rankings.',
      benefit: 'Langfristige Sichtbarkeit ohne Werbekosten'
    },
    {
      icon: Megaphone,
      title: 'Google Ads Management',
      description: 'Maximale Conversions bei minimalem Budget.',
      benefit: 'Messbare Ergebnisse ab Tag 1'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Datenbasierte Entscheidungen für mehr Erfolg.',
      benefit: 'Volle Transparenz über Ihre Marketing-Performance'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Reichweite aufbauen und Community binden.',
      benefit: 'Authentische Markenwahrnehmung'
    }
  ];

  const achievements = [
    { number: '300%', value: 300, suffix: '%', label: 'Umsatzsteigerung', icon: TrendingUp },
    { number: '6+', value: 6, suffix: '+', label: 'Verkaufsplattformen', icon: Globe },
    { number: '4+', value: 4, suffix: '+', label: 'Zertifikate', icon: Award },
    { number: '98%', value: 98, suffix: '%', label: 'Kundenzufriedenheit', icon: Users }
  ];

  // Wunschrolle & Karriereziele
  const careerGoals = {
    role: 'Online Marketing Spezialist / Praktikum',
    industry: 'E-Commerce, Digital Marketing, Tech-Startups',
    jobType: 'Vollzeit / Praktikum / Werkstudent'
  };

  // Top 5 Skills
  const topSkills = [
    { name: 'Google Ads', level: 95 },
    { name: 'Google Analytics', level: 92 },
    { name: 'SEO & SEM', level: 90 },
    { name: 'Shopify Management', level: 88 },
    { name: 'Social Media Marketing', level: 85 }
  ];

  // Stärken & Schwächen
  const strengths = {
    strength: 'Datengetriebene Entscheidungen: Starke Fähigkeit, Analytics-Daten zu analysieren und daraus konkrete Handlungsempfehlungen abzuleiten.',
    weakness: 'Aktuell befasse ich mich intensiv mit fortgeschrittenen Video-Editingskills für Social Media Content, um meine Fähigkeiten in diesem Bereich weiter auszubauen.'
  };

  // Projekte
  const exampleProjects = [
    {
      brand: 'Karinex.de',
      industry: 'E-Commerce',
      goal: 'Aufbau eines modernen Online-Shops',
      solution: 'Vollständige Umsetzung von der Konzeption bis zum Livegang: Design & UX, E-Commerce-System-Einrichtung, Produktstruktur, Zahlungs- und Versandintegration, conversion-optimierte Produktseiten, SEO-Basis und Performance-Optimierung',
      result: '100%',
      resultLabel: 'Shop Live',
      kpis: [
        { label: 'Status', value: 'Live' },
        { label: 'Umsetzung', value: 'Komplett' }
      ],
      link: 'https://www.karinex.de',
      logo: '🛒'
    },
    {
      brand: 'Fashion E-Commerce Brand',
      industry: 'Mode & Lifestyle',
      goal: 'Umsatzsteigerung in 6 Monaten',
      solution: 'Ganzheitliche Content-Strategie mit Leadmagneten, optimierten Produktseiten und organischem Instagram-Marketing',
      result: '+250%',
      resultLabel: 'Umsatzwachstum',
      kpis: [
        { label: 'Conversion Rate', value: '+180%' },
        { label: 'Newsletter-Anmeldungen', value: '3.2K' }
      ],
      link: '#contact',
      logo: '🛍️'
    },
    {
      brand: 'B2B SaaS Startup',
      industry: 'Technologie',
      goal: 'Lead-Generierung steigern',
      solution: 'Interaktiver ROI-Rechner als Leadmagnet kombiniert mit conversion-optimierter Trial-Anmeldung und LinkedIn Content-Strategie',
      result: '+340%',
      resultLabel: 'Mehr Leads',
      kpis: [
        { label: 'Trial Sign-ups', value: '+220%' },
        { label: 'LinkedIn Engagement', value: '+450%' }
      ],
      link: '#contact',
      logo: '💻'
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white" dir="ltr">
      {/* Page Loader */}
      <PageLoader />
      
      {/* Pull to Refresh (Mobile Only) */}
      <PullToRefresh onRefresh={handleRefresh} />
      
      {/* Theme Toggle */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Mobile Contact FAB */}
      <MobileContactFAB onClick={() => setIsBottomSheetOpen(true)} />
      
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      {/* Mobile Bottom Sheet for Contact */}
      <MobileBottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)}>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Kontakt</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ihr Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 transition-all text-lg"
              required
            />
            <input
              type="email"
              placeholder="Ihre E-Mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 transition-all text-lg"
              required
            />
            <textarea
              rows="4"
              placeholder="Ihre Nachricht"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 transition-all resize-none text-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all text-lg shadow-lg"
              onClick={() => setIsBottomSheetOpen(false)}
            >
              Senden
            </button>
          </form>
        </div>
      </MobileBottomSheet>
      
      {/* Header - Sticky with Blur & Active Section */}
      <header 
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          headerBlur 
            ? 'bg-black/80 backdrop-blur-2xl border-gray-700 shadow-lg shadow-orange-500/5' 
            : 'bg-black/95 backdrop-blur-xl border-gray-800'
        }`} 
        style={{ height: '70px' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            <a href="#home" className="text-xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
              Online Marketing
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: '#home', label: 'Startseite', id: 'home' },
                { href: '#about', label: 'Über mich', id: 'about' },
                { href: '#services', label: 'Services', id: 'services' },
                { href: '#experience', label: 'Erfahrung', id: 'experience' },
                { href: '#contact', label: 'Kontakt', id: 'contact' }
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm transition-all duration-300 relative ${
                    activeSection === link.id
                      ? 'text-orange-500 font-semibold'
                      : 'text-gray-300 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Separate Section Below Header */}
      <section id="home" className="relative overflow-hidden pt-16 pb-16 px-6 lg:px-10" style={{ paddingTop: 'calc(70px + 4rem)', minHeight: 'calc(100vh - 70px)' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8">
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-5" data-aos="fade-right">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                <span className="text-white">
                  Hallo,
                </span>
                <br />
                <span className="text-orange-500">
                  ich bin Mgrdegh
                </span>
              </h1>
              
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light h-[7rem] md:h-[6rem] flex items-start">
                <TypewriterLoopEffect 
                  text="Spezialist für Online Marketing, Google Ads und E-Commerce. Ich helfe Unternehmen dabei, ihre digitale Präsenz zu stärken und messbare Ergebnisse zu erzielen." 
                  typeSpeed={50}
                  deleteSpeed={30}
                  pauseTime={3000}
                  className="inline-block"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contact">
                  <button className="group px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2 text-sm">
                    <span>Kontakt aufnehmen</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="/CV-Lebenslauf.jpg" download>
                  <button className="px-6 py-3 bg-black border-2 border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-900 hover:border-orange-500/50 transition-all flex items-center gap-2 text-sm">
                    <Download className="w-4 h-4" />
                    Lebenslauf
                  </button>
                </a>
              </div>

              {/* Quick Stats - Animated Counters */}
              <div className="grid grid-cols-4 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                    <achievement.icon className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                    <div className="text-xl md:text-2xl font-bold text-orange-500">
                      <CounterAnimation 
                        end={achievement.value} 
                        suffix={achievement.suffix}
                        duration={2500}
                      />
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile Image (Reduced Size) */}
            <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0" data-aos="fade-left">
              <div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px]">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Decorative Rings - Reduced spacing */}
                <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-orange-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                
                {/* Main Profile Image Container */}
                <div className="relative w-full h-full">
                  {/* Orange Circle Frame */}
                  <div className="absolute inset-0 border-[6px] border-orange-500 rounded-full"></div>
                  
                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-orange-500/10 to-black">
                    <img 
                      src="/Profile.jpg" 
                      alt="Mgrdegh Ghazarian - Online Marketing Experte" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Badges - Smaller and closer */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-2 rounded-full shadow-2xl border-2 border-black">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-xs">Zertifiziert</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 right-0 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/50 shadow-xl">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-white font-semibold text-xs">Google Ads</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -left-8 bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/50 shadow-xl transform -translate-y-1/2">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <span className="text-white font-semibold text-xs">+300% ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Services Section - Combined Layout */}
      <section id="about" className="py-24 px-6 lg:px-10 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Services with Timeline */}
            <div className="relative" data-aos="fade-right">
              {/* Vertical Orange Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-500"></div>
              
              {/* Services List */}
              <div className="space-y-8">
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Orange Dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 bg-orange-500 rounded-full border-2 border-black"></div>
                    
                    {/* Service Content */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                        <service.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - About Me with Stats */}
            <div data-aos="fade-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Über mich
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Derzeit in einer Weiterbildung im Bereich <span className="text-orange-500 font-semibold">Online Marketing</span> am Digital Career Institute (DCI) 
                mit praktischer Erfahrung im Verkauf und in der Verwaltung von E-Commerce-Shops. Sicher im Umgang mit <span className="text-orange-400 font-semibold">Shopify</span> und der Gestaltung von Webseiten sowie einem fundierten Verständnis für digitale Marketingstrategien, User-Experience-Optimierung und messbare Ergebnisse im digitalen Umfeld.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Compact & Elegant */}
      <section id="services" className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title - Smaller & Cleaner */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-orange-500">
              Meine Schwerpunkte
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          {/* Cards Grid - Tighter Spacing */}
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 group overflow-hidden h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon - Smaller & Subtle */}
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300 border border-orange-500/10 group-hover:border-orange-500/20">
                    <service.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  {/* Title - Compact */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description - Smaller & Tighter */}
                  <p className="text-gray-300 leading-relaxed mb-2 text-[15px]">
                    {service.description}
                  </p>
                  
                  {/* Benefit - Smaller */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-snug">
                    {service.benefit}
                  </p>
                  
                  {/* CTA - Clean Text Link */}
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-medium hover:underline hover:gap-2 transition-all duration-300 mt-auto"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 lg:px-10 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-orange-500">
              Meine Fähigkeiten
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-orange-500/20">
                      <skill.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-orange-500 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{skill.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                  
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Grid Layout */}
      <section id="experience" className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-orange-500">
              Berufserfahrung
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Grid Layout - Horizontal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => {
              const shortDescription = exp.description.substring(0, 100);
              const isLongDescription = exp.description.length > 100;
              const showMore = expandedDescriptions[index] || false;

              return (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-6 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                    <exp.icon className="w-7 h-7 text-orange-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {exp.title}
                  </h3>

                  {/* Company & Period - Muted */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                          {/* Skills Chips */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-md text-[10px] text-gray-300 font-medium hover:border-orange-500/50 hover:text-orange-400 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: showMore ? 'none' : 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {exp.description}
                  </p>
                  {isLongDescription && (
                    <button
                      onClick={() => setExpandedDescriptions({ ...expandedDescriptions, [index]: !showMore })}
                      className="text-orange-500 hover:text-orange-400 text-xs font-medium transition-colors mb-3"
                    >
                      {showMore ? 'Weniger' : 'Mehr anzeigen'}
                    </button>
                  )}

                  {/* Result Line */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-700/50">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">{exp.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Goals & Preparation Section - Compact & Elegant */}
      <section className="py-20 px-6 lg:px-10 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Section Title - Smaller & Cleaner */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-orange-500">
              Karriereziele & Vorbereitung
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mb-12">
            {/* Wunschrolle - Compact with Label/Value Layout */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-orange-500/40 transition-all" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/10">
                  <Target className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Wunschrolle</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider flex-shrink-0 pt-0.5">Job / Praktikum</p>
                  <p className="text-white font-medium text-sm text-right">{careerGoals.role}</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider flex-shrink-0 pt-0.5">Branche</p>
                  <p className="text-white font-medium text-sm text-right">{careerGoals.industry}</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider flex-shrink-0 pt-0.5">Art</p>
                  <p className="text-white font-medium text-sm text-right">{careerGoals.jobType}</p>
                </div>
              </div>
            </div>

            {/* Top 5 Skills - Compact Progressbars */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-orange-500/40 transition-all" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/10">
                  <Star className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Top 5 Skills</h3>
              </div>
              <div className="space-y-3">
                {topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span className="text-orange-500 text-sm font-semibold opacity-70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stärken & Schwächen - Compact */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-orange-500/40 transition-all" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-white">Stärken</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">{strengths.strength}</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-orange-500/40 transition-all" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/10">
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-white">Entwicklungsbereich</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">{strengths.weakness}</p>
            </div>
          </div>

          {/* Beispiel-Projekte - Premium Showcase Design */}
          <div className="mb-12">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Erfolgs<span className="text-orange-500">geschichten</span>
              </h2>
              <p className="text-gray-400 text-sm">Messbare Ergebnisse für echte Unternehmen</p>
            </div>

            {/* Timeline-based Layout */}
            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Timeline Line - Hidden on Mobile */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent transform -translate-x-1/2"></div>

              <div className="space-y-24">
                {exampleProjects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div
                      key={index}
                      className="relative"
                      data-aos={isEven ? "fade-right" : "fade-left"}
                      data-aos-offset="100"
                    >
                      {/* Timeline Dot */}
                      <div className="hidden lg:block absolute left-1/2 top-12 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-black"></div>

                      <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex lg:flex-row-reverse'}`}>
                        {/* KPI Result - Large & Prominent */}
                        <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} mb-8 lg:mb-0`}>
                          <div className="inline-block">
                            <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">{project.industry}</div>
                            <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2 leading-none">
                              {project.result}
                            </div>
                            <div className="text-xl md:text-2xl font-semibold text-white mb-6">{project.resultLabel}</div>
                            
                            {/* Secondary KPIs */}
                            <div className="flex gap-6 mb-6">
                              {project.kpis.map((kpi, kpiIndex) => (
                                <div key={kpiIndex} className="text-center">
                                  <div className="text-2xl font-bold text-orange-500">{kpi.value}</div>
                                  <div className="text-xs text-gray-400">{kpi.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Project Details - Clean & Structured */}
                        <div className={`${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/30 hover:bg-gray-900/50 transition-all duration-500 group">
                            {/* Logo/Icon + Brand Name */}
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 text-2xl flex-shrink-0 group-hover:bg-orange-500/30 transition-all">
                                {project.logo}
                              </div>
                              <h4 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors leading-tight">
                                {project.brand}
                              </h4>
                            </div>

                            <div className="space-y-4 mb-6">
                              <div>
                                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Ziel</div>
                                <div className="text-white font-medium">{project.goal}</div>
                              </div>
                              <div>
                                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Lösung</div>
                                <div className="text-gray-300 text-sm leading-relaxed">{project.solution}</div>
                              </div>
                            </div>

                            {/* CTA Link */}
                            <a 
                              href={project.link} 
                              target={project.link.startsWith('http') ? '_blank' : undefined}
                              rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium hover:gap-3 transition-all duration-300 group/link"
                            >
                              <span>{project.link.startsWith('http') ? 'Projekt ansehen' : 'Details besprechen'}</span>
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section - Modern & Elegant */}
      <section id="contact" className="py-24 px-6 lg:px-10 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          {/* Header - Cleaner & Smaller */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Kontakt
            </h2>
            <p className="text-gray-400 text-lg">Lassen Sie uns darüber sprechen, wie ich Ihr Team unterstützen kann</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form - Lighter & Softer */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-white mb-6">Nachricht senden</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 focus:bg-black/30 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 focus:bg-black/30 transition-all duration-300"
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Ihre Nachricht"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/20 border border-gray-700/40 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/60 focus:bg-black/30 transition-all duration-300 resize-none"
                  required
                ></textarea>
                
                {/* Strong CTA Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 group"
                >
                  <span>Jetzt Kontakt aufnehmen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                {/* Trust Hint */}
                <p className="text-gray-500 text-sm text-center flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Antwort innerhalb von 24 Stunden</span>
                </p>
              </form>
            </div>

            {/* Contact Cards - Subtle Hover Animations */}
            <div className="space-y-4" data-aos="fade-left">
              {[
                { icon: Mail, title: 'E-Mail', value: 'mgrdegh@gmx.de', href: 'mailto:mgrdegh@gmx.de' },
                { icon: Phone, title: 'Telefon', value: '+49 152 27322222', href: 'tel:+4915227322222' },
                { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/mgrdegh', href: 'https://www.linkedin.com/in/mgrdegh', target: '_blank' }
              ].map((contact, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                      <contact.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 text-sm">{contact.title}</h4>
                      <a 
                        href={contact.href} 
                        target={contact.target} 
                        rel={contact.target ? 'noopener noreferrer' : ''} 
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-10 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Alle Rechte vorbehalten</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioElegant;

