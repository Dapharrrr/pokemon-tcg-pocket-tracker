"use client";

import Image from "next/image";
import { useState } from "react";
import { getCardImageUrl, getExpansionLogoUrl } from "@/lib/card-images";

type CardImageProps = {
  setCode: string;
  cardNumber: number;
  cardName: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function CardImage({
  setCode,
  cardNumber,
  cardName,
  className = "",
  size = "md",
}: CardImageProps) {
  const [error, setError] = useState(false);

  const dimensions = {
    sm: { width: 184, height: 256 },
    md: { width: 367, height: 512 },
    lg: { width: 734, height: 1024 },
  };

  const { width, height } = dimensions[size];

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-lg ${className}`}
        style={{ aspectRatio: "367/512" }}
      >
        <span className="text-4xl">🃏</span>
      </div>
    );
  }

  return (
    <Image
      src={getCardImageUrl(setCode, cardNumber)}
      alt={cardName}
      width={width}
      height={height}
      className={`rounded-lg ${className}`}
      onError={() => setError(true)}
      unoptimized
    />
  );
}

type ExpansionLogoProps = {
  setCode: string;
  name: string;
  size?: number;
  className?: string;
};

export function ExpansionLogo({
  setCode,
  name,
  size = 40,
  className = "",
}: ExpansionLogoProps) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <Image
      src={getExpansionLogoUrl(setCode)}
      alt={`${name} logo`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      onError={() => setError(true)}
      unoptimized
    />
  );
}
