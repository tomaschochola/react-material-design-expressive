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
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { ExpressiveStandardIconButton } from '../../src/components/ExpressiveStandardIconButton';
import { ExpressiveTouchTarget } from '../../src/components/ExpressiveTouchTarget';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function IconButtonsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Standard Icon Button"
      >
        <ExpressiveTouchTarget>
          <ExpressiveStandardIconButton
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveStandardIconButton
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
