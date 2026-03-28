import { NextResponse } from "next/server";
import { getAdmin } from "@/lib/supabase/admin";

export async function GET() {
  const db = getAdmin();

  const [listingsRes, dealersRes, citiesRes] = await Promise.all([
    db.from("listings").select("id", { count: "exact", head: true }).eq("status", "active"),
    db.from("dealers").select("id", { count: "exact", head: true }),
    db.from("listings").select("location").eq("status", "active"),
  ]);

  const listingCount = listingsRes.count ?? 0;
  const dealerCount = dealersRes.count ?? 0;

  const cities = new Set(
    (citiesRes.data ?? [])
      .map((r) => r.location?.split(",")[0]?.trim())
      .filter(Boolean)
  );

  return NextResponse.json({
    listings: listingCount,
    dealers: dealerCount,
    cities: cities.size,
  });
}
