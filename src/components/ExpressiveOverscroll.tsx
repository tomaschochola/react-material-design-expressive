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

export interface ExpressiveOverscrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      paddingBottom: '50vh',
      position: 'relative',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveOverscroll({ children, style, ...props }: Readonly<ExpressiveOverscrollProps>): ReactElement {
  return (
    <div
      style={mergeStyles(styles.root.base, style)}
      {...props}
    >
      {children}
    </div>
  );
}
