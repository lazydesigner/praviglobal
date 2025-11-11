'use client'
import React, { useState } from 'react';
import { Check, Globe, FileText, Plane, Home, Phone, Mail, MapPin, Calendar, Users, Award, Heart, Loader2, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import HealthcareServices from '@/components/HealthcareServices';
import HealthcareServices2 from '@/components/HealthcareServices2';
import Link from 'next/link'; 

export default function PraviIVFLanding() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSubmitted(false);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone,
      country: e.target.country.value,
    };

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setPhone('');
      } else {
        setErrorMsg(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setErrorMsg('Unable to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const doctors = [
    {
      name: "Dr. Monica Sachdev",
      title: "Medical Director & Senior IVF Specialist",
      experience: "18+ Years",
      role: "Medical Director",
      specialty: "IVF & Embryo Transfer Specialist",
      image: "/images/praviivf68adeb4f45d30_1756228431.png",
    },
    {
      name: "Dr. Rit Shukla",
      title: "Chief Embryologist & Scientific Director",
      experience: "18+ Years",
      role: "Chief Embryologist",
      specialty: "Intracytoplasmic Sperm Injection (ICSI)",
      image: "/images/praviivf68adeb76c3b74_1756228470.png",
    },
    {
      name: "Dr. Sakshi Tandon",
      title: "Obstetrics Gynaecology",
      experience: "10+ Years",
      role: "Lab Director",
      specialty: "OBS.Gynae, IVF Specialist",
      image: "/images/praviivf68adeb8d21097_1756228493.png",
    }
  ];

  const visaSteps = [
    {
      number: "01",
      title: "Invitation Letter",
      description: "Official medical invitation for visa application",
      icon: FileText
    },
    {
      number: "02",
      title: "Documentation Support",
      description: "Complete guidance on required documents",
      icon: Globe
    },
    {
      number: "03",
      title: "Travel Coordination",
      description: "Flight booking and itinerary assistance",
      icon: Plane
    },
    {
      number: "04",
      title: "Accommodation Arrangement",
      description: "Comfortable stay near our facility",
      icon: Home
    },
    {
      number: "05",
      title: "Airport Pickup",
      description: "Seamless arrival and transfer service",
      icon: Users
    }
  ];

  const consultationBenefits = [
    "Comprehensive fertility assessment",
    "Personalized treatment roadmap",
    "Cost breakdown and timeline",
    "Doctor consultation (30-45 mins)",
    "Medical records review"
  ];

  const discussionPoints = [
    "IVF and ICSI procedures",
    "Egg and sperm donation",
    "Surrogacy arrangements",
    "Preimplantation genetic testing",
    "Fertility preservation",
    "Male infertility treatment",
    "Endometriosis management",
    "PCOS treatment options",
    "Recurrent miscarriage care",
    "Second opinion consultations"
  ];

  const country = "united-state";
  const codeC = 'us';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50 py-20 sm:py-32">

        {/* 1. Background Video Element (z-index -2 to go behind blurs) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Replace 'path-to-your-fertility-video.mp4' with the actual path */}
            <source src="/images/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 2. Semi-Transparent Overlay (z-index -1 to sit on top of video, but under content) */}
        {/* This overlay maintains the light, airy feel and ensures text readability. */}
        <div className="absolute inset-0  z-0" style={{ backgroundColor: '#005353ad' }} />

        {/* Decorative Elements - Updated z-index to 1 (or default) to sit above the video/overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full filter blur-3xl opacity-20 z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 z-10"></div>

        {/* Main Content (z-index 2 or higher for guaranteed visibility) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Award className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-medium text-slate-700">International Center of Excellence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turning Your Dream of<br />
              <span className="text-white">
                Parenthood into Reality
              </span>
            </h2>
            <p className="text-xl text-white mb-10 leading-relaxed">
              World-class fertility care with personalized support for international patients.
              Begin your journey with compassion, expertise, and unwavering commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0'><button className="bg-[#004b4b] hover:bg-[#004242] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Start Free Consultation
              </button></Link>
              <Link href="#internationalSupport" className="bg-white hover:bg-slate-100 text-[#005353] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r -mt-10 relative z-10">
        <HealthcareServices /></section>
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r  relative z-10">
        <HealthcareServices2 /></section>

      {/* Online Consultation CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#005353] to-[#004242] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12">
              <div className="text-white">
                <div className="inline-block bg-white text-white bg-opacity-20 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  For International Patient
                </div>
                <h3 className="text-3xl font-bold mb-4">Online Consultation</h3>
                <p className="text-indigo-100 text-lg mb-6">
                  Get Your Personalized Treatment Plan Before You Travel
                </p>
                <div className="space-y-3">
                  {consultationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-rose-300 flex-shrink-0 mt-0.5" />
                      <span className="text-indigo-50">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-slate-800 mb-6">Book Your Session</h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  />
                  <PhoneInput
                    country={codeC}
                    value={phone}
                    onChange={setPhone}
                    enableSearch={true}
                    preferredCountries={['in', 'us', 'mm', 'np', 'ir', 'iq', 'lk', 'pk', 'ca']}
                    inputClass="!w-full !h-12 !text-base !rounded-lg !border !border-slate-300 !pl-12"
                    buttonClass="!rounded-l-lg"
                    dropdownClass="!text-base"
                    placeholder="Enter phone number"
                  />
                  <select
                    name="country"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  >
                    <option selected={country == '' ? true : ''} value="">Select Country</option>
                    <option  selected={country == 'afghanistan' ? true : ''} value="afghanistan">Afghanistan</option>
                    <option  selected={country == 'cameroon' ? true : ''} value="cameroon">Cameroon</option>
                    <option  selected={country == 'canada' ? true : ''} value="canada">Canada</option>
                    <option  selected={country == 'ethiopia' ? true : ''} value="ethiopia">Ethiopia</option>
                    <option  selected={country == 'india' ? true : ''} value="india">India</option>
                    <option  selected={country == 'iran' ? true : ''} value="iran">Iran</option>
                    <option  selected={country == 'iraq' ? true : ''} value="iraq">Iraq</option>
                    <option  selected={country == 'kazakhstan' ? true : ''} value="kazakhstan">Kazakhstan</option>
                    <option  selected={country == 'maldives' ? true : ''} value="maldives">Maldives</option>
                    <option  selected={country == 'myanmarq' ? true : ''} value="myanmarq">Myanmar</option>
                    <option  selected={country == 'oman' ? true : ''} value="oman">Oman</option>
                    <option  selected={country == 'pakistan' ? true : ''} value="pakistan">Pakistan</option>
                    <option  selected={country == 'sri-lanka' ? true : ''} value="sri-lanka">Sri Lanka</option>
                    <option  selected={country == 'tajikistan' ? true : ''} value="tajikistan">Tajikistan</option>
                    <option  selected={country == 'uzbekistan' ? true : ''} value="uzbekistan">Uzbekistan</option>
                    <option  selected={country == 'united-state' ? true : ''} value='united-state'>United States</option> 
                    <option  selected={country == 'australia' ? true : ''} value='australia'>Australia</option>
                    <option  selected={country == 'yemen' ? true : ''} value="yemen">Yemen</option>
                    <option  selected={country == 'other' ? true : ''} value='other'>Other</option>
                  </select>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Schedule Consultation"
                    )}
                  </button>

                  {submitted && (
                    <div className="mt-4 flex items-center justify-center text-green-600 font-medium gap-2">
                      <CheckCircle className="w-5 h-5" /> Consultation booked successfully!
                    </div>
                  )}

                  {errorMsg && (
                    <div className="mt-4 text-center text-red-500 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Free consultation • No obligation • 100% confidential
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patient Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id='internationalSupport'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
              <Globe className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">International Support</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Complete Visa & Travel Assistance</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We handle every detail of your journey, so you can focus on what matters most
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {visaSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#005353] to-[#66bdbd] rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-indigo-100 mb-3">{step.number}</div>
                      <h4 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  {index < visaSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-300 to-rose-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">Expert Team</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Specialists</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Led by internationally recognized fertility experts with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className=" object-cover group-hover:scale-105 transition-transform duration-300"

                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center">{doctor.name}</h4>
                  <p className="text-indigo-600 font-medium mb-4 text-center">{doctor.title}</p>
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-medium">Experience</span>
                      <span className="text-sm font-bold text-slate-800">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-medium">Role</span>
                      <span className="text-sm font-bold text-slate-800">{doctor.role}</span>
                    </div>
                    <div className="pt-2">
                      <div className="bg-gradient-to-r from-[#e6f4f4] to-[#cce9e9] rounded-lg p-3">
                        <p className="text-xs text-slate-700 font-medium text-center">{doctor.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Discuss */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-slate-700">Comprehensive Care</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">What You Can Discuss With Us</h3>
            <p className="text-xl text-slate-600">
              We provide expert guidance across all aspects of fertility treatment
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {discussionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-6">Have questions about a specific treatment?</p>
              <button className="bg-gradient-to-r bg-[#004b4b] to-[#005353]hover:from-[#003939] hover:to-[#004242] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Speak with a Specialist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}