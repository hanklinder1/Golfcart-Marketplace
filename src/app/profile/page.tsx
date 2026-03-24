import Link from "next/link";
import { User, MapPin, Calendar, Plus } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Profile</h1>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
            <User className="text-gray-400" size={28} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Sign in to view your profile</p>
            <Link href="/login" className="text-gray-700 hover:text-gray-800 text-sm font-medium">
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={14} />
            <span>Location not set</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar size={14} />
            <span>Member since —</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Your Listings</h2>
          <Link
            href="/sell"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-800 text-sm font-medium"
          >
            <Plus size={14} />
            New Listing
          </Link>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-400 text-sm">
            Your listings will appear here once you create an account and post a cart.
          </p>
        </div>
      </div>
    </div>
  );
}
