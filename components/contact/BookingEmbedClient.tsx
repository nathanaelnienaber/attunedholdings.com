"use client";

import dynamic from "next/dynamic";

export const BookingEmbed = dynamic(
  () => import("@/components/contact/BookingEmbed").then((module) => module.BookingEmbed),
  {
    ssr: false,
    loading: () => <p className="text-slate-500">Loading calendar...</p>,
  },
);
