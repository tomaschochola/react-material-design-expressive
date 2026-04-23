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
import { ExpressiveHeadingContext } from '../../src/components/ExpressiveHeadingContext';
import { ExpressiveNavigationBar } from '../../src/components/ExpressiveNavigationBar';
import { ExpressiveNavigationBarLink } from '../../src/components/ExpressiveNavigationBarLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { StorybookLayout } from '../components/StorybookLayout';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

export function NavigationBarRoute(): ReactElement {
  const trans = useTrans();
  const { hash } = useLocation();

  useSeo({
    title: trans.format('routes.navigation_bar.seo.title'),
    keywords: trans.format('routes.navigation_bar.seo.keywords'),
    description: trans.format('routes.navigation_bar.seo.description'),
  });

  return (
    <main>
      <ExpressiveHeadingContext>
        <StorybookLayout
          title="Navigation bars"
          paragraph="Navigation bars offer a persistent, convenient way to switch between primary destinations in an app. 3–5 destinations is the recommended range."
        >
          <StorybookLayout.Section
            label="Navigation Bar: Vertical items"
          >
            <ExpressiveNavigationBar>
              <ExpressiveNavigationBarLink
                href="#v3-1"
                aria-current={hash === '#v3-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v3-2"
                aria-current={hash === '#v3-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v3-3"
                aria-current={hash === '#v3-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
            <ExpressiveNavigationBar>
              <ExpressiveNavigationBarLink
                href="#v4-1"
                aria-current={hash === '#v4-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v4-2"
                aria-current={hash === '#v4-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v4-3"
                aria-current={hash === '#v4-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v4-4"
                aria-current={hash === '#v4-4' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
            <ExpressiveNavigationBar>
              <ExpressiveNavigationBarLink
                href="#v5-1"
                aria-current={hash === '#v5-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v5-2"
                aria-current={hash === '#v5-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v5-3"
                aria-current={hash === '#v5-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v5-4"
                aria-current={hash === '#v5-4' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#v5-5"
                aria-current={hash === '#v5-5' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
          </StorybookLayout.Section>
          <StorybookLayout.Section
            label="Navigation Bar: Horizontal items"
          >
            <ExpressiveNavigationBar
              horizontal
            >
              <ExpressiveNavigationBarLink
                href="#h3-1"
                aria-current={hash === '#h3-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h3-2"
                aria-current={hash === '#h3-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h3-3"
                aria-current={hash === '#h3-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
            <ExpressiveNavigationBar
              horizontal
            >
              <ExpressiveNavigationBarLink
                href="#h4-1"
                aria-current={hash === '#h4-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h4-2"
                aria-current={hash === '#h4-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h4-3"
                aria-current={hash === '#h4-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h4-4"
                aria-current={hash === '#h4-4' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
            <ExpressiveNavigationBar
              horizontal
            >
              <ExpressiveNavigationBarLink
                href="#h5-1"
                aria-current={hash === '#h5-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h5-2"
                aria-current={hash === '#h5-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h5-3"
                aria-current={hash === '#h5-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h5-4"
                aria-current={hash === '#h5-4' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h5-5"
                aria-current={hash === '#h5-5' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
            <ExpressiveNavigationBar
              horizontal
            >
              <ExpressiveNavigationBarLink
                href="#h6-1"
                aria-current={hash === '#h6-1' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h6-2"
                aria-current={hash === '#h6-2' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h6-3"
                aria-current={hash === '#h6-3' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h6-4"
                aria-current={hash === '#h6-4' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h6-5"
                aria-current={hash === '#h6-5' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
              <ExpressiveNavigationBarLink
                href="#h6-6"
                aria-current={hash === '#h6-6' ? 'page' : undefined}
                symbol={<ExpressiveRandomSymbol />}
                label="Label"
              />
            </ExpressiveNavigationBar>
          </StorybookLayout.Section>
        </StorybookLayout>
      </ExpressiveHeadingContext>
    </main>
  );
}
