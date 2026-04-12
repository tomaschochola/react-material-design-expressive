import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, useLink, type AriaLinkOptions } from 'react-aria';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveActivationLayer } from './ExpressiveActivationLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveNavigationRailLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label?: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  link: {
    base: {
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.large'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.large'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.large'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.large'],
      borderTopStyle: 'none',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'block',
      minWidth: '0px',
      outlineStyle: 'none',
      outlineWidth: '0px',
      paddingBottom: '12px',
      position: 'relative',
      textAlign: 'center',
    },
    active: {
      color: expressiveTokens['md.sys.color.on-surface'],
    },
    disabled: {
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-container']})`,
    },
  },
  indicator: {
    base: {
      alignItems: 'center',
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
      display: 'flex',
      height: '32px',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      textAlign: 'center',
      width: '56px',
    },
    active: {
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
    disabled: {
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-container']})`,
    },
  },
  symbol: {
    base: {
      alignItems: 'center',
      display: 'inline-flex',
      fontSize: '24px',
      justifyContent: 'center',
      maxHeight: '24px',
      maxWidth: '24px',
      position: 'relative',
    },
  },
  label: {
    base: {
      marginTop: '4px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
} as const;

export function ExpressiveNavigationRailLink({ label, symbol, style, ...props }: Readonly<ExpressiveNavigationRailLinkProps>): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null);
  const { linkProps, isPressed } = useLink(props, ref);

  const { hoverProps, isHovered } = useHover({
    isDisabled: props.isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  const isCurrent = Boolean(linkProps['aria-current']);

  return (
    <a
      {...mergeProps(
        {
          style: {
            ...expressivePresets.font.labelMedium,
            ...expressivePresets.transition.effectsFast,
            ...rootStyles.link.base,
            ...(isCurrent || isHovered ? rootStyles.link.active : null),
            ...(props.isDisabled === true ? rootStyles.link.disabled : null),
            ...style,
          },
        },
        linkProps,
        hoverProps,
        focusProps,
      )}
      ref={ref}
    >
      <div
        style={{
          ...rootStyles.indicator.base,
          ...(isCurrent ? rootStyles.indicator.active : null),
          ...(props.isDisabled === true ? rootStyles.indicator.disabled : null),
        }}
      >
        <ExpressiveActivationLayer
          isActive={isCurrent}
        />
        <ExpressiveHoveredStateLayer
          isHovered={isHovered}
        />
        <ExpressivePressedStateLayer
          isPressed={isPressed}
        />
        <ExpressiveFocusedStateLayer
          isFocused={isFocusVisible}
        />
        <span
          style={{
            ...rootStyles.symbol.base,
          }}
        >
          {symbol}
        </span>
        <ExpressiveFocusedOutlineLayer
          isFocusVisible={isFocusVisible}
        />
      </div>
      <div
        style={{
          ...rootStyles.label.base,
        }}
      >
        {label}
      </div>
    </a>
  );
}
