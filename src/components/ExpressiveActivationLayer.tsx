import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveActivationLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isActive?: boolean;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    bottom: '0px',
    left: '0px',
    pointerEvents: 'none',
    position: 'absolute',
    right: '0px',
    top: '0px',
    transitionProperty: 'transform, opacity',
    userSelect: 'none',
  },
  isActive: {
    opacity: 1,
    transform: 'scaleX(100%)',
  },
  isInactive: {
    opacity: 0,
    transform: 'scaleX(0%)',
  },
} as const;

export function ExpressiveActivationLayer({ isActive = false, style, ...props }: Readonly<ExpressiveActivationLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.spatialFast,
        ...(isActive ? rootStyles.isActive : rootStyles.isInactive),
        ...style,
      }}
      {...props}
    />
  );
}
