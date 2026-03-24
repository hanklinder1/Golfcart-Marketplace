import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-1.5 text-teal-500 hover:text-teal-700 text-sm mb-6"
      >
        <ArrowLeft size={16} />
        Back to Marketplace
      </Link>
      <div className="text-center py-20">
        <h2 className="text-teal-700 font-semibold text-lg mb-2">
          Listing not found
        </h2>
        <p className="text-teal-400 text-sm">
          This listing doesn&apos;t exist or has been removed.
        </p>
      </div>
    </div>
  );
}
