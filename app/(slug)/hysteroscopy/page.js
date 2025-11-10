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
  FlaskRound,
  Globe
} from 'lucide-react';

const HysteroscopyServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Expert Hysteroscopy Procedures</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hysteroscopy at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Accurate Diagnosis & Treatment for Uterine Health
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Pravi Global IVF Delhi offers advanced **hysteroscopy procedures** using high-definition endoscopic technology for both diagnostic and therapeutic purposes. Our expert gynecologists provide safe, painless, and precise evaluations of uterine conditions affecting fertility and menstrual health.
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
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Advanced</div>
                      <div className="text-blue-100">Endoscopy Setup</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Safe</div>
                      <div className="text-blue-100">Day-Care Procedure</div>
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
            Why Choose Pravi Global IVF for Hysteroscopy?
          </h2>
          <p className="text-lg text-gray-600">Precision diagnosis, expert care, and cutting-edge technology</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Modern Equipment', desc: 'High-resolution camera for clear visualization' },
            { icon: Users, title: 'Expert Gynecologists', desc: 'Performed by senior fertility specialists' },
            { icon: Shield, title: 'Safe & Minimally Invasive', desc: 'No cuts, quick recovery, minimal discomfort' },
            { icon: Heart, title: 'Comprehensive Care', desc: 'From diagnosis to treatment – under one roof' }
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
                { id: 'overview', label: 'About Hysteroscopy' },
                { id: 'procedure', label: 'Procedure Steps' },
                { id: 'uses', label: 'When It’s Recommended' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Hysteroscopy?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Hysteroscopy** is a minimally invasive diagnostic and therapeutic procedure that allows doctors to view the inside of the uterus using a thin, lighted instrument called a hysteroscope. It helps detect and treat uterine issues such as fibroids, polyps, adhesions, and abnormal bleeding.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, we perform both **diagnostic and operative hysteroscopy** using the latest endoscopic systems for optimal safety and accuracy.
                </p>
              </div>
            )}

            {activeTab === 'procedure' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Hysteroscopy Procedure at Pravi Global IVF</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Pre-Procedure Evaluation', desc: 'Includes ultrasound and necessary lab tests to ensure readiness for the procedure.' },
                    { step: '02', title: 'Anesthesia & Preparation', desc: 'Performed under mild anesthesia or sedation for comfort.' },
                    { step: '03', title: 'Hysteroscope Insertion', desc: 'A thin camera is inserted through the cervix to visualize the uterine cavity.' },
                    { step: '04', title: 'Diagnosis or Treatment', desc: 'Polyps, fibroids, or adhesions are detected and treated using micro-instruments.' },
                    { step: '05', title: 'Post-Procedure Recovery', desc: 'You can usually return home the same day with minimal downtime.' }
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

            {activeTab === 'uses' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">When is Hysteroscopy Recommended?</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Unexplained infertility or recurrent miscarriages</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Heavy or irregular menstrual bleeding</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Suspected uterine fibroids or polyps</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> To remove intrauterine adhesions (Asherman’s syndrome)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Evaluate uterine shape or structural anomalies</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Retrieve lost IUCD (contraceptive device)</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Hysteroscopy</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is hysteroscopy painful?', a: 'The procedure is performed under local or mild general anesthesia, making it painless and comfortable for the patient.' },
                    { q: 'How long does it take?', a: 'A diagnostic hysteroscopy takes about 15–30 minutes, while operative procedures may take slightly longer.' },
                    { q: 'Is hospitalization required?', a: 'No. Hysteroscopy is a day-care procedure, and you can go home within a few hours.' },
                    { q: 'When can I resume normal activities?', a: 'Most women can resume daily activities within 24 hours after the procedure.' }
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
            Book Your Hysteroscopy at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get accurate diagnosis and effective treatment from Delhi’s leading fertility specialists using world-class hysteroscopy technology.
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

export default HysteroscopyServicePage;
