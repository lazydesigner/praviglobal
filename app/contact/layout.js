export const metadata = {
  title: "Contact Us | Pravi Global IVF Polyclinic Delhi",
  description:
    "Contact Pravi Global IVF Polyclinic – the best IVF centre in Delhi. Get in touch with our fertility experts for appointments, treatment inquiries, or consultations. Call 080091 50040 or visit our Lajpat Nagar clinic.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://praviglobalivf.com/contact/",
  },
  openGraph: {
    title: "Contact Us | Pravi Global IVF Polyclinic Delhi",
    description:
      "Reach out to Pravi Global IVF Polyclinic in Delhi for expert fertility care and IVF treatment. Visit our Lajpat Nagar clinic or call 080091 50040 to schedule an appointment.",
    url: "https://praviglobalivf.com/contact/",
    siteName: "Pravi Global IVF Polyclinic",
    images: [
      {
        url: "/images/contact-pravi-global-ivf.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pravi Global IVF Polyclinic Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Pravi Global IVF Polyclinic Delhi",
    description:
      "Get in touch with Pravi Global IVF Polyclinic – leading IVF & fertility centre in Delhi. Contact us at 080091 50040 or visit our clinic in Lajpat Nagar for appointments.",
    images: ["/images/contact-pravi-global-ivf.jpg"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
