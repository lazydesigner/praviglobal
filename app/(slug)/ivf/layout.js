export const metadata = {
  title: "IVF Treatment in Delhi | Best IVF Centre - Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic is the best IVF centre in Delhi offering advanced IVF treatment with high success rates. Expert fertility specialists, modern lab facilities, and compassionate care for couples seeking parenthood.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/ivf/",
  },
  openGraph: {
    title: "IVF Treatment in Delhi | Best IVF Centre - Pravi Global IVF Polyclinic",
    description:
      "Looking for the best IVF treatment in Delhi? Pravi Global IVF Polyclinic offers advanced in vitro fertilization services with cutting-edge technology and experienced fertility specialists to help couples conceive.",
    url: "https://praviglobalivf.com/ivf/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/ivf-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment in Delhi | Best IVF Centre - Pravi Global IVF Polyclinic",
    description:
      "Get world-class IVF treatment in Delhi at Pravi Global IVF Polyclinic. Experienced fertility experts, advanced labs, and personalized care for your parenthood journey.",
    images: ["/images/ivf-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
