"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
  }
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        className="group relative overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Product Image Placeholder */}
        <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 text-muted-foreground/30 text-sm font-light">Image Placeholder</div>
        </div>
  
        {/* Product Info */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-light text-card-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </div>
      </Card>
    </Link>
  )
}
