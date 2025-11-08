'use client';
import React, { useState } from 'react';
import { 
  Microscope,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
  Heart,
  Shield,
  Activity,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Baby,
  Globe
} from 'lucide-react';

const FollicularMonitoringPage = () => {
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
                <span className="text-blue-100 font-semibold">Accurate Ovulation Tracking</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Follicular Monitoring at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Track Ovulation Precisely for Successful Conception
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we use advanced ultrasound-based **follicular monitoring** to track your egg growth and ovulation cycle. This ensures the right timing for conception, IUI, or IVF — increasing your chances of pregnancy.
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
                      <Activity className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Accuracy Ultrasound</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Better</div>
                      <div className="text-blue-100">Pregnancy Outcomes</div>
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
            Why Choose Follicular Monitoring at Pravi Global IVF?
          </h2>
          <p className="text-lg text-gray-600">Real-time tracking, precision care, and expert fertility guidance</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'High-Resolution Ultrasound', desc: 'Advanced equipment for accurate ovulation tracking' },
            { icon: Users, title: 'Expert Fertility Specialists', desc: 'Monitoring supervised by senior gynecologists' },
            { icon: Globe, title: 'Personalized Approach', desc: 'Tailored fertility tracking for each patient' },
            { icon: Heart, title: 'Improved Conception Rates', desc: 'Increases success for IUI, IVF & natural conception' }
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
                { id: 'overview', label: 'About Follicular Monitoring' },
                { id: 'process', label: 'Procedure Steps' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Follicular Monitoring?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Follicular monitoring** is a series of ultrasound scans performed during a woman’s menstrual cycle to track the growth and development of ovarian follicles. It helps determine the exact time of ovulation for planned conception or assisted reproductive procedures like **IUI** and **IVF**.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, our fertility experts perform real-time ultrasound tracking to monitor hormonal response, follicle size, and endometrial thickness — ensuring optimal timing for pregnancy.
                </p>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Follicular Monitoring Procedure</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Cycle Day 2–3: Baseline Scan', desc: 'Initial ultrasound to check resting follicles and baseline hormones.' },
                    { step: '02', title: 'Cycle Day 9–11: Follicle Growth Tracking', desc: 'Monitoring follicle size and number as they grow in response to hormonal stimulation.' },
                    { step: '03', title: 'Cycle Day 12–14: Ovulation Prediction', desc: 'Determining the optimal time for ovulation and scheduling IUI or intercourse.' },
                    { step: '04', title: 'Post-Ovulation Scan', desc: 'Confirming egg release and corpus luteum formation for successful ovulation.' }
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Follicular Monitoring</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Detects ovulation accurately</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Helps in timing intercourse or IUI precisely</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Prevents premature ovulation or missed cycles</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Monitors endometrial thickness for implantation</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Improves success rate of fertility treatments</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Follicular Monitoring</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is follicular monitoring painful?', a: 'No, the procedure involves simple transvaginal ultrasound scans and is completely painless.' },
                    { q: 'How many scans are needed per cycle?', a: 'Typically, 3–5 scans are done in one cycle to track follicle growth and confirm ovulation.' },
                    { q: 'Can it help with natural conception?', a: 'Yes, follicular tracking helps couples plan intercourse during the most fertile period for natural conception.' },
                    { q: 'When is follicular monitoring recommended?', a: 'It’s advised for women undergoing fertility treatments like IUI, IVF, or those with irregular cycles.' }
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
            Track Your Ovulation with Precision at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Plan your pregnancy the smart way — with expert-guided follicular monitoring and fertility assessment by Delhi’s trusted IVF specialists.
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

export default FollicularMonitoringPage;
