export const metadata = {
  title: "Laparoscopy Treatment in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic offers advanced laparoscopy treatment in Delhi for diagnosing and treating infertility, endometriosis, fibroids, and other reproductive issues with minimally invasive surgical techniques.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/laparoscopy/",
  },
  openGraph: {
    title: "Laparoscopy Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get expert laparoscopy treatment in Delhi at Pravi Global IVF Polyclinic. Our specialists perform minimally invasive surgeries to treat infertility, ovarian cysts, and uterine conditions effectively.",
    url: "https://praviglobalivf.com/laparoscopy/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/laparoscopy-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Laparoscopy Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laparoscopy Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Advanced laparoscopy treatment in Delhi at Pravi Global IVF Polyclinic. Diagnose and treat fertility issues, cysts, and endometriosis with minimally invasive procedures.",
    images: ["/images/laparoscopy-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
