// lib/gtag.js

export const GA_TRACKING_ID = "G-N3T2VJ9MZM"; // Ganti dengan ID milikmu

// Kirim event pageview setiap kali route berubah
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Kirim event custom (misalnya klik tombol)
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
