import Link from "next/link";

export default function DemoSellPage() {
  return (
    <div>
      <div className="bg-teal-50 border-b border-teal-100 py-2 text-center">
        <p className="text-teal-700 text-xs font-medium">
          You&apos;re viewing the demo.{" "}
          <Link href="/sell" className="underline">
            Exit demo
          </Link>
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-teal-800 mb-3">Sell Your Cart</h1>
        <p className="text-teal-400 text-sm mb-6 max-w-md mx-auto">
          In the full version, this is where you&apos;d create a listing with photos,
          specs, and pricing. Check out the real sell page to see the form.
        </p>
        <Link
          href="/sell"
          className="inline-block bg-teal-700 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
        >
          Go to Sell Page
        </Link>
      </div>
    </div>
  );
}
