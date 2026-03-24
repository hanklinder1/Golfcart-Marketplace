import Link from "next/link";
import Image from "next/image";
import { GolfCart } from "@/lib/types";
import { MapPin, Zap, Fuel, Users, Calendar, Gauge } from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";

interface CartCardProps {
  cart: GolfCart;
  linkPrefix?: string;
}

export default function CartCard({ cart, linkPrefix = "/marketplace" }: CartCardProps) {
  const badgeLabel =
    cart.condition === "new"
      ? "New"
      : cart.condition === "like-new"
      ? "Like New"
      : cart.condition === "good"
      ? "Good Condition"
      : "Budget Friendly";

  const badgeColor =
    cart.condition === "new"
      ? "bg-teal-600"
      : cart.condition === "like-new"
      ? "bg-teal-500"
      : cart.condition === "good"
      ? "bg-teal-700"
      : "bg-gray-700";

  return (
    <Link
      href={`${linkPrefix}/${cart.id}`}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        {cart.images[0] ? (
          <Image
            src={cart.images[0]}
            alt={cart.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Photo</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor} text-white shadow-sm`}>
            {badgeLabel}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <FavoriteButton listingId={cart.id} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-white font-bold text-xl drop-shadow-lg">
            ${cart.price.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 text-sm font-semibold group-hover:text-teal-700 transition-colors line-clamp-1 mb-2">
          {cart.title}
        </h3>
        <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            {cart.powerType === "electric" ? (
              <Zap size={13} className="text-teal-500" />
            ) : (
              <Fuel size={13} className="text-teal-500" />
            )}
            {cart.powerType === "electric" ? "Electric" : "Gas"}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} className="text-teal-500" />
            {cart.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-teal-500" />
            {cart.year}
          </span>
          {cart.range && (
            <span className="flex items-center gap-1">
              <Gauge size={13} className="text-teal-500" />
              {cart.range}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs pt-2 border-t border-gray-50">
          <MapPin size={12} className="text-teal-400" />
          {cart.location}
        </div>
      </div>
    </Link>
  );
}
