export const metadata = {
  title: "Surrogacy Centre in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic is a trusted surrogacy centre in Delhi offering legal, ethical, and medically advanced surrogacy programs. Get complete support from expert fertility specialists and experienced surrogates.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/surrogacy/",
  },
  openGraph: {
    title: "Surrogacy Centre in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Looking for a surrogacy centre in Delhi? Pravi Global IVF Polyclinic provides comprehensive, transparent, and ethical surrogacy services with expert guidance and high success rates.",
    url: "https://praviglobalivf.com/surrogacy/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/surrogacy-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Surrogacy Centre in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surrogacy Centre in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Explore safe and legal surrogacy programs in Delhi at Pravi Global IVF Polyclinic. Experienced fertility doctors and compassionate surrogate support to help you build your family.",
    images: ["/images/surrogacy-delhi.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
