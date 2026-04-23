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
import type { CSSProperties, ReactElement } from 'react';
import { useSeparator, type SeparatorProps } from 'react-aria';
import { expressiveTokens } from '../css/tokens';
import { mergeStyles } from '../helpers';

export interface ExpressiveTildeHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      color: expressiveTokens['md.sys.color.outline-variant'],
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveTildeHorizontalDivider({ style, ...props }: Readonly<ExpressiveTildeHorizontalDividerProps>): ReactElement {
  const { separatorProps } = useSeparator(props);

  return (
    <svg
      aria-hidden="true"
      width="155"
      height="9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...separatorProps}
      style={mergeStyles(
        styles.root.base,
        style,
      )}
    >
      <path
        d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
