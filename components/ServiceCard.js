import { Heart, Users, Shield, ChevronRight } from 'lucide-react';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Shield: Shield
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Heart;

  return (
    <div className="card p-8 group hover:-translate-y-2 transition-all duration-300">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <IconComponent className="h-8 w-8 text-blue-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <button className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
        Learn More
        <ChevronRight className="h-5 w-5 ml-1" />
      </button>
    </div>
  );
}