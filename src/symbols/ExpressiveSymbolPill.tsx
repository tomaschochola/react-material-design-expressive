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

import type { ReactElement, SVGAttributes } from 'react';

type ExpressiveSymbolPillProps = Omit<SVGAttributes<SVGSVGElement>, 'children'>;

export function ExpressiveSymbolPill({ ...props }: Readonly<ExpressiveSymbolPillProps>): ReactElement {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-2"
        y="5"
        width="44"
        height="30"
        rx="15"
        ry="15"
        fill="currentColor"
        transform="rotate(45 20 20)"
      />
    </svg>
  );
}
