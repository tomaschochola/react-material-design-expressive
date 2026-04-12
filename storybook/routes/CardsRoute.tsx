import type { ReactElement } from 'react';
import { ExpressiveFilledCard } from '../../src/components/ExpressiveFilledCard';
import { ExpressiveSurfacePadding } from '../../src/components/ExpressiveSurfacePadding';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function CardsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Filled Card"
      >
        <ExpressiveFilledCard>
          <ExpressiveSurfacePadding>
            Filled Card
          </ExpressiveSurfacePadding>
        </ExpressiveFilledCard>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
