export const metadata = {
  title: "Egg Freezing in Delhi | Oocyte Cryopreservation - Pravi Global IVF Polyclinic",
  description:
    "Preserve your fertility with advanced egg freezing in Delhi at Pravi Global IVF Polyclinic. Our experts use cutting-edge cryopreservation techniques to safely store eggs for future family planning.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/egg-freezing/",
  },
  openGraph: {
    title: "Egg Freezing in Delhi | Oocyte Cryopreservation - Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic offers advanced egg freezing (oocyte cryopreservation) in Delhi for women who wish to preserve fertility. Safe, effective, and affordable fertility preservation options.",
    url: "https://praviglobalivf.com/egg-freezing/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/egg-freezing.jpg",
        width: 1200,
        height: 630,
        alt: "Egg Freezing in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egg Freezing in Delhi | Oocyte Cryopreservation - Pravi Global IVF Polyclinic",
    description:
      "Explore egg freezing in Delhi at Pravi Global IVF Polyclinic. Preserve your fertility with safe oocyte cryopreservation and expert reproductive specialists.",
    images: ["/images/egg-freezing.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
