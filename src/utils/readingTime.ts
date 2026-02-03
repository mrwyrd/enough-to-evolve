export function estimateReadingTime(text: string, wordsPerMinute = 220) {
  const words = text
    .replace(/<[^>]*>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.round(words / wordsPerMinute));

  return { words, minutes };
}
