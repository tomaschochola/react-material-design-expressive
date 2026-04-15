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
import type { CSSProperties, HTMLProps, ReactElement } from 'react';
import { mergeStyles } from '../css/helpers';

export interface ExpressivePaneGridProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly columns?: string;
  readonly gap?: string | number;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      columnGap: '24px',
      display: 'grid',
      rowGap: '24px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressivePaneGrid({ children, columns, gap, style, ...props }: Readonly<ExpressivePaneGridProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        columns !== undefined ? { gridTemplateColumns: columns } : null,
        gap !== undefined
          ? {
              columnGap: gap,
              rowGap: gap,
            }
          : null,
        style,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
