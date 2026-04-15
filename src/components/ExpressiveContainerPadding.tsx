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

export interface ExpressiveContainerPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly left?: boolean | PaddingValue;
  readonly right?: boolean | PaddingValue;
  readonly top?: boolean | PaddingValue;
  readonly bottom?: boolean | PaddingValue;
  readonly padding?: PaddingValue;
  readonly style?: CSSProperties;
}

export function ExpressiveContainerPadding({ padding = ExpressiveContainerPadding.padding, top, left, right, bottom, style, ...props }: Readonly<ExpressiveContainerPaddingProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        left === true ? { paddingLeft: padding } : null,
        right === true ? { paddingRight: padding } : null,
        top === true ? { paddingTop: padding } : null,
        bottom === true ? { paddingBottom: padding } : null,
        typeof left === 'number' || typeof left === 'string' ? { paddingLeft: left } : null,
        typeof right === 'number' || typeof right === 'string' ? { paddingRight: right } : null,
        typeof top === 'number' || typeof top === 'string' ? { paddingTop: top } : null,
        typeof bottom === 'number' || typeof bottom === 'string' ? { paddingBottom: bottom } : null,
        style,
      )}
      {...props}
    />
  );
}

ExpressiveContainerPadding.padding = '16px';
