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
import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { ExpressiveContainerPadding } from '../../src/components/ExpressiveContainerPadding';
import { ExpressiveLink } from '../../src/components/ExpressiveLink';
import { ExpressivePaneGrid } from '../../src/components/ExpressivePaneGrid';
import { ExpressiveSurface } from '../../src/components/ExpressiveSurface';
import { ExpressiveSurfacePadding } from '../../src/components/ExpressiveSurfacePadding';
import { ExpressiveSurfaceRadius } from '../../src/components/ExpressiveSurfaceRadius';

function Nav(): ReactElement {
  return (
    <ExpressiveSurfaceRadius>
      <ExpressiveSurface>
        <ExpressiveSurfacePadding>
          <nav>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/fonts"
                label="Fonts"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/headings"
                label="Headings"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/divider"
                label="Dividers"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/symbols"
                label="Symbols"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/interactions"
                label="Interactions"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/buttons"
                label="Buttons"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/links"
                label="Links"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/app-bars"
                label="App Bars"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/navigation-rail"
                label="Navigation Rail"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/icon-buttons"
                label="Icon Buttons"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/colors"
                label="Colors"
              />
            </div>
            <div>
              <ExpressiveLink
                variant={ExpressiveLink.variant.Text}
                href="/radius"
                label="Radius"
              />
            </div>
          </nav>
        </ExpressiveSurfacePadding>
      </ExpressiveSurface>
    </ExpressiveSurfaceRadius>
  );
}

const styles = {
  root: {
    base: {
      alignItems: 'start',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function SplitRoute(): ReactElement {
  return (
    <ExpressiveContainerPadding
      left
      right
      top
      bottom
      padding={16}
    >
      <ExpressivePaneGrid
        columns="max-content 1fr"
        style={styles.root.base}
      >
        <Nav />
        <Outlet />
      </ExpressivePaneGrid>
    </ExpressiveContainerPadding>
  );
}
