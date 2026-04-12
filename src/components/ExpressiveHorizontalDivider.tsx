import type { CSSProperties, ReactElement } from 'react';
import { mergeProps, useSeparator, type SeparatorProps } from 'react-aria';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    borderBottomStyle: 'none',
    borderBottomWidth: '0px',
    borderLeftStyle: 'none',
    borderLeftWidth: '0px',
    borderRightStyle: 'none',
    borderRightWidth: '0px',
    borderTopColor: 'currentColor',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    color: expressiveTokens['md.sys.color.outline-variant'],
    marginBottom: '0px',
    marginLeft: '0px',
    marginRight: '0px',
    marginTop: '0px',
    position: 'relative',
  },
} as const;

export function ExpressiveHorizontalDivider({ style, ...props }: Readonly<ExpressiveHorizontalDividerProps>): ReactElement {
  const { separatorProps } = useSeparator(props);

  return (
    <hr
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
    />
  );
}
