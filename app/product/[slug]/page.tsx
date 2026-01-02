import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Product Image */}
          <div className="relative aspect-square lg:aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground/30 text-lg font-light">Large Image Placeholder</p>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
                Product Title Placeholder
              </h1>

              <div className="h-px bg-border my-6 animate-in fade-in duration-700 delay-200" />

              <div className="space-y-4 text-foreground/80 leading-relaxed animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                <p className="text-lg md:text-xl font-light">
                  This is a placeholder for the product description. You can edit this text directly in the code to add
                  your own product details.
                </p>
                <p className="text-base md:text-lg font-light">
                  Add more descriptive text here about the product features, materials, dimensions, or any other
                  relevant information you want to share.
                </p>
                <p className="text-base md:text-lg font-light">
                  This section is fully editable and can be customized to match your product's unique characteristics
                  and story.
                </p>
              </div>
            </div>

            {/* Additional Info Placeholder */}
            <div className="space-y-4 pt-6 border-t border-border animate-in fade-in duration-700 delay-500">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-light">Material</p>
                  <p className="text-foreground">Placeholder Text</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-light">Dimensions</p>
                  <p className="text-foreground">Placeholder Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-sm text-muted-foreground">© 2026 Zekrayatuna. All rights reserved.</p>
      </footer>
    </main>
  )
}
