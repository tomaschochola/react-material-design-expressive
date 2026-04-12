import type { CSSProperties, ReactElement } from 'react';
import { mergeProps, useSeparator, type SeparatorProps } from 'react-aria';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveTildeHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    color: expressiveTokens['md.sys.color.outline-variant'],
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
} as const;

export function ExpressiveTildeHorizontalDivider({ style, ...props }: Readonly<ExpressiveTildeHorizontalDividerProps>): ReactElement {
  const { separatorProps } = useSeparator(props);

  return (
    <svg
      aria-hidden="true"
      width="155"
      height="9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...mergeProps(
        {
          style: {
            ...rootStyles.base,
            ...style,
          },
        },
        separatorProps,
        props,
      )}
    >
      <path
        d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
