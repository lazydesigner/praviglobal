'use client';
import React, { useState } from 'react';
import { 
  FlaskRound,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
  Heart,
  Shield,
  Microscope,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Activity,
  Globe,
  Baby
} from 'lucide-react';

const IUIServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Best IUI Treatment in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                IUI Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Affordable, Safe & Effective Fertility Care
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we offer advanced **Intrauterine Insemination (IUI)** treatments — a simple, safe, and effective fertility procedure that helps couples achieve pregnancy naturally with medical support. 
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
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Safe</div>
                      <div className="text-blue-100">Fertility Procedure</div>
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
            Why Choose Pravi Global IVF Delhi for IUI?
          </h2>
          <p className="text-lg text-gray-600">Expertise, Advanced Technology, and Compassionate Care.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Modern Lab', desc: 'Equipped for accurate semen preparation and analysis' },
            { icon: Users, title: 'Expert Doctors', desc: 'Led by highly experienced fertility specialists' },
            { icon: Heart, title: 'Personalized Plans', desc: 'Tailored IUI cycles for individual needs' },
            { icon: Globe, title: 'International Protocols', desc: 'World-class fertility standards & safety' }
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
                { id: 'overview', label: 'About IUI' },
                { id: 'process', label: 'IUI Process' },
                { id: 'benefits', label: 'Success Factors' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">IUI Treatment – A Simple Path to Parenthood</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Intrauterine Insemination (IUI)** is one of the simplest and least invasive fertility treatments. In this process, prepared sperm is placed directly inside the uterus during ovulation, increasing the chances of fertilization naturally.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, our fertility experts design customized IUI cycles based on the couple’s medical profile, ensuring the best chance of success.
                </p>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step IUI Treatment Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Initial Consultation & Evaluation', desc: 'Detailed fertility check-up and assessment of ovulation and semen quality.' },
                    { step: '02', title: 'Ovulation Monitoring', desc: 'Tracking ovulation through ultrasound and hormone tests to determine the right timing.' },
                    { step: '03', title: 'Semen Collection & Preparation', desc: 'The sperm sample is collected and processed in our advanced lab to select the healthiest sperms.' },
                    { step: '04', title: 'Insemination Procedure', desc: 'Processed sperm is placed into the uterus using a soft catheter — a quick, painless procedure.' },
                    { step: '05', title: 'Post-Procedure Care & Follow-Up', desc: 'You can resume normal activities after a short rest, with a pregnancy test after 2 weeks.' }
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose IUI at Pravi Global IVF?</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Safe, minimally invasive, and affordable</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Performed by the best IUI specialists in Delhi</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Advanced semen processing for higher pregnancy rates</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Personalized treatment protocols for every couple</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> 24/7 support and post-IUI guidance</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About IUI</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is IUI painful?', a: 'No, IUI is a quick and virtually painless procedure. Some women may experience mild cramping during or after the process.' },
                    { q: 'What is the success rate of IUI?', a: 'The success rate varies between 15%–25% per cycle, depending on age, sperm quality, and other health factors.' },
                    { q: 'Who is eligible for IUI?', a: 'IUI is recommended for couples with unexplained infertility, mild male infertility, or cervical issues.' },
                    { q: 'How long does the procedure take?', a: 'The entire insemination process takes only about 10–15 minutes, with no need for anesthesia or recovery time.' }
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
            Begin Your IUI Journey with Pravi Global IVF
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the first step toward parenthood — book a free IUI consultation with our fertility experts in Delhi.
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

export default IUIServicePage;
