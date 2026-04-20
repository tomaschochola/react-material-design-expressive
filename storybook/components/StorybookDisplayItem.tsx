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
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { ExpressiveHeading } from '../../src/components/ExpressiveHeading';
import { mergeStyles } from '../../src/css/helpers';
import { expressiveTokens } from '../../src/css/tokens';

interface StorybookDisplayItemProps {
  readonly children: ReactNode;
  readonly label?: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      backgroundImage: `radial-gradient(circle, oklch(from ${expressiveTokens['md.sys.color.primary']} l c h / 0.2) 1px, transparent 1px), radial-gradient(circle, oklch(from ${expressiveTokens['md.sys.color.primary']} l c h / 0.2) 1px, transparent 1px)`,
      backgroundPositionX: '0px, 5px',
      backgroundPositionY: '0px, 5px',
      backgroundRepeat: 'repeat',
      backgroundSize: '10px 10px',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      paddingBottom: 'calc(64 / 16 * 1rem)',
      paddingLeft: 'calc(32 / 16 * 1rem)',
      paddingRight: 'calc(32 / 16 * 1rem)',
      paddingTop: 'calc(64 / 16 * 1rem)',
    },
  },
  heading: {
    base: {
      textAlign: 'center',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function StorybookDisplayItem({ children, label, style }: Readonly<StorybookDisplayItemProps>): ReactElement {
  return (
    <div>
      {label !== undefined
        ? (
            <ExpressiveHeading
              font={ExpressiveHeading.font.HeadlineLarge}
              style={mergeStyles(
                styles.heading.base,
              )}
            >
              {label}
            </ExpressiveHeading>
          )
        : null}
      <div
        style={mergeStyles(
          styles.root.base,
          style,
        )}
      >
        {children}
      </div>
    </div>
  );
}
