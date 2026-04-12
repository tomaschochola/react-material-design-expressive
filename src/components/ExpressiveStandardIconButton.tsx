import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

interface ExpressiveStandardIconButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly style?: CSSProperties;
}

const rootStyles = {
  button: {
    base: {
      alignItems: 'center',
      appearance: 'none',
      backgroundColor: 'transparent',
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
      borderTopStyle: 'none',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'inline-flex',
      height: '40px',
      justifyContent: 'center',
      marginBottom: '0px',
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: '0px',
      outlineStyle: 'none',
      paddingBottom: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      position: 'relative',
      textAlign: 'center',
      textDecorationLine: 'none',
      transitionProperty: 'background-color, color, border-color',
      whiteSpace: 'nowrap',
      width: '40px',
    },
    disabled: {
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-content']})`,
    },
  },
} as const;

export function ExpressiveStandardIconButton({ symbol, style, ...props }: Readonly<ExpressiveStandardIconButtonProps>): ReactElement {
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
      <ExpressiveIcon
        size="calc(24/16*1rem)"
        symbol={symbol}
      />
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
      />
    </button>
  );
}
