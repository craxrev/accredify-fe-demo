import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * ClassName utility
 *
 * @param {string[]} inputs - The class names to merge
 * @returns {string} The merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
