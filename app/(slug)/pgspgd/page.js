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
  Globe,
  Baby
} from 'lucide-react';

const PGSPGDServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Advanced Genetic Testing for IVF</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                PGS & PGD at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Ensuring Healthy Embryos for a Healthy Pregnancy
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we offer advanced **PGS (Preimplantation Genetic Screening)** and **PGD (Preimplantation Genetic Diagnosis)** to ensure only genetically healthy embryos are transferred — improving IVF success rates and reducing the risk of genetic disorders.
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
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-blue-100">Accuracy in Genetic Testing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Cutting-Edge</div>
                      <div className="text-blue-100">Genomic Technology</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Healthy</div>
                      <div className="text-blue-100">Embryo Selection</div>
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
            Why Choose Pravi Global IVF for PGS & PGD?
          </h2>
          <p className="text-lg text-gray-600">Advanced genetic screening to ensure the best IVF outcomes</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Genetic Accuracy', desc: 'World-class genomic analysis for embryo health' },
            { icon: Users, title: 'Expert Embryologists', desc: 'Led by Dr. Rit Shukla – 5000+ procedures' },
            { icon: Shield, title: 'Reduced Risk', desc: 'Eliminates chromosomal abnormalities & inherited disorders' },
            { icon: Heart, title: 'Higher Success', desc: 'Increases implantation & pregnancy rates' }
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
                { id: 'overview', label: 'About PGS / PGD' },
                { id: 'process', label: 'Testing Process' },
                { id: 'benefits', label: 'Advantages' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding PGS & PGD</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  **PGS (Preimplantation Genetic Screening)** and **PGD (Preimplantation Genetic Diagnosis)** are advanced techniques used during IVF to test embryos for chromosomal or genetic abnormalities before implantation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  These methods allow the selection of healthy embryos, improving the chances of a successful pregnancy and minimizing the risk of inherited genetic diseases.
                </p>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step PGS / PGD Process</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'IVF & Embryo Development', desc: 'Eggs are fertilized with sperm to create embryos under controlled lab conditions.' },
                    { step: '02', title: 'Embryo Biopsy', desc: 'A few cells are safely removed from each embryo for genetic testing.' },
                    { step: '03', title: 'Genetic Analysis', desc: 'The cells are analyzed using Next-Generation Sequencing (NGS) or Microarray technology.' },
                    { step: '04', title: 'Healthy Embryo Selection', desc: 'Embryos without chromosomal or genetic issues are identified for transfer.' },
                    { step: '05', title: 'Embryo Transfer', desc: 'Only healthy embryos are transferred into the uterus for pregnancy.' }
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Benefits of PGS / PGD Testing</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Increases IVF success rate</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Reduces miscarriage risk</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Prevents inherited diseases</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Identifies chromosomal abnormalities early</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Ensures healthier pregnancies & babies</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About PGS / PGD</h2>
                <div className="space-y-4">
                  {[
                    { q: 'Who should opt for PGS/PGD?', a: 'Couples with recurrent miscarriages, failed IVF cycles, advanced maternal age, or family history of genetic disorders are ideal candidates.' },
                    { q: 'Is the procedure safe for the embryo?', a: 'Yes, it’s a safe and globally practiced procedure performed by experienced embryologists using advanced tools.' },
                    { q: 'Does it guarantee pregnancy?', a: 'While PGS/PGD improves the chances of success, pregnancy outcomes depend on multiple factors such as age and overall reproductive health.' },
                    { q: 'Can it detect all genetic diseases?', a: 'It detects most common chromosomal and single-gene disorders but not every possible genetic mutation.' }
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
            Ensure Healthy Pregnancy with PGS / PGD
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover the power of genetic testing at Pravi Global IVF Delhi — where science meets care for your healthy future family.
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

export default PGSPGDServicePage;
