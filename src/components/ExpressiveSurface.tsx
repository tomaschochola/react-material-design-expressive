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
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly surface?: -1 | 0 | 1 | 2 | 3 | 4 | 5;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      backgroundColor: 'transparent',
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      color: expressiveTokens['md.sys.color.on-surface'],
    },
    surface: {
      backgroundColor: expressiveTokens['md.sys.color.surface'],
    },
    surfaceContainerLowest: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-lowest'],
    },
    surfaceContainerLow: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-low'],
    },
    surfaceContainer: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container'],
    },
    surfaceContainerHigh: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-high'],
    },
    surfaceContainerHighest: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveSurface({ surface = 1, style, ...props }: Readonly<ExpressiveSurfaceProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        surface === 0 ? styles.root.surfaceContainerLowest : null,
        surface === 1 ? styles.root.surface : null,
        surface === 2 ? styles.root.surfaceContainerLow : null,
        surface === 3 ? styles.root.surfaceContainer : null,
        surface === 4 ? styles.root.surfaceContainerHigh : null,
        surface === 5 ? styles.root.surfaceContainerHighest : null,
        style,
      )}
      {...props}
    />
  );
}
