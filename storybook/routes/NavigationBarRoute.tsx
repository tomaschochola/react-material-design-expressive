import type { ReactElement } from 'react';
import { useLocation } from 'react-router';
import { ExpressiveHeadingContext } from '../../src/components/ExpressiveHeadingContext';
import { ExpressiveNavigationBar } from '../../src/components/ExpressiveNavigationBar';
import { ExpressiveNavigationBarLink } from '../../src/components/ExpressiveNavigationBarLink';
import { ExpressiveRandomSymbol } from '../../src/components/ExpressiveRandomSymbol';
import { StorybookLayout } from '../components/StorybookLayout';
import { useSeo } from '../lang/seo';
import { useTrans } from '../lang/trans';

function resolveCurrentProps(hash: string, href: string): { readonly 'aria-current'?: 'page' } {
    return hash === href ? { 'aria-current': 'page' } : {};
}

export function NavigationBarRoute(): ReactElement {
    const trans = useTrans();
    const { hash } = useLocation();

    useSeo({
        title: trans.format('routes.navigation_bar.seo.title'),
        description: trans.format('routes.navigation_bar.seo.description'),
    });

    return (
        <main>
            <ExpressiveHeadingContext>
                <StorybookLayout
                    title="Navigation bars"
                    paragraph="Navigation bars offer a persistent, convenient way to switch between primary destinations in an app. 3–5 destinations is the recommended range."
                >
                    <StorybookLayout.Section label="Navigation Bar: Vertical items">
                        <ExpressiveNavigationBar>
                            <ExpressiveNavigationBarLink
                                href="#v3-1"
                                {...resolveCurrentProps(hash, '#v3-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v3-2"
                                {...resolveCurrentProps(hash, '#v3-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v3-3"
                                {...resolveCurrentProps(hash, '#v3-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                        <ExpressiveNavigationBar>
                            <ExpressiveNavigationBarLink
                                href="#v4-1"
                                {...resolveCurrentProps(hash, '#v4-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v4-2"
                                {...resolveCurrentProps(hash, '#v4-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v4-3"
                                {...resolveCurrentProps(hash, '#v4-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v4-4"
                                {...resolveCurrentProps(hash, '#v4-4')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                        <ExpressiveNavigationBar>
                            <ExpressiveNavigationBarLink
                                href="#v5-1"
                                {...resolveCurrentProps(hash, '#v5-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v5-2"
                                {...resolveCurrentProps(hash, '#v5-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v5-3"
                                {...resolveCurrentProps(hash, '#v5-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v5-4"
                                {...resolveCurrentProps(hash, '#v5-4')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#v5-5"
                                {...resolveCurrentProps(hash, '#v5-5')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                    </StorybookLayout.Section>
                    <StorybookLayout.Section label="Navigation Bar: Horizontal items">
                        <ExpressiveNavigationBar horizontal>
                            <ExpressiveNavigationBarLink
                                href="#h3-1"
                                {...resolveCurrentProps(hash, '#h3-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h3-2"
                                {...resolveCurrentProps(hash, '#h3-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h3-3"
                                {...resolveCurrentProps(hash, '#h3-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                        <ExpressiveNavigationBar horizontal>
                            <ExpressiveNavigationBarLink
                                href="#h4-1"
                                {...resolveCurrentProps(hash, '#h4-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h4-2"
                                {...resolveCurrentProps(hash, '#h4-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h4-3"
                                {...resolveCurrentProps(hash, '#h4-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h4-4"
                                {...resolveCurrentProps(hash, '#h4-4')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                        <ExpressiveNavigationBar horizontal>
                            <ExpressiveNavigationBarLink
                                href="#h5-1"
                                {...resolveCurrentProps(hash, '#h5-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h5-2"
                                {...resolveCurrentProps(hash, '#h5-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h5-3"
                                {...resolveCurrentProps(hash, '#h5-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h5-4"
                                {...resolveCurrentProps(hash, '#h5-4')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h5-5"
                                {...resolveCurrentProps(hash, '#h5-5')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                        </ExpressiveNavigationBar>
                        <ExpressiveNavigationBar horizontal>
                            <ExpressiveNavigationBarLink
                                href="#h6-1"
                                {...resolveCurrentProps(hash, '#h6-1')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h6-2"
                                {...resolveCurrentProps(hash, '#h6-2')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h6-3"
                                {...resolveCurrentProps(hash, '#h6-3')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h6-4"
                                {...resolveCurrentProps(hash, '#h6-4')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h6-5"
                                {...resolveCurrentProps(hash, '#h6-5')}
                                symbol={<ExpressiveRandomSymbol />}
                                label="Label"
                            />
                            <ExpressiveNavigationBarLink
                                href="#h6-6"
                                {...resolveCurrentProps(hash, '#h6-6')}
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
