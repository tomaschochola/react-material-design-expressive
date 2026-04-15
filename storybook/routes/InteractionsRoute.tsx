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

import type { StandardLonghandProperties } from 'csstype';
import { useEffect, useState, type ReactElement } from 'react';
import { ExpressiveActivationLayer } from '../../src/components/ExpressiveActivationLayer';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = {
  root: {
    base: {
      height: 'calc(64 / 16 * 1rem)',
      position: 'relative',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

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
        style={styles.root.base}
      >
        <ExpressiveActivationLayer
          isActive={isActive}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        style={styles.root.base}
      >
        <ExpressiveActivationLayer
          isActive={!isActive}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
