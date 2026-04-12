import type { CSSProperties, HTMLProps, ReactElement } from 'react';
import { expressiveTokens } from '../css/tokens';

type RadiusValue = number | string;

export interface ExpressiveSurfaceRadiusProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  readonly topleft?: boolean | RadiusValue;
  readonly topright?: boolean | RadiusValue;
  readonly bottomleft?: boolean | RadiusValue;
  readonly bottomright?: boolean | RadiusValue;
  readonly radius?: RadiusValue;
  readonly style?: CSSProperties;
}

const rootStyles = {
  topleft: (radius: RadiusValue) => ({
    borderTopLeftRadius: radius,
  }),
  topright: (radius: RadiusValue) => ({
    borderTopRightRadius: radius,
  }),
  bottomleft: (radius: RadiusValue) => ({
    borderBottomLeftRadius: radius,
  }),
  bottomright: (radius: RadiusValue) => ({
    borderBottomRightRadius: radius,
  }),
} as const;

export function ExpressiveSurfaceRadius({ radius = expressiveTokens['md.sys.radius.large'], topleft, topright, bottomleft, bottomright, style, ...props }: Readonly<ExpressiveSurfaceRadiusProps>): ReactElement {
  if (topleft === undefined && topright === undefined && bottomleft === undefined && bottomright === undefined) {
    topleft = true;
    topright = true;
    bottomleft = true;
    bottomright = true;
  }

  return (
    <div
      style={{
        ...(bottomright === true ? rootStyles.bottomright(radius) : null),
        ...(topleft === true ? rootStyles.topleft(radius) : null),
        ...(topright === true ? rootStyles.topright(radius) : null),
        ...(bottomleft === true ? rootStyles.bottomleft(radius) : null),
        ...(typeof bottomright === 'number' || typeof bottomright === 'string' ? rootStyles.bottomright(bottomright) : null),
        ...(typeof topleft === 'number' || typeof topleft === 'string' ? rootStyles.topleft(topleft) : null),
        ...(typeof topright === 'number' || typeof topright === 'string' ? rootStyles.topright(topright) : null),
        ...(typeof bottomleft === 'number' || typeof bottomleft === 'string' ? rootStyles.bottomleft(bottomleft) : null),
        ...style,
      }}
      {...props}
    />
  );
}
