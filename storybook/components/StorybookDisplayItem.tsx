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

import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { ExpressiveHeadingHeadlineLarge } from '../../src/components/ExpressiveHeadingHeadlineLarge';
import { expressiveTokens } from '../../src/css/tokens';

interface StorybookDisplayItemProps {
  readonly children: ReactNode;
  readonly label?: ReactNode;
  readonly style?: CSSProperties;
}

const globalStyles = {
  base: {
    backgroundImage: `radial-gradient(circle, oklch(from ${expressiveTokens['md.sys.color.primary']} l c h / 0.2) 1px, transparent 1px), radial-gradient(circle, oklch(from ${expressiveTokens['md.sys.color.primary']} l c h / 0.2) 1px, transparent 1px)`,
    backgroundPositionX: '0px, 5px',
    backgroundPositionY: '0px, 5px',
    backgroundRepeat: 'repeat',
    backgroundSize: '10px 10px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: '4rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '4rem',
  },
} as const;

export function StorybookDisplayItem({ children, label, style }: StorybookDisplayItemProps): ReactElement {
  return (
    <div>
      {label !== undefined
        ? (
            <ExpressiveHeadingHeadlineLarge
              bottom
              block
              style={{
                textAlign: 'center',
              }}
            >
              {label}
            </ExpressiveHeadingHeadlineLarge>
          )
        : null}
      <div
        style={{
          ...globalStyles.base,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}
