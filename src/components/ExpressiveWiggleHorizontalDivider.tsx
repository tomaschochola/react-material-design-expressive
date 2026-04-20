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
import { useId } from 'react';
import { useSeparator, type SeparatorProps } from 'react-aria';
import { mergeStyles } from '../css/helpers';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveWiggleHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      color: expressiveTokens['md.sys.color.outline-variant'],
      display: 'block',
      position: 'relative',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveWiggleHorizontalDivider({ style, ...props }: Readonly<ExpressiveWiggleHorizontalDividerProps>): ReactElement {
  const id = useId();

  const { separatorProps } = useSeparator(props);

  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...separatorProps}
      style={mergeStyles(
        styles.root.base,
        style,
      )}
    >
      <pattern
        id={id}
        width="91"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
          stroke="currentColor"
          strokeLinecap="square"
        />
      </pattern>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
