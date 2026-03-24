"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-teal-800 mb-1 text-center">
        Welcome Back
      </h1>
      <p className="text-teal-400 text-sm text-center mb-8">
        Sign in to your CartMarket account
      </p>
      <div className="bg-white rounded-xl border border-teal-100 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-teal-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-teal-200 rounded-lg px-3 py-2.5 text-sm text-teal-800 placeholder:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-300"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-teal-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-teal-200 rounded-lg px-3 py-2.5 text-sm text-teal-800 placeholder:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-300"
            placeholder="Your password"
          />
        </div>
        <button
          disabled
          className="w-full bg-teal-700 text-white font-medium py-2.5 rounded-xl hover:bg-teal-800 transition-colors disabled:opacity-50"
        >
          Sign In (Backend Required)
        </button>
        <p className="text-center text-teal-400 text-xs">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-teal-600 hover:text-teal-700">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
