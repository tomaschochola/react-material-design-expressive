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
