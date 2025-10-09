import {
    Logo,
    RealestateLogo,
    RecycleLogo,
    CarDealerLogo,
    HomeserviceLogo,
    HealthLogo,
    RestaurantsLogo,
} from "@/components/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const logos = [
    RealestateLogo,
    RecycleLogo,
    CarDealerLogo,
    HomeserviceLogo,
    HealthLogo,
    RestaurantsLogo,
];

export default function IntegrationsSection() {
    return (
        <section className="border-y overflow-hidden px-3">
            <div className="mx-auto relative  max-w-6xl border-x py-24 md:py-32">
                  <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                />
                <div
                    aria-hidden="true"
                    className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                />
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
                        ></div>

                        {/* Animated logo clouds (alternating directions) */}
                        {[...Array(3)].map((_, rowIndex) => {
                            // Alternate ascending / descending
                            const rowLogos = rowIndex % 2 === 0 ? logos : [...logos].reverse();

                            return (
                                <div key={rowIndex} className="flex gap-6">
                                    {Array(2)
                                        .fill(null)
                                        .map((_, groupIndex) => (
                                            <div
                                                key={groupIndex}
                                                className={cn(
                                                    "flex shrink-0 animate-logo-cloud flex-row justify-around gap-6",
                                                    rowIndex % 2 === 1 && "[animation-direction:reverse]"
                                                )}
                                            >
                                                {rowLogos.map((LogoComp, i) => (
                                                    <IntegrationCard key={i}>
                                                        <LogoComp />
                                                    </IntegrationCard>
                                                ))}
                                            </div>
                                        ))}
                                </div>
                            );
                        })}

                        {/* Center logo */}
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                                isCenter={true}
                            >
                                <Logo />
                            </IntegrationCard>
                        </div>
                    </div>

                    {/* Section bottom text */}
                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
Specialized AI Platforms Engineered for Your Market

 </h2>
                        <p className="text-muted-foreground">
Unlike generic website builders, we create industry-specific solutions because we understand that a restaurant's needs are completely different from a medical clinic's requirements. By treating each industry separately, we deliver features that actually move the needle for your business—not just generic templates.

                        </p>

                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                            <span>Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    children,
    className,
    isCenter = false,
}) => {
    return (
        <div
            className={cn(
                "bg-background relative z-20 flex size-12 rounded-full border",
                className
            )}
        >
            <div className={cn("m-auto size-fit *:size-9", isCenter && "*:size-11")}>
                {children}
            </div>
        </div>
    );
};
