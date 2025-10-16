

export const metadata = {
  title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies",
  description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
  openGraph: {
    title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies",
    description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
    url: "https://www.superworldtechnologies.com/restaurants",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail6.png",
      width: 1200,
      height: 630,
      alt: "AI Restaurant Website & Ordering Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Restaurant Websites & Online Ordering | SuperWorld Technologies",
    description: "Smart restaurant websites with AI menu recommendations, contactless ordering, reservation systems & loyalty programs. Boost online orders & customer satisfaction.",
    images: ["https://www.superworldtechnologies.com/thumbnail6.png"],
  },
}


export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>

    );
}
