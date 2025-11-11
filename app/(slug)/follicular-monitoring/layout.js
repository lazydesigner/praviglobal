export const metadata = {
  title: "Follicular Monitoring in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic offers advanced follicular monitoring in Delhi to track ovulation and egg development. Accurate ultrasound-based fertility monitoring by experienced IVF specialists.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/follicular-monitoring/",
  },
  openGraph: {
    title: "Follicular Monitoring in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get precise follicular monitoring in Delhi at Pravi Global IVF Polyclinic. Our fertility experts use ultrasound tracking to monitor ovulation and improve your chances of conception.",
    url: "https://praviglobalivf.com/follicular-monitoring/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/follicular-monitoring.jpg",
        width: 1200,
        height: 630,
        alt: "Follicular Monitoring in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Follicular Monitoring in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Accurate follicular monitoring in Delhi by expert fertility specialists at Pravi Global IVF Polyclinic. Track ovulation and optimize conception with advanced ultrasound scans.",
    images: ["/images/follicular-monitoring.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
