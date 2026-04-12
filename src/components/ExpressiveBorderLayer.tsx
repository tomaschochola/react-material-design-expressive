import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveBorderLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isDisabled?: boolean;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    borderBottomColor: 'currentcolor',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderLeftColor: 'currentcolor',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    borderRightColor: 'currentcolor',
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    borderTopColor: 'currentcolor',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    bottom: '0px',
    color: expressiveTokens['md.sys.color.outline'],
    left: '0px',
    opacity: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: '0px',
    top: '0px',
    userSelect: 'none',
  },
  isDisabled: {
    color: expressiveTokens['md.sys.color.on-surface-variant'],
    opacity: expressiveTokens['md.sys.opacity.disabled-outline'],
  },
} as const;

export function ExpressiveBorderLayer({ isDisabled = false, style, ...props }: Readonly<ExpressiveBorderLayerProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...(isDisabled ? rootStyles.isDisabled : null),
        ...style,
      }}
      {...props}
    />
  );
}
