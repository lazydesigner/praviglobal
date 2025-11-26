"use client";

import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "introduction", title: "Introduction", number: "01" },
    { id: "information-collected", title: "Information We Collect", number: "02" },
    { id: "usage", title: "How We Use Your Information", number: "03" },
    { id: "storage", title: "Data Storage & Security", number: "04" },
    { id: "disclosure", title: "Disclosure & Sharing", number: "05" },
    { id: "rights", title: "Patient Rights", number: "06" },
    { id: "cookies", title: "Cookies & Tracking", number: "07" },
    { id: "third-party", title: "Third-Party Services", number: "08" },
    { id: "retention", title: "Data Retention", number: "09" },
    { id: "changes", title: "Policy Changes", number: "10" },
    { id: "contact", title: "Contact Information", number: "11" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-teal-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 bottom-0 w-72 bg-white/80 backdrop-blur-xl border-r border-teal-100 z-40 hidden lg:block overflow-y-auto">
        <div className="p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-teal-100">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800">Pravi Global IVF</span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group hover:bg-teal-50 ${
                  activeSection === section.id ? "bg-teal-50" : ""
                }`}
              >
                <span className={`text-xs font-bold transition-colors ${
                  activeSection === section.id ? "text-teal-600" : "text-slate-400 group-hover:text-teal-500"
                }`}>
                  {section.number}
                </span>
                <span className={`text-sm transition-colors ${
                  activeSection === section.id ? "text-teal-700 font-medium" : "text-slate-600 group-hover:text-slate-800"
                }`}>
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-72 max-w-4xl px-6 py-16 lg:px-16 lg:py-20">
        {/* Header */}
        <header className="mb-16 pb-12 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Your Privacy Matters
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-8">
            Understanding how we protect and handle your personal and medical information
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Last Updated</span>
            <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">26 November 2025</span>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-16">
          {/* Section 1: Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">01</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Introduction</h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                This Privacy Policy details the patient-related data that is collected, used, stored, and secured by us. 
                We are committed to maintaining confidentiality and earning the trust of every patient, visitor, or user 
                who avails our services online or offline.
              </p>
              <div className="flex gap-4 p-5 bg-gradient-to-r from-teal-50 to-teal-50/50 rounded-2xl border-l-4 border-teal-500">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-slate-700">
                  By using our website, communication platforms, or medical services, you agree to the terms laid down in this policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section id="information-collected" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">02</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Depending on the services used, we may collect the following information:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Full Name</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Sex / Gender</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Date of Birth</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Home Address</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Contact Details</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Emergency Contact</li>
                </ul>
              </div>

              {/* Medical Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Medical/Health Information</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Medical History</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Diagnostic Reports</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Prescriptions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Laboratory Results</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Treatment Details</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Doctor Consultation Notes</li>
                </ul>
              </div>

              {/* Financial Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Financial / Billing</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Billing Address</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Insurance / TPA Information</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Payment Method (secured)</li>
                </ul>
              </div>

              {/* Technical Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Technical Information</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>IP Address</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Browser Type</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Cookies & Analytics</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Online Forms & Chat History</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section id="usage" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">03</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Patient information will only be used for medical, administrative, or legal purposes such as:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "🩺", text: "Diagnosing medical conditions" },
                { icon: "📋", text: "Treatment planning and monitoring" },
                { icon: "📅", text: "Appointment scheduling and communication" },
                { icon: "🔬", text: "Laboratory reporting and medical record keeping" },
                { icon: "💳", text: "Hospital billing, insurance processing, or audits" },
                { icon: "👥", text: "Sharing treatment info with authorised personnel" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <span className="text-lg">ℹ️</span>
              <p className="text-sm text-slate-600">
                Anonymous medical data may be used for training, research, or service improvement.
              </p>
            </div>
          </section>

          {/* Section 4: Data Storage & Security */}
          <section id="storage" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">04</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Data Storage & Security</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We follow strict security practices to protect patient records in both physical and digital formats.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: "🔐", title: "Encryption", desc: "Encrypted systems and secure firewalls" },
                { icon: "🔑", title: "Authentication", desc: "Multi-factor authentication where applicable" },
                { icon: "👤", title: "Access Control", desc: "Restricted access to authorised staff only" },
                { icon: "📊", title: "Monitoring", desc: "Regular data audits, monitoring, and backups" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              We comply with national healthcare privacy regulations
            </div>
          </section>

          {/* Section 5: Disclosure & Sharing */}
          <section id="disclosure" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">05</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Disclosure & Sharing</h2>
            </div>
            <div className="flex items-center gap-4 p-5 bg-red-50 rounded-2xl border border-red-100 mb-6">
              <span className="text-2xl">🚫</span>
              <p className="text-red-700 font-medium">
                We do not sell, rent, or share patient information for commercial or marketing purposes.
              </p>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Information may only be shared under the following circumstances:
            </p>
            <ul className="space-y-3">
              {[
                "Referral to a healthcare provider (with patient consent)",
                "Diagnostic laboratories or imaging centres (as part of treatment)",
                "Insurance companies or authorised government authorities (for claim or compliance purposes)",
                "When required by law, court order, or public health regulations",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600">
                  <span className="text-teal-500 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6: Patient Rights */}
          <section id="rights" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">06</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Patient Rights</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">As a patient, you may:</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: "📂", title: "Access Records", desc: "Access your medical records" },
                { icon: "✏️", title: "Request Corrections", desc: "Correct inaccurate data" },
                { icon: "📄", title: "Get Copies", desc: "Request copies of reports" },
                { icon: "🔙", title: "Withdraw Consent", desc: "Withdraw website consent" },
                { icon: "❓", title: "Ask Questions", desc: "Ask how data is used" },
              ].map((item, index) => (
                <div key={index} className="text-center p-5 bg-white rounded-2xl border border-slate-100">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <span className="text-lg">📝</span>
              <p className="text-sm text-slate-600">
                Requests can be submitted to the hospital administration team.
              </p>
            </div>
          </section>

          {/* Section 7: Cookies & Tracking */}
          <section id="cookies" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">07</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Cookies & Website Tracking</h2>
            </div>
            <p className="text-slate-600 mb-4 leading-relaxed">Our website may use cookies and analytics tools to:</p>
            <ul className="space-y-2 mb-6 text-slate-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Improve user experience</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Track appointment or website activity</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Identify areas for service improvement</li>
            </ul>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <span className="text-lg">⚙️</span>
              <p className="text-sm text-slate-600">
                Users may disable cookies through their browser settings if preferred.
              </p>
            </div>
          </section>

          {/* Section 8: Third-Party Services */}
          <section id="third-party" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">08</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Third-Party Services</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">We may engage trusted third-party systems for:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "📅", text: "Online appointment scheduling" },
                { icon: "💳", text: "Payment processing" },
                { icon: "📊", text: "Diagnostic report access" },
                { icon: "💬", text: "Chat or messaging support" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 p-5 bg-gradient-to-r from-teal-50 to-teal-50/50 rounded-2xl border-l-4 border-teal-500">
              <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-slate-700">
                These providers are bound by confidentiality and cannot use patient data beyond the assigned purpose.
              </p>
            </div>
          </section>

          {/* Section 9: Data Retention */}
          <section id="retention" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">09</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Data Retention</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Medical records are maintained as per national healthcare regulatory requirements. 
              Once the retention period is complete, records will be securely deleted or destroyed.
            </p>
          </section>

          {/* Section 10: Policy Changes */}
          <section id="changes" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">10</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Changes to This Policy</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We may update or revise this Privacy Policy periodically. The effective date will always appear at the top of this page.
            </p>
          </section>

          {/* Section 11: Contact Information */}
          <section id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">11</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Contact Information</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you have questions, concerns, or requests regarding this policy or your personal information, you may contact us:
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Address</span>
                  <p className="text-slate-700">
                    Pravi Global IVF<br />
                    Building Number 41, First Floor, Ring Road<br />
                    Block Q, Lajpat Nagar IV<br />
                    New Delhi – 110024
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Phone</span>
                  <p className="text-slate-700 font-medium">+91 80091 50040</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Email</span>
                  <p className="text-slate-700 font-medium">info@praviglobalivf.in</p>
                </div>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="mt-16 p-10 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl text-center border border-teal-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Confidentiality</h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              We understand that your medical information is personal and sensitive. Protecting it is not only our 
              legal responsibility — it is our ethical commitment and part of the care we provide to every patient.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">© 2025 Pravi Global IVF. All rights reserved.</p>
          <p className="text-xs text-slate-400 mt-1">This policy was last updated on 26 November 2025</p>
        </footer>
      </main>
    </div>
  );
}