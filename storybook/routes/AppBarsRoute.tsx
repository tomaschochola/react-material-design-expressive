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
