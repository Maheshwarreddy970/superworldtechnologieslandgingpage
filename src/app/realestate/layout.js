

export const metadata = {
  title: "AI Real Estate Websites | SuperWorld Technologies",
  description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
  openGraph: {
    title: "AI Real Estate Websites | SuperWorld Technologies",
    description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
    url: "https://www.superworldtechnologies.com/realestate",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail1.png",
      width: 1200,
      height: 630,
      alt: "AI Real Estate Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Real Estate Websites | SuperWorld Technologies",
    description: "Intelligent real estate websites with AI property matching, virtual 3D tours, instant lead capture & automated follow-ups. Convert 50% more buyers to properties.",
    images: ["https://www.superworldtechnologies.com/thumbnail1.png"],
  },
}


export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>

    );
}
