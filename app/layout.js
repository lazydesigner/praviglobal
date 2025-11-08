import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { hospitalInfo } from '@/lib/data';
import { generateOrganizationSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: `${hospitalInfo.name} - Leading IVF & Fertility Center in Raipur`,
    template: `%s | ${hospitalInfo.name}`
  },
  description: 'Leading IVF and fertility center in Raipur, Chhattisgarh. Expert fertility specialists offering IVF, ICSI, IUI, egg freezing, and comprehensive reproductive healthcare with high success rates.',
  keywords: 'IVF Raipur, fertility clinic Raipur, IVF treatment, ICSI, IUI, egg freezing, male infertility, female infertility, surrogacy, fertility specialist Raipur, best IVF center Chhattisgarh',
  authors: [{ name: hospitalInfo.name }],
  creator: hospitalInfo.name,
  publisher: hospitalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://praviivf.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${hospitalInfo.name} - Leading IVF & Fertility Center`,
    description: 'Expert fertility care with advanced IVF treatments and personalized support. Helping families grow with compassion and expertise.',
    url: 'https://praviivf.in',
    siteName: hospitalInfo.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: hospitalInfo.name,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${hospitalInfo.name} - Leading IVF & Fertility Center`,
    description: 'Expert fertility care with advanced IVF treatments and personalized support.',
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