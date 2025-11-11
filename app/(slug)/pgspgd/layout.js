export const metadata = {
  title: "PGS & PGD Testing in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Pravi Global IVF Polyclinic offers advanced PGS and PGD testing in Delhi to identify genetic abnormalities in embryos before implantation. Improve IVF success rates and ensure healthy pregnancies with expert care.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/pgspgd/",
  },
  openGraph: {
    title: "PGS & PGD Testing in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get advanced Preimplantation Genetic Screening (PGS) and Diagnosis (PGD) in Delhi at Pravi Global IVF Polyclinic. Our experts use cutting-edge genetic testing to select healthy embryos and reduce the risk of genetic disorders.",
    url: "https://praviglobalivf.com/pgspgd/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/pgs-pgd-testing.jpg",
        width: 1200,
        height: 630,
        alt: "PGS PGD Testing in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGS & PGD Testing in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Ensure healthy embryo selection with PGS & PGD testing in Delhi at Pravi Global IVF Polyclinic. Advanced genetic screening to boost IVF success and prevent inherited disorders.",
    images: ["/images/pgs-pgd-testing.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
