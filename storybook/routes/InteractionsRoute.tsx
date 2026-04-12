import { useEffect, useState, type ReactElement } from 'react';
import { ExpressiveActivationLayer } from '../../src/components/ExpressiveActivationLayer';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = {
  base: {
    height: '4rem',
    position: 'relative',
  },
} as const;

export function InteractionsRoute(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setIsActive]);

  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Activation Layer"
        style={styles.base}
      >
        <ExpressiveActivationLayer
          isActive={isActive}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        style={styles.base}
      >
        <ExpressiveActivationLayer
          isActive={!isActive}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
