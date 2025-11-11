export const metadata = {
  title: "Hormonal Test for Fertility | Pravi Global IVF Polyclinic Delhi",
  description:
    "Get accurate hormonal tests at Pravi Global IVF Polyclinic, the best IVF centre in Delhi. We evaluate hormone levels to diagnose fertility issues for both men and women and provide personalized treatment plans.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://praviglobalivf.com/hormonal-test/`,
  },
  openGraph: {
    title: "Hormonal Test for Fertility | Pravi Global IVF Polyclinic Delhi",
    description:
      "Pravi Global IVF Polyclinic offers advanced hormonal testing in Delhi to assess fertility health. Accurate diagnosis and customized fertility treatments for men and women.",
    url: `https://praviglobalivf.com/hormonal-test/`,
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/hormonal-test.jpg",
        width: 1200,
        height: 630,
        alt: "Hormonal Test for Fertility at Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hormonal Test for Fertility | Pravi Global IVF Polyclinic Delhi",
    description:
      "Get advanced hormonal test services in Delhi at Pravi Global IVF Polyclinic for evaluating fertility and reproductive health.",
    images: ["/images/hormonal-test.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
