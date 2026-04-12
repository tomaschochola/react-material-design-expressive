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
import { StorybookDisplayItem } from './StorybookDisplayItem';
import { StorybookDisplayItems } from './StorybookDisplayItems';

interface StorybookDisplayProps {
  readonly children: ReactNode;
  readonly style?: CSSProperties;
}

const globalStyles = {
  base: {
    columnGap: '4rem',
    display: 'grid',
    rowGap: '4rem',
  },
} as const;

export function StorybookDisplay({ children, style }: StorybookDisplayProps): ReactElement {
  return (
    <main
      style={{
        ...globalStyles.base,
        ...style,
      }}
    >
      {children}
    </main>
  );
}

StorybookDisplay.Item = StorybookDisplayItem;
StorybookDisplay.Items = StorybookDisplayItems;
