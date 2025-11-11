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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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


export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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