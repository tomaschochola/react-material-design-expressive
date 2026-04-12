import type { CSSProperties, HTMLProps, ReactElement } from 'react';

export interface ExpressivePaneGridProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly columns?: string;
  readonly gap?: string | number;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    columnGap: '24px',
    display: 'grid',
    rowGap: '24px',
  },
  columns: (columns: string) => ({
    gridTemplateColumns: columns,
  }),
  gap: (gap: string | number) => ({
    columnGap: gap,
    rowGap: gap,
  }),
} as const;

export function ExpressivePaneGrid({ children, columns, gap, style, ...props }: Readonly<ExpressivePaneGridProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.base,
        ...(columns !== undefined ? rootStyles.columns(columns) : null),
        ...(gap !== undefined ? rootStyles.gap(gap) : null),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
