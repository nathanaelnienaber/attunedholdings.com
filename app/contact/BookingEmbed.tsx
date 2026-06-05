"use client";

import Cal from "@calcom/embed-react";
import { MapPin, Phone, Video } from "lucide-react";
import { useState } from "react";
import { booking } from "@/lib/site";

const eventIcons = {
  "video-call": Video,
  "phone-call": Phone,
  "in-person": MapPin,
} as const;

type BookingEventId = (typeof booking.eventTypes)[number]["id"];

export function BookingEmbed() {
  const [selectedId, setSelectedId] = useState<BookingEventId>(booking.eventTypes[0].id);
  const selectedEvent =
    booking.eventTypes.find((event) => event.id === selectedId) ??
    booking.eventTypes[0];
  const bookingUrl = `https://cal.com/${selectedEvent.calLink}`;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {booking.eventTypes.map((event) => {
          const Icon = eventIcons[event.id];
          const isSelected = event.id === selectedId;

          return (
            <button
              key={event.id}
              type="button"
              onClick={() => setSelectedId(event.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? "border-sky-600 bg-sky-50 shadow-sm"
                  : "border-slate-200 bg-slate-50 hover:border-sky-300 hover:shadow-sm"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${isSelected ? "text-sky-600" : "text-slate-500"}`}
                aria-hidden="true"
              />
              <p className="mt-4 text-lg font-bold text-slate-950">{event.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 overflow-auto rounded-3xl border border-slate-200 bg-white">
        <Cal
          key={selectedEvent.id}
          calLink={selectedEvent.calLink}
          config={{ layout: "month_view", theme: "light" }}
          style={{ width: "100%", height: "650px", overflow: "auto" }}
        />
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        Calendar not loading?{" "}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sky-600 hover:underline"
        >
          Book on Cal.com
        </a>
      </p>
    </div>
  );
}
