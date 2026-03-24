"use client";

import { useState } from "react";
import Link from "next/link";
import { demoCarts } from "@/data/demo-carts";
import CartCard from "@/components/CartCard";
import ScrollReveal from "@/components/ScrollReveal";
import { SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react";

export default function DemoMarketplace() {
  const [make, setMake] = useState("");
  const [condition, setCondition] = useState("");
  const [powerType, setPowerType] = useState("");

  const filtered = demoCarts.filter((cart) => {
    if (make && cart.make !== make) return false;
    if (condition && cart.condition !== condition) return false;
    if (powerType && cart.powerType !== powerType) return false;
    return true;
  });

  const selectClass =
    "bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400 appearance-none cursor-pointer hover:border-teal-300 transition-colors";

  const hasFilters = make || condition || powerType;

  return (
    <div>
      {/* Demo banner */}
      <div className="bg-teal-50 border-b border-teal-100 py-2 text-center">
        <p className="text-teal-700 text-xs font-medium">
          You&apos;re viewing the demo — these are sample listings.{" "}
          <Link href="/marketplace" className="underline font-bold">
            Exit demo
          </Link>
        </p>
      </div>

      {/* Sticky filter bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-[64px] z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gray-700 font-bold text-sm mr-2">
              <SlidersHorizontal size={16} className="text-teal-600" />
              Filters
            </div>
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className={selectClass}
            >
              <option value="">All Makes</option>
              <option value="Club Car">Club Car</option>
              <option value="EZGO">EZGO</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Icon">Icon</option>
              <option value="Evolution">Evolution</option>
              <option value="Bintelli">Bintelli</option>
            </select>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className={selectClass}
            >
              <option value="">Any Condition</option>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
            <select
              value={powerType}
              onChange={(e) => setPowerType(e.target.value)}
              className={selectClass}
            >
              <option value="">Power Type</option>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
            </select>
            {hasFilters && (
              <button
                onClick={() => {
                  setMake("");
                  setCondition("");
                  setPowerType("");
                }}
                className="flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm font-bold transition-colors"
              >
                <X size={14} />
                Clear all
              </button>
            )}
            <div className="ml-auto text-gray-500 text-sm">
              <span className="font-bold text-gray-900">{filtered.length}</span>{" "}
              result{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((cart) => (
                <CartCard key={cart.id} cart={cart} linkPrefix="/demo" />
              ))}
            </div>
          </ScrollReveal>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base mb-2">No carts match your filters.</p>
              <button
                onClick={() => {
                  setMake("");
                  setCondition("");
                  setPowerType("");
                }}
                className="text-teal-600 hover:text-teal-700 text-sm font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
