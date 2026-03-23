import Link from "next/link";
import { demoCarts } from "@/data/demo-carts";
import CartCard from "@/components/CartCard";

export default function DemoHome() {
  const featured = demoCarts.slice(0, 4);

  return (
    <div>
      {/* Demo banner */}
      <div className="bg-sky-50 border-b border-sky-100 py-2 text-center">
        <p className="text-sky-700 text-xs font-medium">
          You&apos;re viewing the demo — these are sample listings.{" "}
          <Link href="/" className="underline">
            Exit demo
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-4 tracking-tight">
          Buy & Sell Golf Carts
          <br />
          <span className="text-sky-600">The Easy Way</span>
        </h1>
        <p className="text-sage-500 text-lg max-w-2xl mx-auto mb-8">
          Browse hundreds of carts from trusted sellers and dealers. Find your
          perfect ride today.
        </p>
        <Link
          href="/demo/marketplace"
          className="bg-sage-700 text-white font-medium px-8 py-3 rounded-lg hover:bg-sage-800 transition-colors"
        >
          Browse All Carts
        </Link>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-sage-800">Featured Listings</h2>
          <Link
            href="/demo/marketplace"
            className="text-sky-600 hover:text-sky-700 text-sm font-medium"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((cart) => (
            <CartCard key={cart.id} cart={cart} linkPrefix="/demo" />
          ))}
        </div>
      </section>
    </div>
  );
}
