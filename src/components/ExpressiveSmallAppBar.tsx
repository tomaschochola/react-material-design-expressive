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
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveSmallAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly headline?: ReactNode;
  readonly subhead?: ReactNode;
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      backgroundColor: expressiveTokens['md.sys.color.surface'],
      color: expressiveTokens['md.sys.color.on-surface'],
      columnGap: '16px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      minHeight: '64px',
      paddingLeft: '16px',
      paddingRight: '16px',
      position: 'relative',
      transitionProperty: 'left, right, top, bottom, transform',
    },
  },
  leading: {
    base: {
      alignItems: 'center',
      color: expressiveTokens['md.sys.color.on-surface'],
      display: 'flex',
    },
  },
  content: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface'],
    },
  },
  trailing: {
    base: {
      alignItems: 'center',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'flex',
      justifySelf: 'end',
    },
  },
  headline: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface'],
      lineHeight: '1',
    },
  },
  subhead: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      lineHeight: '1',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveSmallAppBar({
  leading,
  trailing,
  headline,
  subhead,
  style,
  ...props
}: Readonly<ExpressiveSmallAppBarProps>): ReactElement {
  return (
    <div
      style={mergeStyles(
        expressivePresets.transition.spatialDefault,
        styles.root.base,
        style,
      )}
      {...props}
    >
      <div
        style={mergeStyles(
          styles.leading.base,
        )}
      >
        {leading}
      </div>
      <div
        style={mergeStyles(
          styles.content.base,
        )}
      >
        {headline !== undefined
          ? (
              <div
                style={mergeStyles(
                  expressivePresets.font.titleLarge,
                  styles.headline.base,
                )}
              >
                {headline}
              </div>
            )
          : null}
        {subhead !== undefined
          ? (
              <div
                style={mergeStyles(
                  expressivePresets.font.labelLarge,
                  styles.subhead.base,
                )}
              >
                {subhead}
              </div>
            )
          : null}
      </div>
      <div
        style={mergeStyles(
          styles.trailing.base,
        )}
      >
        {trailing}
      </div>
    </div>
  );
}
