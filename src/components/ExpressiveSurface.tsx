import type { CSSProperties, HTMLProps, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly surface?: -1 | 0 | 1 | 2 | 3 | 4 | 5;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    color: expressiveTokens['md.sys.color.on-surface'],
  },
  surface: {
    backgroundColor: expressiveTokens['md.sys.color.surface'],
  },
  surfaceContainerLowest: {
    backgroundColor: expressiveTokens['md.sys.color.surface-container-lowest'],
  },
  surfaceContainerLow: {
    backgroundColor: expressiveTokens['md.sys.color.surface-container-low'],
  },
  surfaceContainer: {
    backgroundColor: expressiveTokens['md.sys.color.surface-container'],
  },
  surfaceContainerHigh: {
    backgroundColor: expressiveTokens['md.sys.color.surface-container-high'],
  },
  surfaceContainerHighest: {
    backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
  },
} as const;

export function ExpressiveSurface({ surface = 1, style, ...props }: Readonly<ExpressiveSurfaceProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...(surface === 0 ? rootStyles.surfaceContainerLowest : null),
        ...(surface === 1 ? rootStyles.surface : null),
        ...(surface === 2 ? rootStyles.surfaceContainerLow : null),
        ...(surface === 3 ? rootStyles.surfaceContainer : null),
        ...(surface === 4 ? rootStyles.surfaceContainerHigh : null),
        ...(surface === 5 ? rootStyles.surfaceContainerHighest : null),
        ...style,
      }}
      {...props}
    />
  );
}
