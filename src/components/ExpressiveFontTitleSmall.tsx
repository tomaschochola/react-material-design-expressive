import type { CSSProperties, HTMLAttributes } from 'react';
import { expressivePresets } from '../css/presets';

export interface ExpressiveFontTitleSmallProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
  readonly top?: boolean | string | number;
  readonly bottom?: boolean | string | number;
  readonly block?: boolean;
  readonly inline?: boolean;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    marginBottom: '0px',
    marginTop: '0px',
  },
  topDefault: {
    marginTop: '0.5lh',
  },
  bottomDefault: {
    marginBottom: '0.5lh',
  },
  topCustom: (value: string | number) => ({
    marginTop: value,
  }),
  bottomCustom: (value: string | number) => ({
    marginBottom: value,
  }),
  block: {
    display: 'block',
  },
  inline: {
    display: 'inline-block',
  },
} as const;

export function ExpressiveFontTitleSmall({ top, bottom, block, inline, children, style, ...props }: Readonly<ExpressiveFontTitleSmallProps>) {
  return (
    <span
      style={{
        ...expressivePresets.font.titleSmall,
        ...rootStyles.base,
        ...(top === true ? rootStyles.topDefault : null),
        ...(typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null),
        ...(bottom === true ? rootStyles.bottomDefault : null),
        ...(typeof bottom === 'string' || typeof bottom === 'number' ? rootStyles.bottomCustom(bottom) : null),
        ...(bottom !== undefined || top !== undefined ? rootStyles.inline : null),
        ...(block === true ? rootStyles.block : null),
        ...(inline === true ? rootStyles.inline : null),
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
