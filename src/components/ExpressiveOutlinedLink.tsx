import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, useLink, type AriaLinkOptions } from 'react-aria';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveBorderLayer } from './ExpressiveBorderLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveOutlinedLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  link: {
    base: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
      borderTopStyle: 'none',
      color: expressiveTokens['md.sys.color.primary'],
      columnGap: '8px',
      display: 'inline-flex',
      height: '40px',
      justifyContent: 'center',
      outlineStyle: 'none',
      paddingLeft: '16px',
      paddingRight: '16px',
      position: 'relative',
      textAlign: 'center',
      textDecorationLine: 'inherit',
      transitionProperty: 'background-color, color, border-color',
      whiteSpace: 'nowrap',
    },
    disabled: {
      backgroundColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-container']})`,
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-content']})`,
    },
  },
  symbol: {
    base: {
      alignItems: 'center',
      display: 'inline-flex',
      fontSize: '18px',
      justifyContent: 'center',
      maxHeight: '18px',
      maxWidth: '18px',
      position: 'relative',
    },
  },
  label: {
    base: {
      display: 'inline-block',
      position: 'relative',
    },
  },
} as const;

export function ExpressiveOutlinedLink({ symbol, label, style, ...props }: Readonly<ExpressiveOutlinedLinkProps>): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null);
  const { linkProps, isPressed } = useLink(props, ref);

  const { hoverProps, isHovered } = useHover({
    isDisabled: props.isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  return (
    <a
      {...mergeProps(
        {
          style: {
            ...rootStyles.link.base,
            ...expressivePresets.transition.effectsFast,
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
      <ExpressiveHoveredStateLayer
        isHovered={isHovered}
      />
      <ExpressivePressedStateLayer
        isPressed={isPressed}
      />
      <ExpressiveFocusedStateLayer
        isFocused={isFocusVisible}
      />
      {symbol !== undefined
        ? (
            <span
              style={{
                ...rootStyles.symbol.base,
              }}
            >
              {symbol}
            </span>
          )
        : null}
      <span
        style={{
          ...rootStyles.label.base,
          ...expressivePresets.font.labelLarge,
        }}
      >
        {label}
      </span>
      <ExpressiveBorderLayer
        isDisabled={props.isDisabled}
      />
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
      />
    </a>
  );
}
