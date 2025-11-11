export const metadata = {
  title: "TESA & PESA Treatment in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic offers advanced TESA and PESA treatment in Delhi for men facing infertility issues. Expert and safe sperm retrieval procedures to support IVF and ICSI fertility treatments.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/tesa-and-pesa/",
  },
  openGraph: {
    title: "TESA & PESA Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get specialized TESA and PESA treatment in Delhi at Pravi Global IVF Polyclinic. Advanced sperm retrieval techniques for male infertility, performed by experienced fertility specialists.",
    url: "https://praviglobalivf.com/tesa-and-pesa/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/tesa-pesa-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "TESA and PESA Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TESA & PESA Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Advanced TESA & PESA procedures in Delhi at Pravi Global IVF Polyclinic for men with infertility. Safe sperm retrieval methods to assist in IVF and ICSI treatments.",
    images: ["/images/tesa-pesa-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
