export function truncateText(text: string, maxLength: number): { truncated: string, remaining: string | null } {
  if (text.length <= maxLength) {
    return { truncated: text, remaining: null };
  } else {
    const truncatedText = text.slice(0, maxLength);
    const remainingText = text.slice(maxLength);
    return { truncated: truncatedText, remaining: remainingText };
  }
}
