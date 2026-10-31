import type { ReactElement } from 'react';
import { ExpressiveLink } from '../../src/components/ExpressiveLink';
import { ExpressiveNavigationBar } from '../../src/components/ExpressiveNavigationBar';
import { ExpressiveNavigationBarLink } from '../../src/components/ExpressiveNavigationBarLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

export function IndexRoute(): ReactElement {
    const trans = useTrans();

    useSeo({
        title: trans.format('routes.index.seo.title'),
        description: trans.format('routes.index.seo.description'),
    });

    return (
        <main>
            <h1>{trans.format('routes.index.h1')}</h1>
            <ul>
                <li>
                    <ExpressiveLink
                        href="/app-bar"
                        label="App Bar"
                    />
                </li>
                <li>
                    <ExpressiveLink
                        href="/navigation-bar"
                        label="Navigation Bar"
                    />
                </li>
            </ul>
            <ExpressiveNavigationBar fixed>
                <ExpressiveNavigationBarLink
                    aria-current
                    href="/"
                    label="Home"
                    symbol={<ExpressiveRandomSymbol />}
                />
                <ExpressiveNavigationBarLink
                    href="/"
                    label="Home"
                    symbol={<ExpressiveRandomSymbol />}
                />
                <ExpressiveNavigationBarLink
                    href="/"
                    label="Home"
                    symbol={<ExpressiveRandomSymbol />}
                />
            </ExpressiveNavigationBar>
        </main>
    );
}
