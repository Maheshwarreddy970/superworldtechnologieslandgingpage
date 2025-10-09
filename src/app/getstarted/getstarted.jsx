import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import { RealestateLogo, RecycleLogo, CarDealerLogo, HomeserviceLogo, HealthLogo, RestaurantsLogo } from '@/components/logo'

export default function GetStartedTab() {
    return (
        <section>
            <div className="">
                <div className="mx-auto max-w-6xl border-x py-32 relative px-6">
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                    />
                    <div className="text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Complete Industry Solutions, Ready to Launch</h2>
                        <p className="text-muted-foreground mt-6">We handle design, hosting, analytics, and optimization—everything your industry needs to succeed online.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                        link={'/realestate'}
                            title="For Real Estate"
                            description="Professional property listings, MLS integration, lead capture forms, and conversion-optimized design that builds trust with buyers.">
                            <RealestateLogo />
                        </IntegrationCard>

                        <IntegrationCard
                            link={'/recycle'}
                            title="For Waste Management"
                            description="Service request forms, route scheduling, customer portals, secure invoicing, and mobile-optimized booking for all waste services.">
                            <RecycleLogo />
                        </IntegrationCard>

                        <IntegrationCard
                            link={'/cardealer'}
                            title="For Car Dealerships"
                            description="Stunning inventory showcases, finance application forms, test drive booking, trade-in calculators, and high-converting sales pages.">
                            <CarDealerLogo />
                        </IntegrationCard>

                        <IntegrationCard
                            link={'/homeservice'}
                            title="For Home Services"
                            description="Service area mapping, instant quote forms, before/after galleries, customer testimonials, and appointment scheduling that converts.">
                            <HomeserviceLogo />
                        </IntegrationCard>

                        <IntegrationCard
                            link={'/health'}
                            title="For Healthcare"
                            description="HIPAA-compliant patient forms, appointment booking, insurance verification, telehealth integration, and professional medical design.">
                            <HealthLogo />
                        </IntegrationCard>

                        <IntegrationCard
                            link={'/restaurants'}
                            title="For Restaurants"
                            description="Digital menus, online ordering, reservation systems, delivery integration, loyalty programs, and food photography that drives orders.">
                            <RestaurantsLogo />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link  }) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <a href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 text-[#6C00FF] shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                        <span>More Info</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                    </a>
                    <a href='/requestdemo' className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                        <span>Request Demo</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                    </a>
                </div>
            </div>
        </Card>
    )
}