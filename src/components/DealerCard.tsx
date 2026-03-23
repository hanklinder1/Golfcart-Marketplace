import Link from "next/link";
import { Dealer } from "@/lib/types";
import { Star, MapPin, Phone } from "lucide-react";

interface DealerCardProps {
  dealer: Dealer;
}

export default function DealerCard({ dealer }: DealerCardProps) {
  return (
    <div className="bg-white rounded-xl border border-sage-100 overflow-hidden hover:shadow-lg hover:border-sage-200 transition-all duration-200">
      <div className="aspect-[16/9] bg-sage-100 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
          <span className="text-sage-400 text-sm">Dealer Photo</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-sage-800 font-semibold text-lg mb-1">{dealer.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-sand-500 fill-sand-500" />
            <span className="text-sage-700 text-sm font-medium">{dealer.rating}</span>
          </div>
          <span className="text-sage-400 text-xs">({dealer.reviewCount} reviews)</span>
        </div>
        <p className="text-sage-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {dealer.description}
        </p>
        <div className="flex items-center gap-1 text-sage-400 text-xs mb-2">
          <MapPin size={12} />
          {dealer.city}, {dealer.state}
        </div>
        <div className="flex items-center gap-1 text-sage-400 text-xs mb-4">
          <Phone size={12} />
          {dealer.phone}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {dealer.brands.map((brand) => (
            <span
              key={brand}
              className="text-xs bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full"
            >
              {brand}
            </span>
          ))}
        </div>
        <a
          href={`mailto:${dealer.email}`}
          className="block text-center bg-sage-700 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-sage-800 transition-colors"
        >
          Contact Dealer
        </a>
      </div>
    </div>
  );
}
