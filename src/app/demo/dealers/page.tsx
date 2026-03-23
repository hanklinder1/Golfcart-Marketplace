import Link from "next/link";
import { demoDealers } from "@/data/demo-dealers";
import DealerCard from "@/components/DealerCard";

export default function DemoDealersPage() {
  return (
    <div>
      <div className="bg-sky-50 border-b border-sky-100 py-2 text-center">
        <p className="text-sky-700 text-xs font-medium">
          You&apos;re viewing the demo — these are sample dealers.{" "}
          <Link href="/dealers" className="underline">
            Exit demo
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-sage-800 mb-1">Dealers</h1>
          <p className="text-sage-400 text-sm">
            {demoDealers.length} authorized dealers in your area
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoDealers.map((dealer) => (
            <DealerCard key={dealer.id} dealer={dealer} />
          ))}
        </div>
      </div>
    </div>
  );
}
