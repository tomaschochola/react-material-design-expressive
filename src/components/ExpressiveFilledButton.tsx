import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveFilledButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  base: {
    alignItems: 'center',
    backgroundColor: expressiveTokens['md.sys.color.primary'],
    borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
    borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
    borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
    borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
    color: expressiveTokens['md.sys.color.on-primary'],
    columnGap: '8px',
    display: 'inline-flex',
    height: '40px',
    justifyContent: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    position: 'relative',
    textAlign: 'center',
    transitionProperty: 'background-color, color, border-color',
    whiteSpace: 'nowrap',
  },
  isDisabled: {
    backgroundColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-container']})`,
    color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-content']})`,
  },
} as const;

const labelStyles = {
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    flexShrink: 0,
    position: 'relative',
    whiteSpace: 'nowrap',
  },
} as const;

export function ExpressiveFilledButton({ symbol, label, style, ...props }: Readonly<ExpressiveFilledButtonProps>): ReactElement {
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
            ...expressivePresets.reset.button,
            ...expressivePresets.transition.effectsFast,
            ...rootStyles.base,
            ...(props.isDisabled === true ? rootStyles.isDisabled : null),
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
            <ExpressiveIcon
              size={18}
              symbol={symbol}
            />
          )
        : null}
      <span
        style={{
          ...expressivePresets.font.labelLarge,
          ...labelStyles.base,
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
