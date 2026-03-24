"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface FavoriteButtonProps {
  listingId: string;
}

export default function FavoriteButton({ listingId }: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      setLoggedIn(true);
      // Check if already favorited
      supabase
        .from("favorites")
        .select("id")
        .eq("user_id", user.id)
        .eq("listing_id", listingId)
        .maybeSingle()
        .then(({ data }) => setFavorited(!!data));
    });
  }, [listingId]);

  async function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (!loggedIn) {
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    if (favorited) {
      await fetch(`/api/favorites?listing_id=${listingId}`, { method: "DELETE" });
      setFavorited(false);
    } else {
      await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      });
      setFavorited(true);
    }
    setLoading(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      aria-label={favorited ? "Remove from saved" : "Save listing"}
      className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-md hover:scale-110 transition-transform disabled:opacity-60"
    >
      <Heart
        size={16}
        className={favorited ? "text-red-500 fill-red-500" : "text-gray-500"}
      />
    </button>
  );
}
