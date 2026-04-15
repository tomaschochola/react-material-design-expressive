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

export interface ExpressiveHoveredStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isHovered?: boolean;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      backgroundColor: 'currentColor',
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      bottom: '0px',
      left: '0px',
      opacity: 0,
      overflowX: 'hidden',
      overflowY: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      right: '0px',
      top: '0px',
      transitionProperty: 'opacity',
      userSelect: 'none',
    },
    hovered: {
      opacity: expressiveTokens['md.sys.opacity.hovered'],
      transitionDuration: '0ms',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveHoveredStateLayer({ isHovered = false, style, ...props }: Readonly<ExpressiveHoveredStateLayerProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        expressivePresets.transition.effectsSlow,
        styles.root.base,
        isHovered ? styles.root.hovered : null,
        style,
      )}
      {...props}
    />
  );
}
