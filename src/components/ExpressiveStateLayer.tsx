import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isDragged?: boolean;
  readonly isFocused?: boolean;
  readonly isHovered?: boolean;
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
    userSelect: 'none',
  },
  hovered: {
    opacity: expressiveTokens['md.sys.opacity.hovered'],
  },
  pressed: {
    opacity: expressiveTokens['md.sys.opacity.pressed'],
  },
  focused: {
    opacity: expressiveTokens['md.sys.opacity.focused'],
  },
  dragged: {
    opacity: expressiveTokens['md.sys.opacity.dragged'],
  },
} as const;

export function ExpressiveStateLayer({ isHovered = false, isPressed = false, isFocused = false, isDragged = false, style, ...props }: Readonly<ExpressiveStateLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...(isHovered ? rootStyles.hovered : null),
        ...(isFocused ? rootStyles.focused : null),
        ...(isPressed ? rootStyles.pressed : null),
        ...(isDragged ? rootStyles.dragged : null),
        ...style,
      }}
      {...props}
    />
  );
}
