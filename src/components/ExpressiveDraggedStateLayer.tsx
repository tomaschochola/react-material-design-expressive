import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveDraggedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isDragged?: boolean;
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
  dragged: {
    opacity: expressiveTokens['md.sys.opacity.dragged'],
  },
} as const;

export function ExpressiveDraggedStateLayer({ isDragged = false, style, ...props }: Readonly<ExpressiveDraggedStateLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.effectsSlow,
        ...(isDragged ? rootStyles.dragged : null),
        ...style,
      }}
      {...props}
    />
  );
}
