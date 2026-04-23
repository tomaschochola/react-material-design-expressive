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
import { expressiveTokens } from '../css/tokens';
import { ExpressiveCardVariantEnum } from '../enums';
import { mergeStyles } from '../helpers';

export interface ExpressiveCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly variant?: ExpressiveCardVariantEnum;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      appearance: 'none',
      borderBottomLeftRadius: expressiveTokens['md.sys.corner.radius.medium'],
      borderBottomRightRadius: expressiveTokens['md.sys.corner.radius.medium'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.corner.radius.medium'],
      borderTopRightRadius: expressiveTokens['md.sys.corner.radius.medium'],
      borderTopStyle: 'none',
      boxShadow: 'none',
      color: expressiveTokens['md.sys.color.on-surface'],
      display: 'block',
      outlineStyle: 'none',
      position: 'relative',
      textDecorationLine: 'none',
    },
    [ExpressiveCardVariantEnum.Filled]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
    },
    [ExpressiveCardVariantEnum.Elevated]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-low'],
    },
    [ExpressiveCardVariantEnum.Outlined]: {
      backgroundColor: expressiveTokens['md.sys.color.surface'],
      borderBottomColor: expressiveTokens['md.sys.color.outline-variant'],
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderLeftColor: expressiveTokens['md.sys.color.outline-variant'],
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderRightColor: expressiveTokens['md.sys.color.outline-variant'],
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderTopColor: expressiveTokens['md.sys.color.outline-variant'],
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },
    [ExpressiveCardVariantEnum.Tonal]: {
      backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveCard({ variant = ExpressiveCardVariantEnum.Filled, children, style, ...props }: Readonly<ExpressiveCardProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        styles.root.base,
        styles.root[variant],
        style,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

ExpressiveCard.variant = ExpressiveCardVariantEnum;
