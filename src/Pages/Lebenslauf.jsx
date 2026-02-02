import React, { useEffect } from 'react';
import {
    Download,
    TrendingUp,
    ShoppingCart,
    Package,
    CheckCircle,
    Award,
    Mail,
    MessageCircle,
    MapPin,
    Linkedin,
    FileText,
    Briefcase,
    Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Lebenslauf = () => {
    const [imageModalOpen, setImageModalOpen] = React.useState(false);
    const [platformModalOpen, setPlatformModalOpen] = React.useState(false);
    const [activePlatform, setActivePlatform] = React.useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (imageModalOpen || platformModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [imageModalOpen, platformModalOpen]);

    // Handle CV Download as PDF
    const handleDownloadCV = () => {
        window.print();
    };

    const stats = [
        { icon: TrendingUp, value: '5+', label: 'Jahre Erfahrung' },
        { icon: ShoppingCart, value: '14+', label: 'Verkaufsplattformen' },
        { icon: Package, value: '4000+', label: 'Produkte verkauft' }
    ];

    const platforms = [
        { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', description: 'Start im Jahr 2019. Erfolgreiche Umsätze erzielt und umfassende Erfahrung in Produktlisting, Kundenkommunikation sowie tiefes Marktverständnis aufgebaut.' },
        { name: 'eBay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png', description: 'Erfolgreicher Vertrieb über Auktionen und Festpreisangebote mit Top-Bewertungen.' },
        { name: 'OTTO', url: 'https://www.otto.de/unternehmen/uploads/mediaLibrary/Otto_Logo_rgb_Schutzraum.png', description: 'Gelisteter Partner-Verkäufer. Optimierung von Produktdaten für maximale Sichtbarkeit.' },
        { name: 'Kaufland', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Kaufland_Logo.svg', description: 'Erfolgreiche Expansion und Erschließung neuer Zielgruppen im Multichannel-Vertrieb.' },
        { name: 'Check24', url: 'https://www.bgk-p.de/de-wAssets/img/blog/CHECK24.png', description: 'Strategische Platzierung im Preisvergleich zur Steigerung der Wettbewerbsfähigkeit.' },
        { name: 'Metro', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksdF1_y9eh9R5yDGqTPN70PPPpkOBEHFhPw&s', description: 'B2B-Vertrieb und Großhandelsabwicklung für gewerbliche Kunden.' },
        { name: 'Kleinanzeigen', url: 'https://i.ytimg.com/vi/FbmuLzVUFjE/maxresdefault.jpg', description: 'Lokaler Vertrieb und schnelle Abwicklung von Direktverkäufen.' },
        { name: 'Hood', url: 'https://images.pedali.de/fit-in/pedali-de/dealers/hood.de-9zdab.jpg', description: 'Nutzung alternativer Vertriebskanäle zur Umsatzsteigerung.' },
        { name: 'TikTok Shop', url: 'https://www.elternguide.online/wp-content/uploads/2025/07/tiktok-1600x715.jpg', description: 'Social Commerce: Produktplatzierung und Verkauf direkt über Video-Content.' },
        { name: 'Shopify', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg', description: 'Kompletter Aufbau und Management des eigenen Webshops (Karinex.de).' },
        { name: 'Facebook Marketplace', url: 'https://channelx.world/wp-content/uploads/2022/11/fb-marketplace-01-scaled-1.jpg', description: 'Social Selling und direkte Kundeninteraktion zur Reichweitensteigerung.' },
        { name: 'Markt.de', url: 'https://allvectorlogo.com/img/2016/08/markt-de-logo.png', description: 'Zusätzlicher Vertriebskanal für Nischenprodukte und lokale Angebote.' },
        { name: 'Idealo', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzEThmH-_pOOxTBpJN0444ez6Bpao7xlemA&s', description: 'Listung und Preisoptimierung für hohe Klickraten und Traffic-Generierung.' },
        { name: 'Billiger.de', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGAf1UiqKtlJGC8o-rFthlzS7ZJuzsJFkkYDVPtStqokiF-EZa8co4FIjHr42WOzG1xU&usqp=CAU', description: 'Effiziente Nutzung von Preisvergleichsportalen zur Neukundengewinnung.' },
        { name: 'Google Shopping', url: 'https://clicksradar.com/wp-content/uploads/google-shopping-logo.png', description: 'Kampagnensteuerung und Feed-Optimierung für maximale Sichtbarkeit in der Suche.' }
    ];

    const whyMe = [
        { text: 'Praktische E-Commerce Erfahrung seit 2019' },
        { text: 'Zertifiziert in Google Ads & Analytics' },
        { text: 'Datengetriebene Entscheidungsfindung' },
        { text: 'Selbstständig & lösungsorientiert' }
    ];

    const skills = [
        { name: 'E-Commerce', level: 95 },
        { name: 'Google Ads', level: 85 },
        { name: 'Google Analytics', level: 80 },
        { name: 'Meta Ads', level: 75 },
        { name: 'SEO', level: 70 },
        { name: 'Shopify', level: 90 },
        { name: 'Webdesign', level: 75 }
    ];

    const achievements = [
        {
            title: 'Entwicklung und Umsetzung von Online-Marketing-Strategien',
            date: '03/2025 - 03/2026',
            description: 'Planung und Umsetzung digitaler Marketingmaßnahmen über Google Ads, Facebook Ads und SEO zur Steigerung von Besucherzahlen, Conversion-Rate und Umsatz durch gezielte, datenbasierte Optimierungen.'
        }
    ];

    const certifications = [
        { title: 'Google Analytics Certification', date: '10/2025 - 10/2025' },
        { title: 'Google Ads Suchmaschinenwerbung', date: '06/2025 - 06/2026' },
        { title: 'Google Analytics Zertifizierung', date: '06/2025 - 06/2026' },
        { title: 'Google Ads Display Certification', date: '10/2025 - 10/2026' }
    ];

    const languages = [
        { name: 'Armenisch', level: 'Muttersprache', flag: '🇦🇲', progress: 100, subtitle: 'Native Speaker' },
        { name: 'Deutsch', level: 'Gute Kenntnisse (B2)', flag: '🇩🇪', progress: 70, subtitle: 'Selbstständige Sprachverwendung' },
        { name: 'Englisch', level: 'Gute Kenntnisse (B2)', flag: '🇬🇧', progress: 70, subtitle: 'Business English' },
        { name: 'Französisch', level: 'Grundkenntnisse (A1)', flag: '🇫🇷', progress: 25, subtitle: 'Basis' }
    ];

    return (
        <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section with Profile */}
                <div className="mb-8" data-aos="fade-up">
                    <div className="flex flex-col sm:flex-row justify-between gap-8">
                        {/* Left: Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mgrdegh Ghazarian</h1>
                            <p className="text-xl text-[#5B9AA0] font-semibold mb-6">Online Marketing Specialist</p>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                                Derzeit in einer Weiterbildung im Bereich Online Marketing am Digital Career Institute (DCI)
                                mit praktischer Erfahrung im Verkauf und in der Verwaltung von E-Commerce-Shops. Sicher im
                                Umgang mit Shopify und der Gestaltung von Webseiten sowie einem fundierten Verständnis für
                                digitale Marketingstrategien, User-Experience-Optimierung und messbare Ergebnisse im digitalen Umfeld.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1xmG7_hdFEVueURxmMUhBu5IevpXjWh1l"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B9AA0] text-white text-sm font-medium rounded-lg hover:bg-[#4a8389] transition-all duration-300"
                                >
                                    <Download className="w-4 h-4" />
                                    Lebenslauf herunterladen
                                </a>
                            </div>
                        </div>

                        {/* Right: Profile Image & Contact */}
                        <div className="flex flex-col items-center sm:items-end gap-6">
                            <div
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white"
                                onClick={() => setImageModalOpen(true)}
                            >
                                <img
                                    src="/Profile.jpg"
                                    alt="Mgrdegh Ghazarian"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-3 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span>mgrdegh@gmx.de</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* WhatsApp Official Icon */}
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
                                        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zm-8.475 18.3c-1.778-.001-3.522-.48-5.035-1.386l-.361-.214-3.741.98 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.885-9.886 9.885z" fill="#25D366"/>
                                    </svg>
                                    <a href="https://wa.me/4915227322222" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                        +49 1522 7322222 (WhatsApp)
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span>Hamburg, DE</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="w-4 h-4 text-gray-400" />
                                    <a href="https://linkedin.com/in/mgrdegh" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B9AA0] flex items-center gap-1">
                                        linkedin.com/in/mgrdegh
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-200 mb-8" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8" data-aos="fade-up">
                    {stats.map((stat, index) => (
                        stat.label === 'Verkaufsplattformen' ? (
                            <div
                                key={index}
                                onClick={() => setPlatformModalOpen(true)}
                                className="block bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#5B9AA0] hover:shadow-md transition-all cursor-pointer"
                            >
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#5B9AA0]" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ) : (
                            <a
                                key={index}
                                href="/portfolio#Portofolio"
                                className="block bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#5B9AA0] hover:shadow-md transition-all cursor-pointer"
                            >
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#5B9AA0]" />
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </a>
                        )
                    ))}
                </div>


                {/* Main Content - Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Warum ich? & Weiterbildung */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">WARUM ICH?</h2>

                            {/* Why Me Points */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {whyMe.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-[#A8C9A3] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <hr className="border-gray-100 mb-6" />

                            {/* Weiterbildung Content */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Online Marketing Weiterbildung</h3>
                                <p className="text-sm text-gray-500 mb-3">Digital Career Institute (DCI) · 03/2025 - 03/2026 · Hamburg, DE</p>

                                <p className="text-sm font-semibold text-gray-900 mb-2">Kurse / Schwerpunkte:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>SEO und Content Marketing.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Meta Ads und Social Media Marketing.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Google Ads und Google Merchant Center.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Analysen mit Google Analytics und Meta Analytics.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Berufserfahrung */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">PERSÖNLICHE PROJEKTE</h2>

                            <div className="border-l-2 border-gray-200 pl-4">
                                <h3 className="text-lg font-semibold text-gray-900">Selbstständiger Online-Verkäufer</h3>
                                <a href="https://www.karinex.de" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5B9AA0] hover:underline mb-2 block">
                                    www.karinex.de
                                </a>
                                <p className="text-sm text-gray-500 mb-2">Eigenes Unternehmen · 10/2019 - 06/2024</p>
                                <p className="text-sm text-gray-600 italic mb-3">
                                    Aufbau und Betrieb eines eigenen Online-Handels über mehrere Marktplätze und einen eigenen Webshop.
                                </p>
                                <ul className="space-y-1.5 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Verkauf über Amazon, OTTO, Check24, Metro, Hood und eBay.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Betrieb und Pflege eines eigenen Online-Shops.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Produktpflege, Content-Erstellung und Angebotsoptimierung.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Abwicklung von Bestellungen, Kundenservice und Retourenmanagement.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Marktanalyse, Preisstrategie und Umsatzoptimierung.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Kommunikation mit Lieferanten und Organisation der Logistik.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Persönliche Projekte */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#5B9AA0] pl-3">Persönliche Projekte</h2>
                                <a
                                    href="/portfolio#Portofolio"
                                    className="text-sm text-[#5B9AA0] hover:text-[#A8C9A3] font-semibold flex items-center gap-1"
                                >
                                    Alle ansehen
                                    <Package className="w-4 h-4" />
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">BabyBee Spielraum</h3>
                                <p className="text-sm text-gray-500 mb-2">Weiterbildungsprojekt · 03/2025 - 03/2026</p>
                                <ul className="space-y-1.5 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Verwaltung und Optimierung von Google Ads Kampagnen.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Überwachung relevanter KPIs zur Leistungsverbesserung.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Durchführung von Meta Ads Analysen.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#5B9AA0]">•</span>
                                        <span>Beitrag zum digitalen Markenaufbau im Rahmen des Projekts.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Fertigkeiten */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">FÄHIGKEITEN</h2>
                            <div className="space-y-3">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-[#5B9AA0] to-[#A8C9A3] h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}% ` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Errungenschaften */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">Errungenschaften</h2>
                            {achievements.map((achievement, index) => (
                                <div key={index} className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                                    <p className="text-xs text-gray-500 mb-2">{achievement.date}</p>
                                    <p className="text-xs text-gray-600">
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bescheinigungen */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">Bescheinigungen</h2>
                            <div className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <Award className="w-4 h-4 text-[#5B9AA0] flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                                            <p className="text-xs text-gray-500">{cert.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sprachen */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">Sprachen</h2>
                            <div className="space-y-4">
                                {languages.map((lang, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="text-sm font-semibold text-gray-900">{lang.name}</span>
                                            </div>
                                            <span className="text-sm text-[#5B9AA0] font-semibold">{lang.level}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                            <div
                                                className="bg-gradient-to-r from-[#5B9AA0] to-[#A8C9A3] h-2 rounded-full"
                                                style={{ width: `${lang.progress}% ` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500">{lang.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interessen */}
                        <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#5B9AA0] pl-3">Interessen</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Reisen</span>
                                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Schwimmen</span>
                                <span className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">Webentwicklung</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kontakt Footer */}
                <div className="bg-gradient-to-r from-[#5B9AA0] to-[#A8C9A3] rounded-2xl shadow-lg p-6 mt-6 text-white" data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-3">Kontakt</h2>
                    <p className="text-sm">
                        Interessiert an einer Zusammenarbeit? Schreiben Sie mir eine E-Mail an{' '}
                        <a href="mailto:mgrdegh@gmx.de" className="underline font-semibold">mgrdegh@gmx.de</a>
                        {' '}oder kontaktieren Sie mich telefonisch / per WhatsApp unter{' '}
                        <a href="tel:+491522732222" className="underline font-semibold">+49 1522 7322222</a>.
                    </p>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-sm text-gray-600">
                    <p>© 2025 Mgrdegh Ghazarian – Online Marketing</p>
                </div>

                {/* Image Modal */}
                {imageModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn"
                        onClick={() => setImageModalOpen(false)}
                    >
                        <div className="relative max-w-4xl w-full p-4">
                            <button
                                onClick={() => setImageModalOpen(false)}
                                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div
                                className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all animate-scaleIn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src="/Profile.jpg"
                                    alt="Mgrdegh Ghazarian"
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                            </div>
                            <p className="text-center text-white mt-4 text-sm">
                                Klicken Sie außerhalb des Bildes oder auf X zum Schließen
                            </p>
                        </div>
                    </div>
                )}

                {/* Platform Modal */}
                {platformModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn"
                        onClick={() => setPlatformModalOpen(false)}
                    >
                        <div className="relative max-w-2xl w-full p-4">
                            <div
                                className="relative bg-white rounded-2xl p-8 shadow-2xl transform transition-all animate-scaleIn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setPlatformModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verkaufsplattformen</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" onClick={() => setActivePlatform(null)}>
                                    {platforms.map((platform, index) => (
                                        <div
                                            key={index}
                                            className={`relative flex flex-col items-center justify-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-[#5B9AA0]/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 ${activePlatform === index ? 'z-20 ring-2 ring-[#5B9AA0] ring-offset-2 bg-[#5B9AA0]/5' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActivePlatform(activePlatform === index ? null : index);
                                            }}
                                        >
                                            {/* Popover Description */}
                                            {activePlatform === index && (
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-gray-900/95 backdrop-blur-sm text-white text-xs p-3 rounded-lg shadow-xl z-50 animate-fadeIn pointer-events-none border border-white/10">
                                                    <p className="text-center leading-relaxed font-medium">{platform.description}</p>
                                                    {/* Arrow */}
                                                    <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900/95 rotate-45 border-r border-b border-white/10"></div>
                                                </div>
                                            )}

                                            <div className="h-10 w-full flex items-center justify-center mb-2">
                                                <img
                                                    src={platform.url}
                                                    alt={platform.name}
                                                    className={`max-h-full max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 ${activePlatform === index ? 'grayscale-0 opacity-100 scale-110' : ''}`}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerText = platform.name;
                                                    }}
                                                />
                                            </div>
                                            <span className={`text-xs font-semibold text-gray-600 group-hover:text-[#5B9AA0] transition-colors ${activePlatform === index ? 'text-[#5B9AA0]' : ''}`}>{platform.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
@keyframes fadeIn {
                    from {
        opacity: 0;
    }
                    to {
        opacity: 1;
    }
}

@keyframes scaleIn {
                    from {
        transform: scale(0.9);
        opacity: 0;
    }
                    to {
        transform: scale(1);
        opacity: 1;
    }
}

                .animate - fadeIn {
    animation: fadeIn 0.3s ease - out;
}

                .animate - scaleIn {
    animation: scaleIn 0.3s ease - out;
}

@media print {
    @page {
        size: A4;
        margin: 0;
    }

                    body {
        -webkit - print - color - adjust: exact;
        print - color - adjust: exact;
        color - adjust: exact;
    }

                    /* Hide elements not needed in print */
                    .no - print,
        button,
        [data - aos] {
        display: none!important;
    }

                    /* Ensure proper page layout */
                    .min - h - screen {
        min - height: auto;
    }

                    /* Remove animations */
                    * {
        animation: none!important;
        transition: none!important;
    }

        /* Ensure all content is visible */
        .max - w - 5xl {
        max - width: 100 %;
        padding: 20mm;
    }

    /* Better text rendering */
    h1, h2, h3, p, span {
        color: #000!important;
    }

                    /* Keep borders and colors */
                    .border {
        border - color: #e5e7eb!important;
    }

                    /* Ensure background colors print */
                    .bg - white,
                    .bg - gray - 50,
                    .bg - blue - 50 {
        background - color: #fff!important;
    }

                    /* Fix icons and buttons visibility */
                    svg {
        display: inline - block!important;
    }

                    /* Prevent page breaks inside elements */
                    .bg - white {
        page -break-inside: avoid;
        break-inside: avoid;
    }
}
`}</style>
        </div>
    );
};

export default Lebenslauf;
