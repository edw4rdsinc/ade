"use client";

import { useState } from "react";

export function SpeakingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      eventType: formData.get("eventType") as string,
      date: formData.get("date") as string,
      topic: formData.get("topic") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">
          Your inquiry has been sent. Dr. Edwards will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors bg-white"
          >
            <option value="">Select type...</option>
            <option value="academic">Academic Conference</option>
            <option value="public">Public Lecture</option>
            <option value="book">Book Talk</option>
            <option value="media">Media/Interview</option>
            <option value="podcast">Podcast</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
            Proposed Date/Timeframe
          </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="e.g., March 2026 or flexible"
            className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
          Topic of Interest
        </label>
        <select
          id="topic"
          name="topic"
          className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors bg-white"
        >
          <option value="">Select topic...</option>
          <option value="money-crypto">Who Gets to Make Money? (Cryptocurrency & History)</option>
          <option value="history-matters">Why History Matters Now</option>
          <option value="book">Money and the Making of the American Revolution</option>
          <option value="global-capitalism">The Global History of Capitalism</option>
          <option value="other">Other / General</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Please tell us about your event, audience, and any specific topics you'd like Dr. Edwards to address."
          className="w-full px-4 py-3 border border-[var(--color-border)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-sm text-[var(--color-text-muted)] text-center">
        Or email directly:{" "}
        <a href="mailto:ade3@st-andrews.ac.uk" className="text-[var(--color-navy)]">
          ade3@st-andrews.ac.uk
        </a>
      </p>
    </form>
  );
}
