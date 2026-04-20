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

import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { ExpressiveTypographyEnum } from '../enums';

export interface ExpressiveSpanProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  readonly font?: ExpressiveTypographyEnum;
  readonly children?: ReactNode;
  readonly style?: CSSProperties;
}

export function ExpressiveSpan({ font, children, style, ...props }: Readonly<ExpressiveSpanProps>): ReactElement {
  return (
    <span
      style={mergeStyles(
        font !== undefined ? expressivePresets.typography[font] : null,
        style,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

ExpressiveSpan.font = ExpressiveTypographyEnum;
