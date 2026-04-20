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

import {
  useContext,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { ExpressiveTypographyEnum } from '../enums';
import { ExpressiveHeadingContextValue } from './ExpressiveHeadingContext';

type ExpressiveHeadingLevelEnum = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExpressiveHeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  readonly font?: ExpressiveTypographyEnum;
  readonly children: ReactNode;
  readonly level?: ExpressiveHeadingLevelEnum;
  readonly style?: CSSProperties;
}

export function ExpressiveHeading({
  font,
  children,
  level,
  style,
  ...props
}: Readonly<ExpressiveHeadingProps>): ReactElement {
  const context = useContext(ExpressiveHeadingContextValue);
  const resolvedLevel = level ?? context ?? 1;

  const headingStyle = mergeStyles(
    font !== undefined ? expressivePresets.font[font] : null,
    style,
  );

  if (resolvedLevel === 2) {
    return (
      <h2
        style={headingStyle}
        {...props}
      >
        {children}
      </h2>
    );
  }

  if (resolvedLevel === 3) {
    return (
      <h3
        style={headingStyle}
        {...props}
      >
        {children}
      </h3>
    );
  }

  if (resolvedLevel === 4) {
    return (
      <h4
        style={headingStyle}
        {...props}
      >
        {children}
      </h4>
    );
  }

  if (resolvedLevel === 5) {
    return (
      <h5
        style={headingStyle}
        {...props}
      >
        {children}
      </h5>
    );
  }

  if (resolvedLevel === 6) {
    return (
      <h6
        style={headingStyle}
        {...props}
      >
        {children}
      </h6>
    );
  }

  return (
    <h1
      style={headingStyle}
      {...props}
    >
      {children}
    </h1>
  );
}

ExpressiveHeading.font = ExpressiveTypographyEnum;
