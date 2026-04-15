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

type ExpressiveSymbolCircleProps = Omit<SVGAttributes<SVGSVGElement>, 'children'>;

export function ExpressiveSymbolCircle({ ...props }: Readonly<ExpressiveSymbolCircleProps>): ReactElement {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="currentColor"
      />
    </svg>
  );
}
