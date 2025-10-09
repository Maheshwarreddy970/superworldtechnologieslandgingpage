'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const countries = [
    {
        continent: "America",
        items: [
            { value: "United States", flag: "🇺🇸" },
            { value: "Canada", flag: "🇨🇦" },
            { value: "Mexico", flag: "🇲🇽" },
        ],
    },
    {
        continent: "Africa",
        items: [
            { value: "South Africa", flag: "🇿🇦" },
            { value: "Nigeria", flag: "🇳🇬" },
            { value: "Morocco", flag: "🇲🇦" },
        ],
    },
    {
        continent: "Asia",
        items: [
            { value: "China", flag: "🇨🇳" },
            { value: "Japan", flag: "🇯🇵" },
            { value: "India", flag: "🇮🇳" },
        ],
    },
    {
        continent: "Europe",
        items: [
            { value: "United Kingdom", flag: "🇬🇧" },
            { value: "France", flag: "🇫🇷" },
            { value: "Germany", flag: "🇩🇪" },
        ],
    },
    {
        continent: "Oceania",
        items: [
            { value: "Australia", flag: "🇦🇺" },
            { value: "New Zealand", flag: "🇳🇿" },
        ],
    },
]
export default function InvoicingSection() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());

        // Prepend https:// to website and social-media if not already present
        if (data.website && !data.website.startsWith('https://')) {
            data.website = `https://${data.website}`;
        }
        if (data['social-media'] && !data['social-media'].startsWith('https://')) {
            data['social-media'] = `https://${data['social-media']}`;
        }

        try {
            await addDoc(collection(db, "contacts"), data);
            alert('Form submitted successfully!');
            e.target.reset(); // Optional: Reset form after submission
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

    return (
        <section className="bg-white  ">
            <div className="mx-auto max-w-6xl border-x py-24 relative   lg:py-32 ">
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-40 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                />
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                />
                <div className="relative">
                    <div className="grid grid-cols-2 divide-x border-y *:p-6 md:*:p-8 lg:grid-cols-4">
                        {/* Left Section */}
                        <div className="col-span-2 border-b max-lg:border-r-0 max-md:text-center">
                            <h1 className="text-balance text-3xl font-semibold md:text-5xl ">
                                AI-Powered Websites. Industry Expertise. Real Results.
                            </h1>
                            <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">
                                Our SuperWorld Technologies platform delivers custom AI-enhanced websites designed for your industry, complete with automated features and 24/7 support, all on our secure infrastructure.
                            </p>

                            <ul className="mt-8 space-y-2">
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Launch your AI website in 48-72 hours</li>
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Get industry-specific features built-in</li>
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Access real-time analytics dashboard</li>
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Mobile-first design optimized for conversions</li>
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Complete hosting and maintenance included</li>
                                <li className="text-muted-foreground flex items-center gap-2 max-md:justify-center">Dedicated account manager for ongoing support</li>
                            </ul>
                        </div>

                        {/* Form Section */}
                        <div className="bg-card/25 relative col-span-2 border-b border-r-0 lg:pt-10">
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] -left-[3.5px]"
                            />
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <Label htmlFor="name">Full name</Label>
                                        <Input id="name" name="name" type="text" required className="h-9 text-base md:text-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="email">Work Email</Label>
                                        <Input id="email" name="email" type="email" required className="h-9 text-base md:text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="country">Country/Region</Label>
                                    <Select name="country">
                                        <SelectTrigger className="h-9 w-full text-base md:text-sm">
                                            <SelectValue placeholder="Select Country/Region" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((continent, index) => (
                                                <SelectGroup key={index}>
                                                    <div className="px-4 py-2 text-sm font-semibold text-gray-500">
                                                        {continent.continent}
                                                    </div>
                                                    {continent.items.map((country, idx) => (
                                                        <SelectItem key={idx} value={country.value}>
                                                            {country.flag} {country.value}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="website">Company Website</Label>
                                    <div className="relative">
                                        <Input
                                            id="website"
                                            name="website"
                                            type="url"
                                            placeholder="superworldtechnologies.com"
                                            className="h-9 text-base md:text-sm pl-16"
                                        />
                                        <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                                            https://
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="social-media">Social Media</Label>
                                    <div className="relative">
                                        <Input
                                            id="social-media"
                                            name="social-media"
                                            type="url"
                                            placeholder="instagram.com"
                                            className="h-9 text-base md:text-sm pl-16"
                                        />
                                        <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                                            https://
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="msg">Message</Label>
                                    <Textarea id="msg" name="msg" rows={3} className="min-h-16 text-base md:text-sm" />
                                </div>
                                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-sm">
                                        By submitting this form, you agree to our{' '}
                                        <a className="text-primary underline" href="#link">
                                            Privacy Policy
                                        </a>
                                    </p>
                                    <Button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                        <span>Submit</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                        {/* Bottom Sections */}
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:border-b">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">99.9% Uptime guarantee</strong> ensured across all platforms.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block max-lg:relative max-lg:border-b max-lg:border-r-0">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">48-72 hour launch speed</strong> with AI features ready.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground">
                                <strong className="text-foreground font-medium">24/7 Support</strong> with dedicated account managers.
                            </p>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-5 *:block">
                            <p className="text-muted-foreground text-balance">
                                <strong className="text-foreground font-medium">Seamless Integration</strong> with industry-leading tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}