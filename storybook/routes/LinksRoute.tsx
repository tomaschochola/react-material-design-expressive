import type { ReactElement } from 'react';
import { ExpressiveElevatedLink } from '../../src/components/ExpressiveElevatedLink';
import { ExpressiveFilledLink } from '../../src/components/ExpressiveFilledLink';
import { ExpressiveOutlinedLink } from '../../src/components/ExpressiveOutlinedLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { ExpressiveTextLink } from '../../src/components/ExpressiveTextLink';
import { ExpressiveTonalLink } from '../../src/components/ExpressiveTonalLink';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function LinksRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Elevated Link"
      >
        <ExpressiveElevatedLink
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Tonal Link"
      >
        <ExpressiveTonalLink
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Filled Link"
      >
        <ExpressiveFilledLink
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveFilledLink
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveFilledLink
          label="Filled Link"
          href="#fake"
        />
        <ExpressiveFilledLink
          label="Filled Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Outlined Link"
      >
        <ExpressiveOutlinedLink
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Text Link"
      >
        <ExpressiveTextLink
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          isDisabled
          href="#fake"
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
