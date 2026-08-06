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

import type { ReactElement } from 'react';
import { useEffect } from 'react';

export function expressiveDocumentStyle(style: Readonly<Record<string, string>>): void {
  const documentStyle = document.documentElement.style;

  for (const [key, value] of Object.entries(style)) {
    if (value === '') {
      documentStyle.removeProperty(key);
    } else {
      documentStyle.setProperty(key, value);
    }
  }
}

export interface ExpressiveDocumentStyleEffectProps {
  readonly style: Readonly<Record<string, string>>;
  readonly children?: ReactElement;
}

export function ExpressiveDocumentStyleEffect({ style, children }: Readonly<ExpressiveDocumentStyleEffectProps>): ReactElement | undefined {
  useEffect(() => {
    expressiveDocumentStyle(style);
  }, [style]);

  return children;
}
