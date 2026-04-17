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
    address: "Kacza 2, 07-300 Ostrów Mazowiecka",
    // Default embed uses a public query URL (no API key required).
    query: "Diamond+Touch+Studio+Ostrów+Mazowiecka",
  },
  contact: {
    email: "kontakt@diamondtouch.pl",
    phone: "+48 797 785 685",
    hours: "Pon–Pt 09:00–19:00 · Sob zamknięte",
  },
  nav: [
    { href: "/", label: "Start" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/kontakt", label: "Kontakt" },
  ] as const,
};
