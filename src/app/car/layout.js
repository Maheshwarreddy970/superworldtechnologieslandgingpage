

export const metadata = {
  title: "AI Car Dealership Websites | SuperWorld Technologies",
  description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
  openGraph: {
    title: "AI Car Dealership Websites | SuperWorld Technologies",
    description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
    url: "https://www.superworldtechnologies.com/car",
    siteName: "SuperWorld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail3.png",
      width: 1200,
      height: 630,
      alt: "AI Car Dealership Website Solutions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Car Dealership Websites | SuperWorld Technologies",
    description: "AI-powered car dealership websites with VIN search, visual inventory browsing, finance calculators & 24/7 sales chat. Convert more browsers into buyers. Launch in 48-72 hours.",
    images: ["https://www.superworldtechnologies.com/thumbnail3.png"],
  },
}

export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>

    );
}
