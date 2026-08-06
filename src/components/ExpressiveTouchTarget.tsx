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
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { mergeStyles } from '../helpers';

export interface ExpressiveTouchTargetProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      minHeight: '48px',
      minWidth: '48px',
      position: 'relative',
      verticalAlign: 'middle',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveTouchTarget({ children, style, ...props }: Readonly<ExpressiveTouchTargetProps>): ReactElement {
  return (
    <span
      style={mergeStyles(styles.root.base, style)}
      {...props}
    >
      {children}
    </span>
  );
}
