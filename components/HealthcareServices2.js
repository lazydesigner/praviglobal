import React from 'react';
import { Mars as Male, Venus as Female, Beaker, FlaskRound, Syringe, Dna } from 'lucide-react';
import Link from 'next/link';

export default function HealthcareServices2() {
  const services = [
    {
      id: 1,
      title: 'Male Fertility',
      icon: Male,
      bgColor: 'bg-gradient-to-br from-[#005353] to-[#004b4b]',
      textColor: 'text-white',
      url:'/male-infertility',
      featured: true
    },
    {
      id: 2,
      title: 'Female Fertility',
      icon: Female,
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      url:'/female-infertility',
      featured: false
    },
    {
      id: 3,
      title: 'IVF',
      icon: FlaskRound,
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      url:'/ivf',
      featured: false
    },
    {
      id: 4,
      title: 'IUI',
      icon: Syringe,
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      url:'/iui',
      featured: false
    },
    {
      id: 5,
      title: 'ICSI',
      icon: Dna,
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      url:'/icsi',
      featured: false
    },
    {
      id: 6,
      title: 'PGS/PGD',
      icon: Beaker,
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      url:'/pgspgd',
      featured: false
    }
  ];

  return (
    <div className="   py-4 sm:py-2 sm:px-2 md:px-2 lg:py-3">
      <div className="max-w-7xl mx-auto px-10"> 
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={service.url} key={service.id} className="w-full">
                <div
                key={service.id}
                className={`
                  ${service.bgColor}
                  rounded-3xl p-4 sm:p-6 lg:p-4
                  shadow-lg hover:shadow-2xl
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:-translate-y-2
                  cursor-pointer
                  group
                  relative
                  overflow-hidden
                `}
              >
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
                  {/* Icon */}
                  <div className={`
                    mb-3 sm:mb-4 p-2 sm:p-3 rounded-2xl
                    ${service.featured 
                      ? 'bg-white/20 group-hover:bg-white/30' 
                      : 'bg-[#e6f4f4] group-hover:bg-[#cce9e9]'
                    }
                    transition-all duration-300
                    transform group-hover:scale-110 group-hover:rotate-6
                  `}>
                    <Icon 
                      className={`
                        w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10
                        ${service.featured ? 'text-white' : 'text-[#005353]'}
                        transition-transform duration-300
                      `}
                      strokeWidth={2}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`
                    ${service.textColor}
                    text-center font-semibold text-xs sm:text-sm lg:text-base
                    transition-all duration-300
                    group-hover:scale-105
                  `}>
                    {service.title}
                  </h3>
                </div>

                {/* Decorative elements */}
                {service.featured && (
                  <>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8 group-hover:scale-150 transition-transform duration-500" />
                  </>
                )}
              </div>
                </Link>
            );
          })}
        </div>
 
      </div>
    </div>
  );
}