

export const metadata = {
  title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
  description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
  openGraph: {
    title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
    description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
    url: "https://www.superworldtechnologies.com/health",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail5.png",
      width: 1200,
      height: 630,
      alt: "AI Healthcare Website & Patient Portal Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Healthcare Websites & Patient Portals | SuperWorld Technologies",
    description: "HIPAA-compliant healthcare websites with telehealth scheduling, automated patient reminders, secure forms & AI-powered patient care. Reduce no-shows by 30%.",
    images: ["https://www.superworldtechnologies.com/thumbnail5.png"],
  },
}


export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>

    );
}
