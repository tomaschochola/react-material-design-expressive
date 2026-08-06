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

import { createContext, useContext, type ReactElement, type ReactNode } from 'react';
import type { ExpressiveHeadingProps } from './ExpressiveHeading';

type ExpressiveHeadingLevelEnum = NonNullable<ExpressiveHeadingProps['level']>;

export interface ExpressiveHeadingContextProps {
  readonly children: ReactNode;
}

export const ExpressiveHeadingContextValue = createContext<ExpressiveHeadingLevelEnum | undefined>(undefined);

function assertExpressiveHeadingLevel(level: number): asserts level is ExpressiveHeadingLevelEnum {
  if (level < 1 || level > 6) {
    throw new Error('ExpressiveHeadingContext: level must be between 1 and 6');
  }
}

export function ExpressiveHeadingContext({ children }: Readonly<ExpressiveHeadingContextProps>): ReactElement {
  const parent = useContext(ExpressiveHeadingContextValue) ?? 0;

  const level = parent + 1;

  assertExpressiveHeadingLevel(level);

  return <ExpressiveHeadingContextValue.Provider value={level}>{children}</ExpressiveHeadingContextValue.Provider>;
}
