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
import type { CSSProperties, ReactElement } from 'react';
import { mergeProps, useSeparator, type SeparatorProps } from 'react-aria';
import { mergeStyles } from '../css/helpers';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      borderBottomStyle: 'none',
      borderBottomWidth: '0px',
      borderLeftStyle: 'none',
      borderLeftWidth: '0px',
      borderRightStyle: 'none',
      borderRightWidth: '0px',
      borderTopColor: 'currentColor',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      color: expressiveTokens['md.sys.color.outline-variant'],
      marginBottom: '0px',
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: '0px',
      position: 'relative',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveHorizontalDivider({ style, ...props }: Readonly<ExpressiveHorizontalDividerProps>): ReactElement {
  const { separatorProps } = useSeparator(props);

  return (
    <hr
      {...mergeProps(
        separatorProps,
        props,
      )}
      style={mergeStyles(
        styles.root.base,
        style,
      )}
    />
  );
}
