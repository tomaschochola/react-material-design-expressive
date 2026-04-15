/**
 * @file
 * @author Tomáš Chochola <tomaschochola@tomaschochola.cz>
 * @copyright © 2026 Tomáš Chochola <tomaschochola@tomaschochola.cz>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomaschochola} GitHub Profile
 * @see {@link https://github.com/sponsors/tomaschochola} GitHub Sponsors
 */

import type { StandardLonghandProperties } from 'csstype';
import { useRef, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveTonalButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
      borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
      color: expressiveTokens['md.sys.color.on-secondary-container'],
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
    disabled: {
      backgroundColor: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-container']})`,
      color: `oklch(from ${expressiveTokens['md.sys.color.on-surface-variant']} l c h / ${expressiveTokens['md.sys.opacity.disabled-content']})`,
    },
  },
  label: {
    base: {
      alignItems: 'center',
      display: 'inline-flex',
      flexShrink: 0,
      position: 'relative',
      whiteSpace: 'nowrap',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

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
        buttonProps,
        hoverProps,
        focusProps,
      )}
      ref={ref}
      style={mergeStyles(
        expressivePresets.base.button,
        expressivePresets.transition.effectsFast,
        styles.root.base,
        Boolean(buttonProps.disabled) ? styles.root.disabled : null,
        style,
      )}
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
        style={mergeStyles(
          expressivePresets.font.labelLarge,
          styles.label.base,
        )}
      >
        {label}
      </span>
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
      />
    </button>
  );
}
