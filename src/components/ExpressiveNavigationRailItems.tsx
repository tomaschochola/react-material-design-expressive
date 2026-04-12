import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveNavigationRailItemsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '18px',
    paddingTop: '18px',
    rowGap: '12px',
  },
} as const;

export function ExpressiveNavigationRailItems({ style, ...props }: Readonly<ExpressiveNavigationRailItemsProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...style,
      }}
      {...props}
    />
  );
}
