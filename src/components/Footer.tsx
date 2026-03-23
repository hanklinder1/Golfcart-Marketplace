import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-50 border-t border-sage-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sage-800 font-bold text-lg mb-3">CartMarket</h3>
            <p className="text-sage-500 text-sm leading-relaxed">
              The easiest way to buy and sell golf carts. Browse listings, connect
              with dealers, and find your perfect ride.
            </p>
          </div>
          <div>
            <h4 className="text-sage-700 font-semibold text-sm mb-3">Browse</h4>
            <div className="flex flex-col gap-2">
              <Link href="/marketplace" className="text-sage-500 hover:text-sage-700 text-sm">
                Marketplace
              </Link>
              <Link href="/dealers" className="text-sage-500 hover:text-sage-700 text-sm">
                Dealers
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sage-700 font-semibold text-sm mb-3">Sell</h4>
            <div className="flex flex-col gap-2">
              <Link href="/sell" className="text-sage-500 hover:text-sage-700 text-sm">
                List Your Cart
              </Link>
              <Link href="/register" className="text-sage-500 hover:text-sage-700 text-sm">
                Create Account
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sage-700 font-semibold text-sm mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sage-500 hover:text-sage-700 text-sm">
                About
              </Link>
              <Link href="/login" className="text-sage-500 hover:text-sage-700 text-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sage-200 text-center text-sage-400 text-xs">
          &copy; {new Date().getFullYear()} CartMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
