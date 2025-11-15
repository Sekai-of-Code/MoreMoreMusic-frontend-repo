import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class value inputs into a single string and merges Tailwind CSS utility classes.
 *
 * @param inputs - ClassValue inputs (strings, arrays, objects, etc.) to combine
 * @returns The resolved class string with Tailwind utility classes merged
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}