import { createBrowserRouter } from 'react-router';
import { RouteErrorBoundary } from './boundaries/RouteErrorBoundary';
import { AppBarRoute } from './routes/AppBarRoute';
import { IndexRoute } from './routes/IndexRoute';
import { NavigationBarRoute } from './routes/NavigationBarRoute';
import { NotFoundRoute } from './routes/NotFoundRoute';
import { RootRoute } from './routes/RootRoute';

export function createRouter() {
    return createBrowserRouter([
        {
            element: <RootRoute />,
            errorElement: <RouteErrorBoundary />,
            children: [
                {
                    index: true,
                    element: <IndexRoute />,
                },
                {
                    path: 'app-bar',
                    element: <AppBarRoute />,
                },
                {
                    path: 'navigation-bar',
                    element: <NavigationBarRoute />,
                },
                {
                    path: '*',
                    element: <NotFoundRoute />,
                },
            ],
        },
    ]);
}
