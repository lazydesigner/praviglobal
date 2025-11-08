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
  Globe
} from 'lucide-react';

const HormonalTestPage = () => {
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
                <FlaskRound className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Comprehensive Hormonal Testing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hormonal Test at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Accurate, Advanced & Reliable Hormone Analysis
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we offer advanced **hormonal testing** to evaluate reproductive and endocrine health. These tests help diagnose fertility issues, menstrual irregularities, thyroid problems, and more — ensuring targeted treatment for both men and women.
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
                      <div className="text-3xl font-bold">Advanced</div>
                      <div className="text-blue-100">Hormone Analysis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Accurate</div>
                      <div className="text-blue-100">Diagnostic Results</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Personalized</div>
                      <div className="text-blue-100">Care & Reports</div>
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
            Why Choose Pravi Global IVF for Hormonal Testing?
          </h2>
          <p className="text-lg text-gray-600">Precision. Compassion. Expertise.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Advanced Lab', desc: 'Fully automated hormone testing systems' },
            { icon: Users, title: 'Expert Pathologists', desc: 'Led by experienced fertility specialists' },
            { icon: Globe, title: 'Global Accuracy', desc: 'Tests standardized to international norms' },
            { icon: Heart, title: 'Personalized Reports', desc: 'Tailored to individual hormonal profiles' }
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
                { id: 'overview', label: 'About Hormonal Tests' },
                { id: 'types', label: 'Types of Hormonal Tests' },
                { id: 'importance', label: 'Importance in Fertility' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Hormonal Testing in Delhi</h2>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Hormones play a vital role in regulating fertility, metabolism, and overall health. At <strong>Pravi Global IVF Delhi</strong>, we provide a complete range of **hormonal tests** that help identify underlying causes of infertility, menstrual issues, thyroid imbalances, PCOD, and male hormonal problems.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our lab is equipped with **state-of-the-art automated hormone analyzers**, ensuring precise, reliable, and fast results under expert supervision.
                </p>
              </div>
            )}

            {activeTab === 'types' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Hormonal Tests We Offer</h2>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> FSH (Follicle Stimulating Hormone) – Evaluates ovarian reserve</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> LH (Luteinizing Hormone) – Determines ovulation function</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> AMH (Anti-Müllerian Hormone) – Measures egg reserve and fertility potential</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Prolactin – Detects hormonal imbalance affecting ovulation</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Estradiol (E2) – Assesses ovarian and menstrual health</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Thyroid Panel (TSH, T3, T4) – Screens thyroid-related infertility</li>
                  <li><CheckCircle2 className="inline text-green-600 mr-2"/> Testosterone – For male and female hormone imbalance</li>
                </ul>
              </div>
            )}

            {activeTab === 'importance' && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Hormonal Testing is Crucial for Fertility</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Hormones are the foundation of reproductive health. Even a small imbalance can affect ovulation, sperm production, and conception. Early hormonal assessment ensures timely diagnosis and better treatment outcomes.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Detect causes of irregular periods or PCOD',
                    'Assess ovarian function and egg reserve',
                    'Evaluate thyroid or pituitary dysfunction',
                    'Optimize IVF and fertility treatment plans',
                    'Monitor hormone therapy response',
                    'Identify male infertility causes'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About Hormonal Tests</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'When should I get a hormonal test done?',
                      a: 'If you experience irregular periods, difficulty conceiving, unexplained weight changes, or symptoms of PCOD or thyroid imbalance, hormonal testing is recommended.'
                    },
                    {
                      q: 'Is fasting required before hormonal tests?',
                      a: 'Some hormonal tests may require fasting or specific timing during the menstrual cycle. Our specialists will guide you based on the type of test.'
                    },
                    {
                      q: 'How long does it take to get results?',
                      a: 'Most hormonal test reports are available within 24 hours at Pravi Global IVF’s in-house lab.'
                    },
                    {
                      q: 'Are these tests safe?',
                      a: 'Yes, hormonal tests involve only a small blood sample and are completely safe and painless.'
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
            Book Your Hormonal Test Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Early diagnosis makes all the difference. Schedule a consultation at Pravi Global IVF Delhi for precise hormone testing.
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
              Book Test Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HormonalTestPage;
