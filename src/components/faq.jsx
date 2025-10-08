import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const FAQSection = () => {
  return (
    <section className="  border-y  ">
      <div className="mx-auto py-16 relative md:py-24  max-w-6xl border-x px-4 md:px-6">
           <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px]  translate-x-[1.5px]   -left-[3.5px]"
                    />
                    <div
                        aria-hidden="true"
                        className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
                    />
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          {/* Left Column */}
          <div className="max-w-lg max-md:px-6 md:col-span-2">
            <h2 className="text-gray-900 text-4xl font-semibold">FAQs</h2>
            <p className="text-gray-600 mt-4 text-balance text-lg">Your questions answered</p>
            <p className="text-gray-600 mt-6 max-md:hidden">
              Can't find what you're looking for? Contact our{' '}
              <Link href="#" className="text-[#6C00FF] font-medium hover:underline">
                customer support team
              </Link>
            </p>
          </div>

          {/* Right Column - Accordions */}
          <div className="space-y-12 md:col-span-3">
            {/* General Section */}
            <div className="space-y-4">
              <h3 className="text-gray-900 pl-6 text-lg font-semibold">General</h3>
              <Accordion type="single" collapsible className="-space-y-1">
                <AccordionItem value="item-1" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    How long does shipping take?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    Shipping typically takes 3-7 business days depending on your location and the shipping method selected at checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    Can I change or cancel my order?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    You can change or cancel your order within 24 hours of placement by contacting our support team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Shipping Section */}
            <div className="space-y-4">
              <h3 className="text-gray-900 pl-6 text-lg font-semibold">Shipping</h3>
              <Accordion type="single" collapsible className="-space-y-1">
                <AccordionItem value="item-4" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    Yes, we ship to most countries worldwide. Shipping costs and times vary by destination.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    We offer a 30-day return policy for unused items in original packaging. Contact support to initiate a return.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b last:border-b-0 data-[state=open]:bg-white data-[state=open]:ring-gray-200/20 rounded-xl border-none px-6 py-1 data-[state=open]:shadow-sm data-[state=open]:ring-1">
                  <AccordionTrigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 hover:no-underline data-[state=open]:border-transparent text-base">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    Yes, we ship to most countries worldwide. Shipping costs and times vary by destination.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-12 px-6 md:hidden">
          Can't find what you're looking for? Contact our{' '}
          <Link href="#" className="text-blue-600 font-medium hover:underline">
            customer support team
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
