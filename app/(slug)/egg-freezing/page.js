'use client';
import React, { useState } from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Microscope,
  Phone,
  Shield,
  Star,
  Baby,
  Globe,
  ChevronRight,
  Snowflake
} from 'lucide-react';

const EggFreezingPage = () => {
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
                <span className="text-blue-100 font-semibold">Preserve Your Fertility Future</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Egg Freezing at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Advanced Oocyte Cryopreservation for Women
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our **Egg Freezing program** empowers women to preserve their fertility for the future.  
                Using advanced vitrification technology, **Pravi Global IVF Delhi** ensures high survival and fertilization rates — giving women control over when to start their family.
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
                    <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                      <Snowflake className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-blue-100">Egg Survival Rate</div>
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
            Why Choose Egg Freezing at Pravi Global IVF Delhi?
          </h2>
          <p className="text-lg text-gray-600">Safe, reliable, and advanced fertility preservation for modern women</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Latest Vitrification Tech', desc: 'State-of-the-art freezing to protect egg quality' },
            { icon: Shield, title: 'Safe & Secure Storage', desc: 'Cryopreservation under strict monitoring' },
            { icon: Heart, title: 'Empowering Women', desc: 'Choose motherhood at your convenience' },
            { icon: Globe, title: 'Global Standards', desc: 'Compliant with ICMR & international IVF protocols' }
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
                { id: 'overview', label: 'About Egg Freezing' },
                { id: 'process', label: 'Freezing Process' },
                { id: 'benefits', label: 'Benefits' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Egg Freezing?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Egg freezing (oocyte cryopreservation)** allows women to preserve their eggs for future use.  
                  The eggs are frozen using rapid cooling (vitrification) to maintain their health and potential for fertilization later in life.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, our advanced technology and lab precision ensure optimal egg survival and successful fertilization rates after thawing.
                </p>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Egg Freezing Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'Fertility assessment, ovarian reserve tests, and counseling.' },
                    { step: '02', title: 'Ovarian Stimulation', desc: 'Medications to stimulate multiple egg development over 10–12 days.' },
                    { step: '03', title: 'Egg Retrieval', desc: 'Eggs collected using ultrasound-guided aspiration under anesthesia.' },
                    { step: '04', title: 'Vitrification (Freezing)', desc: 'Collected eggs are rapidly frozen and stored in liquid nitrogen tanks.' }
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

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Egg Freezing</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2" />Preserves fertility for career or personal planning</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" />Ideal for medical reasons (chemotherapy, endometriosis, etc.)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" />Maintains egg quality despite age-related decline</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" />Enables use of your own genetic material later in life</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" />Safe, proven, and globally accepted technology</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Egg Freezing</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is egg freezing safe?', a: 'Yes. It’s a safe and minimally invasive process using advanced vitrification to prevent damage during freezing.' },
                    { q: 'What is the ideal age to freeze eggs?', a: 'The best time is between 25–35 years, when egg quality is highest.' },
                    { q: 'How long can eggs be stored?', a: 'Eggs can be safely stored for many years without loss of quality.' },
                    { q: 'Can frozen eggs be used for IVF later?', a: 'Yes, thawed eggs are fertilized through ICSI to achieve pregnancy when desired.' }
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
            Preserve Your Fertility with Egg Freezing at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose flexibility, security, and control over your fertility with advanced egg freezing technology and expert care.
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

export default EggFreezingPage;
