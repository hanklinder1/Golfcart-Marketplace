import EmptyState from "@/components/EmptyState";

export default function MarketplacePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-sage-800 mb-1">Marketplace</h1>
        <p className="text-sage-400 text-sm">
          Browse golf carts for sale from private sellers and dealers.
        </p>
      </div>

      {/* Filters bar — ready for backend integration */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option value="">All Makes</option>
          <option value="club-car">Club Car</option>
          <option value="ezgo">EZGO</option>
          <option value="yamaha">Yamaha</option>
          <option value="icon">Icon</option>
          <option value="evolution">Evolution</option>
          <option value="bintelli">Bintelli</option>
        </select>
        <select className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option value="">Any Condition</option>
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
        </select>
        <select className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option value="">Any Price</option>
          <option value="0-5000">Under $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-15000">$10,000 - $15,000</option>
          <option value="15000-20000">$15,000 - $20,000</option>
          <option value="20000+">$20,000+</option>
        </select>
        <select className="bg-white border border-sage-200 text-sage-600 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <option value="">Power Type</option>
          <option value="electric">Electric</option>
          <option value="gas">Gas</option>
        </select>
      </div>

      {/* Empty state — no listings yet */}
      <EmptyState
        title="No listings yet"
        description="Be the first to list a golf cart on CartMarket. Or check out the demo to see what the marketplace looks like with listings."
        actionLabel="Try Demo"
        actionHref="/demo/marketplace"
      />
    </div>
  );
}
