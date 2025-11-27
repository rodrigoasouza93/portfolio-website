import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsOfExperience(startDate: Date): number {
  const now = new Date()
  const diffInMilliseconds = now.getTime() - startDate.getTime()
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffInYears)
}
