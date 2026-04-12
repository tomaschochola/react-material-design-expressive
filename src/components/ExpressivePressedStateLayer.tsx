import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressivePressedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isPressed?: boolean;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    backgroundColor: 'currentColor',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    bottom: '0px',
    left: '0px',
    opacity: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: '0px',
    top: '0px',
    transitionProperty: 'opacity',
    userSelect: 'none',
  },
  pressed: {
    opacity: expressiveTokens['md.sys.opacity.pressed'],
    transitionDuration: '0ms',
  },
} as const;

export function ExpressivePressedStateLayer({ isPressed = false, style, ...props }: Readonly<ExpressivePressedStateLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.effectsSlow,
        ...(isPressed ? rootStyles.pressed : null),
        ...style,
      }}
      {...props}
    />
  );
}
