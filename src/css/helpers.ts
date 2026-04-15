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

import type { CSSProperties } from 'react';

export function mergeStyles(...properties: (CSSProperties | null | undefined | boolean)[]): CSSProperties {
  const result: CSSProperties = {};

  for (const prop of properties) {
    if (typeof prop === 'object' && prop !== null) {
      Object.assign(result, prop);
    }
  }

  return result;
}

export function toRem(size: number | string): string {
  if (typeof size === 'number') {
    return `calc(${size.toFixed()} / 16 * 1rem)`;
  }

  if (size.endsWith('px')) {
    return `calc(${size.slice(0, -2)} / 16 * 1rem)`;
  }

  if (size.startsWith('calc(') && size.endsWith(')')) {
    return size;
  }

  throw new Error(`toRem: unsupported string value [${size}]`);
}
