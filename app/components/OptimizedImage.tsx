"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
  placeholderColor?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  sizes,
  priority = false,
  fallbackSrc,
  placeholderColor = "bg-gray-300",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div
        className={`${placeholderColor} flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-gray-600 text-sm text-center px-4">
          {alt || "Image placeholder"}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 ${placeholderColor} animate-pulse flex items-center justify-center z-10`}
        >
          <span className="text-gray-500 text-xs">Loading...</span>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
