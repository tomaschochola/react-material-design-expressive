import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    backgroundColor: expressiveTokens['md.sys.color.surface'],
    color: expressiveTokens['md.sys.color.on-surface-variant'],
    columnGap: '8px',
    display: 'flex',
    height: '80px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    rowGap: '8px',
    transitionProperty: 'transform',
  },
} as const;

export function ExpressiveNavigationBar({ style, ...props }: Readonly<ExpressiveNavigationBarProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.spatialDefault,
        ...expressivePresets.font.labelMedium,
        ...style,
      }}
      {...props}
    />
  );
}
