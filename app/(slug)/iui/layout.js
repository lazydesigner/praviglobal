export const metadata = {
  title: "IUI Treatment in Delhi | Pravi Global IVF Polyclinic",
  description:
    "Looking for IUI treatment in Delhi? Pravi Global IVF Polyclinic offers safe and effective intrauterine insemination (IUI) procedures to help couples conceive naturally under the guidance of top fertility specialists.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/iui/",
  },
  openGraph: {
    title: "IUI Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Pravi Global IVF Polyclinic provides advanced IUI treatment in Delhi to assist couples facing infertility. Expert fertility doctors, safe procedures, and affordable costs with high success rates.",
    url: "https://praviglobalivf.com/iui/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/iui-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "IUI Treatment in Delhi - Pravi Global IVF Polyclinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IUI Treatment in Delhi | Pravi Global IVF Polyclinic",
    description:
      "Get effective IUI treatment in Delhi at Pravi Global IVF Polyclinic. Trusted fertility experts offering advanced intrauterine insemination to help couples conceive naturally.",
    images: ["/images/iui-treatment.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
