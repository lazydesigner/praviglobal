import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { hospitalInfo } from '@/lib/data';
import { generateOrganizationSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: `Pravi Global IVF Polyclinic - Best IVF Centre in Delhi`, 
  },
  description:
    'Pravi Global IVF Polyclinic is the best IVF centre in Delhi offering advanced fertility treatments including IVF, ICSI, IUI, surrogacy, and egg donation.',
  keywords:
    'Best IVF centre in Delhi, Top IVF clinic in Delhi, Best fertility clinic in Delhi, IVF hospital in Delhi, IVF treatment in Delhi, Best IVF doctor in Delhi, fertility specialist Delhi, IUI, ICSI, surrogacy, egg freezing, male infertility, female infertility',
  authors: [{ name: 'Pravi Global IVF Polyclinic' }],
  creator: 'Pravi Global IVF Polyclinic',
  publisher: 'Pravi Global IVF Polyclinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://praviglobalivf.com/'),
  alternates: {
    canonical: 'https://praviglobalivf.com/',
  },
  openGraph: {
    title: 'Pravi Global IVF Polyclinic - Best IVF Centre in Delhi',
    description:
      'Looking for the best IVF centre in Delhi? Pravi Global IVF Polyclinic offers IVF, ICSI, IUI, surrogacy, and advanced fertility care with top IVF doctors in Delhi.',
    url: 'https://praviglobalivf.com/',
    siteName: 'Pravi Global IVF Polyclinic',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pravi Global IVF Polyclinic - Best IVF Centre in Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravi Global IVF Polyclinic - Best IVF Centre in Delhi',
    description:
      'Top fertility clinic in Delhi offering advanced IVF, ICSI, and IUI treatments with high success rates. Compassionate care from expert IVF doctors.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const mapSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Pravi Global IVF Polyclinic",
  "alternateName": "Pravi Global IVF & Fertility Center",
  "url": "https://praviglobalivf.com",
  "logo": "https://praviglobalivf.com/logo.png",
  "image": [
    "https://praviglobalivf.com/images/og-image.jpg",
    "https://praviglobalivf.com/logo.png"
  ],
  "description": "Pravi Global IVF Polyclinic is one of the best IVF and fertility centres in Delhi offering IVF, ICSI, IUI, surrogacy, egg donation, egg freezing and advanced fertility care.",
  "email": "info@praviglobalivf.in",
  "telephone": "+91 8009150040",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Building number 41, First Floor, Ring Rd, Block Q, Lajpat Nagar IV",
    "addressLocality": "Lajpat Nagar",
    "addressRegion": "New Delhi",
    "postalCode": "110024",
    "addressCountry": "IN"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5721,
    "longitude": 77.2437
  },

  "hasMap": "https://maps.app.goo.gl/79RLa9txkQWQ58Jg6",

  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },

  "medicalSpecialty": [
    "IVF",
    "ICSI",
    "IUI",
    "Surrogacy",
    "Egg Freezing",
    "Embryo Freezing",
    "Male Infertility",
    "Female Infertility",
    "Fertility Consultation"
  ],

  "sameAs": [
    "https://maps.app.goo.gl/79RLa9txkQWQ58Jg6",
    "https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4",
    "https://www.justdial.com/Delhi/Pravi-Global-IVF-Polyclinic-Next-to-Rama-Gallery-Lajpat-Nagar/011PXX11-XX11-250416163017-Q6I5_BZDET",
    "https://www.facebook.com/www.praviivf.in/",
    "https://www.instagram.com/ivfpravi/",
    "https://www.youtube.com/@ivfcentre1Msubscriber"
  ],

  "imageObject": {
    "@type": "ImageObject",
    "contentUrl": "https://praviglobalivf.com/images/og-image.jpg",
    "url": "https://praviglobalivf.com/images/og-image.jpg",
    "name": "Pravi Global IVF Polyclinic - Front View",
    "description": "Front view and reception area of Pravi Global IVF Polyclinic, Lajpat Nagar, New Delhi.",
    "representativeOfPage": true
  },

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9", 
    "bestRating": "5",
    "ratingCount": "157"
  },

  "review": [
    {
      "@type": "Review",
      "name": "Google Reviews",
      "author": {
        "@type": "Organization",
        "name": "Google"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "url": "https://maps.app.goo.gl/79RLa9txkQWQ58Jg6"
    },
    {
      "@type": "Review",
      "name": "Practo Rating",
      "author": {
        "@type": "Organization",
        "name": "Practo"
      },
      "reviewBody": "Patient stories and treatment experience testimonials.",
      "url": "https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4"
    },
    {
      "@type": "Review",
      "name": "Justdial Rating",
      "author": {
        "@type": "Organization",
        "name": "Justdial"
      },
      "reviewBody": "Clinic reviews and photo submissions on Justdial.",
      "url": "https://www.justdial.com/Delhi/Pravi-Global-IVF-Polyclinic-Next-to-Rama-Gallery-Lajpat-Nagar/011PXX11-XX11-250416163017-Q6I5_BZDET"
    }
  ],

  "priceRange": "₹₹₹"
}


export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mapSchema) }}
      />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}