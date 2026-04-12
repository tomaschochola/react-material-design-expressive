import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveTonalButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  button: {
    base: {
      alignItems: 'center',
      backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
      borderTopStyle: 'none',
      color: expressiveTokens['md.sys.color.on-secondary-container'],
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

export function ExpressiveTonalButton({ symbol, label, style, ...props }: Readonly<ExpressiveTonalButtonProps>): ReactElement {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);

  const { hoverProps, isHovered } = useHover({
    isDisabled: props.isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  return (
    <button
      {...mergeProps(
        {
          style: {
            ...rootStyles.button.base,
            ...expressivePresets.transition.effectsFast,
            ...(props.isDisabled === true ? rootStyles.button.disabled : null),
            ...style,
          },
        },
        buttonProps,
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
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
      />
    </button>
  );
}
