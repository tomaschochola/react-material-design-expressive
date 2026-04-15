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

type PaddingValue = number | string;

export interface ExpressiveSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly padding?: PaddingValue;
  readonly left?: boolean | PaddingValue;
  readonly right?: boolean | PaddingValue;
  readonly top?: boolean | PaddingValue;
  readonly bottom?: boolean | PaddingValue;
  readonly style?: CSSProperties;
}

export function ExpressiveSurfacePadding({ padding = ExpressiveSurfacePadding.padding, left, right, top, bottom, style, ...props }: Readonly<ExpressiveSurfacePaddingProps>): ReactElement {
  if (left === undefined && right === undefined && top === undefined && bottom === undefined) {
    left = true;
    right = true;
    top = true;
    bottom = true;
  }

  return (
    <div
      style={mergeStyles(
        bottom === true ? { paddingBottom: padding } : null,
        left === true ? { paddingLeft: padding } : null,
        right === true ? { paddingRight: padding } : null,
        top === true ? { paddingTop: padding } : null,
        typeof bottom === 'number' || typeof bottom === 'string' ? { paddingBottom: bottom } : null,
        typeof left === 'number' || typeof left === 'string' ? { paddingLeft: left } : null,
        typeof right === 'number' || typeof right === 'string' ? { paddingRight: right } : null,
        typeof top === 'number' || typeof top === 'string' ? { paddingTop: top } : null,
        style,
      )}
      {...props}
    />
  );
}

ExpressiveSurfacePadding.padding = '16px';
