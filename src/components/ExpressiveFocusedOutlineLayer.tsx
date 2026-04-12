import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveFocusOutlineLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isFocusVisible?: boolean;
  readonly isInset?: boolean;
  readonly style?: CSSProperties;
}

const outlineKeyframes = 'expressive-focused-outline-layer-outline';
const insetKeyframes = 'expressive-focused-outline-layer-inset';

const keyframesStyles = `
@keyframes ${outlineKeyframes} {
  0% {
    outline-width: 0px;
  }
  25% {
    outline-width: 9px;
  }
  100% {
    outline-width: 3px;
  }
}

@keyframes ${insetKeyframes} {
  0% {
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
  }
  25% {
    border-bottom-width: 9px;
    border-left-width: 9px;
    border-right-width: 9px;
    border-top-width: 9px;
  }
  100% {
    border-bottom-width: 3px;
    border-left-width: 3px;
    border-right-width: 3px;
    border-top-width: 3px;
  }
}
`;

const rootStyles = {
  base: {
    animationDuration: expressiveTokens['md.sys.duration.spatial-default'],
    animationFillMode: 'forwards',
    animationTimingFunction: expressiveTokens['md.sys.timing-function.effects-default'],
    borderBottomColor: expressiveTokens['md.sys.color.secondary'],
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0px',
    borderLeftColor: expressiveTokens['md.sys.color.secondary'],
    borderLeftStyle: 'solid',
    borderLeftWidth: '0px',
    borderRightColor: expressiveTokens['md.sys.color.secondary'],
    borderRightStyle: 'solid',
    borderRightWidth: '0px',
    borderTopColor: expressiveTokens['md.sys.color.secondary'],
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderTopStyle: 'solid',
    borderTopWidth: '0px',
    bottom: '0px',
    left: '0px',
    outlineColor: expressiveTokens['md.sys.color.secondary'],
    outlineOffset: '2px',
    outlineStyle: 'solid',
    outlineWidth: '0px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: '0px',
    top: '0px',
    userSelect: 'none',
    zIndex: 90,
  },
  inset: {
    animationName: insetKeyframes,
    borderBottomWidth: '3px',
    borderLeftWidth: '3px',
    borderRightWidth: '3px',
    borderTopWidth: '3px',
  },
  outline: {
    animationName: outlineKeyframes,
    outlineWidth: '3px',
  },
} as const;

export function ExpressiveFocusedOutlineLayer({ isFocusVisible = false, isInset = false, style, ...props }: Readonly<ExpressiveFocusOutlineLayerProps>): ReactElement {
  const variant = isInset ? rootStyles.inset : rootStyles.outline;

  return (
    <>
      <style>
        {keyframesStyles}
      </style>
      <div
        style={{
          ...rootStyles.base,
          ...(isFocusVisible ? variant : null),
          ...style,
        }}
        {...props}
      />
    </>
  );
}
