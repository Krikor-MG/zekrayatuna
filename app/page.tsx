import { ProductCard } from "@/components/product-card"

export default function Home() {
  const products = [
    {
      id: "product-1",
      name: "Product Name One",
      slug: "product-1",
    },
    {
      id: "product-2",
      name: "Product Name Two",
      slug: "product-2",
    },
    {
      id: "product-3",
      name: "Product Name Three",
      slug: "product-3",
    },
    {
      id: "product-4",
      name: "Product Name Four",
      slug: "product-4",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
          {/* Logo Placeholder */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full" />
            <div className="absolute inset-4 bg-secondary/30 rounded-lg rotate-12" />
            <div className="absolute inset-8 border-4 border-accent rounded-full" />
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl md:text-6xl font-light text-foreground text-center tracking-wide">Zekrayatuna</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">© 2026 Zekrayatuna. All rights reserved.</p>
      </footer>
    </main>
  )
}
