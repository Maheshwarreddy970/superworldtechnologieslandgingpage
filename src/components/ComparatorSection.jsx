import { Button } from '@/components/ui/button'
import { Cpu, Sparkles } from 'lucide-react'
import Link from 'next/link'

const tableData = [
    {
        feature: 'Feature 1',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 2',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 3',
        free: false,
        pro: true,
        startup: true,
    },
    {
        feature: 'Tokens',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
    {
        feature: 'Video calls',
        free: '',
        pro: '12 Weeks',
        startup: '56',
    },
    {
        feature: 'Support',
        free: '',
        pro: 'Secondes',
        startup: 'Unlimited',
    },
    {
        feature: 'Security',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
]

export default function PricingComparator() {
    return (
        <>
            <div className='bg-white border-t w-full '>
                <div className="relative  mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
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
                    <div className=" relative border-x flex flex-col gap-6 justify-center  py-10">
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
                                    <span className="text-title text-sm">Features</span>

                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl text-center ">
                            <h1 className="text-foreground text-balance text-4xl font-medium sm:text-5xl ">
                                Transform your Sales with Data-Driven Insights
                            </h1>
                            <p className="text-muted-foreground mx-auto mt-3   max-w-xl text-balance text-lg">
                                Efficiently manage your sales team with our innovative tools. Enhance productivity, and
                                achieve your sales!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <section className=" border-y  ">
                <div className="  relative mx-auto max-w-6xl py-16 border-x px-6">
                    <div className="w-full overflow-auto lg:overflow-visible">
                        <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                            <thead className="bg-background sticky top-0">
                                <tr className="*:py-4 *:text-left *:font-medium">
                                    <th className="lg:w-2/5"></th>
                                    <th className="space-y-3">
                                        <span className="block">Free</span>

                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm">
                                            <Link href="#">Get Started</Link>
                                        </Button>
                                    </th>
                                    <th className="bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white rounded-t-(--radius) space-y-3 px-4">
                                        <span className="block">Pro</span>
                                        <Button
                                            asChild
                                            size="sm">
                                            <Link href="#">Get Started</Link>
                                        </Button>
                                    </th>
                                    <th className="space-y-3">
                                        <span className="block">Startup</span>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm">
                                            <Link href="#">Get Started</Link>
                                        </Button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-caption text-sm">
                                <tr className="*:py-3">
                                    <td className="flex items-center gap-2 font-medium">
                                        <Cpu className="size-4" />
                                        <span>Features</span>
                                    </td>
                                    <td></td>
                                    <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white "></td>
                                    <td></td>
                                </tr>
                                {tableData.slice(-4).map((row, index) => (
                                    <tr
                                        key={index}
                                        className="*:border-b *:py-3">
                                        <td className="text-muted-foreground">{row.feature}</td>
                                        <td>
                                            {row.free === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.free
                                            )}
                                        </td>
                                        <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white">
                                            <div className="-mb-3 border-b py-3">
                                                {row.pro === true ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="size-4">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    row.pro
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            {row.startup === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.startup
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="*:pb-3 *:pt-8">
                                    <td className="flex items-center gap-2 font-medium">
                                        <Sparkles className="size-4" />
                                        <span>AI Models</span>
                                    </td>
                                    <td></td>
                                    <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white"></td>
                                    <td></td>
                                </tr>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="*:border-b *:py-3">
                                        <td className="text-muted-foreground">{row.feature}</td>
                                        <td>
                                            {row.free === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.free
                                            )}
                                        </td>
                                        <td className="bg-muted border-none px-4 bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white">
                                            <div className="-mb-3 border-b py-3">
                                                {row.pro === true ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="size-4">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    row.pro
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            {row.startup === true ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="size-4">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                row.startup
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="*:py-6">
                                    <td></td>
                                    <td></td>
                                    <td className="bg-gradient-to-r from-[#6C00FF]  to-[#9e58ff] text-white rounded-b-(--radius) border-none px-4"></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 
            </section>
        </>
    )
}