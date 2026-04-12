import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveOverscrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    paddingBottom: '50vh',
    position: 'relative',
  },
} as const;

export function ExpressiveOverscroll({ children, style, ...props }: Readonly<ExpressiveOverscrollProps>): ReactElement {
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
