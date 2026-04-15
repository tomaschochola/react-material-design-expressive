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

export interface ExpressivePressedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isPressed?: boolean;
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
    pressed: {
      opacity: expressiveTokens['md.sys.opacity.pressed'],
      transitionDuration: '0ms',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressivePressedStateLayer({ isPressed = false, style, ...props }: Readonly<ExpressivePressedStateLayerProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        expressivePresets.transition.effectsSlow,
        styles.root.base,
        isPressed ? styles.root.pressed : null,
        style,
      )}
      {...props}
    />
  );
}
