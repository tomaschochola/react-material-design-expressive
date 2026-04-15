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

import type { CSSProperties, HTMLProps, ReactElement } from 'react';
import { mergeStyles } from '../css/helpers';
import { expressiveTokens } from '../css/tokens';

type RadiusValue = number | string;

export interface ExpressiveSurfaceRadiusProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly topleft?: boolean | RadiusValue;
  readonly topright?: boolean | RadiusValue;
  readonly bottomleft?: boolean | RadiusValue;
  readonly bottomright?: boolean | RadiusValue;
  readonly radius?: RadiusValue;
  readonly style?: CSSProperties;
}

export function ExpressiveSurfaceRadius({ radius = ExpressiveSurfaceRadius.radius, topleft, topright, bottomleft, bottomright, style, ...props }: Readonly<ExpressiveSurfaceRadiusProps>): ReactElement {
  if (topleft === undefined && topright === undefined && bottomleft === undefined && bottomright === undefined) {
    topleft = true;
    topright = true;
    bottomleft = true;
    bottomright = true;
  }

  return (
    <div
      style={mergeStyles(
        bottomright === true ? { borderBottomRightRadius: radius } : null,
        topleft === true ? { borderTopLeftRadius: radius } : null,
        topright === true ? { borderTopRightRadius: radius } : null,
        bottomleft === true ? { borderBottomLeftRadius: radius } : null,
        typeof bottomright === 'number' || typeof bottomright === 'string' ? { borderBottomRightRadius: bottomright } : null,
        typeof topleft === 'number' || typeof topleft === 'string' ? { borderTopLeftRadius: topleft } : null,
        typeof topright === 'number' || typeof topright === 'string' ? { borderTopRightRadius: topright } : null,
        typeof bottomleft === 'number' || typeof bottomleft === 'string' ? { borderBottomLeftRadius: bottomleft } : null,
        style,
      )}
      {...props}
    />
  );
}

ExpressiveSurfaceRadius.radius = expressiveTokens['md.sys.radius.large'];
