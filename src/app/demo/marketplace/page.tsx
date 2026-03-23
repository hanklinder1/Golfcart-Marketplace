"use client";

import { useState } from "react";
import Link from "next/link";
import { demoCarts } from "@/data/demo-carts";
import CartCard from "@/components/CartCard";

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

  return (
    <div>
      {/* Demo banner */}
      <div className="bg-sky-50 border-b border-sky-100 py-2 text-center">
        <p className="text-sky-700 text-xs font-medium">
          You&apos;re viewing the demo — these are sample listings.{" "}
          <Link href="/marketplace" className="underline">
            Exit demo
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-sage-800 mb-1">Marketplace</h1>
          <p className="text-sage-400 text-sm">
            {filtered.length} cart{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200"
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
            className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200"
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
            className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            <option value="">Power Type</option>
            <option value="electric">Electric</option>
            <option value="gas">Gas</option>
          </select>
          {(make || condition || powerType) && (
            <button
              onClick={() => {
                setMake("");
                setCondition("");
                setPowerType("");
              }}
              className="text-sage-500 hover:text-sage-700 text-sm underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((cart) => (
            <CartCard key={cart.id} cart={cart} linkPrefix="/demo" />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sage-400 text-sm">No carts match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
