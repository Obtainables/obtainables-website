import Image from 'next/image'
import { Inter, Tektur } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const tektur = Tektur({ weight: "500", subsets: ['latin'] });

export default function Home() {
  return (
    // Create a coming soon screen with an SVG logo in the middle centered on the screen and #E2FF8A as the background color.
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#E2FF8A]">
      <Image
        src="/logo.svg"
        alt="Obtainables"
        width={800}
        height={200}
      />
      <h1 className={`mt-8 text-4xl text-center text-gray-900 ${tektur.className}`}>
        Coming Soon.
      </h1>
    </div>
  )
}
