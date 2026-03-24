"use client";

import Link from "next/link";
import Image from "next/image";
import { demoCarts } from "@/data/demo-carts";
import CartCard from "@/components/CartCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Search, ChevronLeft, ChevronRight, TrendingUp, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoHome() {
  const featured = demoCarts.slice(0, 4);
  const trending = demoCarts.slice(0, 8);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/demo/marketplace");
  };

  return (
    <div>
      {/* Demo banner */}
      <div className="bg-teal-50 border-b border-teal-100 py-2 text-center">
        <p className="text-teal-700 text-xs font-medium">
          You&apos;re viewing the demo — these are sample listings.{" "}
          <Link href="/" className="underline font-bold">
            Exit demo
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section className="relative h-[480px] sm:h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/carts/golfcart-white-luxury.jpg"
          alt="Luxury golf cart"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight leading-tight">
            Find Your Perfect
            <br />
            <span className="text-teal-400">Golf Cart</span>
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Florida&apos;s #1 golf cart marketplace
          </p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20">
              <div className="pl-5">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search by make, model, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 text-gray-700 text-base placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-teal-600 hover:bg-teal-700 transition-colors m-1.5 rounded-xl"
              >
                <Search className="text-white" size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Trending Carts */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ScrollReveal>
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} className="text-teal-600" />
                <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Trending</span>
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Trending Carts in Florida
              </h2>
              <p className="text-gray-500 text-sm">
                Most viewed listings over the past 24 hours
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-all"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-all"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </ScrollReveal>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x"
        >
          {trending.map((cart) => (
            <div key={cart.id} className="min-w-[280px] max-w-[300px] snap-start flex-shrink-0">
              <CartCard cart={cart} linkPrefix="/demo" />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={16} className="text-teal-600" />
                  <span className="text-teal-600 text-xs font-bold uppercase tracking-wider">Featured</span>
                </div>
                <h2 className="text-xl font-extrabold text-gray-900">Featured Listings</h2>
              </div>
              <Link
                href="/demo/marketplace"
                className="text-teal-600 hover:text-teal-700 text-sm font-bold"
              >
                View all &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((cart) => (
                <CartCard key={cart.id} cart={cart} linkPrefix="/demo" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
