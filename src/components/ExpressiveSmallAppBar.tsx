import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';

export interface ExpressiveSmallAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly headline?: ReactNode;
  readonly subhead?: ReactNode;
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  root: {
    base: {
      alignItems: 'center',
      backgroundColor: expressiveTokens['md.sys.color.surface'],
      color: expressiveTokens['md.sys.color.on-surface'],
      columnGap: '16px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      minHeight: '64px',
      paddingLeft: '16px',
      paddingRight: '16px',
      position: 'relative',
      transitionProperty: 'left, right, top, bottom, transform',
    },
  },
  leading: {
    base: {
      alignItems: 'center',
      color: expressiveTokens['md.sys.color.on-surface'],
      display: 'flex',
    },
  },
  content: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface'],
    },
  },
  trailing: {
    base: {
      alignItems: 'center',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'flex',
      justifySelf: 'end',
    },
  },
  headline: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface'],
      lineHeight: 1,
    },
  },
  subhead: {
    base: {
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      lineHeight: 1,
    },
  },
} as const;

export function ExpressiveSmallAppBar({
  leading,
  trailing,
  headline,
  subhead,
  style,
  ...props
}: Readonly<ExpressiveSmallAppBarProps>): ReactElement {
  return (
    <div
      style={{
        ...rootStyles.root.base,
        ...expressivePresets.transition.spatialDefault,
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          ...rootStyles.leading.base,
        }}
      >
        {leading}
      </div>
      <div
        style={{
          ...rootStyles.content.base,
        }}
      >
        {headline !== undefined
          ? (
              <div
                style={{
                  ...expressivePresets.font.titleLarge,
                  ...rootStyles.headline.base,
                }}
              >
                {headline}
              </div>
            )
          : null}
        {subhead !== undefined
          ? (
              <div
                style={{
                  ...expressivePresets.font.labelLarge,
                  ...rootStyles.subhead.base,
                }}
              >
                {subhead}
              </div>
            )
          : null}
      </div>
      <div
        style={{
          ...rootStyles.trailing.base,
        }}
      >
        {trailing}
      </div>
    </div>
  );
}
