import { useCallback, type ReactElement } from 'react';
import { Outlet, ScrollRestoration, type Location } from 'react-router';
import { ExpressiveOverscroll } from '../../src/components/ExpressiveOverscroll';

export function RootRoute(): ReactElement {
    const handleKey = useCallback(({ pathname }: Location): string => pathname, []);

    return (
        <div data-testid="sentinel">
            <Outlet />
            <ExpressiveOverscroll />
            <ScrollRestoration getKey={handleKey} />
        </div>
    );
}
