import Link from "next/link";
import { Dealer } from "@/lib/types";
import { Star, MapPin, Phone } from "lucide-react";

interface DealerCardProps {
  dealer: Dealer;
}

export default function DealerCard({ dealer }: DealerCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all duration-200">
      <div className="aspect-[16/9] bg-teal-100 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Dealer Photo</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-gray-900 font-semibold text-lg mb-1">{dealer.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-gray-500 fill-gray-500" />
            <span className="text-gray-800 text-sm font-medium">{dealer.rating}</span>
          </div>
          <span className="text-gray-400 text-xs">({dealer.reviewCount} reviews)</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {dealer.description}
        </p>
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
          <MapPin size={12} />
          {dealer.city}, {dealer.state}
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
          <Phone size={12} />
          {dealer.phone}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {dealer.brands.map((brand) => (
            <span
              key={brand}
              className="text-xs bg-teal-50 text-gray-700 px-2 py-0.5 rounded-full"
            >
              {brand}
            </span>
          ))}
        </div>
        <a
          href={`mailto:${dealer.email}`}
          className="block text-center bg-teal-700 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
        >
          Contact Dealer
        </a>
      </div>
    </div>
  );
}
