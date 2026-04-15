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
import { mergeStyles } from '../../src/css/helpers';
import { StorybookDisplayItem } from './StorybookDisplayItem';
import { StorybookDisplayItems } from './StorybookDisplayItems';

interface StorybookDisplayProps {
  readonly children: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      columnGap: 'calc(64 / 16 * 1rem)',
      display: 'grid',
      rowGap: 'calc(64 / 16 * 1rem)',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function StorybookDisplay({ children, style }: Readonly<StorybookDisplayProps>): ReactElement {
  return (
    <main
      style={mergeStyles(
        styles.root.base,
        style,
      )}
    >
      {children}
    </main>
  );
}

StorybookDisplay.Item = StorybookDisplayItem;
StorybookDisplay.Items = StorybookDisplayItems;
