export const expressiveQueries = {
  compact: 'screen and (max-width: 599px)',
  medium: 'screen and (min-width: 600px) and (max-width: 839px)',
  expanded: 'screen and (min-width: 840px) and (max-width: 1199px)',
  large: 'screen and (min-width: 1200px) and (max-width: 1599px)',
  extraLarge: 'screen and (min-width: 1600px)',
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  phone: 'screen and (max-width: 599px)',
  tablet: 'screen and (min-width: 600px) and (max-width: 1199px)',
  desktop: 'screen and (min-width: 1200px)',
  prefersDark: '(prefers-color-scheme: dark)',
  prefersReduceMotion: '(prefers-reduced-motion: reduce)',
} as const;
