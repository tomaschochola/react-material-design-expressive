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
import { ExpressiveIconButton } from '../../src/components/ExpressiveIconButton';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { ExpressiveTouchTarget } from '../../src/components/ExpressiveTouchTarget';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function IconButtonsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Standard"
      >
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Standard}
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Standard}
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Filled"
      >
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Filled}
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Filled}
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Tonal"
      >
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Tonal}
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Tonal}
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Outlined"
      >
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Outlined}
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveIconButton
            variant={ExpressiveIconButton.variant.Outlined}
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
