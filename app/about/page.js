import Image from 'next/image';
import Link from 'next/link';
import { Award, Shield, Heart, CheckCircle, Users, Clock, Target, Eye, ArrowRight } from 'lucide-react';
import { whyChooseUs } from '@/lib/data';

export const metadata = {
  title: 'About Us - Our Story, Mission & Vision',
  description: 'Learn about Pravi IVF and Fertility Center, our expert team, state-of-the-art facilities, and our commitment to helping families grow.',
  openGraph: {
    title: 'About Pravi IVF - Our Story & Mission',
    description: 'Leading fertility center with 15+ years of excellence in reproductive medicine',
  },
};

export default function AboutPage() {
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
            About Pravi IVF
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leading the way in fertility care with compassion, expertise, and innovation since 2008
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-blue-600 font-semibold mb-2 block">OUR STORY</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Dreams, Creating Families
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Founded with a vision to provide world-class fertility treatment in Chhattisgarh, Pravi IVF and 
                Fertility Center has become a beacon of hope for thousands of couples seeking to build their families.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Our state-of-the-art facility in Raipur combines advanced reproductive technology with personalized, 
                compassionate care. Every patient's journey is unique, and we pride ourselves on creating customized 
                treatment plans that maximize success while supporting emotional wellbeing.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                With over 15 years of excellence and thousands of successful pregnancies, we continue to set the 
                standard for fertility care in Central India. Our commitment to ethical practices, transparency, and 
                patient education has earned us the trust of families across the region.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-700 font-medium">Happy Families</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
                  <div className="text-gray-700 font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/visit-clinic-bg.jpg"
                  alt="Pravi IVF Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <Heart className="h-12 w-12 mb-3" />
                <div className="text-2xl font-bold">Compassionate</div>
                <div className="text-blue-100">Care Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide accessible, affordable, and advanced fertility treatments with the highest standards of 
                medical care and ethical practices. We strive to make the journey to parenthood as smooth and 
                supportive as possible for every family we serve, combining clinical excellence with compassionate 
                understanding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-xl text-white">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                To be recognized as the most trusted fertility center in India, known for our clinical excellence, 
                patient-centered approach, and commitment to helping families grow. We envision a future where every 
                couple has access to the fertility care they need, backed by cutting-edge research and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">LEADERSHIP</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Visionary leadership driving excellence in reproductive medicine
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-blue-100">
                  <Image
                    src="/images/praviivf68adeb4f45d30_1756228431.png"
                    alt="Dr. Monica Sachdev"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Dr. Monica Sachdev
                </h3>
                <p className="text-blue-600 text-xl font-semibold mb-4">
                  Medical Director & Senior IVF Specialist
                </p>
                <p className="text-gray-700 font-medium mb-4">
                  MBBS, DNB (Obs & Gynae), MRCOG, FICOG, Fellow Rep.Med.
                </p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Dr. Monica Sachdev is a renowned Senior IVF Consultant and Obstetrics & Gynecology Specialist with over 18 years of experience in managing infertility. With a distinguished fellowship in IVF and Reproductive Medicine, she is an expert in advanced fertility treatments and high-risk pregnancy management. Currently, she serves as the Medical Director & Senior Consultant at Pravi Global IVF, New Delhi & Kanpur, where she performs cutting-edge IVF procedures, offering personalized care to couples striving for parenthood
                  </p>
                  <p className="text-lg">
                    Dr. Sachdev’s extensive educational background includes:

                    <ul>
                      <li>Postgraduate degree in Obstetrics & Gynecology from New Delhi</li>
                      <li>IVF/ART Fellowship from Chandigarh</li>
                      <li>Diplomate of Reproductive Medicine from Kiel, Germany</li>
                      <li>MBBS, DNB (Obs & Gynae), MRCOG, FICOG, Fellow Rep.Med.</li>
                    </ul>
 
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-2xl font-bold text-blue-600">5000+</div>
                    <div className="text-sm text-gray-600">Successful Cases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">WHY PRAVI IVF</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the difference of truly personalized fertility care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const icons = { Award, Shield, Heart, CheckCircle, Users, Clock };
              const Icon = icons[item.icon];
              return (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR VALUES</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guided by Excellence</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Compassion', desc: 'Understanding and empathy in every interaction' },
              { title: 'Excellence', desc: 'Highest standards of medical care' },
              { title: 'Integrity', desc: 'Transparent and ethical practices' },
              { title: 'Innovation', desc: 'Embracing latest technologies' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your Journey with Us
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation and discover how we can help you achieve your dream
          </p>
          <Link href="/book-appointment" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center text-lg font-semibold">
            Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}