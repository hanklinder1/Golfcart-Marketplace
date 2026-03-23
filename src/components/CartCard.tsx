import Link from "next/link";
import { GolfCart } from "@/lib/types";
import { MapPin, Zap, Fuel, Users } from "lucide-react";

interface CartCardProps {
  cart: GolfCart;
  linkPrefix?: string;
}

export default function CartCard({ cart, linkPrefix = "/marketplace" }: CartCardProps) {
  return (
    <Link
      href={`${linkPrefix}/${cart.id}`}
      className="group bg-white rounded-xl border border-sage-100 overflow-hidden hover:shadow-lg hover:border-sage-200 transition-all duration-200"
    >
      <div className="aspect-[4/3] bg-sage-100 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
          <span className="text-sage-400 text-sm">Photo</span>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              cart.condition === "new"
                ? "bg-sky-100 text-sky-700"
                : cart.condition === "like-new"
                ? "bg-sage-100 text-sage-700"
                : cart.condition === "good"
                ? "bg-sand-100 text-sand-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {cart.condition === "like-new"
              ? "Like New"
              : cart.condition.charAt(0).toUpperCase() + cart.condition.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sage-800 font-semibold text-sm group-hover:text-sky-600 transition-colors line-clamp-1">
            {cart.title}
          </h3>
        </div>
        <p className="text-sage-800 font-bold text-lg mb-2">
          ${cart.price.toLocaleString()}
        </p>
        <div className="flex items-center gap-3 text-sage-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            {cart.powerType === "electric" ? <Zap size={12} /> : <Fuel size={12} />}
            {cart.powerType === "electric" ? "Electric" : "Gas"}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {cart.seats} seats
          </span>
          <span>{cart.year}</span>
        </div>
        <div className="flex items-center gap-1 text-sage-400 text-xs">
          <MapPin size={12} />
          {cart.location}
        </div>
      </div>
    </Link>
  );
}
