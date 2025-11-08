import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, Briefcase, Star, ArrowRight } from 'lucide-react';
import { doctors } from '@/lib/data';
import DoctorCard from '@/components/DoctorCard';

export const metadata = {
  title: 'Our Fertility Specialists - Expert Doctors Team',
  description: 'Meet our team of highly qualified fertility specialists and reproductive endocrinologists dedicated to helping you achieve parenthood.',
  openGraph: {
    title: 'Meet Our Expert Fertility Specialists',
    description: 'Experienced doctors committed to your fertility journey',
  },
};

export default function DoctorsPage() {
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
            Our Expert Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Meet the fertility specialists dedicated to making your dream of parenthood a reality
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Doctor Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {doctors.map((doctor, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={doctor.id}
                  className={`grid lg:grid-cols-5 gap-8 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="sticky top-24">
                      <div className="relative h-112 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={doctor.image}
                          alt={doctor.name} 
                          width={500}
                          height={400}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center mb-2">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </div>
                          <p className="text-sm text-blue-100">Patient Rating</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {doctor.name}
                      </h2>
                      <p className="text-blue-600 text-xl font-semibold mb-4">
                        {doctor.specialty}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Qualification</div>
                            <div className="font-semibold text-sm">{doctor.qualification.split(',')[0]}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Experience</div>
                            <div className="font-semibold text-sm">{doctor.experience}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Recognition</div>
                            <div className="font-semibold text-sm">Certified</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                        <p className="text-gray-600">{doctor.qualification}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">About</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {doctor.bio}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {doctor.specialties.map((specialty, sIdx) => (
                            <div key={sIdx} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              <span className="text-gray-700">{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href="/book-appointment" className="btn-primary w-full md:w-auto py-2 px-16 text-white" >
                        Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR APPROACH</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Collaborative Care Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your journey is supported by a multidisciplinary team working together for your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Fertility Specialists', desc: 'Expert medical guidance' },
              { title: 'Embryologists', desc: 'Laboratory excellence' },
              { title: 'Counselors', desc: 'Emotional support' },
              { title: 'Nurses', desc: 'Compassionate care' }
            ].map((role, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{role.title}</h4>
                <p className="text-gray-600 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">EXCELLENCE</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Specialists
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extensive Experience',
                desc: 'Decades of combined expertise in reproductive medicine with thousands of successful cases'
              },
              {
                title: 'Continuous Learning',
                desc: 'Regular training in latest techniques and participation in international conferences'
              },
              {
                title: 'Patient-Centered Care',
                desc: 'Compassionate approach with personalized treatment plans for each unique situation'
              },
              {
                title: 'High Success Rates',
                desc: 'Consistently above-average success rates through evidence-based protocols'
              },
              {
                title: 'Ethical Practice',
                desc: 'Transparent communication and adherence to highest ethical standards'
              },
              {
                title: 'Holistic Approach',
                desc: 'Comprehensive care addressing physical, emotional, and psychological needs'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Meet with our specialists to discuss your personalized fertility plan
          </p>
          <Link href="/book-appointment" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center text-lg font-semibold">
            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}