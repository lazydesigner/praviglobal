import { hospitalInfo, doctors } from './data';

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: hospitalInfo.name,
    image: 'https://praviivf.in/logo.png',
    '@id': 'https://praviivf.in',
    url: 'https://praviivf.in',
    telephone: hospitalInfo.phone,
    email: hospitalInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-12, Shankar Nagar, Near Sai Mandir',
      addressLocality: 'Raipur',
      addressRegion: 'Chhattisgarh',
      postalCode: '492007',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.25,
      longitude: 81.6
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      hospitalInfo.social.facebook,
      hospitalInfo.social.instagram,
      hospitalInfo.social.youtube
    ],
    medicalSpecialty: 'Reproductive Medicine',
    priceRange: '$$'
  };
};

export const generateDoctorSchema = (doctor) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    image: doctor.image,
    jobTitle: doctor.specialty,
    worksFor: {
      '@type': 'MedicalClinic',
      name: hospitalInfo.name
    },
    medicalSpecialty: doctor.specialty,
    description: doctor.bio
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://praviivf.in${item.path}`
    }))
  };
};

export const generateServiceSchema = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    procedureType: 'Fertility Treatment'
  };
};