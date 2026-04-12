import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { ExpressiveContainerPadding } from '../../src/components/ExpressiveContainerPadding';
import { ExpressivePaneGrid } from '../../src/components/ExpressivePaneGrid';
import { ExpressiveSurface } from '../../src/components/ExpressiveSurface';
import { ExpressiveSurfacePadding } from '../../src/components/ExpressiveSurfacePadding';
import { ExpressiveSurfaceRadius } from '../../src/components/ExpressiveSurfaceRadius';
import { ExpressiveTextLink } from '../../src/components/ExpressiveTextLink';

function Nav(): ReactElement {
  return (
    <ExpressiveSurfaceRadius>
      <ExpressiveSurface>
        <ExpressiveSurfacePadding>
          <nav>
            <div>
              <ExpressiveTextLink
                href="/fonts"
                label="Fonts"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/headings"
                label="Headings"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/divider"
                label="Dividers"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/symbols"
                label="Symbols"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/interactions"
                label="Interactions"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/buttons"
                label="Buttons"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/links"
                label="Links"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/app-bars"
                label="App Bars"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/navigation-rail"
                label="Navigation Rail"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/icon-buttons"
                label="Icon Buttons"
              />
            </div>
            <div>
              <ExpressiveTextLink
                href="/colors"
                label="Colors"
              />
            </div>
            <div>
              <ExpressiveTextLink
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

const styles = { layout: { alignItems: 'start' } } as const;

export function SplitRoute(): ReactElement {
  return (
    <ExpressiveContainerPadding
      left
      right
      top
      bottom
      padding={24}
    >
      <ExpressivePaneGrid
        columns="max-content 1fr"
        style={styles.layout}
      >
        <Nav />
        <Outlet />
      </ExpressivePaneGrid>
    </ExpressiveContainerPadding>
  );
}
