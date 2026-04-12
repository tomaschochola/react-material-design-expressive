import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveTouchTargetProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    minHeight: '48px',
    minWidth: '48px',
    position: 'relative',
    verticalAlign: 'middle',
  },
} as const;

export function ExpressiveTouchTarget({ children, style, ...props }: Readonly<ExpressiveTouchTargetProps>): ReactElement {
  return (
    <span
      style={{
        ...rootStyles.base,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
