import type { ReactElement, SVGAttributes } from 'react';

type ExpressiveSymbolTriangleProps = Omit<SVGAttributes<SVGSVGElement>, 'children'>;

export function ExpressiveSymbolTriangle({ ...props }: Readonly<ExpressiveSymbolTriangleProps>): ReactElement {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon
        points="20,0 40,40 0,40"
        fill="currentColor"
      />
    </svg>
  );
}
