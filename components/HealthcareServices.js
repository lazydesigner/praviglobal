'use client';

import React from 'react';
import { 
  Calendar, 
  UserCheck, 
  Heart, 
  Video, 
  Home, 
  User,
  TestTube 
} from 'lucide-react';
import Link from 'next/link';

const HealthcareServices = () => {
  const services = [
    {
      id: 'book-appointment',
      icon: <Calendar className="w-7 h-7" />,
      title: 'Book',
      subtitle: 'Appointment',
      isPrimary: true,
      url:'https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0',
      onClick: () => console.log('Book Appointment clicked'),
    },
    {
      id: 'second-opinion',
      icon: <UserCheck className="w-7 h-7" />,
      title: 'Second Opinion',
      url:'https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0',
      onClick: () => console.log('Second Opinion clicked'),
    },
    {
      id: 'fertility-checkup',
      icon: <Heart className="w-7 h-7" />,
      title: 'Get Fertility',
      url:'https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0',
      subtitle: 'Checkup',
      onClick: () => console.log('Health Checkup clicked'),
    },
    {
      id: 'virtual-consultation',
      icon: <Video className="w-7 h-7" />,
      title: 'Book A Virtual',
      url:'https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0',
      subtitle: 'Consultation',
      onClick: () => console.log('Virtual Consultation clicked'),
    },
    {
      id: 'fertility-services',
      icon: <Home className="w-7 h-7" />,
      title: 'Fertility Services',
      url:'/services',
      onClick: () => console.log('Homecare clicked'),
    },
    {
      id: 'international-patients?',
      icon: <User className="w-7 h-7" />,
      title: 'International Patients?',
      url:'',
      onClick: () => console.log('Book a Test clicked'),
    },
  ];

  return (
    <div className="w-full my-14 mx-auto">
      {/* Horizontal scroll container */}
      <div className="overflow-x-auto hide-scrollbar scroll-smooth pb-4">
        <div className="flex gap-3 md:gap-4 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
          {services.map((service) => (
            <Link href={service.url} key={service.id}>
            <button
              key={service.id}
              onClick={service.onClick}
              className={`
                flex items-center gap-3 px-6 min-h-16 rounded-xl shadow-md
                transition-all duration-200 justify-center hover:shadow-lg flex-shrink-0
                min-w-[250px] md:min-w-0
                ${
                  service.isPrimary
                    ? 'bg-[#005353] text-white hover:bg-[##004b4b]'
                    : 'bg-white text-gray-700 hover:bg-[#004b4b] hover:text-white shadow-sm'
                }
              `}
            >
              <div className={service.isPrimary ? 'text-white' : 'text-gray-600 ' }>
                {service.icon}
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm whitespace-nowrap">
                  {service.title}
                </div>
                {service.subtitle && (
                  <div className="font-semibold text-sm whitespace-nowrap">
                    {service.subtitle}
                  </div>
                )}
              </div>
            </button></Link>
          ))}
        </div>
      </div>
 

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HealthcareServices;