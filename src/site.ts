/** Everything that changes with a release or a new address lives here. */
export const site = {
  name: 'LanDeck',
  tagline: 'Know every device on your network.',
  description:
    'LanDeck is a Mac app that finds every device on your network in seconds, tells you what each one is, and warns you when something new or risky turns up. Everything stays on your Mac.',
  /** The Mac App Store listing, the only place LanDeck is sold. Null until the app is live: the page says "coming soon". */
  appStoreUrl: null as string | null,
  /** Pro's prices as the App Store shows them, such as "$2.99 a month or $24.99 a year". Null until they're set. */
  proPrice: null as string | null,
  /** Where people report problems and ask questions. */
  supportUrl: 'https://github.com/bilal-othi/landeck-website/issues',
  requirements: 'macOS 14 Sonoma or later',
  copyright: '© 2026 Bilal Hassan',
};

/** A link inside the site, including the base path GitHub Pages serves it under. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
