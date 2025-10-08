'use client';

import React from 'react';

const TrustedBySection = () => {


    return (

        <section className="bg-white border-b ">
            <div className="mx-auto max-w-6xl border-x px-6 py-8 md:py-16">
                <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
                    <p className="text-muted-foreground mt-4 md:text-lg">
                        We build your website on a foundation of world-class technology.
This ensures it is always fast, intelligent, and secure for your customers.
                    </p>
                </div>
                <div className="mx-auto grid  max-w-5xl grid-cols-2 gap-y-6 sm:grid-cols-4 md:grid-cols-5">
                    <img className="h-5 w-fit mx-auto brightness-0  " src="/Meta_Platforms_Inc._logo.svg.webp" alt="Meta Platforms Logo" height="20" width="auto" />
                    <img className="h-4 w-fit mx-auto " src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
                    <img className="h-6 w-fit mx-auto " src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
                   
                    <img className="h-6 w-fit mx-auto brightness-0  " src="/NeonDB-White-1024x290.png" alt="Meta Platforms Logo" height="20" width="auto" />
                    <img className="h-5 w-fit mx-auto " src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;