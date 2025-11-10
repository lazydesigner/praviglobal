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
  Microscope,
  Users
} from 'lucide-react';

const TesaPesaPage = () => {
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
                <span className="text-blue-100 font-semibold">Advanced Male Fertility Treatment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                TESA & PESA at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Surgical Sperm Retrieval with Precision & Care
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we perform **TESA (Testicular Sperm Aspiration)** and **PESA (Percutaneous Epididymal Sperm Aspiration)** to retrieve sperm directly from the testis or epididymis in men with obstructive or non-obstructive azoospermia.  
                These minimally invasive techniques help achieve fatherhood through IVF-ICSI.
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
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Sperm Retrieval Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Successful</div>
                      <div className="text-blue-100">IVF-ICSI Pregnancies</div>
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
            Why Choose Pravi Global IVF for TESA & PESA?
          </h2>
          <p className="text-lg text-gray-600">Expert microsurgical sperm retrieval with maximum precision</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Shield, title: 'Safe & Painless', desc: 'Performed under local or general anesthesia' },
            { icon: Microscope, title: 'Microsurgical Precision', desc: 'Advanced techniques ensure high-quality sperm retrieval' },
            { icon: Heart, title: 'High Success with IVF-ICSI', desc: 'Achieve pregnancy even in cases of azoospermia' },
            { icon: Globe, title: 'Experienced Andrologists', desc: 'Led by fertility specialists with years of expertise' }
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
                { id: 'overview', label: 'About TESA & PESA' },
                { id: 'difference', label: 'Difference Between TESA & PESA' },
                { id: 'process', label: 'Procedure & Recovery' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are TESA & PESA?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **TESA (Testicular Sperm Aspiration)** and **PESA (Percutaneous Epididymal Sperm Aspiration)** are advanced procedures designed to extract sperm directly from the testes or epididymis in men with azoospermia (no sperm in semen).  
                  These techniques help men with blockages or sperm production problems to achieve biological fatherhood through **ICSI (Intracytoplasmic Sperm Injection)**.
                </p>
              </div>
            )}

            {activeTab === 'difference' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Difference Between TESA and PESA</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **TESA:** Sperm retrieved from the testicular tissue using a fine needle.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> **PESA:** Sperm aspirated from the epididymis (just above the testis).</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Both methods are minimally invasive and ideal for men with obstructive azoospermia.</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Both can be performed under local anesthesia and on an outpatient basis.</li>
                </ul>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Procedure & Recovery</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Pre-Procedure Evaluation', desc: 'Hormonal testing, semen analysis, and physical examination.' },
                    { step: '02', title: 'Sperm Retrieval', desc: 'Using a fine needle, sperm are aspirated from testicular or epididymal tissue.' },
                    { step: '03', title: 'Cryopreservation', desc: 'Retrieved sperm are preserved for use in future IVF-ICSI cycles.' },
                    { step: '04', title: 'Recovery', desc: 'Patients can go home the same day with minimal discomfort and quick recovery.' }
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
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About TESA & PESA</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Are TESA and PESA painful?', a: 'No. Both are performed under local anesthesia and cause minimal discomfort.' },
                    { q: 'Who should consider TESA or PESA?', a: 'Men diagnosed with obstructive or non-obstructive azoospermia or after vasectomy.' },
                    { q: 'Can retrieved sperm be stored?', a: 'Yes. Sperm can be cryopreserved for future IVF-ICSI use.' },
                    { q: 'What is the success rate of TESA/PESA?', a: 'Success rates are high when performed by experienced fertility specialists and combined with ICSI.' }
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
            Restore Fertility with TESA & PESA at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Achieve fatherhood with advanced sperm retrieval and IVF-ICSI support — expert care for every step of your fertility journey.
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

export default TesaPesaPage;
