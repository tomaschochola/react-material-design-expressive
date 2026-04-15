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
import { ExpressiveFont, type ExpressiveFontProps } from './ExpressiveFont';

export interface ExpressiveFontHeadlineSmallProps extends Omit<ExpressiveFontProps, 'style'> {
  readonly style?: CSSProperties;
}

export function ExpressiveFontHeadlineSmall({
  children,
  style,
  ...props
}: Readonly<ExpressiveFontHeadlineSmallProps>): ReactElement {
  return (
    <ExpressiveFont
      style={mergeStyles(
        expressivePresets.font.headlineSmall,
        style,
      )}
      {...props}
    >
      {children}
    </ExpressiveFont>
  );
}
