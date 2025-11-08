'use client';
import React, { useState } from 'react';
import { 
  Users,
  Award,
  Heart,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
  MapPin,
  Star,
  Baby,
  Shield,
  Globe,
  ChevronRight,
  Activity
} from 'lucide-react';

const DonorServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Trusted Donor Programs in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Donor Services at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Ethical, Confidential & Compassionate Donor Programs
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our **Donor Services** at Pravi Global IVF Delhi offer reliable and ethical access to **egg, sperm, and embryo donors**. We follow strict screening, legal, and ethical guidelines to help couples and individuals build families safely and confidentially.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 800 915 0040
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lajpat Nagar, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 10 AM - 6 PM</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">18+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">1000+</div>
                      <div className="text-blue-100">Successful Donor Cycles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Success Rates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Our Donor Services in Delhi?
          </h2>
          <p className="text-lg text-gray-600">Ethical practices, expert handling, and full confidentiality</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Heart, title: 'Compassionate Guidance', desc: 'Supportive care for both donors and recipients' },
            { icon: Shield, title: 'Strict Screening', desc: 'Medical and genetic tests ensure donor suitability' },
            { icon: Globe, title: 'Confidential Process', desc: 'Your privacy and anonymity are protected at every step' },
            { icon: Users, title: 'Experienced Specialists', desc: 'Led by renowned IVF doctors and embryologists' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'About Donor Services' },
                { id: 'types', label: 'Types of Donor Programs' },
                { id: 'process', label: 'Our Process' },
                { id: 'faqs', label: 'FAQs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-3 border-blue-600 bg-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Donor Services?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Donor services** provide healthy, medically screened eggs, sperm, or embryos to couples and individuals struggling with infertility. These services are ideal for cases involving poor egg/sperm quality, genetic issues, or single-parent conception.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, we offer legal, ethical, and transparent donor programs following ICMR guidelines, ensuring safety and confidentiality for all parties.
                </p>
              </div>
            )}

            {activeTab === 'types' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Donor Programs We Offer</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Egg Donor Program** – For women with poor egg quality or premature ovarian failure.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Sperm Donor Program** – For male infertility cases involving low sperm count or motility.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Embryo Donor Program** – For couples where both partners have infertility issues.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Anonymous & Confidential** – We ensure full legal and ethical compliance for all donor matches.</li>
                </ul>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Donor Service Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Consultation & Counseling', desc: 'Detailed evaluation of the recipient’s needs and counseling for both donor and recipient.' },
                    { step: '02', title: 'Medical & Genetic Screening', desc: 'Donors undergo rigorous health, psychological, and genetic testing.' },
                    { step: '03', title: 'Matching & Legal Clearance', desc: 'We ensure compatibility and complete all required documentation and legal processes.' },
                    { step: '04', title: 'IVF / IUI Procedure', desc: 'The donor eggs or sperm are used for fertilization under expert supervision in our advanced IVF lab.' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Donor Services</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Are donor programs legal in India?', a: 'Yes, all donor programs are regulated by ICMR guidelines and are completely legal when done ethically through licensed centers.' },
                    { q: 'Is the donor’s identity disclosed?', a: 'No. All donor programs at Pravi Global IVF Delhi are anonymous and confidential, ensuring full privacy for all parties.' },
                    { q: 'Who can opt for donor services?', a: 'Couples with failed IVF cycles, poor egg/sperm quality, or genetic disorders, as well as single parents, can opt for donor programs.' },
                    { q: 'Are donors medically screened?', a: 'Absolutely. Donors undergo extensive health, genetic, and infectious disease screening before approval.' }
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                      <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-start gap-3">
                        <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-gray-700 ml-9 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Donor Program with Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Safe, legal, and compassionate donor services — helping families grow with care, confidentiality, and medical excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:+918009150040" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
            >
              <Phone className="w-6 h-6" />
              Call +91 800 915 0040
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2 text-lg">
              <Calendar className="w-6 h-6" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorServicesPage;
