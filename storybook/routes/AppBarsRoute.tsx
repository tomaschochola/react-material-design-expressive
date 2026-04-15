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
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { ExpressiveSmallAppBar } from '../../src/components/ExpressiveSmallAppBar';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function AppBarsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Small App Bar"
      >
        <ExpressiveSmallAppBar
          leading={(
            <ExpressiveIcon
              size={40}
              symbol={<ExpressiveRandomSymbol />}
            />
          )}
          headline="Title Large"
          subhead="Label Large"
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
