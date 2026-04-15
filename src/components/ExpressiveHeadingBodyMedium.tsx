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

import type { CSSProperties, ReactElement } from 'react';
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { ExpressiveHeading, type ExpressiveHeadingProps } from './ExpressiveHeading';

export interface ExpressiveHeadingBodyMediumProps extends Omit<ExpressiveHeadingProps, 'style'> {
  readonly style?: CSSProperties;
}

export function ExpressiveHeadingBodyMedium({
  children,
  style,
  ...props
}: Readonly<ExpressiveHeadingBodyMediumProps>): ReactElement {
  return (
    <ExpressiveHeading
      style={mergeStyles(
        expressivePresets.font.bodyMedium,
        style,
      )}
      {...props}
    >
      {children}
    </ExpressiveHeading>
  );
}
