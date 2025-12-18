import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, ShoppingCart, TrendingUp, Target, Award, Briefcase, Code, Globe, Smartphone, BarChart, Users, CheckCircle, ArrowLeft, Download } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioGerman = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Vielen Dank! Ich werde mich bald bei Ihnen melden.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { icon: ShoppingCart, title: 'E-Commerce Management', description: 'Shopify, WooCommerce, Amazon' },
    { icon: TrendingUp, title: 'Digitales Marketing', description: 'Google Ads, Facebook Ads, SEO' },
    { icon: BarChart, title: 'Datenanalyse', description: 'Google Analytics, Data Analysis' },
    { icon: Users, title: 'Kundenmanagement', description: 'Kundenservice, CRM' },
    { icon: Globe, title: 'Content Management', description: 'Content Creation, Copywriting' },
    { icon: Code, title: 'Technische Entwicklung', description: 'HTML, CSS, JavaScript' }
  ];

  const experiences = [
    {
      title: 'Online-Verkaufsspezialist',
      company: 'E-Commerce Shop',
      period: '2020 - Heute',
      description: 'Verwaltung und Entwicklung eines vollständigen E-Commerce-Shops, Steigerung des Umsatzes um 300%, Verwaltung von Werbekampagnen und Verbesserung der Conversion-Raten.'
    },
    {
      title: 'Digital Marketing Manager',
      company: 'Handelsunternehmen',
      period: '2018 - 2020',
      description: 'Planung und Umsetzung von Digital-Marketing-Strategien, Verwaltung von Werbebudgets, Leistungsanalyse und Ergebnisoptimierung.'
    },
    {
      title: 'E-Commerce-Berater',
      company: 'Freelance',
      period: '2016 - 2018',
      description: 'Beratung von Startups im Bereich E-Commerce, Unterstützung beim Aufbau und der Entwicklung ihrer Online-Shops.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Ergebnisorientiert',
      description: 'Ich konzentriere mich immer auf messbare und greifbare Ergebnisse'
    },
    {
      icon: CheckCircle,
      title: 'Qualität zuerst',
      description: 'Hohes Engagement für Qualitätsstandards in allem, was ich tue'
    },
    {
      icon: Users,
      title: 'Kundenzufriedenheit',
      description: 'Kundenzufriedenheit ist meine oberste Priorität in jedem Projekt'
    },
    {
      icon: TrendingUp,
      title: 'Kontinuierliche Entwicklung',
      description: 'Ich verfolge die neuesten Trends und Technologien im Bereich'
    }
  ];

  const goals = [
    'Erweiterung des Geschäftsbereichs auf weitere Märkte',
    'Aufbau eines starken Netzwerks von Kunden und Partnern',
    'Beitrag zur Entwicklung des E-Commerce-Sektors',
    'Erzielung eines nachhaltigen und profitablen Wachstums für Projekte'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" dir="ltr">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              E-Commerce Profi
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-orange-400 transition-colors">Startseite</a>
              <a href="#about" className="text-white hover:text-orange-400 transition-colors">Über mich</a>
              <a href="#skills" className="text-white hover:text-orange-400 transition-colors">Fähigkeiten</a>
              <a href="#experience" className="text-white hover:text-orange-400 transition-colors">Erfahrung</a>
              <a href="#contact" className="text-white hover:text-orange-400 transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6" data-aos="fade-right">
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full mb-4">
                <span className="text-orange-400 text-sm font-medium">Spezialist für Online-Verkauf</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hallo, ich bin
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  E-Commerce Experte
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Ich spezialisiere mich auf den Aufbau und die Entwicklung erfolgreicher E-Commerce-Shops mit umfassender Erfahrung im digitalen Marketing, Umsatzsteigerung und Verbesserung der Kundenerfahrung.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact">
                  <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
                    Kontakt aufnehmen
                  </button>
                </a>
                <a href="/CV-Lebenslauf.jpg" download>
                  <button className="px-8 py-3 bg-gray-800 border-2 border-orange-500 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Lebenslauf herunterladen
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">5+</div>
                  <div className="text-gray-400 text-sm">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">50+</div>
                  <div className="text-gray-400 text-sm">Erfolgreiche Projekte</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">98%</div>
                  <div className="text-gray-400 text-sm">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">E-Commerce Shop</div>
                        <div className="text-gray-400">Umsatzwachstum</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monatlicher Umsatz</span>
                        <span className="text-orange-400 font-bold">+300%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-10 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Über mich
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8">
              Ich bin Spezialist im Bereich E-Commerce und Online-Verkauf mit über 5 Jahren Erfahrung im Aufbau und der Entwicklung erfolgreicher Online-Shops. 
              Ich spezialisiere mich auf die Verbesserung der Kundenerfahrung und die Steigerung der Conversion- und Verkaufsraten durch fortgeschrittene Digital-Marketing-Strategien.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              Während meiner beruflichen Laufbahn habe ich vielen Unternehmen geholfen, ein bemerkenswertes Umsatzwachstum zu erzielen, indem ich Best Practices im E-Commerce anwende, 
              effektive Werbekampagnen verwalte und Daten analysiere, um fundierte Entscheidungen zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Fähigkeiten
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                  <skill.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-10 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Berufserfahrung
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Berufliche Werte
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-6 lg:px-10 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Berufliche Ziele
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-300">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Kontaktieren Sie mich
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
            <p className="text-gray-300 mt-4">Ich bin hier, um Ihnen bei der Erreichung Ihrer E-Commerce-Ziele zu helfen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-white mb-6">Nachricht senden</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Vollständiger Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Nachricht"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-Mail</h4>
                    <a href="mailto:mgrdegh@gmx.de" className="text-gray-400 hover:text-orange-400 transition-colors">
                      mgrdegh@gmx.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefon</h4>
                    <a href="tel:+4915227322222" className="text-gray-400 hover:text-orange-400 transition-colors">
                      +49 152 27322222
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/mgrdegh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      linkedin.com/in/mgrdegh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-10 border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Alle Rechte vorbehalten</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioGerman;

