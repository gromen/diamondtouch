export const site = {
  name: "Diamond Touch Studio",
  shortName: "Diamond Touch",
  domain: "diamondtouch.pl",
  url: "https://diamondtouch.pl",
  description:
    "Diamond Touch Studio — profesjonalne studio oferujące usługi najwyższej jakości. Zobacz nasze realizacje i skontaktuj się z nami.",
  locale: "pl-PL",
  // Google Tag Manager container id — set via PUBLIC_GTM_ID env var for production.
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? "",
  // Google Maps – latitude/longitude of the salon. Update these for the real location.
  map: {
    label: "Diamond Touch Studio",
    address: "ul. Kacza 2, 07-300 Ostrów Mazowiecka",
    // Default embed uses a public query URL (no API key required).
    query: "Diamond+Touch+Studio+Ostrów+Mazowiecka",
  },
  contact: {
    phone: "+48 797 785 685",
    hours: "Pon–Pt 09:00–19:00 · Sob zamknięte",
  },
  social: [
    {
      name: "Instagram",
      handle: "@diamond_touch_studio",
      href: "https://www.instagram.com/diamond_touch_studio/",
    },
    {
      name: "TikTok",
      handle: "@diamondtouchstudio",
      href: "https://www.tiktok.com/@diamondtouchstudio",
    },
  ] as const,
  nav: [
    { href: "/", label: "Start" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/kontakt", label: "Kontakt" },
  ] as const,
};
