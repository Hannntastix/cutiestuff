import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: 'IDR',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = "CutieStuff",
  description = "Create custom high-quality phone cases in seconds",
  image = "/logo cutiestuff.png",
  icons = "/favicon.ico"
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}) : Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: ""
    },
    icons,
    metadataBase: new URL("https://cutiestuff.vercel.app/")
  }
}