'use client';
import React, { useState } from 'react';
import { 
  Activity,
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
  Microscope
} from 'lucide-react';

const LaparoscopyPage = () => {
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
                <span className="text-blue-100 font-semibold">Advanced Fertility Surgery</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Laparoscopy at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Minimally Invasive Surgery for Fertility & Diagnosis
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Experience precise, minimally invasive **laparoscopy** at Pravi Global IVF Delhi — a trusted solution for diagnosing and treating fertility problems, endometriosis, fibroids, and other reproductive issues with advanced surgical care.
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
                      <div className="text-3xl font-bold">Precision</div>
                      <div className="text-blue-100">Surgical Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Fertility Success Rates</div>
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
            Why Choose Laparoscopy at Pravi Global IVF Delhi?
          </h2>
          <p className="text-lg text-gray-600">Advanced diagnostic and surgical expertise for reproductive care</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Shield, title: 'Safe & Minimally Invasive', desc: 'Small incisions, faster recovery, minimal scarring' },
            { icon: Heart, title: 'Fertility Focused', desc: 'Precision diagnosis for infertility causes' },
            { icon: Activity, title: 'Advanced Equipment', desc: 'Latest laparoscopic instruments and imaging' },
            { icon: Globe, title: 'Experienced Specialists', desc: 'Performed by senior gynecologists & fertility surgeons' }
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
                { id: 'overview', label: 'About Laparoscopy' },
                { id: 'procedure', label: 'Procedure & Uses' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Laparoscopy?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **Laparoscopy** is a minimally invasive surgical procedure used to diagnose and treat fertility problems. It involves inserting a thin tube with a camera (laparoscope) through small abdominal incisions to view the pelvic organs.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At **Pravi Global IVF Delhi**, laparoscopy helps identify conditions such as endometriosis, fibroids, ovarian cysts, and tubal blockages that may affect fertility — offering both diagnosis and treatment in a single procedure.
                </p>
              </div>
            )}

            {activeTab === 'procedure' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Laparoscopy Procedure & Uses</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Performed under general anesthesia</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Small incisions made in the abdomen</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> A laparoscope camera provides clear internal visuals</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Used to diagnose or treat infertility-related issues</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Often combined with hysteroscopy for comprehensive evaluation</li>
                </ul>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of Laparoscopy</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Detects hidden causes of infertility</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Treats endometriosis, fibroids, cysts, and adhesions</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Short hospital stay and fast recovery</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Minimal pain and scarring</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Improves conception rates post-surgery</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Laparoscopy</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Is laparoscopy painful?', a: 'No, the procedure is done under anesthesia. Mild soreness may occur for a day or two post-surgery.' },
                    { q: 'How long is recovery time?', a: 'Most patients recover within 2–5 days and resume normal activities shortly after.' },
                    { q: 'When is laparoscopy recommended?', a: 'It’s suggested for women with unexplained infertility, endometriosis, fibroids, or tubal issues.' },
                    { q: 'Does laparoscopy improve fertility?', a: 'Yes, by treating the underlying causes of infertility, laparoscopy can significantly enhance conception chances.' }
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
            Get Expert Laparoscopy Treatment at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Restore your reproductive health and improve fertility outcomes with minimally invasive laparoscopy performed by our expert gynecologic surgeons.
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

export default LaparoscopyPage;
