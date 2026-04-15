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

import type { ReactElement } from 'react';
import { ExpressiveIcon } from '../../src/components/ExpressiveIcon';
import { ExpressiveSymbolCircle } from '../../src/symbols/ExpressiveSymbolCircle';
import { ExpressiveSymbolFlower } from '../../src/symbols/ExpressiveSymbolFlower';
import { ExpressiveSymbolPill } from '../../src/symbols/ExpressiveSymbolPill';
import { ExpressiveSymbolRect } from '../../src/symbols/ExpressiveSymbolRect';
import { ExpressiveSymbolTriangle } from '../../src/symbols/ExpressiveSymbolTriangle';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function SymbolsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Circle"
      >
        <ExpressiveIcon
          size={64}
          symbol={(
            <ExpressiveSymbolCircle />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Flower"
      >
        <ExpressiveIcon
          size={64}
          symbol={(
            <ExpressiveSymbolFlower />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Pill"
      >
        <ExpressiveIcon
          size={64}
          symbol={(
            <ExpressiveSymbolPill />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Rect"
      >
        <ExpressiveIcon
          size={64}
          symbol={(
            <ExpressiveSymbolRect />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Triangle"
      >
        <ExpressiveIcon
          size={64}
          symbol={(
            <ExpressiveSymbolTriangle />
          )}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
