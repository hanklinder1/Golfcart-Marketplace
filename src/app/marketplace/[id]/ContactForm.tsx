"use client";

import { useState } from "react";

interface ContactFormProps {
  listingId: string;
  sellerName: string;
}

export default function ContactForm({ listingId, sellerName }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listingId,
        buyerName: form.name,
        buyerEmail: form.email,
        buyerPhone: form.phone,
        message: form.message,
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
        <p className="text-gray-800 font-medium text-sm">Message sent!</p>
        <p className="text-gray-500 text-xs mt-1">
          {sellerName} will be in touch via email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          required
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
      </div>
      <input
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <textarea
        placeholder={`Hi ${sellerName}, I'm interested in this cart...`}
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        required
        rows={3}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
      />
      {status === "error" && (
        <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-teal-700 text-white font-medium py-2.5 rounded-xl hover:bg-teal-800 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Contact Seller"}
      </button>
    </form>
  );
}
