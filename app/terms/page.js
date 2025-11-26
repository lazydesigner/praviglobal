"use client";

import { useState, useEffect } from "react";

export default function TermsConditions() {
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
    { id: "acceptance", title: "Acceptance of Terms", number: "01" },
    { id: "medical-disclaimer", title: "Medical Disclaimer", number: "02" },
    { id: "appointments", title: "Appointments & Consultations", number: "03" },
    { id: "payments", title: "Payments & Billing", number: "04" },
    { id: "consent", title: "Treatment Consent", number: "05" },
    { id: "website-use", title: "Use of Website", number: "06" },
    { id: "privacy", title: "Privacy & Confidentiality", number: "07" },
    { id: "reports", title: "Reports & Documentation", number: "08" },
    { id: "emergency", title: "Emergency Care", number: "09" },
    { id: "third-party", title: "Third-Party Services", number: "10" },
    { id: "intellectual-property", title: "Intellectual Property", number: "11" },
    { id: "liability", title: "Limitation of Liability", number: "12" },
    { id: "changes", title: "Changes to Terms", number: "13" },
    { id: "contact", title: "Contact Information", number: "14" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-amber-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 bottom-0 w-72 bg-white/80 backdrop-blur-xl border-r border-amber-100 z-40 hidden lg:block overflow-y-auto">
        <div className="p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-amber-100">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all duration-200 group hover:bg-amber-50 ${
                  activeSection === section.id ? "bg-amber-50" : ""
                }`}
              >
                <span className={`text-xs font-bold transition-colors ${
                  activeSection === section.id ? "text-amber-600" : "text-slate-400 group-hover:text-amber-500"
                }`}>
                  {section.number}
                </span>
                <span className={`text-sm transition-colors ${
                  activeSection === section.id ? "text-amber-700 font-medium" : "text-slate-600 group-hover:text-slate-800"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Legal Agreement
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-8">
            Please read these terms carefully before using our services
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Last Updated</span>
            <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">26 November 2025</span>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-16">
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">01</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                By accessing our website, booking an appointment, or using any of our hospital services—online or offline—you agree to the following Terms & Conditions.
              </p>
              <div className="flex gap-4 p-5 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-2xl border-l-4 border-amber-500">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-slate-700">
                  If you do not agree to these terms, please do not continue using our services.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Medical Disclaimer */}
          <section id="medical-disclaimer" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">02</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Medical Disclaimer</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⚕️</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Important Notice</h4>
                    <p className="text-red-700 text-sm leading-relaxed">
                      Information provided on our website, social media pages, or communication channels is for educational and awareness purposes only. It is not a substitute for physical consultation, diagnosis, or personalized medical care.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Treatment plans may vary based on individual medical conditions and professional medical judgment",
                  "Patients must consult with a qualified medical professional before making any medical decisions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="text-amber-500 font-bold mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: Appointments and Consultations */}
          <section id="appointments" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">03</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Appointments & Consultations</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: "📅", title: "Booking", desc: "Appointments may be booked online, by phone, or in person" },
                { icon: "💳", title: "Charges", desc: "Consultation charges are non-refundable unless otherwise stated" },
                { icon: "🔄", title: "Rescheduling", desc: "Hospital reserves the right to reschedule due to emergencies" },
                { icon: "🖥️", title: "Teleconsultation", desc: "Follows same protocols; accuracy may vary due to remote assessment" },
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
          </section>

          {/* Section 4: Payments and Billing */}
          <section id="payments" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">04</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Payments & Billing</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900">Payment Policy</h4>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <span>All payments for consultations, treatments, procedures, reports, or packages must be completed as per billing policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <span>Fees may vary based on medical condition, procedures, diagnostic tests, technology used, or specialist requirement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <span>Any refunds, if applicable, will follow the hospital's refund policy</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Treatment Consent */}
          <section id="consent" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">05</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Treatment Consent</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Before undergoing any medical or surgical treatment, diagnostic test, fertility procedure, or therapy, patients may be required to sign:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "📝", text: "Informed Consent Form" },
                { icon: "✅", text: "Procedure Authorization" },
                { icon: "💰", text: "Financial Consent" },
                { icon: "⚖️", text: "Legal documentation (IVF, surrogacy, donor cycles)" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 p-5 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-2xl border-l-4 border-amber-500">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-700">
                The hospital will proceed only after voluntary signed consent.
              </p>
            </div>
          </section>

          {/* Section 6: Use of Website */}
          <section id="website-use" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">06</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Use of Website & Online Platforms</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              When using our website or online systems, the user agrees to:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: "✓", text: "Provide accurate information", positive: true },
                { icon: "✗", text: "Not misuse appointment systems, chat systems, or inquiry forms", positive: false },
                { icon: "✗", text: "Not attempt hacking, data scraping, or any unauthorized access", positive: false },
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-xl ${item.positive ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${item.positive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-sm ${item.positive ? 'text-green-800' : 'text-red-800'}`}>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <span className="text-lg">⚠️</span>
              <p className="text-sm text-slate-600">
                We may suspend access if misuse or security violation is detected.
              </p>
            </div>
          </section>

          {/* Section 7: Privacy & Confidentiality */}
          <section id="privacy" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">07</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Privacy & Confidentiality</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900">Your data is protected under our Privacy Policy</h4>
              </div>
              <p className="text-slate-600 mb-4">We do not disclose patient information unless:</p>
              <ul className="space-y-2 text-slate-600">
                {[
                  "Required by law",
                  "Necessary for treatment",
                  "Authorized by the patient",
                  "Required for insurance or regulatory reporting",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 8: Reports & Documentation */}
          <section id="reports" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">08</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Reports, Results & Documentation</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Medical reports, discharge summaries, and prescriptions are given based on clinical evaluation",
                "Online report access may be provided where available",
                "Reports will not be edited, rewritten, or personalized as per patient requests unless medically justified",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600">
                  <span className="text-amber-500 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 9: Emergency Care */}
          <section id="emergency" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">09</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Emergency & Critical Care</h2>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🚨</span>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Care Disclaimer</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Emergency or critical care availability depends on case severity, resources, specialist availability, and medical protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>The hospital holds the right to refer patients to another facility if medically necessary</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Third-Party Services */}
          <section id="third-party" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">10</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Third-Party Services</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We may use trusted third-party platforms for:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "💳", text: "Online payment" },
                { icon: "📅", text: "Appointment booking" },
                { icon: "📊", text: "Report access" },
                { icon: "🔬", text: "Diagnostic services" },
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
                These services follow confidentiality protocols but operate under their own terms.
              </p>
            </div>
          </section>

          {/* Section 11: Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">11</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Intellectual Property</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The following are the intellectual property of the hospital and may not be reproduced without written permission:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Website content",
                "Medical resources",
                "Logos",
                "Videos",
                "Patient education materials",
              ].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-4 p-5 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-2xl border-l-4 border-amber-500">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-slate-700">
                All content is protected by copyright law. Unauthorized reproduction is prohibited.
              </p>
            </div>
          </section>

          {/* Section 12: Limitation of Liability */}
          <section id="liability" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">12</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Limitation of Liability</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The hospital, doctors, staff, or associated partners are not responsible for:
            </p>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
              <ul className="space-y-3">
                {[
                  "Patient delays in seeking treatment",
                  "Misinterpretation of online information",
                  "Outcome variations due to individual medical conditions",
                  "Technical or internet-related interruptions during teleconsultations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-slate-500">{index + 1}</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <span className="text-lg">📋</span>
              <p className="text-sm text-slate-600">
                Medical results may vary depending on patient history, age, condition, and response.
              </p>
            </div>
          </section>

          {/* Section 13: Changes to Terms */}
          <section id="changes" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">13</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Changes to Terms</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We may update, modify, or revise these Terms & Conditions at any time. Changes take effect once published on our website.
            </p>
          </section>

          {/* Section 14: Contact Information */}
          <section id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">14</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Contact Information</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              For queries related to these terms, you may contact:
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Hospital Name & Address</span>
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

          {/* Trust Section */}
          <section className="mt-16 p-10 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl text-center border border-amber-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Trust Matters</h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              These terms exist not to limit your care — but to ensure transparency, safety, and respect between the hospital and every patient who walks through our doors.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">© 2025 Pravi Global IVF. All rights reserved.</p>
          <p className="text-xs text-slate-400 mt-1">These terms were last updated on 26 November 2025</p>
        </footer>
      </main>
    </div>
  );
}