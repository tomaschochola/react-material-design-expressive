import type { CSSProperties, ReactElement, SVGAttributes } from 'react';
import { useMemo } from 'react';
import { ExpressiveSymbolCircle } from '../symbols/ExpressiveSymbolCircle';
import { ExpressiveSymbolFlower } from '../symbols/ExpressiveSymbolFlower';
import { ExpressiveSymbolPill } from '../symbols/ExpressiveSymbolPill';
import { ExpressiveSymbolRect } from '../symbols/ExpressiveSymbolRect';
import { ExpressiveSymbolTriangle } from '../symbols/ExpressiveSymbolTriangle';

export const ExpressiveRandomSymbolPool = [
  ExpressiveSymbolCircle,
  ExpressiveSymbolFlower,
  ExpressiveSymbolPill,
  ExpressiveSymbolRect,
  ExpressiveSymbolTriangle,
];

let counter = 0;

function next(): number {
  return counter++;
}

interface ExpressiveRandomSymbolProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'children'> {
  readonly style?: CSSProperties;
}

export function ExpressiveRandomSymbol(props: Readonly<ExpressiveRandomSymbolProps>): ReactElement {
  const draw = useMemo(() => next() % ExpressiveRandomSymbolPool.length, []);

  const SymbolComponent = ExpressiveRandomSymbolPool[draw];

  if (SymbolComponent === undefined) {
    throw new Error(`ExpressiveRandomSymbol: no symbol component found for index ${draw.toString()}`);
  }

  return (
    <SymbolComponent
      {...props}
    />
  );
}
