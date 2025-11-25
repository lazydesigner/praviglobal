'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  Heart,
  Phone,
  ChevronDown,
  FlaskConical,
  Microscope,
  Mars as Male,
  Venus as Female,
  Syringe,
  FlaskRound,
  Dna,
  Users,
  Activity,
  Scissors,
  Beaker,
  TestTube2,
  Baby,
  ClipboardList,
  Globe
} from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'International', path: '/international' }
  ];

  const services = [
    { name: 'Hormonal Test', path: '/hormonal-test', icon: FlaskConical },
    { name: 'Follicular Monitoring', path: '/follicular-monitoring', icon: Microscope },
    { name: 'Male Infertility', path: '/male-infertility', icon: Male },
    { name: 'Female Infertility', path: '/female-infertility', icon: Female },
    { name: 'IUI', path: '/iui', icon: Syringe },
    { name: 'IVF', path: '/ivf', icon: FlaskRound },
    { name: 'ICSI', path: '/icsi', icon: Dna },
    { name: 'Donor Services', path: '/donor-services', icon: Users },
    { name: 'Hysteroscopy', path: '/hysteroscopy', icon: Activity },
    { name: 'Laparoscopy', path: '/laparoscopy', icon: Scissors },
    { name: 'PGS/PGD', path: '/pgspgd', icon: Beaker },
    { name: 'TESA & PESA', path: '/tesa-and-pesa', icon: TestTube2 },
    { name: 'Surrogacy', path: '/surrogacy', icon: Baby },
    { name: 'Verification Services', path: '/verification-services', icon: ClipboardList }
  ];

  const International = [
    { name: 'Iran', path: '/iran', icon: Globe },
    { name: 'India', path: '/india', icon: Globe },
    { name: 'Ethiopia', path: '/ethiopia', icon: Globe },
    { name: 'Canada', path: '/canada', icon: Globe },
    { name: 'Cameroon', path: '/cameroon', icon: Globe },
    { name: 'Australia', path: '/australia', icon: Globe },
    { name: 'Afghanistan', path: '/afghanistan', icon: Globe },
    { name: 'Sri Lanka', path: '/sri-lanka', icon: Globe },
    { name: 'Pakistan', path: '/pakistan', icon: Globe },
    { name: 'Oman', path: '/oman', icon: Globe },
    { name: 'Myanmar', path: '/myanmar', icon: Globe },
    { name: 'Maldives', path: '/maldives', icon: Globe },
    { name: 'Kazakhstan', path: '/kazakhstan', icon: Globe },
    { name: 'Iraq', path: '/iraq', icon: Globe },
    { name: 'Yemen', path: '/yemen', icon: Globe },
    { name: 'Uzbekistan', path: '/uzbekistan', icon: Globe },
    { name: 'United States', path: '/united-states', icon: Globe },
    { name: 'Tajikistan', path: '/tajikistan', icon: Globe }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#004242] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${hospitalInfo.phone}`}
                className="flex items-center hover:text-gray-200 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                {hospitalInfo.phone}
              </a>
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div>
              <span>Emergency: Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 text-white ${
          scrolled ? 'bg-[#005353] shadow-lg text-white' : 'bg-blue-900 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/images/footer-logo.svg"
                width={150}
                height={50}
                alt="Pravi IVF Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 relative">
              {navLinks.map((link) =>
                link.name === 'Services' ? (
                  <div key={link.name} className="relative group">
                    <Link href="/services">
                      <button className="flex items-center text-gray-50 hover:text-white font-medium transition-colors relative">
                        Services
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </Link>
                    {/* Services Dropdown */}
                    <div className="absolute left-0 -mt-1 w-[500px] bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <ul className="grid grid-cols-2 gap-x-2 py-2">
                        {services.map(({ name, path, icon: Icon }) => (
                          <li key={path}>
                            <Link
                              href={path}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors rounded-md"
                            >
                              <Icon className="h-4 w-4 text-blue-500" />
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : link.name === 'International' ? (
                  <div key={link.name} className="relative group">
                    <Link href="/international">
                      <button className="flex items-center text-gray-50 hover:text-white font-medium transition-colors relative">
                        International
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </Link>
                    {/* International Dropdown */}
                    <div className="absolute left-0 -mt-1 w-[400px] bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <ul className="grid grid-cols-2 gap-x-2 py-2">
                        {International.map(({ name, path, icon: Icon }) => (
                          <li key={path}>
                            <Link
                              href={path}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors rounded-md"
                            >
                              <Icon className="h-4 w-4 text-green-500" />
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-gray-50 hover:text-gray-200 font-medium transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <Link href="/book-appointment" className="hidden md:block btn-primary py-2 px-10 text-white">
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-50" />
              ) : (
                <Menu className="h-6 w-6 text-gray-50" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-slide-up">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) =>
                  link.name === 'Services' ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between text-gray-50 font-medium w-full py-2"
                      >
                        <span className="flex items-center gap-2">Services</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
                          {services.map(({ name, path, icon: Icon }) => (
                            <Link
                              key={path}
                              href={path}
                              className="flex items-center gap-2 text-gray-50 hover:text-blue-600 transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Icon className="h-4 w-4 text-blue-500" />
                              {name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.name === 'International' ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setInternationalOpen(!internationalOpen)}
                        className="flex items-center justify-between text-gray-50 font-medium w-full py-2"
                      >
                        <span className="flex items-center gap-2">International</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${internationalOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {internationalOpen && (
                        <div className="pl-4 mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
                          {International.map(({ name, path, icon: Icon }) => (
                            <Link
                              key={path}
                              href={path}
                              className="flex items-center gap-2 text-gray-50 hover:text-green-400 transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Icon className="h-4 w-4 text-green-400" />
                              {name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-gray-50 hover:text-blue-600 font-medium transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Link
                  href="/book-appointment"
                  className="btn-primary text-center py-2 py-10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
