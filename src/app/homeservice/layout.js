

export const metadata = {
  title: "AI Home Services Websites | SuperWorld Technologies",
  description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
  openGraph: {
    title: "AI Home Services Websites | SuperWorld Technologies",
    description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
    url: "https://www.superworldtechnologies.com/homeservice",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail4.png",
      width: 1200,
      height: 630,
      alt: "AI Home Services Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Home Services Websites | SuperWorld Technologies",
    description: "Smart home services websites with photo-based instant quotes, dynamic scheduling, customer reviews & automated booking. Get 40% more booked jobs.",
    images: ["https://www.superworldtechnologies.com/thumbnail4.png"],
  },
}


export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>

    );
}
