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
import { ExpressiveCard } from '../../src/components/ExpressiveCard';
import { ExpressiveSurfacePadding } from '../../src/components/ExpressiveSurfacePadding';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function CardsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Filled"
      >
        <ExpressiveCard
          variant={ExpressiveCard.variant.Filled}
        >
          <ExpressiveSurfacePadding>
            Filled Card
          </ExpressiveSurfacePadding>
        </ExpressiveCard>
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Elevated"
      >
        <ExpressiveCard
          variant={ExpressiveCard.variant.Elevated}
        >
          <ExpressiveSurfacePadding>
            Elevated Card
          </ExpressiveSurfacePadding>
        </ExpressiveCard>
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Outlined"
      >
        <ExpressiveCard
          variant={ExpressiveCard.variant.Outlined}
        >
          <ExpressiveSurfacePadding>
            Outlined Card
          </ExpressiveSurfacePadding>
        </ExpressiveCard>
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Tonal"
      >
        <ExpressiveCard
          variant={ExpressiveCard.variant.Tonal}
        >
          <ExpressiveSurfacePadding>
            Tonal Card
          </ExpressiveSurfacePadding>
        </ExpressiveCard>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
