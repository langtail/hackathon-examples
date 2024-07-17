import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Langtail } from "langtail";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const lt = new Langtail({
  apiKey: process.env.LANGTAIL_API_KEY ?? "",
});
