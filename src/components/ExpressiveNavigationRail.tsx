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
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      backgroundColor: expressiveTokens['md.sys.color.surface'],
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      overflowX: 'hidden',
      overflowY: 'hidden',
      transitionProperty: 'transform',
      width: '88px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveNavigationRail({ style, ...props }: Readonly<ExpressiveNavigationRailProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        expressivePresets.motion.spatialDefault,
        styles.root.base,
        style,
      )}
      {...props}
    />
  );
}
