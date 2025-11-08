import Image from 'next/image';
import { Award } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-[350px] overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={100}
          className="object-cover absolute -top-12 position-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {doctor.name}
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              {doctor.specialty}
            </p>
          </div>
          <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
        </div>
        
        <p className="text-gray-600 text-sm mb-3">
          {doctor.qualification}
        </p>
        
        {/* <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {doctor.bio}
        </p> */}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-semibold text-gray-900">
            {doctor.experience} Experience
          </span>
          
        </div>
      </div>
    </div>
  );
}