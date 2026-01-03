import Image from "next/image"
import { ProductCard } from "@/components/product-card"
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoTiktok,
  IoLogoFacebook,
} from "react-icons/io5"


export default function Home() {
  const products = [
    { id: "product-1", name: "Custom Square Magnet", slug: "product-1" },
    { id: "product-2", name: "Custom Circle Magnet", slug: "product-2" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-black">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center px-4 py-24">
        <div className="flex flex-col items-center gap-6">
       <img
  src="/Zekrayatuna.png"
  alt="Zekrayatuna logo"
  width={180}
  height={180}
  className="mx-auto"
/>


          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Zekrayatuna
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* ORDER SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-14">

        {/* PLACE ORDER */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Place your order
          </h2>

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

       <div className="space-y-4">
  <h3 className="text-2xl font-bold">
    Check us on
  </h3>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/zekrayatuna"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:underline"
    >
      <IoLogoInstagram
        size={24}
        className="text-pink-500 hover:text-orange-500 transition-colors"
      />
      <span className="text-xl md:text-2xl font-extrabold">
        @zekrayatuna
      </span>
    </a>

    {/* TIKTOK */}
    <a
      href="https://www.tiktok.com/@zekrayatuna"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:underline"
    >
      <IoLogoTiktok
        size={24}
        className="text-black hover:text-pink-500 transition-colors"
      />
      <span className="text-xl md:text-2xl font-extrabold">
        @zekrayatuna
      </span>
    </a>

    {/* FACEBOOK */}
    <a
      href="https://www.facebook.com/profile.php?id=61586170341401"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:underline"
    >
      <IoLogoFacebook
        size={24}
        className="text-blue-600 hover:text-blue-700 transition-colors"
      />
      <span className="text-xl md:text-2xl font-extrabold">
        Zekrayatuna
      </span>
    </a>

  </div>
</div>

      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center">
        <p className="text-sm font-bold text-black/70">
          © 2026 Zekrayatuna. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
