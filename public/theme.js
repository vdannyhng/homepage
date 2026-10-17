// Apply the saved theme before first paint to avoid a dark/light flash.
// Kept as a separate file so the Content-Security-Policy can stay at script-src 'self'.
try {
  const theme = localStorage.getItem('theme');
  if (theme) document.documentElement.dataset.theme = theme;
} catch {
  // storage blocked – fall back to the system setting
}
