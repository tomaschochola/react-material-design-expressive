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
import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { mergeStyles } from '../css/helpers';

export interface ExpressiveFontProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  readonly children?: ReactNode;
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
      marginTop: '1lh',
    },
    bottomDefault: {
      marginBottom: '1lh',
    },
    block: {
      display: 'block',
    },
    inline: {
      display: 'inline-block',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveFont({
  top,
  bottom,
  block,
  inline,
  children,
  style,
  ...props
}: Readonly<ExpressiveFontProps>): ReactElement {
  return (
    <span
      style={mergeStyles(
        styles.root.base,
        top === true ? styles.root.topDefault : null,
        typeof top === 'string' || typeof top === 'number' ? { marginTop: top } : null,
        bottom === true ? styles.root.bottomDefault : null,
        typeof bottom === 'string' || typeof bottom === 'number' ? { marginBottom: bottom } : null,
        bottom !== undefined || top !== undefined ? styles.root.inline : null,
        block === true ? styles.root.block : null,
        inline === true ? styles.root.inline : null,
        style,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
