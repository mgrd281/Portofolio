import React, { useEffect } from 'react';
import { Download, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Anschreiben = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Navigation Button */}
            <Link
                to="/"
                className="fixed top-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
                <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-[#5B9AA0]" />
            </Link>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" data-aos="fade-up">
                {/* Header Section */}
                <div className="bg-[#5B9AA0] p-8 sm:p-12 text-white">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Mgrdegh Ghazarian</h1>
                            <p className="text-xl text-white/90">Praktikant im Online-Marketing</p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm sm:text-base text-white/90">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>mgrdegh@web.de</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+49 152 27322222</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Hamburg, Deutschland</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-12 text-gray-700 leading-relaxed space-y-6">
                    {/* Recipient & Date */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
                        <div className="text-gray-600">
                            <p className="font-semibold text-gray-900">An</p>
                            <p>Unternehmen 1</p>
                            <p>Personalabteilung</p>
                            <p>Ort</p>
                        </div>
                        <div className="text-gray-500">
                            <p>29. November 2025</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-6 text-justify">
                        <p className="font-semibold text-gray-900 text-lg">Sehr geehrte Damen und Herren,</p>

                        <p>
                            mit großem Interesse bewerbe ich mich um ein Praktikum im Bereich Online-Marketing. Durch meine mehrjährige Erfahrung im E-Commerce habe ich bereits praxisnahe Einblicke in wichtige digitale Geschäftsprozesse gewonnen. Dazu zählen die Pflege und Optimierung von Produktdaten, die Analyse von Shop-Leistungskennzahlen sowie die Erstellung verkaufsstarker Inhalte für verschiedene Plattformen.
                        </p>

                        <p>
                            Während meiner Tätigkeit als selbstständiger Online-Verkäufer habe ich nicht nur meinen eigenen Webshop programmiert und betrieben, sondern auch aktiv auf mehreren Marktplätzen wie Amazon, OTTO, eBay und anderen gearbeitet. Dabei konnte ich kontinuierlich beobachten, wie stark Marketingmaßnahmen und datenbasierte Entscheidungen den Erfolg von Produkten beeinflussen. Dies hat meine Motivation gestärkt, meine Zukunft im Bereich Online-Marketing weiter auszubauen.
                        </p>

                        <p>
                            Um meine theoretischen und technischen Fähigkeiten zu vertiefen, habe ich mehrere anerkannte Google-Zertifikate erworben, darunter Google Analytics, Google Ads Measurement und Google Ads Display. Diese Zertifizierungen haben mir ein fundiertes Verständnis vermittelt für Themen wie Nutzerdatenanalyse, Conversion-Tracking, Segmentierung, Kampagnenmessung und strategische Optimierung digitaler Werbemaßnahmen. Besonders die Kombination aus analytischem Denken und kreativem Kampagnenaufbau begeistert mich.
                        </p>

                        <p>
                            Ein Praktikum bietet mir die Möglichkeit, mein Wissen unter realen Bedingungen einzusetzen, professionell weiterzuentwickeln und aktiv zur Umsetzung von Marketingstrategien beizutragen. Ich möchte begreifen, wie Teams in Unternehmen Kampagnen planen, KPIs definieren, Budgets einteilen und Maßnahmen systematisch verbessern. Gleichzeitig bringe ich eine hohe Lernbereitschaft, präzises Arbeiten, analytisches Verständnis und Begeisterung für digitale Trends mit.
                        </p>

                        <p>
                            Ich arbeite strukturiert, bin zuverlässig und kann mich schnell in neue Tools und Aufgabenbereiche einarbeiten. Besonders wichtig ist mir, Verantwortung zu übernehmen, konstruktiv im Team zu arbeiten und Ergebnisse transparent und nachvollziehbar zu dokumentieren.
                        </p>

                        <p>
                            Über die Möglichkeit, meine Motivation und Qualifikationen in einem persönlichen Gespräch näher vorzustellen, würde ich mich sehr freuen.
                        </p>
                    </div>

                    {/* Closing */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="mb-8">Mit freundlichen Grüßen</p>
                        <p className="font-semibold text-xl text-[#5B9AA0]">Mgrdegh Ghazarian</p>
                    </div>
                </div>

                {/* Footer / Actions */}
                <div className="bg-gray-50 p-8 border-t border-gray-100 flex justify-center print:hidden">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-8 py-3 bg-[#5B9AA0] text-white rounded-xl font-semibold hover:bg-[#4a8085] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Download className="w-5 h-5" />
                        Als PDF speichern
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Anschreiben;
