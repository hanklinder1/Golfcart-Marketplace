"use client";

import { useEffect, useState } from "react";
import DealerCard from "@/components/DealerCard";
import { Dealer } from "@/lib/types";
import Link from "next/link";

export default function DealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dealers")
      .then((r) => r.json())
      .then((d) => setDealers(d.dealers ?? []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dealers</h1>
        <p className="text-gray-400 text-sm">
          {loading ? "Loading..." : `${dealers.length} authorized dealer${dealers.length !== 1 ? "s" : ""} in Florida`}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl aspect-[4/3] animate-pulse" />
          ))}
        </div>
      ) : dealers.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 font-medium mb-2">No dealers listed yet</p>
          <p className="text-gray-400 text-sm mb-6">
            Check out the demo to see what the dealers page looks like with listings.
          </p>
          <Link
            href="/demo/dealers"
            className="border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-xl hover:border-teal-200 transition-colors"
          >
            View Demo Dealers
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map((dealer) => (
            <DealerCard key={dealer.id} dealer={dealer} />
          ))}
        </div>
      )}
    </div>
  );
}
