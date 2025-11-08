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

const FemaleInfertilityPage = () => {
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
                <span className="text-blue-100 font-semibold">Comprehensive Fertility Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Female Infertility Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Restoring Hope with Advanced Fertility Care
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we specialize in diagnosing and treating **female infertility** through advanced reproductive techniques and compassionate care. From hormonal imbalance to tubal blockages, our experts identify and treat the root cause to help you achieve your dream of motherhood.
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
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-blue-100">Successful Treatments</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Expert</div>
                      <div className="text-blue-100">Gynecologists & Fertility Specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Pregnancy Success Rates</div>
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
            Why Choose Pravi Global IVF for Female Infertility Treatment?
          </h2>
          <p className="text-lg text-gray-600">Expert diagnosis, advanced technology, and compassionate care</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Activity, title: 'Accurate Diagnosis', desc: 'State-of-the-art testing for hormonal and reproductive health' },
            { icon: Heart, title: 'Holistic Care', desc: 'Personalized treatment combining medicine, lifestyle, and counseling' },
            { icon: Shield, title: 'Safe & Proven Techniques', desc: 'Fertility treatments that ensure safety and high success' },
            { icon: Globe, title: 'Comprehensive Facility', desc: 'All diagnostic and treatment services under one roof' }
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
                { id: 'overview', label: 'About Female Infertility' },
                { id: 'causes', label: 'Common Causes' },
                { id: 'treatments', label: 'Treatment Options' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Female Infertility</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Female infertility** refers to the inability to conceive after a year of unprotected intercourse. It can result from hormonal issues, ovulation problems, blocked fallopian tubes, endometriosis, or uterine conditions.  
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, we identify the cause through advanced diagnostics and provide targeted treatments to restore natural fertility or assist through ART (Assisted Reproductive Technology).
                </p>
              </div>
            )}

            {activeTab === 'causes' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Causes of Female Infertility</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Ovulation disorders (PCOS, hormonal imbalance)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Fallopian tube blockage or damage</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Endometriosis or fibroids</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Uterine or cervical abnormalities</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Age-related decline in egg quality</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Lifestyle and stress factors</li>
                </ul>
              </div>
            )}

            {activeTab === 'treatments' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Treatment Options at Pravi Global IVF</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Ovulation Induction & Hormonal Therapy</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Intrauterine Insemination (IUI)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> In Vitro Fertilization (IVF)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Hysteroscopy & Laparoscopy for Uterine Correction</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Egg Freezing & Donor Programs</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Lifestyle and Nutritional Counseling</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Female Infertility</h2>
                <div className="space-y-4">
                  {[
                    { q: 'How is female infertility diagnosed?', a: 'Through tests like hormonal profiling, ultrasound, HSG (tube test), and laparoscopy, depending on the condition.' },
                    { q: 'Can infertility be treated naturally?', a: 'In mild cases, lifestyle changes and ovulation tracking may help. For others, medical treatments are more effective.' },
                    { q: 'When should I see a fertility specialist?', a: 'If you’re under 35 and have tried for a year without success, or over 35 and tried for 6 months, consult a specialist.' },
                    { q: 'Is IVF the only solution?', a: 'No, treatments vary depending on the cause. IVF is one option among several, including IUI and medication-based therapies.' }
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
            Regain Your Fertility Confidence with Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover expert diagnosis, personalized treatment, and emotional support for female infertility — because every woman deserves a chance at motherhood.
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

export default FemaleInfertilityPage;
