import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// a util to merge & overwrite conflicting tailwind className
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
