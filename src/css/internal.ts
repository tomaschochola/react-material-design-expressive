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

import { expressiveTokens } from './tokens';

export const internalPresets = {
  base: {
    button: {
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopStyle: 'none',
      outlineStyle: 'none',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
    },
    anchor: {
      color: 'inherit',
      textDecorationLine: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopStyle: 'none',
      outlineStyle: 'none',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
    },
    border: {
      borderBottomColor: expressiveTokens['md.sys.color.outline'],
      borderBottomStyle: 'solid',
      borderLeftColor: expressiveTokens['md.sys.color.outline'],
      borderLeftStyle: 'solid',
      borderRightColor: expressiveTokens['md.sys.color.outline'],
      borderRightStyle: 'solid',
      borderTopColor: expressiveTokens['md.sys.color.outline'],
      borderTopStyle: 'solid',
    },
    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
    oneliner: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
  },
  disabled: {
    content: {
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.content']})`,
    },
    container: {
      backgroundColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.container']})`,
    },
    outline: {
      borderBottomColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.outline']})`,
      borderLeftColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.outline']})`,
      borderRightColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.outline']})`,
      borderTopColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled.outline']})`,
    },
  },
} as const;
