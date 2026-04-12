import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveFocusedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isFocused?: boolean;
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
  focused: {
    opacity: expressiveTokens['md.sys.opacity.focused'],
  },
} as const;

export function ExpressiveFocusedStateLayer({ isFocused = false, style, ...props }: Readonly<ExpressiveFocusedStateLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.effectsSlow,
        ...(isFocused ? rootStyles.focused : null),
        ...style,
      }}
      {...props}
    />
  );
}
