import Image from 'next/image'
import { Tektur } from 'next/font/google'
import Head from 'next/head';

const tektur = Tektur({ weight: "500", subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Obtainables</title>
      <meta name="description" content="Earn fitness milestones as NFTs with Obtainables. Achieve. Acquire. Admire. Coming Soon!" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Obtainables" />
      <meta property="og:description" content="Earn fitness milestones as NFTs with Obtainables. Achieve. Acquire. Admire. Coming Soon!" />
      <meta property="og:image" content="https://www.obtainables.xyz/og-image.png" />
      <meta property="og:url" content="https://obtainables.xyz" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Obtainables" />
      <meta name="twitter:description" content="Earn fitness milestones as NFTs with Obtainables. Achieve. Acquire. Admire. Coming Soon!" />
      <meta name="twitter:image" content="https://www.obtainables.xyz/og-image.png" />
    </Head>

    {/* Create a coming soon screen with an SVG logo in the middle centered on the screen and #E2FF8A as the background color. */}
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#E2FF8A]">
      <Image
        src="/logo.svg"
        alt="Obtainables"
        width={800}
        height={200}
      />
      <h1 className={`mt-8 text-2xl text-center text-gray-900 ${tektur.className}`}>
        Earn Your Fitness Milestones As NFTs. Coming Soon!
      </h1>
    </div>
    </>
  )
}
