import type { ReactElement, SVGAttributes } from 'react';

type ExpressiveSymbolCircleProps = Omit<SVGAttributes<SVGSVGElement>, 'children'>;

export function ExpressiveSymbolCircle({ ...props }: Readonly<ExpressiveSymbolCircleProps>): ReactElement {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="currentColor"
      />
    </svg>
  );
}
