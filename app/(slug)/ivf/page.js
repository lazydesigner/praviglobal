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
  Baby,
  Activity,
  Globe
} from 'lucide-react';

const IVFServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Best IVF Centre in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                IVF Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Leading Test Tube Baby Centre in Delhi
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Experience world-class fertility care with Delhi's most trusted IVF experts. With 18+ years of excellence, cutting-edge technology, and personalized treatment plans, we help couples achieve their dream of parenthood.
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
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-blue-100">Successful ICSI Procedures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Success Rate</div>
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
            Why Choose Pravi Global IVF Delhi?
          </h2>
          <p className="text-lg text-gray-600">The Best IVF Centre in Delhi for Your Fertility Journey</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, title: 'Expert Team', desc: 'Best IVF Doctor & Embryologist in Delhi' },
            { icon: Microscope, title: 'World-Class Lab', desc: '24/7 Embryologist Support' },
            { icon: Globe, title: 'Global Standards', desc: 'International Collaboration & Technology' },
            { icon: Heart, title: 'Personalized Care', desc: 'Modern Care with Personal Touch' }
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

      {/* Our Experts */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Meet Our IVF Experts in Delhi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dr. Monica Sachdev */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dr. Monica Sachdev</h3>
                <p className="text-blue-100 font-semibold">Medical Director & Senior IVF Specialist</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-bold">18+ Years Experience</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Renowned Senior IVF Consultant and Obstetrics & Gynecology Specialist. Fellowship in IVF and Reproductive Medicine, expert in advanced fertility treatments and high-risk pregnancy management.
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">Qualifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>MBBS, DNB (Obs & Gynae)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>MRCOG, FICOG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>IVF/ART Fellowship from Chandigarh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Diplomate of Reproductive Medicine from Kiel, Germany</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dr. Rit Shukla */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dr. Rit Shukla</h3>
                <p className="text-blue-100 font-semibold">Chief Embryologist & Scientific Director</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-bold">18 Years Experience</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Distinguished Chief Embryologist with expertise in Assisted Reproductive Technology. Proven track record of performing more than 5000 ICSI procedures with exceptional success rates.
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">International Collaborations:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Democratic Republic of Congo (DRC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Afghanistan, Bangladesh, Sri Lanka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dubai - World-class IVF/ICSI Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>5000+ Successful ICSI Procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'About IVF Treatment' },
                { id: 'process', label: 'Treatment Process' },
                { id: 'success', label: 'Success Factors' },
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
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    IVF Treatment at Delhi's Premier Test Tube Baby Centre
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Pravi Global IVF Delhi is recognized as the <strong>Best IVF Centre in Delhi</strong>, offering comprehensive fertility solutions with a perfect blend of advanced technology and compassionate care. Our <strong>Test Tube Baby Centre</strong> is equipped with world-class infrastructure and staffed by the <strong>Best IVF Doctor in Delhi</strong> and the <strong>Best Embryologist in Delhi</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    In Vitro Fertilization (IVF) is an advanced assisted reproductive technology where eggs are fertilized with sperm outside the body in our state-of-the-art laboratory. As a leading <strong>IVF Expert in Delhi</strong>, we specialize in personalized treatment protocols that maximize your chances of success.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">What Makes Us the Best IVF Centre in Delhi</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'World-Class IVF Laboratory with Advanced Technology',
                      '24/7 Embryologist Support for Optimal Results',
                      'Experienced Team with 18+ Years Combined Expertise',
                      'Comprehensive Services Under One Roof',
                      'International Collaboration & Global Standards',
                      'Modern Care with Personal Touch',
                      'High Success Rates in IVF & ICSI Procedures',
                      'Personalized Treatment Plans for Each Couple'
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-800 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <Activity className="w-10 h-10 text-blue-600 mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">
                      Latest IVF/ICSI equipment and techniques imported from leading global manufacturers
                    </p>
                  </div>
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <Shield className="w-10 h-10 text-blue-600 mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Safe Procedures</h4>
                    <p className="text-gray-600 text-sm">
                      Stringent quality control and safety protocols in our certified laboratory
                    </p>
                  </div>
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                    <Heart className="w-10 h-10 text-blue-600 mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600 text-sm">
                      Emotional support and guidance throughout your fertility journey
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">IVF Treatment Process at Our Test Tube Baby Centre</h2>
                <p className="text-gray-700 mb-8 text-lg">
                  Our <strong>IVF experts in Delhi</strong> follow a comprehensive, step-by-step approach to ensure the best possible outcomes for every couple.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: '01',
                      title: 'Initial Consultation & Evaluation',
                      description: 'Comprehensive assessment by our Best IVF Doctor in Delhi, including medical history review, physical examination, and diagnostic tests to create a personalized treatment plan.',
                      duration: '1-2 visits'
                    },
                    {
                      step: '02',
                      title: 'Ovarian Stimulation',
                      description: 'Controlled hormone therapy to stimulate the ovaries to produce multiple eggs. Regular monitoring through ultrasound and blood tests to track follicle development.',
                      duration: '10-14 days'
                    },
                    {
                      step: '03',
                      title: 'Egg Retrieval',
                      description: 'Minimally invasive procedure performed under sedation to collect mature eggs from the ovaries. Conducted in our advanced operation theater.',
                      duration: '30 minutes procedure'
                    },
                    {
                      step: '04',
                      title: 'Fertilization (IVF/ICSI)',
                      description: 'Eggs are fertilized with sperm in our world-class IVF laboratory under the supervision of the Best Embryologist in Delhi. ICSI technique used when required.',
                      duration: 'Same day'
                    },
                    {
                      step: '05',
                      title: 'Embryo Culture & Monitoring',
                      description: 'Embryos are cultured in optimal conditions with 24/7 monitoring by our experienced embryologist team. Development tracked daily for 3-5 days.',
                      duration: '3-5 days'
                    },
                    {
                      step: '06',
                      title: 'Embryo Transfer',
                      description: 'Healthy embryo(s) are carefully transferred into the uterus. This is a painless procedure that takes only a few minutes.',
                      duration: '15 minutes procedure'
                    },
                    {
                      step: '07',
                      title: 'Pregnancy Test & Follow-up',
                      description: 'Blood test performed 12-14 days after transfer to confirm pregnancy. Continued monitoring and support throughout early pregnancy.',
                      duration: '2 weeks wait'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'success' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Success Factors at Pravi Global IVF Delhi</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    As the <strong>Best IVF Centre in Delhi</strong>, our success is built on multiple factors that work together to give you the best possible chance of achieving pregnancy.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Microscope className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">World-Class Laboratory</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'State-of-the-art IVF lab with controlled environment',
                        'Advanced embryo culture systems',
                        'HEPA filtered air quality control',
                        'Latest ICSI and micromanipulation equipment',
                        '24/7 embryologist monitoring'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Expert Medical Team</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Best IVF Doctor in Delhi with 18+ years experience',
                        'Best Embryologist in Delhi - 5000+ ICSI procedures',
                        'Specialized fertility nurses and counselors',
                        'International training and certifications',
                        'Continuous professional development'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Global Standards</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'International collaboration with leading centers',
                        'World-class IVF/ICSI technology',
                        'Evidence-based treatment protocols',
                        'Regular quality audits and improvements',
                        'Adherence to international guidelines'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Personalized Care</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Customized treatment protocols for each patient',
                        'Regular monitoring and adjustments',
                        'Emotional support and counseling',
                        'Transparent communication throughout',
                        'Post-treatment care and guidance'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions About IVF</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'What makes Pravi Global IVF the Best IVF Centre in Delhi?',
                      a: 'We combine 18+ years of expertise, world-class laboratory infrastructure, internationally trained specialists, and personalized care. Our team includes the Best IVF Doctor in Delhi (Dr. Monica Sachdev) and Best Embryologist in Delhi (Dr. Rit Shukla), with over 5000 successful ICSI procedures. We maintain 24/7 embryologist support and follow international protocols.'
                    },
                    {
                      q: 'What is the success rate of IVF at your Test Tube Baby Centre?',
                      a: 'Success rates depend on various factors including age, cause of infertility, and individual health conditions. Our center maintains high success rates due to our advanced technology, experienced team, and personalized protocols. During your consultation, we provide detailed success rate statistics relevant to your specific situation.'
                    },
                    {
                      q: 'How long does the complete IVF treatment take?',
                      a: 'A complete IVF cycle typically takes 4-6 weeks from the start of medication to embryo transfer. This includes ovarian stimulation (10-14 days), egg retrieval, fertilization, embryo culture (3-5 days), and transfer. The pregnancy test is done 12-14 days after transfer.'
                    },
                    {
                      q: 'Is IVF treatment painful?',
                      a: 'Most IVF procedures involve minimal discomfort. Injections during stimulation may cause slight discomfort. Egg retrieval is performed under sedation, so you won\'t feel pain during the procedure. Embryo transfer is generally painless and doesn\'t require anesthesia. Our team ensures your comfort throughout the process.'
                    },
                    {
                      q: 'What is the difference between IVF and ICSI?',
                      a: 'IVF involves placing sperm and eggs together for natural fertilization, while ICSI (Intracytoplasmic Sperm Injection) involves directly injecting a single sperm into each egg. ICSI is recommended for male factor infertility or when previous IVF attempts had poor fertilization. Our embryologist determines the best technique for your case.'
                    },
                    {
                      q: 'What is the cost of IVF treatment in Delhi?',
                      a: 'IVF costs vary based on individual requirements, medications needed, and additional procedures. We offer transparent pricing and flexible payment options. During your free consultation, we provide a detailed cost breakdown tailored to your treatment plan. Contact us at +91 800 915 0040 for specific pricing information.'
                    },
                    {
                      q: 'Do you offer free consultation at your IVF Centre in Delhi?',
                      a: 'Yes, we offer free initial consultations where our IVF experts assess your condition, discuss treatment options, and create a personalized plan. You can book your consultation by calling +91 800 915 0040 or visiting our clinic at 41, Lajpat Nagar, Delhi.'
                    },
                    {
                      q: 'What are your clinic timings?',
                      a: 'We are open Monday to Saturday from 10:00 AM to 6:00 PM. Our embryology lab operates 24/7 to ensure optimal care for embryos. For emergencies or urgent queries, you can contact us anytime.'
                    },
                    {
                      q: 'What is the qualification of your IVF doctors?',
                      a: 'Dr. Monica Sachdev, our Medical Director, holds MBBS, DNB (Obs & Gynae), MRCOG, FICOG, and Fellowship in Reproductive Medicine from Germany. She has 18+ years of experience. Dr. Rit Shukla, our Chief Embryologist, has 18 years of experience with over 5000 successful ICSI procedures and international collaborations.'
                    },
                    {
                      q: 'Do you provide embryo freezing facilities?',
                      a: 'Yes, we have advanced cryopreservation facilities for embryo, egg, and sperm freezing. Our world-class laboratory maintains optimal conditions for long-term storage, giving you flexibility in your treatment timeline.'
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
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

      {/* Location & Contact */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Visit the Best IVF Centre in Delhi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-700">Pravi Global IVF Polyclinic</p>
                    <p className="text-gray-700">41, Lajpat Nagar, New Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+918009150040" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      +91 800 915 0040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:Info@pravglobalivf.in" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Info@pravglobalivf.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-700">Monday to Saturday</p>
                    <p className="text-gray-700 font-semibold">10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Callback</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Success Stories from Our Test Tube Baby Centre
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Hear from couples who achieved their dream of parenthood at Pravi Global IVF Delhi
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya & Rajesh',
                location: 'Delhi',
                text: 'After 6 years of trying, we finally became parents through IVF at Pravi Global. Dr. Monica and the entire team provided exceptional care and support. The best IVF centre in Delhi!'
              },
              {
                name: 'Anjali & Vikram',
                location: 'Noida',
                text: 'Dr. Rit Shukla\'s expertise in ICSI gave us hope when nothing else worked. The laboratory standards and personalized attention made all the difference. Highly recommend this test tube baby centre.'
              },
              {
                name: 'Neha & Amit',
                location: 'Gurgaon',
                text: 'The compassion and professionalism at Pravi Global IVF is unmatched. From consultation to delivery, they were with us every step. Truly the best IVF experts in Delhi.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Parenthood Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a free consultation with the Best IVF Doctor in Delhi at our premier Test Tube Baby Centre
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
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>18+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>5000+ Successful Procedures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>World-Class Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IVFServicePage;