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
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveFilledCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      appearance: 'none',
      backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.medium'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.medium'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.medium'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.medium'],
      borderTopStyle: 'none',
      boxShadow: 'none',
      color: expressiveTokens['md.sys.color.on-surface'],
      display: 'block',
      outlineStyle: 'none',
      position: 'relative',
      textDecorationLine: 'none',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveFilledCard({ children, style, ...props }: Readonly<ExpressiveFilledCardProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        style,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
