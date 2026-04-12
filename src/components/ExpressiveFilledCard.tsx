import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveFilledCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    appearance: 'none',
    backgroundColor: expressiveTokens['md.sys.color.surface-container-highest'],
    borderBottomLeftRadius: expressiveTokens['md.sys.radius.medium'],
    borderBottomRightRadius: expressiveTokens['md.sys.radius.medium'],
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveTokens['md.sys.radius.medium'],
    borderTopRightRadius: expressiveTokens['md.sys.radius.medium'],
    borderTopStyle: 'none',
    boxShadow: 'none',
    color: expressiveTokens['md.sys.color.on-surface'],
    display: 'block',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'none',
  },
} as const;

export function ExpressiveFilledCard({ children, style, ...props }: Readonly<ExpressiveFilledCardProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
