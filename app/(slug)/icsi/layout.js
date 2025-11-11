export const metadata = {
  title: "ICSI Treatment in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Get advanced ICSI treatment in Delhi at Pravi Global IVF Polyclinic. Our fertility specialists provide precise sperm injection techniques for improved fertilization and higher IVF success rates.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/icsi/",
  },
  openGraph: {
    title: "ICSI Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic offers ICSI treatment in Delhi for couples facing severe male infertility. Achieve successful conception with advanced embryology and experienced fertility experts.",
    url: "https://praviglobalivf.com/icsi/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/icsi-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "ICSI Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICSI Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Looking for ICSI treatment in Delhi? Pravi Global IVF Polyclinic provides advanced sperm injection techniques for better fertilization outcomes and IVF success.",
    images: ["/images/icsi-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
