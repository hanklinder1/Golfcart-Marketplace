export interface GolfCart {
  id: string;
  title: string;
  description: string;
  price: number;
  year: number;
  make: string;
  model: string;
  condition: "new" | "like-new" | "good" | "fair";
  seats: number;
  topSpeed: number;
  range: string;
  powerType: "electric" | "gas";
  images: string[];
  features: string[];
  location: string;
  sellerId: string;
  sellerName: string;
  createdAt: string;
}

export interface Dealer {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  image: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  brands: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  location?: string;
  joinedAt: string;
  listings: string[];
}
