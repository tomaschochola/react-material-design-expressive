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
import {
  useContext,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { mergeStyles } from '../css/helpers';
import { ExpressiveHeadingContextValue } from './ExpressiveHeadingContext';

type ExpressiveHeadingLevelEnum = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExpressiveHeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  readonly children: ReactNode;
  readonly level?: ExpressiveHeadingLevelEnum;
  readonly top?: boolean | string | number;
  readonly bottom?: boolean | string | number;
  readonly block?: boolean;
  readonly inline?: boolean;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      marginBottom: '0px',
      marginTop: '0px',
    },
    topDefault: {
      marginTop: '0.5lh',
    },
    bottomDefault: {
      marginBottom: '0.5lh',
    },
    block: {
      display: 'block',
    },
    inline: {
      display: 'inline-block',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveHeading({
  children,
  level,
  top,
  bottom,
  block,
  inline,
  style,
  ...props
}: Readonly<ExpressiveHeadingProps>): ReactElement {
  const context = useContext(ExpressiveHeadingContextValue);
  const resolvedLevel = context ?? level;

  const headingStyle = mergeStyles(
    styles.root.base,
    top === true ? styles.root.topDefault : null,
    typeof top === 'string' || typeof top === 'number' ? { marginTop: top } : null,
    bottom === true ? styles.root.bottomDefault : null,
    typeof bottom === 'string' || typeof bottom === 'number' ? { marginBottom: bottom } : null,
    bottom !== undefined || top !== undefined ? styles.root.block : null,
    block === true ? styles.root.block : null,
    inline === true ? styles.root.inline : null,
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
