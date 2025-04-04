"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    title: "OROX Sydney CBD office - Barangaroo",
    address: "201 Kent St, Sydney NSW 2000",
    coordinates: { lat: -33.8651, lng: 151.2099 },
    mapsUrl: "https://goo.gl/maps/your-sydney-office-link",
  },
  {
    title: "OROX head office - Locomotive Workshops",
    address: "2 Locomotive St, Eveleigh, NSW 2015",
    coordinates: { lat: -33.8937, lng: 151.1937 },
    mapsUrl: "https://goo.gl/maps/your-eveleigh-office-link",
  },
];

export default function ContactLocations() {
  return (
    <section className="w-full bg-[#F1F2F8] px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col gap-[32px]">
              {/* Map Container */}
              <div className="relative w-full aspect-[16/9] rounded-[32px] border border-[#E5E5E5] overflow-hidden">
                <LoadScript
                  googleMapsApiKey={
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
                  }
                >
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={location.coordinates}
                    zoom={15}
                  >
                    <Marker position={location.coordinates} />
                  </GoogleMap>
                </LoadScript>
              </div>

              {/* Location Details */}
              <div className="space-y-[24px]">
                <div className="space-y-[8px]">
                  <h2 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                    {location.title}
                  </h2>
                  <p className="text-[20px] text-[#19191B] leading-[32px]">
                    {location.address}
                  </p>
                </div>
                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] text-[#2F5DFD] font-bold text-[14px] leading-[20px]"
                >
                  Get directions
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
