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
import { ExpressiveAppBar } from '../../src/components/ExpressiveAppBar';
import { ExpressiveHeadingContext } from '../../src/components/ExpressiveHeadingContext';
import { StorybookLayout } from '../components/StorybookLayout';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

export function AppBarRoute(): ReactElement {
  const trans = useTrans();

  useSeo({
    title: trans.format('routes.app_bar.seo.title'),
    keywords: trans.format('routes.app_bar.seo.keywords'),
    description: trans.format('routes.app_bar.seo.description'),
  });

  return (
    <main>
      <ExpressiveHeadingContext>
        <StorybookLayout
          title="App bars"
          paragraph="App bars communicate the current screen and provide a stable place for top-level actions and navigation affordances."
        >
          <StorybookLayout.Section
            label="App Bar"
          >
            <div
              style={{
                display: 'grid',
                gap: '16px',
              }}
            >
              <ExpressiveAppBar>
                <ExpressiveAppBar.Texts
                  headline="Label"
                />
              </ExpressiveAppBar>
              <ExpressiveAppBar
                scrolled
              >
                <ExpressiveAppBar.Texts
                  headline="Label"
                />
              </ExpressiveAppBar>
            </div>
          </StorybookLayout.Section>
        </StorybookLayout>
      </ExpressiveHeadingContext>
    </main>
  );
}
