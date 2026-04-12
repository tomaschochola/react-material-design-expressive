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

import { createBrowserRouter } from 'react-router';
import { RouteErrorBoundary } from './boundaries/RouteErrorBoundary';
import { AppBarsRoute } from './routes/AppBarsRoute';
import { ButtonsRoute } from './routes/ButtonsRoute';
import { CardsRoute } from './routes/CardsRoute';
import { ColorsRoute } from './routes/ColorsRoute';
import { DividersRoute } from './routes/DividersRoute';
import { FontsRoute } from './routes/FontsRoute';
import { HeadingsRoute } from './routes/HeadingsRoute';
import { IconButtonsRoute } from './routes/IconButtonsRoute';
import { IndexRoute } from './routes/IndexRoute';
import { InteractionsRoute } from './routes/InteractionsRoute';
import { LinksRoute } from './routes/LinksRoute';
import { NavigationRailRoute } from './routes/NavigationRailRoute';
import { NotFoundRoute } from './routes/NotFoundRoute';
import { RadiusRoute } from './routes/RadiusRoute';
import { RootRoute } from './routes/RootRoute';
import { SplitRoute } from './routes/SplitRoute';
import { SymbolsRoute } from './routes/SymbolsRoute';

export function createRouter() {
  return createBrowserRouter([
    {
      element: <RootRoute />,
      errorElement: <RouteErrorBoundary />,
      children: [
        {
          element: <SplitRoute />,
          children: [
            {
              index: true,
              element: <IndexRoute />,
            },
            {
              path: 'app-bars',
              element: <AppBarsRoute />,
            },
            {
              path: 'buttons',
              element: <ButtonsRoute />,
            },
            {
              path: 'cards',
              element: <CardsRoute />,
            },
            {
              path: 'colors',
              element: <ColorsRoute />,
            },
            {
              path: 'divider',
              element: <DividersRoute />,
            },
            {
              path: 'fonts',
              element: <FontsRoute />,
            },
            {
              path: 'headings',
              element: <HeadingsRoute />,
            },
            {
              path: 'icon-buttons',
              element: <IconButtonsRoute />,
            },
            {
              path: 'interactions',
              element: <InteractionsRoute />,
            },
            {
              path: 'links',
              element: <LinksRoute />,
            },
            {
              path: 'navigation-rail',
              element: <NavigationRailRoute />,
            },
            {
              path: 'radius',
              element: <RadiusRoute />,
            },
            {
              path: 'symbols',
              element: <SymbolsRoute />,
            },
            {
              path: '*',
              element: <NotFoundRoute />,
            },
          ],
        },
      ],
    },
  ]);
}
