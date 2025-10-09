'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home over-flow-hidden">
      <div className="relative mx-auto max-w-6xl  px-3 pb-10 pt-24 md:pb-20 md:pt-36">
        <div>
          <div className="relative mx-auto w-fit bg-gray-950/5 p-2">
            <div
              aria-hidden="true"
              className="absolute left-1 top-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute right-1 top-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-1 left-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-1 right-1 size-[3px] rounded-full bg-gray-950/20"
            />
            <div className="relative flex h-fit items-center gap-2 rounded-full bg-white px-3 py-1 shadow">
              <span className="text-title text-xs lg:text-sm">Introducing AI Engine v3.0</span>
              
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl text-center md:mt-10">
          <h1 className="text-foreground text-balance text-3xl font-semibold sm:text-6xl">
            If Your Website Isn't Your #1 Source of Leads, It's Broken. We Build {' '}
            <span className="relative ">
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-3 w-full"
                viewBox="0 0 283 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
                  stroke="url(#paint0_linear_pl)"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_pl"
                    x1="282"
                    y1="5.49999"
                    x2="40"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6C00FF" /> {/* Tailwind's blue-400 */}
                    <stop offset="1" stopColor="#C69CFF" /> {/* Tailwind's blue-200 */}
                  </linearGradient>
                </defs>
              </svg>
              <span className="relative bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] inline-block text-transparent bg-clip-text">Unbreakable </span>
            </span>
           {' '} Ones.
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 mt-4 max-w-3xl text-balance text-base md:text-lg">
           Don't let a slow, outdated, or confusing website be the bottleneck in your growth. We engineer mobile-first, AI-driven platforms that are built for one purpose: to convert your visitors into paying customers. Guaranteed.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 px-4 py-2 border border-zinc-950/25 bg-gradient-to-t from-[#6C00FF] to-[#C69CFF] text-white shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
              <Link href="#">Start Building</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b px-3  border-t">
        <div className="relative mx-auto max-w-6xl border-x  px-4 sm:px-6 md:px-12">
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
          />
          <div
            aria-hidden="true"
            className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"
          />
          <div className="bg-linear-to-b to-foreground/[0.025] relative border-x">
          
            <Image
              alt="Oxymor overview"
              src="/Dashboard Design(1).jpg"
              width={1280}
              height={720}
              sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
              className="mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;