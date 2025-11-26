'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Heart, Award, Shield, CheckCircle, Users, Clock, ChevronRight, Star, Phone, TrendingUp } from 'lucide-react';
import { hospitalInfo, services, doctors, testimonials, whyChooseUs, stats } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import TestimonialCard from '@/components/TestimonialCard';
import ServicesSection from '@/components/ServicesSection';
import HealthcareServices from '@/components/HealthcareServices';
import HealthcareServices2 from '@/components/HealthcareServices2';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=800&fit=crop',
      title: 'Your Journey to Parenthood Starts Here',
      subtitle: 'Experience world-class fertility care with personalized treatment plans'
    },
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=800&fit=crop',
      title: 'Advanced Fertility Solutions',
      subtitle: 'State-of-the-art technology combined with compassionate care'
    },
    {
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&h=800&fit=crop',
      title: 'Compassionate Care, Successful Outcomes',
      subtitle: 'Helping thousands of families realize their dream of parenthood'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
<section className="relative h-screen overflow-hidden">
  
  {/* Background Video Element */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      {/* Replace 'path-to-your-video.mp4' with the actual path */}
      <source src="/images/2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Black Overlay with 50% Opacity */}
  {/* <div className="absolute inset-0 bg-black/50" /> */}

  {/* Existing Blue Gradient Overlay (Kept for style consistency) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#005353f1]  to-[#00535345]" />

  {/* Hero Content (Kept as is, simplified to only show current slide content) */}
  <div className="relative h-full flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          {/* Note: If you keep this code, you'll need to define a single 'heroContent' object */}
          Your Parenthood Journey Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          With Best IVF Center in Delhi
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/book-appointment" className="btn-primary text-lg px-8 py-4 hover:scale-105  text-white">
            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0" className="btn-secondary text-lg px-8 py-4 hover:scale-105">
            whatsapp Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Quick Contact */}
        <div className="mt-8 flex items-center space-x-2 text-white">
          <Phone className="h-5 w-5" />
          <span className="text-lg">Emergency: </span>
          {/* Note: ensure hospitalInfo is still defined if you use this */}
          <a href={`tel:${hospitalInfo.phone}`} className="text-lg font-semibold hover:text-blue-200">
            {hospitalInfo.phone}
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Slide Indicators - REMOVED since the image slider was removed for the video */}
  {/* If you intend to keep a slider overlaying the video, you need to re-add the logic */}
</section>

      {/* Stats Section */}
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r -mt-20 relative z-10">
      <HealthcareServices /></section>
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r  relative z-10">
      <HealthcareServices2 /></section>
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <ServicesSection /> */}

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-600 font-semibold mb-2 block">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Pravi Global IVF & Fertility Center
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Pravi Global IVF and Fertility Center, we understand that the journey to parenthood can be challenging. 
                Our team of experienced fertility specialists is dedicated to providing personalized, compassionate care 
                using the latest reproductive technologies.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                With state-of-the-art facilities, a patient-centered approach, and a proven track record, we've helped 
                thousands of families realize their dream of having a child.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Highly qualified specialists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Advanced Tech</h4>
                    <p className="text-gray-600 text-sm">Latest IVF technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">High Success</h4>
                    <p className="text-gray-600 text-sm">65% success rate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Personal Care</h4>
                    <p className="text-gray-600 text-sm">Customized treatment</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn-primary text-white py-3 px-10">
                Learn More About Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/visit-clinic-bg.jpg"
                  alt="Pravi IVF Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600 text-sm">Years Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR SERVICES</span>
            <h2 className="section-heading">Comprehensive Fertility Solutions</h2>
            <p className="section-subheading mt-4  mx-auto">
              Tailored treatments designed to meet your unique needs and maximize success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary text-lg px-8 py-4 text-white">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">WHY CHOOSE US</span>
            <h2 className="section-heading">What Makes Us Different</h2>
            <p className="section-subheading mt-4 text-cente  mx-auto">
              We combine cutting-edge technology with personalized care to give you the best chance of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const icons = { Award, Shield, Heart, CheckCircle, Users, Clock };
              const Icon = icons[item.icon];
              return (
                <div 
                  key={idx} 
                  className="card p-8 text-center hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR EXPERTS</span>
            <h2 className="section-heading">Meet Our Fertility Specialists</h2>
            <p className="section-subheading mt-4  mx-auto">
              Highly qualified doctors dedicated to helping you achieve your dream of parenthood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/doctors" className="btn-primary text-lg px-8 py-4 text-white">
              Meet All Doctors <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-200 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories from Our Families
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real experiences from couples who achieved their dreams with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Schedule a consultation with our fertility experts today and take the first step 
              towards realizing your dream of parenthood
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-appointment" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Book Your Appointment
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}