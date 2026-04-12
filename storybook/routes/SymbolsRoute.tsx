import type { ReactElement } from 'react';
import { ExpressiveIcon } from '../../src/components/ExpressiveIcon';
import { ExpressiveSymbolCircle } from '../../src/symbols/ExpressiveSymbolCircle';
import { ExpressiveSymbolFlower } from '../../src/symbols/ExpressiveSymbolFlower';
import { ExpressiveSymbolPill } from '../../src/symbols/ExpressiveSymbolPill';
import { ExpressiveSymbolRect } from '../../src/symbols/ExpressiveSymbolRect';
import { ExpressiveSymbolTriangle } from '../../src/symbols/ExpressiveSymbolTriangle';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = {
  base: {
    height: '4rem',
    width: '4rem',
  },
} as const;

export function SymbolsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Circle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolCircle
              style={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Flower"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolFlower
              style={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Pill"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolPill
              style={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Rect"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolRect
              style={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Triangle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolTriangle
              style={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
