import React from 'react';
import { 
  FlaskConical, 
  Microscope, 
  User as Male, 
  UserRound as Female,
  Syringe,
  FlaskRound,
  Dna,
  Users,
  Activity,
  Scissors,
  Beaker,
  TestTube2,
  Baby,
  ClipboardList
} from 'lucide-react';

const ServicesSection = () => {
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

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive fertility and reproductive health services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex flex-row gap-1.5 items-center  text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;