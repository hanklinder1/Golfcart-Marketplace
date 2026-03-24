import Link from "next/link";
import { ArrowLeft, MapPin, Zap, Fuel, Users, Gauge, Battery, Calendar, User } from "lucide-react";
import { demoCarts } from "@/data/demo-carts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return demoCarts.map((cart) => ({ id: cart.id }));
}

export default function DemoCartDetail({ params }: { params: { id: string } }) {
  const cart = demoCarts.find((c) => c.id === params.id);

  if (!cart) return notFound();

  return (
    <div>
      <div className="bg-teal-50 border-b border-gray-200 py-2 text-center">
        <p className="text-gray-800 text-xs font-medium">
          You&apos;re viewing the demo — this is a sample listing.{" "}
          <Link href="/marketplace" className="underline">
            Exit demo
          </Link>
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/demo/marketplace"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-teal-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-400 text-sm">Cart Photo</span>
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  cart.condition === "new"
                    ? "bg-teal-100 text-gray-800"
                    : cart.condition === "like-new"
                    ? "bg-teal-100 text-gray-800"
                    : cart.condition === "good"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {cart.condition === "like-new"
                  ? "Like New"
                  : cart.condition.charAt(0).toUpperCase() + cart.condition.slice(1)}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{cart.title}</h1>
            <p className="text-3xl font-bold text-gray-900 mb-4">
              ${cart.price.toLocaleString()}
            </p>

            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
              <MapPin size={14} />
              {cart.location}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {cart.description}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Calendar, label: "Year", value: cart.year },
                {
                  icon: cart.powerType === "electric" ? Zap : Fuel,
                  label: "Power",
                  value: cart.powerType === "electric" ? "Electric" : "Gas",
                },
                { icon: Users, label: "Seats", value: cart.seats },
                { icon: Gauge, label: "Top Speed", value: `${cart.topSpeed} mph` },
                { icon: Battery, label: "Range", value: cart.range },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-teal-50 rounded-xl p-3 flex items-center gap-3"
                >
                  <Icon size={16} className="text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-xs">{label}</p>
                    <p className="text-gray-800 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-gray-800 font-semibold text-sm mb-2">Features</h3>
              <div className="flex flex-wrap gap-2">
                {cart.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-teal-50 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Seller info */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-sm">
                    {cart.sellerName}
                  </p>
                  <p className="text-gray-400 text-xs">Listed {cart.createdAt}</p>
                </div>
              </div>
              <button
                disabled
                className="w-full bg-teal-700 text-white font-medium py-2.5 rounded-xl disabled:opacity-50"
              >
                Contact Seller (Backend Required)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
