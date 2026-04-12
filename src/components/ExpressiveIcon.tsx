import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { toRem } from '../helpers/styles';

export interface ExpressiveIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'children'> {
  readonly size?: number | string;
  readonly symbol?: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    flexShrink: 0,
    fontSize: toRem(24),
    height: '1em',
    maxHeight: '100%',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  custom: (size: number | string) => ({
    fontSize: toRem(size),
  }),
} as const;

export function ExpressiveIcon({ size, symbol, style, ...props }: Readonly<ExpressiveIconProps>): ReactElement {
  return (
    <span
      style={{
        ...rootStyles.base,
        ...(size !== undefined ? rootStyles.custom(size) : null),
        ...style,
      }}
      {...props}
    >
      {symbol}
    </span>
  );
}
