import EmptyState from "@/components/EmptyState";

export default function DealersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-sage-800 mb-1">Dealers</h1>
        <p className="text-sage-400 text-sm">
          Find authorized golf cart dealers in your area.
        </p>
      </div>
      <EmptyState
        title="No dealers listed yet"
        description="Dealer listings are coming soon. Check out the demo to see what the dealers page looks like."
        actionLabel="View Demo Dealers"
        actionHref="/demo/dealers"
      />
    </div>
  );
}
