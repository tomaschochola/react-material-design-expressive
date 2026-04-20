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

export interface ExpressiveBorderLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isDisabled?: boolean;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      borderBottomColor: 'currentColor',
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderLeftColor: 'currentColor',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderRightColor: 'currentColor',
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderTopColor: 'currentColor',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      bottom: '0px',
      color: expressiveTokens['md.sys.color.outline'],
      left: '0px',
      opacity: 1,
      overflowX: 'hidden',
      overflowY: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      right: '0px',
      top: '0px',
      userSelect: 'none',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveBorderLayer({ isDisabled = false, style, ...props }: Readonly<ExpressiveBorderLayerProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        isDisabled ? expressivePresets.disabled.outline : null,
        style,
      )}
      {...props}
    />
  );
}
