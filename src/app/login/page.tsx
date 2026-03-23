"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-sage-800 mb-1 text-center">
        Welcome Back
      </h1>
      <p className="text-sage-400 text-sm text-center mb-8">
        Sign in to your CartMarket account
      </p>
      <div className="bg-white rounded-xl border border-sage-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-sage-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-sage-200 rounded-lg px-3 py-2.5 text-sm text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-sage-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-sage-200 rounded-lg px-3 py-2.5 text-sm text-sage-800 placeholder:text-sage-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300"
            placeholder="Your password"
          />
        </div>
        <button
          disabled
          className="w-full bg-sage-700 text-white font-medium py-2.5 rounded-lg hover:bg-sage-800 transition-colors disabled:opacity-50"
        >
          Sign In (Backend Required)
        </button>
        <p className="text-center text-sage-400 text-xs">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-sky-600 hover:text-sky-700">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
