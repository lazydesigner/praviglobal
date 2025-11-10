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
  User as Male, 
} from 'lucide-react';

const MaleInfertilityPage = () => {
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
                <Male className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Comprehensive Male Infertility Treatment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Male Infertility Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Advanced Andrology & Fertility Solutions for Men
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we specialize in **male infertility diagnosis and treatment** using cutting-edge andrology techniques. Our experts address low sperm count, motility issues, and hormonal imbalances to help couples achieve parenthood naturally or through assisted reproduction.
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
                      <div className="text-blue-100">Years Expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-blue-100">ICSI Success Stories</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Patient Satisfaction</div>
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
            Why Choose Pravi Global IVF for Male Infertility Treatment?
          </h2>
          <p className="text-lg text-gray-600">Precision Diagnosis • Expert Care • Proven Results</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Advanced Andrology Lab', desc: 'State-of-the-art diagnostic facilities for semen and hormone analysis' },
            { icon: Users, title: 'Experienced Team', desc: 'Led by top urologists, embryologists, and fertility experts' },
            { icon: Shield, title: 'Safe Treatments', desc: 'Minimally invasive, evidence-based treatment approaches' },
            { icon: Heart, title: 'Personalized Care', desc: 'Tailored solutions for each individual’s fertility profile' }
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
                { id: 'overview', label: 'Overview' },
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
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Understanding Male Infertility
                </h2>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  **Male infertility** refers to a man’s inability to contribute to conception due to low sperm production, poor sperm function, hormonal imbalance, or blockages. At **Pravi Global IVF Delhi**, we use advanced diagnostic tools to identify the root cause and design the right treatment plan for every individual.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our approach combines medical expertise, cutting-edge technology, and compassionate counseling to help men regain confidence and fertility health.
                </p>
              </div>
            )}

            {activeTab === 'causes' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Causes of Male Infertility</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Low sperm count or motility',
                    'Hormonal imbalance (testosterone, FSH, LH)',
                    'Varicocele (enlarged veins in testicles)',
                    'Infections or blockages in reproductive tract',
                    'Lifestyle factors – smoking, alcohol, obesity',
                    'Genetic conditions affecting sperm quality',
                    'Ejaculatory disorders or retrograde ejaculation'
                  ].map((cause, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{cause}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'treatments' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Male Infertility Treatments at Pravi Global IVF</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Depending on the underlying cause, our fertility specialists recommend one or more of the following treatments:
                </p>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Medical therapy for hormonal imbalances</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Lifestyle modification and supplements for sperm health</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Surgical correction for varicocele or blockages</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Assisted Reproductive Techniques (IVF, ICSI, IUI)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Sperm retrieval methods (TESA, PESA, Micro-TESE)</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2" /> Advanced semen analysis and cryopreservation</li>
                </ul>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">FAQs About Male Infertility</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Can male infertility be treated?',
                      a: 'Yes. Depending on the cause—hormonal, structural, or lifestyle-related—treatments such as medication, surgery, or assisted reproduction can help achieve conception.'
                    },
                    {
                      q: 'What is the most common cause of male infertility?',
                      a: 'Low sperm count and poor sperm motility are among the most common causes, often linked to lifestyle or hormonal factors.'
                    },
                    {
                      q: 'Do men need hormonal tests too?',
                      a: 'Yes. Hormones like testosterone, FSH, and LH are key in sperm production and should be tested if infertility is suspected.'
                    },
                    {
                      q: 'Is ICSI effective for male infertility?',
                      a: 'Absolutely. ICSI (Intracytoplasmic Sperm Injection) is one of the most successful treatments for severe male infertility cases.'
                    }
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
            Take the First Step Toward Fertility Health
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Meet our experts today for a confidential consultation and comprehensive male infertility evaluation at Pravi Global IVF Delhi.
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
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleInfertilityPage;
