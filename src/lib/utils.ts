export function formatDate(dateStr: string) {
  let date = new Date(dateStr);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
