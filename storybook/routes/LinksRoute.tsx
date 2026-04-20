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
import { ExpressiveLink } from '../../src/components/ExpressiveLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function LinksRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Elevated Link"
      >
        <ExpressiveLink
          variant={ExpressiveLink.variant.Elevated}
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Elevated}
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Elevated}
          label="Elevated Link"
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Elevated}
          label="Elevated Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Tonal Link"
      >
        <ExpressiveLink
          variant={ExpressiveLink.variant.Tonal}
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Tonal}
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Tonal}
          label="Tonal Link"
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Tonal}
          label="Tonal Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Filled Link"
      >
        <ExpressiveLink
          variant={ExpressiveLink.variant.Filled}
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Filled}
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Filled}
          label="Filled Link"
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Filled}
          label="Filled Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Outlined Link"
      >
        <ExpressiveLink
          variant={ExpressiveLink.variant.Outlined}
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Outlined}
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Outlined}
          label="Outlined Link"
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Outlined}
          label="Outlined Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Text Link"
      >
        <ExpressiveLink
          variant={ExpressiveLink.variant.Text}
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Text}
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Text}
          label="Text Link"
          href="#fake"
        />
        <ExpressiveLink
          variant={ExpressiveLink.variant.Text}
          label="Text Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
