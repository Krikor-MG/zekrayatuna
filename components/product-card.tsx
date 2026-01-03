"use client"

import Link from "next/link"
import Image from "next/image"
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
    <Card
      className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* CLICKABLE IMAGE */}
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-muted relative overflow-hidden cursor-pointer">
          <Image
            src={product.slug === "product-1" ? "/square2.jpg" : "/circle.jpeg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </Link>

      {/* PRODUCT NAME */}
      <div className="px-4 py-4 text-center">
        <h3 className="text-lg md:text-xl font-bold text-black">
          {product.name}
        </h3>
      </div>
    </Card>
  )
}
