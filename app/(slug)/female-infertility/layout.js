export const metadata = {
  title: "Female Infertility Treatment in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic offers advanced female infertility treatment in Delhi. Our fertility specialists diagnose and treat ovulation issues, PCOS, endometriosis, and other reproductive conditions with personalized care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/female-infertility/",
  },
  openGraph: {
    title: "Female Infertility Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get expert female infertility treatment in Delhi at Pravi Global IVF Polyclinic. Our doctors specialize in diagnosing and treating PCOS, hormonal imbalance, and reproductive health issues for successful conception.",
    url: "https://praviglobalivf.com/female-infertility/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/female-infertility.jpg",
        width: 1200,
        height: 630,
        alt: "Female Infertility Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Infertility Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Advanced female infertility treatment in Delhi by experienced fertility doctors at Pravi Global IVF Polyclinic. Diagnosis and treatment for PCOS, hormonal imbalance, and ovulation disorders.",
    images: ["/images/female-infertility.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
