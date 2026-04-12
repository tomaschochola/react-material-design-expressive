import { useContext, type CSSProperties, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import { ExpressiveHeadingContextValue } from './ExpressiveHeadingContext';

type ExpressiveHeadingLevelEnum = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExpressiveHeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {
  readonly children: ReactNode;
  readonly level?: ExpressiveHeadingLevelEnum;
  readonly style?: CSSProperties;
}

export function ExpressiveHeading({ children, level, style, ...props }: Readonly<ExpressiveHeadingProps>): ReactElement {
  const context = useContext(ExpressiveHeadingContextValue);
  const resolvedLevel = context ?? level;

  if (resolvedLevel === 2) {
    return (
      <h2
        style={style}
        {...props}
      >
        {children}
      </h2>
    );
  }

  if (resolvedLevel === 3) {
    return (
      <h3
        style={style}
        {...props}
      >
        {children}
      </h3>
    );
  }

  if (resolvedLevel === 4) {
    return (
      <h4
        style={style}
        {...props}
      >
        {children}
      </h4>
    );
  }

  if (resolvedLevel === 5) {
    return (
      <h5
        style={style}
        {...props}
      >
        {children}
      </h5>
    );
  }

  if (resolvedLevel === 6) {
    return (
      <h6
        style={style}
        {...props}
      >
        {children}
      </h6>
    );
  }

  return (
    <h1
      style={style}
      {...props}
    >
      {children}
    </h1>
  );
}
