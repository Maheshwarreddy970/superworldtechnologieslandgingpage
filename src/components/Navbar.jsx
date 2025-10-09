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

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 border-b backdrop-blur-xl transition-shadow duration-200">
            <div className="mx-auto max-w-6xl px-4  lg:px-12">
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
                    <div className="hidden w-[75%] justify-between  lg:flex items-center gap-4">
                        <NavigationMenuDemo />
                        <div className="flex gap-3">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                                <span>Get Started</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-x-0 top-[4.7rem] bg-white/95 backdrop-blur-xl border-b  transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    <div className="mx-auto max-w-6xl px-4 py-4">
                        <Accordion type="single" collapsible className="w-full space-y-1">
                            <AccordionItem value="product" className="border-b-0">
                                <AccordionTrigger className="py-3 text-lg font-medium hover:no-underline">
                                    Product
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-2 text-sm">
                                    <Link href="#" className="block py-2">Overview</Link>
                                    <Link href="#" className="block py-2">Features</Link>
                                    <Link href="#" className="block py-2">Benefits</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="solutions" className="border-b-0">
                                <AccordionTrigger className="py-3 text-lg font-medium hover:no-underline">
                                    Solutions
                                </AccordionTrigger>
                                <AccordionContent className="px-4 py-2 text-sm">
                                    <Link href="#" className="block py-2">For Teams</Link>
                                    <Link href="#" className="block py-2">For Enterprises</Link>
                                    <Link href="#" className="block py-2">Case Studies</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="pricing" className="border-b-0">
                                <Link href="#" className="block py-3 text-lg font-medium hover:underline">
                                    Pricing
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="company" className="border-b-0">
                                <Link href="#" className="block py-3 text-lg font-medium hover:underline">
                                    Company
                                </Link>
                            </AccordionItem>
                        </Accordion>
                        <div className="my-4 flex flex-col gap-3 ">

                            <Button
                                size="sm"
                                asChild
                                className=" bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md border-white/25 ring-1 ring-inset ring-white/15 hover:bg-primary/90"
                            >
                                <Link href="#">Get Started</Link>
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
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];

function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
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
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs">Docs</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>List</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4">
                            <ListItem href="#" title="Components">
                                Browse all components in the library.
                            </ListItem>
                            <ListItem href="#" title="Documentation">
                                Learn how to use the library.
                            </ListItem>
                            <ListItem href="#" title="Blog">
                                Read our latest blog posts.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                            <ListItem href="#" title="Components" />
                            <ListItem href="#" title="Documentation" />
                            <ListItem href="#" title="Blocks" />
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