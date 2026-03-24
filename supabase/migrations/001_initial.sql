-- CartMarket initial schema
-- Drop existing tables/policies if they exist (safe to re-run)

DROP TABLE IF EXISTS inquiries CASCADE;
DROP TABLE IF EXISTS listings  CASCADE;

DROP POLICY IF EXISTS "Public read active listings"     ON listings;
DROP POLICY IF EXISTS "Anyone can create listing"       ON listings;
DROP POLICY IF EXISTS "Anyone can create inquiry"       ON inquiries;
DROP POLICY IF EXISTS "Public read listing images"      ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload listing images" ON storage.objects;

-- Listings table
CREATE TABLE listings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  description   TEXT,
  price         NUMERIC NOT NULL,
  year          INTEGER NOT NULL,
  make          TEXT NOT NULL,
  model         TEXT NOT NULL,
  condition     TEXT NOT NULL CHECK (condition IN ('new', 'like-new', 'good', 'fair')),
  seats         INTEGER,
  top_speed     INTEGER,
  range         TEXT,
  power_type    TEXT NOT NULL CHECK (power_type IN ('electric', 'gas')),
  images        TEXT[]  DEFAULT '{}',
  features      TEXT[]  DEFAULT '{}',
  location      TEXT,
  seller_id     UUID,
  seller_name   TEXT NOT NULL,
  seller_email  TEXT NOT NULL,
  seller_phone  TEXT,
  status        TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'pending')),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE inquiries (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id    UUID REFERENCES listings(id) ON DELETE CASCADE,
  buyer_name    TEXT NOT NULL,
  buyer_email   TEXT NOT NULL,
  buyer_phone   TEXT,
  message       TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE listings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can read active listings
CREATE POLICY "Public read active listings" ON listings
  FOR SELECT USING (status = 'active');

-- Anyone can create a listing (auth can be added later)
CREATE POLICY "Anyone can create listing" ON listings
  FOR INSERT WITH CHECK (true);

-- Anyone can send an inquiry
CREATE POLICY "Anyone can create inquiry" ON inquiries
  FOR INSERT WITH CHECK (true);

-- Storage bucket for listing images
INSERT INTO storage.buckets (id, name, public)
  VALUES ('listings', 'listings', true)
  ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read listing images" ON storage.objects
  FOR SELECT USING (bucket_id = 'listings');

CREATE POLICY "Anyone can upload listing images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'listings');
