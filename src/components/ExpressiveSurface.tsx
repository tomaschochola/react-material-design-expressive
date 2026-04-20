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
import { ExpressiveSurfaceEnum } from '../enums';

export interface ExpressiveSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly surface?: ExpressiveSurfaceEnum;
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
  },
  level: {
    [ExpressiveSurfaceEnum.Transparent]: {
      backgroundColor: 'transparent',
    },
    [ExpressiveSurfaceEnum.Surface]: {
      backgroundColor: expressiveTokens['md.sys.color.surface'],
    },
    [ExpressiveSurfaceEnum.Lowest]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-lowest'],
    },
    [ExpressiveSurfaceEnum.Low]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-low'],
    },
    [ExpressiveSurfaceEnum.Container]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container'],
    },
    [ExpressiveSurfaceEnum.High]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-high'],
    },
    [ExpressiveSurfaceEnum.Highest]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveSurface({ surface = ExpressiveSurfaceEnum.Surface, style, ...props }: Readonly<ExpressiveSurfaceProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        styles.level[surface],
        style,
      )}
      {...props}
    />
  );
}

ExpressiveSurface.level = ExpressiveSurfaceEnum;
