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

export interface ExpressiveNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container'],
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      columnGap: '8px',
      display: 'flex',
      height: '80px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      rowGap: '8px',
      transitionProperty: 'transform',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveNavigationBar({ style, ...props }: Readonly<ExpressiveNavigationBarProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        expressivePresets.motion.spatialDefault,
        expressivePresets.typography.labelMedium,
        styles.root.base,
        style,
      )}
      {...props}
    />
  );
}
