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
import { ExpressiveButton } from '../../src/components/ExpressiveButton';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function ButtonsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Elevated Button"
      >
        <ExpressiveButton
          variant={ExpressiveButton.variant.Elevated}
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Elevated}
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Elevated}
          label="Elevated Button"
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Elevated}
          label="Elevated Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Tonal Button"
      >
        <ExpressiveButton
          variant={ExpressiveButton.variant.Tonal}
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Tonal}
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Tonal}
          label="Tonal Button"
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Tonal}
          label="Tonal Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Filled Button"
      >
        <ExpressiveButton
          variant={ExpressiveButton.variant.Filled}
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Filled}
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Filled}
          label="Filled Button"
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Filled}
          label="Filled Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Outlined Button"
      >
        <ExpressiveButton
          variant={ExpressiveButton.variant.Outlined}
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Outlined}
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Outlined}
          label="Outlined Button"
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Outlined}
          label="Outlined Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Text Button"
      >
        <ExpressiveButton
          variant={ExpressiveButton.variant.Text}
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Text}
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Text}
          label="Text Button"
        />
        <ExpressiveButton
          variant={ExpressiveButton.variant.Text}
          label="Text Button"
          isDisabled
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
