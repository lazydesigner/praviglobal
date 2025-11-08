import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'IVF Treatment',
    'ICSI',
    'IUI',
    'Egg Freezing',
    'Male Infertility',
    'Surrogacy'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                            src="/images/footer-logo.svg"
                            width={150}
                            height={50}
                            alt="Pravi IVF Logo"
                            />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading fertility center dedicated to helping families grow with compassion, expertise, and the latest reproductive technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href={hospitalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={hospitalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={hospitalInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-400 text-sm leading-relaxed">
                  {hospitalInfo.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href={`tel:${hospitalInfo.phone}`}
                  className="ml-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {hospitalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a
                  href={`mailto:${hospitalInfo.email}`}
                  className="ml-3 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {hospitalInfo.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">Opening Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} {hospitalInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}