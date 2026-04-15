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
import { useLocation } from 'react-router';
import { ExpressiveNavigationRail } from '../../src/components/ExpressiveNavigationRail';
import { ExpressiveNavigationRailItems } from '../../src/components/ExpressiveNavigationRailItems';
import { ExpressiveNavigationRailLink } from '../../src/components/ExpressiveNavigationRailLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function NavigationRailRoute(): ReactElement {
  const location = useLocation();

  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Navigation Rail"
      >
        <ExpressiveNavigationRail>
          <ExpressiveNavigationRailItems>
            <ExpressiveNavigationRailLink
              href="#home"
              label="Home"
              aria-current={location.hash === '#home' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#about"
              label="About"
              aria-current={location.hash === '#about' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#contact"
              label="Contact"
              aria-current={location.hash === '#contact' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#profile"
              label="Profile"
              aria-current={location.hash === '#profile' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#shop"
              label="Shop"
              aria-current={location.hash === '#shop' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              isDisabled
              symbol={<ExpressiveRandomSymbol />}
            />
          </ExpressiveNavigationRailItems>
        </ExpressiveNavigationRail>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
