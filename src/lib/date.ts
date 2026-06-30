export function calculateYearsOfExperience(startDate: Date): number {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - startDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(diffInYears);
}
