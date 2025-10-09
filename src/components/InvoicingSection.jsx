'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';

export default function InvoicingSection() {
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
                            <form className="space-y-6" action="">
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <Label htmlFor="name">Full name</Label>
                                        <Input id="name" type="text" required className="h-9 text-base md:text-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="email">Work Email</Label>
                                        <Input id="email" type="email" required className="h-9 text-base md:text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="country">Country/Region</Label>
                                    <Select className="w-full ">
                                        <SelectTrigger className="h-9 w-full text-base md:text-sm">
                                            <SelectValue placeholder="Select Country/Region" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">🇨🇩 DR Congo</SelectItem>
                                            <SelectItem value="2">🇺🇸 United States</SelectItem>
                                            <SelectItem value="3">🇫🇷 France</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="website">Company Website</Label>
                                    <div className="relative">
                                        <Input
                                            id="website"
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
                                    <Textarea id="msg" rows={3} className="min-h-16 text-base md:text-sm" />
                                </div>
                                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                                    <p className="text-muted-foreground text-sm">
                                        By submitting this form, you agree to our{' '}
                                        <a className="text-primary underline" href="#link">
                                            Privacy Policy
                                        </a>
                                    </p>
                                    <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                        <span>Submit</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                                    </button>
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