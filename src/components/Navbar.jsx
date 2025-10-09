'use client';

import React, { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';
import { ChevronRight } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 border-b backdrop-blur-xl transition-shadow duration-200">
            <div className="mx-auto max-w-6xl px-4 lg:px-12">
                <div className="flex items-center justify-between py-4">
                    {/* Logo and Mobile Menu Trigger */}
                    <div className="flex items-center justify-between w-full lg:w-[25%] gap-4">
                        <Link aria-label="Home" href="/" className="flex items-center">
                            <Logo className="h-11 w-11 p-1 border shadow rounded-lg" />
                        </Link>
                        <button
                            variant="ghost"
                            size="icon"
                            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 transition-transform duration-200" />
                            ) : (
                                <Menu className="h-6 w-6 transition-transform duration-200" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden w-[75%] justify-between lg:flex items-center gap-4">
                        <NavigationMenuDemo />
                        <div className="flex gap-3">
                            <a href='/getstarted' className=" inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out duration-300 group hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                <span>Get Started</span><ChevronRight className="ml-0 group-hover:translate-x-1 transition-all ease-in-out duration-300 !size-3.5 opacity-50" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-x-0 top-[4.7rem] bg-white/95 backdrop-blur-xl border-b transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <div className="mx-auto max-w-6xl px-4 py-4">
                        <Accordion type="single" collapsible className="w-full space-y-1">
                            <AccordionItem value="home" className="border-b-0">
                                <Link href="/" className="block py-3 text-lg font-medium hover:underline">
                                    Home
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="features" className="border-b-0">
                                <Link href="#features" className="block py-3 text-lg font-medium hover:underline">
                                    Features
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="pricing" className="border-b-0">
                                <AccordionTrigger className="py-3 text-lg font-medium hover:no-underline">
                                    Pricing
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-2 text-sm">
                                    <Link href="#competition" className="block py-2">Competition</Link>
                                    <Link href="#pricing" className="block py-2">Pricing</Link>
                                    <Link href="#faq" className="block py-2">FAQ</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="components" className="border-b-0">
                                <AccordionTrigger className="py-3 text-lg font-medium hover:no-underline">
                                    Components
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-2 text-sm">
                                    {components.map((component) => (
                                        <Link key={component.title} href={component.href} className="block py-2">
                                            {component.title}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="my-4 flex flex-col gap-3">
                            <Button
                                size="sm"
                                asChild
                                className="bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md border-white/25 ring-1 ring-inset ring-white/15 hover:bg-primary/90"
                            >
                                <Link href="/getstarted">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const components = [
    {
        title: 'For Real Estate',
        href: '/request-demo',
        description: 'Professional property listings, MLS integration, lead capture forms, and conversion-optimized design that builds trust with buyers.',
    },
    {
        title: 'For Waste Management',
        href: '/request-demo',
        description: 'Service request forms, route scheduling, customer portals, secure invoicing, and mobile-optimized booking for all waste services.',
    },
    {
        title: 'For Car Dealerships',
        href: '/request-demo',
        description: 'Stunning inventory showcases, finance application forms, test drive booking, trade-in calculators, and high-converting sales pages.',
    },
    {
        title: 'For Home Services',
        href: '/request-demo',
        description: 'Service area mapping, instant quote forms, before/after galleries, customer testimonials, and appointment scheduling that converts.',
    },
    {
        title: 'For Healthcare',
        href: '/request-demo',
        description: 'HIPAA-compliant patient forms, appointment booking, insurance verification, telehealth integration, and professional medical design.',
    },
    {
        title: 'For Restaurants',
        href: '/request-demo',
        description: 'Digital menus, online ordering, reservation systems, delivery integration, loyalty programs, and food photography that drives orders.',
    },
];

function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#features">Features</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink className="[&_svg:not([class*='size-'])]:size-full " asChild>
                                    <a
                                        className="flex h-full w-full border relative flex-col justify-end rounded-md bg-white "
                                        href="/"
                                    >
                                        <Logo className="h-full w-full " />
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed websites crafted for your industry with conversion-focused layouts.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="#competition" title="Competition">
                                Compare SuperWorld Technologies with DIY solutions and other SaaS platforms.
                            </ListItem>
                            <ListItem href="#pricing" title="Pricing">
                                Simple, transparent plans that scale with your business growth.
                            </ListItem>
                            <ListItem href="#faq" title="FAQ">
                                Common questions about setup, billing, features, and support.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem key={component.title} title={component.title} href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({ title, children, href }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    {children && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

export default Header;