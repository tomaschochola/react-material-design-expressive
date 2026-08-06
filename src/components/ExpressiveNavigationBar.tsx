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
import { Children, type CSSProperties, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { mergeStyles } from '../helpers';
import { ExpressiveNavigationBarContext } from './ExpressiveNavigationBarContext';

export interface ExpressiveNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly fixed?: boolean;
  readonly horizontal?: boolean;
  readonly style?: CSSProperties;
}

const horizontalNavbarPaddingByCount: Record<number, string> = {
  1: '160px',
  2: '160px',
  3: '160px',
  4: '120px',
  5: '80px',
  6: '40px',
};

const styles = {
  root: {
    base: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container'],
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'flex',
      minHeight: '64px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      transitionProperty: 'transform',
    },
    fixed: {
      position: 'fixed',
      left: '0px',
      right: '0px',
      bottom: '0px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveNavigationBar({ fixed = false, horizontal = false, style, children, ...props }: Readonly<ExpressiveNavigationBarProps & { readonly children?: ReactNode }>): ReactElement {
  const itemCount = Children.count(children);
  const horizontalPadding = horizontalNavbarPaddingByCount[itemCount] ?? '40px';

  return (
    <ExpressiveNavigationBarContext.Provider value={horizontal}>
      <div
        style={mergeStyles(
          expressivePresets.motion.spatialDefault,
          expressivePresets.typography.labelMedium,
          styles.root.base,
          horizontal
            ? {
                paddingLeft: horizontalPadding,
                paddingRight: horizontalPadding,
              }
            : null,
          fixed ? styles.root.fixed : null,
          style,
        )}
        {...props}
      >
        {children}
      </div>
    </ExpressiveNavigationBarContext.Provider>
  );
}
