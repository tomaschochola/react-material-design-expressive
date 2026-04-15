/**
 * @file
 * @author Tomáš Chochola <tomaschochola@tomaschochola.cz>
 * @copyright © 2026 Tomáš Chochola <tomaschochola@tomaschochola.cz>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomaschochola} GitHub Profile
 * @see {@link https://github.com/sponsors/tomaschochola} GitHub Sponsors
 */

import { useMemo, useSyncExternalStore } from 'react';
import { expressiveQueries } from '../css/tokens';

export const expressiveCompactMedia: MediaQueryList = window.matchMedia(expressiveQueries.compact);
export const expressiveMediumMedia: MediaQueryList = window.matchMedia(expressiveQueries.medium);
export const expressiveExpandedMedia: MediaQueryList = window.matchMedia(expressiveQueries.expanded);
export const expressiveLargeMedia: MediaQueryList = window.matchMedia(expressiveQueries.large);
export const expressiveExtraLargeMedia: MediaQueryList = window.matchMedia(expressiveQueries.extraLarge);
export const expressivePortraitMedia: MediaQueryList = window.matchMedia(expressiveQueries.portrait);
export const expressiveLandscapeMedia: MediaQueryList = window.matchMedia(expressiveQueries.landscape);
export const expressivePhoneMedia: MediaQueryList = window.matchMedia(expressiveQueries.phone);
export const expressiveTabletMedia: MediaQueryList = window.matchMedia(expressiveQueries.tablet);
export const expressiveDesktopMedia: MediaQueryList = window.matchMedia(expressiveQueries.desktop);
export const expressivePrefersDarkMedia: MediaQueryList = window.matchMedia(expressiveQueries.prefersDark);
export const expressivePrefersReduceMotionMedia: MediaQueryList = window.matchMedia(expressiveQueries.prefersReduceMotion);

export function useExpressiveMedia(media: MediaQueryList): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const handleChange = (): void => {
        onStoreChange();
      };

      media.addEventListener('change', handleChange);

      return (): void => {
        media.removeEventListener('change', handleChange);
      };
    },
    () => media.matches,
    () => false,
  );
}

export function useExpressiveCompactMedia(): boolean {
  return useExpressiveMedia(expressiveCompactMedia);
}

export function useExpressiveMediumMedia(): boolean {
  return useExpressiveMedia(expressiveMediumMedia);
}

export function useExpressiveExpandedMedia(): boolean {
  return useExpressiveMedia(expressiveExpandedMedia);
}

export function useExpressiveLargeMedia(): boolean {
  return useExpressiveMedia(expressiveLargeMedia);
}

export function useExpressiveExtraLargeMedia(): boolean {
  return useExpressiveMedia(expressiveExtraLargeMedia);
}

export function useExpressivePortraitMedia(): boolean {
  return useExpressiveMedia(expressivePortraitMedia);
}

export function useExpressiveLandscapeMedia(): boolean {
  return useExpressiveMedia(expressiveLandscapeMedia);
}

export function useExpressivePhoneMedia(): boolean {
  return useExpressiveMedia(expressivePhoneMedia);
}

export function useExpressiveTabletMedia(): boolean {
  return useExpressiveMedia(expressiveTabletMedia);
}

export function useExpressiveDesktopMedia(): boolean {
  return useExpressiveMedia(expressiveDesktopMedia);
}

export function useExpressiveDarkDarkMedia(): boolean {
  return useExpressiveMedia(expressivePrefersDarkMedia);
}

export function useExpressivePrefersReduceMotionMedia(): boolean {
  return useExpressiveMedia(expressivePrefersReduceMotionMedia);
}

export function useExpressiveMediaQuery(query: string): boolean {
  const media = useMemo(() => window.matchMedia(query), [query]);

  return useExpressiveMedia(media);
}

export interface ExpressiveDevices {
  phone: boolean;
  tablet: boolean;
  desktop: boolean;
}

export function useExpressiveDevices(): ExpressiveDevices {
  return {
    phone: useExpressivePhoneMedia(),
    tablet: useExpressiveTabletMedia(),
    desktop: useExpressiveDesktopMedia(),
  };
}

export interface ExpressiveScreens {
  compact: boolean;
  medium: boolean;
  expanded: boolean;
  large: boolean;
  extraLarge: boolean;
}

export function useExpressiveScreens(): ExpressiveScreens {
  return {
    compact: useExpressiveCompactMedia(),
    medium: useExpressiveMediumMedia(),
    expanded: useExpressiveExpandedMedia(),
    large: useExpressiveLargeMedia(),
    extraLarge: useExpressiveExtraLargeMedia(),
  };
}
