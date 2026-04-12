import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveHoveredStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isHovered?: boolean;
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
  hovered: {
    opacity: expressiveTokens['md.sys.opacity.hovered'],
  },
} as const;

export function ExpressiveHoveredStateLayer({ isHovered = false, style, ...props }: Readonly<ExpressiveHoveredStateLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...expressivePresets.transition.effectsSlow,
        ...(isHovered ? rootStyles.hovered : null),
        ...style,
      }}
      {...props}
    />
  );
}
