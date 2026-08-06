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

export interface ExpressiveNavigationRailItemsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '18px',
      paddingTop: '18px',
      rowGap: '12px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveNavigationRailItems({ style, ...props }: Readonly<ExpressiveNavigationRailItemsProps>): ReactElement {
  return (
    <div
      style={mergeStyles(styles.root.base, style)}
      {...props}
    />
  );
}
