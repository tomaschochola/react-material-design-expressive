import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    backgroundColor: expressiveTokens['md.sys.color.surface'],
    color: expressiveTokens['md.sys.color.on-surface-variant'],
    overflowX: 'hidden',
    overflowY: 'hidden',
    transitionProperty: 'transform',
    width: '88px',
  },
} as const;

export function ExpressiveNavigationRail({ style, ...props }: Readonly<ExpressiveNavigationRailProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.spatialDefault,
        ...style,
      }}
      {...props}
    />
  );
}
