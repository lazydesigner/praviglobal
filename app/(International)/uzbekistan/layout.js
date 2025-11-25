export const metadata = {
  title: "IVF Treatment for International Patients from Uzbekistan | Pravi Global IVF Polyclinic Delhi",
  description:
    "Pravi Global IVF Polyclinic welcomes international patients from Uzbekistan for world-class IVF and fertility treatments in Delhi, India. Affordable IVF, ICSI, and egg donation with high success rates and expert care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/uzbekistan",
  },
  openGraph: {
    title: "IVF Treatment for Patients from Uzbekistan | Pravi Global IVF Polyclinic Delhi",
    description:
      "Looking for affordable IVF in India from Uzbekistan? Pravi Global IVF Polyclinic provides international fertility care with advanced IVF, ICSI, and surrogacy services for Uzbekistanian couples.",
    url: "https://praviglobalivf.com/uzbekistan",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/ivf-for-Uzbekistan-patients.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment for Uzbekistan Patients - Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment for Uzbekistan Patients | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers world-class fertility treatments for patients from Uzbekistan. Safe, affordable, and successful IVF and surrogacy care in Delhi, India.",
    images: ["/images/ivf-for-Uzbekistan-patients.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
