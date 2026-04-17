export const site = {
  name: 'Diamond Touch Studio',
  shortName: 'Diamond Touch',
  domain: 'diamondtouch.pl',
  url: 'https://diamondtouch.pl',
  description:
    'Diamond Touch Studio — profesjonalne studio oferujące usługi najwyższej jakości. Zobacz nasze realizacje i skontaktuj się z nami.',
  locale: 'pl-PL',
  // Google Tag Manager container id — set via PUBLIC_GTM_ID env var for production.
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  // Google Maps – latitude/longitude of the salon. Update these for the real location.
  map: {
    label: 'Diamond Touch Studio',
    address: 'ul. Przykładowa 1, 00-000 Warszawa',
    // Default embed uses a public query URL (no API key required).
    query: 'Diamond+Touch+Studio+Warszawa',
  },
  contact: {
    email: 'kontakt@diamondtouch.pl',
    phone: '+48 000 000 000',
    hours: 'Pon–Pt 10:00–19:00 · Sob 10:00–15:00',
  },
  nav: [
    { href: '/', label: 'Start' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/realizacje', label: 'Realizacje' },
    { href: '/kontakt', label: 'Kontakt' },
  ] as const,
};
