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
import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { internalPresets } from '../css/internal';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { mergeStyles } from '../helpers';

export interface ExpressiveAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly fixed?: boolean;
  readonly scrolled?: boolean;
  readonly style?: CSSProperties;
}

export interface ExpressiveAppBarLeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

export interface ExpressiveAppBarTextsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly headline: ReactNode;
  readonly style?: CSSProperties;
}

export interface ExpressiveAppBarTrailingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      boxSizing: 'border-box',
      color: expressiveTokens['md.sys.color.on-surface'],
      columnGap: '4px',
      display: 'flex',
      minHeight: '64px',
      position: 'relative',
      transitionProperty: 'background-color, padding-top, padding-right, padding-bottom, padding-left, transform',
      width: '100%',
    },
    scrolled: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container'],
      paddingBottom: '8px',
      paddingLeft: '4px',
      paddingRight: '4px',
      paddingTop: '8px',
    },
    fixed: {
      left: '0px',
      position: 'fixed',
      right: '0px',
      top: '0px',
    },
  },
  leading: {
    base: {
      alignItems: 'center',
      display: 'flex',
      flexShrink: '0',
    },
  },
  texts: {
    base: {
      display: 'flex',
      flexBasis: '0px',
      flexDirection: 'column',
      flexGrow: '1',
      flexShrink: '1',
      minWidth: '0px',
    },
  },
  trailing: {
    base: {
      alignItems: 'center',
      display: 'flex',
      flexShrink: '0',
    },
  },
  headline: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface'],
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveAppBar({ fixed = false, scrolled = false, children, style, ...props }: Readonly<ExpressiveAppBarProps>): ReactElement {
  return (
    <div
      style={mergeStyles(expressivePresets.motion.spatialDefault, styles.root.base, scrolled ? styles.root.scrolled : null, fixed ? styles.root.fixed : null, style)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ExpressiveAppBarLeading({ children, style, ...props }: Readonly<ExpressiveAppBarLeadingProps>): ReactElement {
  return (
    <div
      style={mergeStyles(styles.leading.base, style)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ExpressiveAppBarTexts({ headline, style, ...props }: Readonly<ExpressiveAppBarTextsProps>): ReactElement {
  return (
    <div
      style={mergeStyles(styles.texts.base, style)}
      {...props}
    >
      <div style={mergeStyles(internalPresets.base.ellipsis, expressivePresets.typography.titleLarge, styles.headline.base)}>{headline}</div>
    </div>
  );
}

export function ExpressiveAppBarTrailing({ children, style, ...props }: Readonly<ExpressiveAppBarTrailingProps>): ReactElement {
  return (
    <div
      style={mergeStyles(styles.trailing.base, style)}
      {...props}
    >
      {children}
    </div>
  );
}

ExpressiveAppBar.Leading = ExpressiveAppBarLeading;
ExpressiveAppBar.Texts = ExpressiveAppBarTexts;
ExpressiveAppBar.Trailing = ExpressiveAppBarTrailing;
