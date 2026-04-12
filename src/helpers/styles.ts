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

import type { StandardLonghandProperties } from 'csstype';
import type { CSSProperties } from 'react';

export function toClass(
  a: string | null | undefined,
  b: string | null | undefined,
): string {
  const classes: string[] = [];

  if (typeof a === 'string' && a.trim() !== '') {
    classes.push(...a.trim().split(/\s+/));
  }

  if (typeof b === 'string' && b.trim() !== '') {
    classes.push(...b.trim().split(/\s+/));
  }

  return classes.join(' ');
}

export function toCssProperties(
  a: CSSProperties | null | undefined,
  b: CSSProperties | null | undefined,
): CSSProperties {
  return Object.assign({}, a, b);
}

function normalizePart(part: string | null | undefined): string | null | undefined {
  if (typeof part !== 'string') {
    return null;
  }

  let trimmed = part.trim();

  if (trimmed.endsWith(';')) {
    trimmed = trimmed.slice(0, -1).trim();
  }

  return trimmed !== '' ? trimmed : null;
}

export function toStyle(
  a: string | null | undefined,
  b: string | null | undefined,
): string {
  const list: string[] = [];

  const normalizedA = normalizePart(a) ?? '';
  const normalizedB = normalizePart(b) ?? '';

  if (normalizedA !== '') {
    list.push(normalizedA);
  }

  if (normalizedB !== '') {
    list.push(normalizedB);
  }

  return list.join('; ');
}

export function mergeClassNames(...names: (string | null | undefined | boolean)[]): string {
  const result = new Set<string>();

  for (const name of names) {
    if (typeof name === 'string') {
      name.trim().split(/\s+/).forEach((cls) => result.add(cls));
    }
  }

  return Array.from(result).join(' ');
}

export function mergeCssProperties(...properties: (CSSProperties | null | undefined | boolean)[]): CSSProperties {
  const result: CSSProperties = {};

  for (const prop of properties) {
    if (typeof prop === 'object' && prop !== null) {
      Object.assign(result, prop);
    }
  }

  return result;
}

export function styles(...properties: StandardLonghandProperties[]): StandardLonghandProperties {
  const result: StandardLonghandProperties = {};

  for (const prop of properties) {
    Object.assign(result, prop);
  }

  return result;
}

export function toRem(size: number | string): string {
  if (typeof size === 'number') {
    return `calc(${size.toFixed()}/16*1rem)`;
  }

  if (size.endsWith('px')) {
    return `calc(${size.slice(0, -2)}/16*1rem)`;
  }

  if (size.startsWith('calc(') && size.endsWith(')')) {
    return size;
  }

  throw new Error(`toRem: unsupported string value [${size}]`);
}
