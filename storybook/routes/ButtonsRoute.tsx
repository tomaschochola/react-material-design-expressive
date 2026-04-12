import type { ReactElement } from 'react';
import { ExpressiveElevatedButton } from '../../src/components/ExpressiveElevatedButton';
import { ExpressiveFilledButton } from '../../src/components/ExpressiveFilledButton';
import { ExpressiveOutlinedButton } from '../../src/components/ExpressiveOutlinedButton';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { ExpressiveTextButton } from '../../src/components/ExpressiveTextButton';
import { ExpressiveTonalButton } from '../../src/components/ExpressiveTonalButton';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function ButtonsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Elevated Button"
      >
        <ExpressiveElevatedButton
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Tonal Button"
      >
        <ExpressiveTonalButton
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveTonalButton
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveTonalButton
          label="Tonal Button"
        />
        <ExpressiveTonalButton
          label="Tonal Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Filled Button"
      >
        <ExpressiveFilledButton
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveFilledButton
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveFilledButton
          label="Filled Button"
        />
        <ExpressiveFilledButton
          label="Filled Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Outlined Button"
      >
        <ExpressiveOutlinedButton
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
          isDisabled
        />
      </StorybookDisplay.Items>
      <StorybookDisplay.Items
        label="Text Button"
      >
        <ExpressiveTextButton
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveTextButton
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveTextButton
          label="Text Button"
        />
        <ExpressiveTextButton
          label="Text Button"
          isDisabled
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
