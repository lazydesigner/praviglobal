import Link from 'next/link';
import { Heart, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Fertility Services - IVF, ICSI, IUI & More',
  description: 'Comprehensive fertility treatments including IVF, ICSI, IUI, egg freezing, male and female infertility treatment, surrogacy, and genetic testing.',
  openGraph: {
    title: 'Fertility Services at Pravi IVF',
    description: 'Complete range of advanced fertility treatments tailored to your needs',
  },
};

const iconMap = {
  Heart: Heart,
  Users: Users,
  Shield: Shield
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Fertility Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fertility solutions tailored to your unique journey to parenthood
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Heart;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.name}
                      </h2>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="ml-3 text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        href="/book-appointment"
                        className="btn-primary"
                      >
                        Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative h-96 lg:h-full min-h-[400px]`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform rotate-3"></div>
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-blue-800/10 flex items-center justify-center">
                        <Icon className="h-32 w-32 text-blue-600/20" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR PROCESS</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey with Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A clear, supportive path from consultation to success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01',
                title: 'Initial Consultation',
                desc: 'Comprehensive evaluation and medical history review'
              },
              { 
                step: '02',
                title: 'Diagnostic Testing',
                desc: 'Advanced tests to identify fertility factors'
              },
              { 
                step: '03',
                title: 'Treatment Plan',
                desc: 'Personalized protocol designed for your needs'
              },
              { 
                step: '04',
                title: 'Ongoing Support',
                desc: 'Continuous monitoring and emotional guidance'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block mt-8">
                    <ArrowRight className="h-8 w-8 text-blue-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">SUCCESS RATES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our success rates are consistently above national averages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rate: '65%', label: 'IVF Success Rate', desc: 'For women under 35' },
              { rate: '70%', label: 'ICSI Success Rate', desc: 'Male factor infertility' },
              { rate: '55%', label: 'IUI Success Rate', desc: 'Per cycle average' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl text-center shadow-xl">
                <div className="text-5xl font-bold mb-3">{stat.rate}</div>
                <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                <p className="text-blue-100">{stat.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            *Success rates vary based on individual factors. Consult with our specialists for personalized assessment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss the best treatment plan for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold">
              Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}