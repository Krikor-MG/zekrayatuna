export const runtime = "edge"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { IoLogoWhatsapp } from "react-icons/io5"


interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  const isSquare = slug === "product-1"
  const isCircle = slug === "product-2"

  return (
    <main className="min-h-screen bg-background">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="
              flex items-center gap-3
              text-lg md:text-xl
              font-semibold
              px-6 py-3
            "
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* IMAGE + MESSAGE */}
          <div className="space-y-4">

            <div
              className={`aspect-square bg-muted overflow-hidden ${
                isCircle ? "rounded-full" : "rounded-xl"
              }`}
            >
              {isSquare && (
                <Image
                  src="/square2.jpg"
                  alt="Custom Square Magnet"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              )}

              {isCircle && (
                <Image
                  src="/circle.jpeg"
                  alt="Custom Circle Magnet"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              )}
            </div>

            {/* EXACT MESSAGE */}
            <p className="text-center text-lg md:text-xl font-bold text-foreground">
              Prices listed below!
            </p>

          </div>

          {/* TEXT */}
          <div className="space-y-10">

            {/* PRODUCT NAME */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              {isSquare ? "Custom Square Magnet" : "Custom Circle Magnet"}
            </h1>

            {/* DESCRIPTION */}
            {isSquare && (
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-xl md:text-2xl font-medium">
                  Designed with clean lines and balanced proportions, the Custom Square Magnet offers a structured and timeless look.
                  Its form feels intentional and steady, making it ideal for showcasing meaningful moments.
                </p>

                <p className="text-xl md:text-2xl font-medium">
                  The square shape brings a sense of order and clarity, allowing your memory to stand clearly on its own.
                  Simple, refined, and quietly confident.
                </p>

                <p className="text-xl md:text-2xl font-semibold">
                  A piece made to preserve memories with strength and presence.
                </p>
              </div>
            )}

            {isCircle && (
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-xl md:text-2xl font-medium">
                  Soft in shape and gentle in expression, the Custom Circle Magnet is inspired by connection and continuity.
                  Its rounded form creates a natural flow that feels warm and inviting.
                </p>

                <p className="text-xl md:text-2xl font-medium">
                  The circular design highlights moments in a more intimate way, drawing the eye inward and keeping what matters close.
                  Calm, balanced, and effortlessly personal.
                </p>

                <p className="text-xl md:text-2xl font-semibold">
                  A subtle reminder that memories move with us, always.
                </p>
              </div>
            )}

            {/* PRICES (REPLACED DIMENSIONS SECTION) */}
            <div className="pt-8 border-t border-border space-y-4">

              <p className="text-muted-foreground font-medium uppercase tracking-wide">
                Prices
              </p>

              <p className="text-lg md:text-xl font-bold text-foreground">
                1 magnet — $3
              </p>
              <p className="text-lg md:text-xl font-bold text-foreground">
                2 magnets — $5
              </p>
              <p className="text-lg md:text-xl font-bold text-foreground">
                4 magnets — $10
              </p>

            </div>

            {/* ORDER VIA WHATSAPP */}
            <div className="pt-2">
              <a
                href="https://wa.me/96178793740"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  text-xl font-bold
                  border-2 border-black
                  px-6 py-3
                  transition-all duration-150
                  hover:bg-black hover:text-white
                  active:bg-black active:text-white active:scale-[0.98]
                "
              >
                <IoLogoWhatsapp size={24} className="text-green-500" />
                Order via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Zekrayatuna. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
