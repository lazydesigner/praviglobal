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
  Mail,
  MapPin,
  Baby,
  Shield,
  Globe,
  ChevronRight,
  Star,
  TrendingUp
} from 'lucide-react';

const SurrogacyServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Compassionate Surrogacy Care in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Surrogacy at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Bringing Hope, Love & Parenthood Together
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Pravi Global IVF Delhi provides **ethical, transparent, and medically supervised surrogacy programs** to help couples fulfill their dream of parenthood. With expert fertility specialists and compassionate care, we guide you through every step of your surrogacy journey with trust and respect.
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
                      <div className="text-blue-100">Happy Families</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Ethical</div>
                      <div className="text-blue-100">Surrogacy Programs</div>
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
            Why Choose Pravi Global IVF for Surrogacy?
          </h2>
          <p className="text-lg text-gray-600">A trusted surrogacy partner with care, transparency, and success</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Heart, title: 'Compassionate Care', desc: 'Personalized attention for every couple & surrogate' },
            { icon: Shield, title: 'Legally Safe Process', desc: 'Complies with Indian surrogacy laws & ethics' },
            { icon: Users, title: 'Expert Medical Team', desc: 'Led by senior IVF specialists & embryologists' },
            { icon: Globe, title: 'International Standards', desc: 'World-class facilities and high success rates' }
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
                { id: 'overview', label: 'About Surrogacy' },
                { id: 'process', label: 'Surrogacy Process' },
                { id: 'eligibility', label: 'Who Can Opt?' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Surrogacy</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Surrogacy** is an assisted reproductive process where a woman (the surrogate mother) carries and gives birth to a baby for another couple who are unable to conceive or carry a pregnancy. The embryo is created using the intended parents’ eggs and sperm through **IVF**, ensuring the child is genetically related to them.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, our surrogacy programs are 100% ethical, medically safe, and legally compliant — guided by top fertility experts and supported by our experienced legal team.
                </p>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step Surrogacy Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Consultation & Evaluation', desc: 'Comprehensive evaluation of the intended couple and surrogate by fertility specialists.' },
                    { step: '02', title: 'Legal Counseling', desc: 'All surrogacy agreements and legal documents are prepared as per Indian laws.' },
                    { step: '03', title: 'IVF & Embryo Creation', desc: 'Eggs and sperm from the intended parents are used to create embryos in our lab.' },
                    { step: '04', title: 'Embryo Transfer', desc: 'A healthy embryo is transferred to the surrogate’s uterus under expert supervision.' },
                    { step: '05', title: 'Pregnancy & Delivery', desc: 'Continuous medical monitoring and care until delivery in our partner hospital.' }
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

            {activeTab === 'eligibility' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Who Can Opt for Surrogacy?</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Women with absent or damaged uterus</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Women with multiple IVF failures</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Women with medical conditions preventing pregnancy</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Couples with repeated pregnancy losses</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Intended parents cleared medically and legally for surrogacy</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Surrogacy</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is surrogacy legal in India?', a: 'Yes, surrogacy is legal in India under the Surrogacy Regulation Act 2021, which allows altruistic surrogacy for Indian couples under specific guidelines.' },
                    { q: 'What type of surrogacy do you offer?', a: 'We offer only altruistic surrogacy programs that comply with Indian laws, ensuring ethical and transparent arrangements.' },
                    { q: 'Is the surrogate genetically related to the child?', a: 'No. The surrogate only carries the pregnancy; the embryo is created using the intended parents’ gametes (or donor, if needed).' },
                    { q: 'How long does the surrogacy process take?', a: 'From evaluation to delivery, the process typically takes around 12–15 months, depending on medical and legal timelines.' }
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
            Begin Your Surrogacy Journey with Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Trust our experienced IVF and surrogacy team to make your dream of parenthood a reality — ethically, safely, and compassionately.
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

export default SurrogacyServicePage;
