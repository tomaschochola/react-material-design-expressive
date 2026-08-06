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
import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { internalPresets } from '../css/internal';
import { mergeStyles } from '../helpers';

export interface ExpressiveIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'children'> {
  readonly size?: number | string;
  readonly symbol?: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      display: 'inline-flex',
      flexShrink: 0,
      height: '1em',
      maxHeight: '100%',
      position: 'relative',
      verticalAlign: 'middle',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveIcon({ size = 24, symbol, style, ...props }: Readonly<ExpressiveIconProps>): ReactElement {
  return (
    <span
      style={mergeStyles(internalPresets.base.oneliner, styles.root.base, { fontSize: size }, style)}
      {...props}
    >
      {symbol}
    </span>
  );
}
