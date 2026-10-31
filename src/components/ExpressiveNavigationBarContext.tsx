import { createContext, useContext } from 'react';

export const ExpressiveNavigationBarContext = createContext<boolean>(false);

export function useExpressiveNavigationBarContext(): boolean {
    return useContext(ExpressiveNavigationBarContext);
}
