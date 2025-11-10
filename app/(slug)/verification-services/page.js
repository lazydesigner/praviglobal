'use client';
import React, { useState } from 'react';
import { 
  Shield,
  Award,
  FileCheck2,
  ClipboardCheck,
  Clock,
  Phone,
  Calendar,
  MapPin,
  Star,
  Globe,
  CheckCircle2,
  ChevronRight,
  Users,
  Heart
} from 'lucide-react';

const VerificationServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Trusted Legal & Medical Verification</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Verification Services at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Ensuring Transparency, Legality & Patient Safety
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our **Verification Services** ensure that every fertility treatment, donor match, and surrogacy arrangement at Pravi Global IVF Delhi adheres to legal, ethical, and medical standards.  
                We prioritize transparency, confidentiality, and compliance to protect every parent’s journey.
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
                      <div className="text-blue-100">Years of Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-blue-100">Legal Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Trusted</div>
                      <div className="text-blue-100">By 5000+ Couples</div>
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
            Why Choose Verification Services at Pravi Global IVF?
          </h2>
          <p className="text-lg text-gray-600">
            Ethical, transparent, and legally verified fertility care you can trust
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FileCheck2, title: 'Legal Compliance', desc: 'All donor & surrogacy processes verified under ICMR guidelines' },
            { icon: Shield, title: 'Confidential & Secure', desc: 'All patient records and genetic data are protected' },
            { icon: ClipboardCheck, title: 'Medical Screening', desc: 'Comprehensive tests for donors, surrogates, and recipients' },
            { icon: Heart, title: 'Transparent Process', desc: 'Full documentation and consent procedures followed' }
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
                { id: 'overview', label: 'About Verification Services' },
                { id: 'types', label: 'Types of Verification' },
                { id: 'process', label: 'Verification Process' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Are Verification Services?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Verification Services** at Pravi Global IVF Delhi ensure that every fertility treatment follows proper **legal, medical, and ethical** guidelines.  
                  These services safeguard the rights of intended parents, donors, and surrogates while maintaining complete confidentiality and compliance.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our verification protocols align with the **Indian Council of Medical Research (ICMR)** and **ART Regulation Act**, ensuring ethical medical practice in all reproductive procedures.
                </p>
              </div>
            )}

            {activeTab === 'types' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Verification We Provide</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Identity Verification** – Aadhaar, passport, or government ID verification for all parties.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Medical Verification** – Health, fertility, and infectious disease screening for patients, donors, and surrogates.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Legal Verification** – Consent forms, surrogacy agreements, and compliance checks under ART law.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **Genetic Verification** – DNA and blood group matching where applicable.</li>
                </ul>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Verification Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Document Collection', desc: 'We collect all required identification, medical, and consent documents from all parties.' },
                    { step: '02', title: 'Medical Screening', desc: 'Full physical, hormonal, and infectious testing is conducted for donors/surrogates.' },
                    { step: '03', title: 'Legal Review', desc: 'All contracts and consents are reviewed by legal advisors to ensure compliance with ART guidelines.' },
                    { step: '04', title: 'Final Verification', desc: 'A senior doctor and legal representative approve the case before treatment begins.' }
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
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  Frequently Asked Questions About Verification Services
                </h2>
                <div className="space-y-4">
                  {[
                    { q: 'Why is verification important in IVF and surrogacy?', a: 'It ensures the legality, safety, and ethical integrity of all medical and contractual procedures involved in fertility treatments.' },
                    { q: 'Is patient information kept confidential?', a: 'Yes. All records and data are stored securely and accessible only to authorized personnel.' },
                    { q: 'Are your services ART Act compliant?', a: 'Yes. Pravi Global IVF follows all ART Act and ICMR guidelines for ethical fertility practices.' },
                    { q: 'Do donors and surrogates undergo background checks?', a: 'Yes. We perform identity, health, and psychological screenings to ensure safety for all parties.' }
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
            Transparent & Verified Fertility Care in Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Trust Pravi Global IVF Delhi for fully verified, ethical, and compliant fertility treatments that protect your rights and ensure safety at every step.
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

export default VerificationServicesPage;
