import Link from "next/link";
import { Search, Shield, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-4 tracking-tight">
          Buy & Sell Golf Carts
          <br />
          <span className="text-sky-600">The Easy Way</span>
        </h1>
        <p className="text-sage-500 text-lg max-w-2xl mx-auto mb-8">
          Whether you&apos;re looking for your first cart or upgrading to something
          custom, CartMarket connects buyers and sellers in one simple marketplace.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/marketplace"
            className="bg-sage-700 text-white font-medium px-8 py-3 rounded-lg hover:bg-sage-800 transition-colors"
          >
            Browse Carts
          </Link>
          <Link
            href="/sell"
            className="bg-white text-sage-700 font-medium px-8 py-3 rounded-lg border border-sage-200 hover:border-sage-300 hover:bg-sage-50 transition-colors"
          >
            Sell Your Cart
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/demo"
            className="text-sky-600 hover:text-sky-700 text-sm font-medium underline underline-offset-4"
          >
            See a demo with sample listings
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-y border-sage-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-sage-800 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="text-sky-600" size={24} />
              </div>
              <h3 className="text-sage-700 font-semibold mb-2">Browse Listings</h3>
              <p className="text-sage-400 text-sm">
                Search through carts from private sellers and authorized dealers.
                Filter by price, make, condition, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-sage-600" size={24} />
              </div>
              <h3 className="text-sage-700 font-semibold mb-2">Verified Sellers</h3>
              <p className="text-sage-400 text-sm">
                Every dealer is verified and reviewed. Private sellers create
                profiles so you know who you&apos;re buying from.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-sand-600" size={24} />
              </div>
              <h3 className="text-sage-700 font-semibold mb-2">Close the Deal</h3>
              <p className="text-sage-400 text-sm">
                Message sellers directly, schedule test drives, and finalize
                your purchase — all through CartMarket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          Ready to list your cart?
        </h2>
        <p className="text-sage-400 text-sm mb-6 max-w-lg mx-auto">
          Create a free account and post your listing in minutes. Reach thousands
          of potential buyers in your area.
        </p>
        <Link
          href="/sell"
          className="inline-block bg-sage-700 text-white font-medium px-8 py-3 rounded-lg hover:bg-sage-800 transition-colors"
        >
          Start Selling
        </Link>
      </section>
    </div>
  );
}
