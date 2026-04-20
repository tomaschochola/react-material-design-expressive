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
import { ExpressiveIconButtonVariantEnum } from '../enums';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressiveStateLayer } from './ExpressiveStateLayer';

export interface ExpressiveIconButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly variant?: ExpressiveIconButtonVariantEnum;
  readonly symbol?: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      alignItems: 'center',
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.full'],
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      borderTopLeftRadius: expressiveTokens['md.sys.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.full'],
      borderTopStyle: 'none',
      display: 'inline-flex',
      height: '40px',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      transitionProperty: 'background-color, color, border-color',
      whiteSpace: 'nowrap',
      width: '40px',
    },
    [ExpressiveIconButtonVariantEnum.Standard]: {
      backgroundColor: 'transparent',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
    },
    [ExpressiveIconButtonVariantEnum.Filled]: {
      backgroundColor: expressiveTokens['md.sys.color.primary'],
      color: expressiveTokens['md.sys.color.on-primary'],
    },
    [ExpressiveIconButtonVariantEnum.Tonal]: {
      backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
    [ExpressiveIconButtonVariantEnum.Outlined]: {
      backgroundColor: 'transparent',
      borderBottomColor: expressiveTokens['md.sys.color.outline'],
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderLeftColor: expressiveTokens['md.sys.color.outline'],
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderRightColor: expressiveTokens['md.sys.color.outline'],
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
      borderTopColor: expressiveTokens['md.sys.color.outline'],
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      color: expressiveTokens['md.sys.color.on-surface-variant'],
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveIconButton({ variant = ExpressiveIconButtonVariantEnum.Standard, symbol, style, ...props }: Readonly<ExpressiveIconButtonProps>): ReactElement {
  const ref = useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(props, ref);

  const isDisabled = Boolean(props.isDisabled);
  const isAutoFocus = Boolean(props.autoFocus);

  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: isAutoFocus,
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
        styles.root[variant],
        isDisabled && (variant === ExpressiveIconButtonVariantEnum.Filled || variant === ExpressiveIconButtonVariantEnum.Tonal) ? expressivePresets.disabled.container : null,
        isDisabled && variant === ExpressiveIconButtonVariantEnum.Outlined ? expressivePresets.disabled.outline : null,
        isDisabled ? expressivePresets.disabled.content : null,
        style,
      )}
    >
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.hovered']}
        isVisible={isHovered}
      />
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.pressed']}
        isVisible={isPressed}
      />
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.focused']}
        isVisible={isFocusVisible}
      />
      <ExpressiveIcon
        size="calc(24 / 16 * 1rem)"
        symbol={symbol}
      />
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
      />
    </button>
  );
}

ExpressiveIconButton.variant = ExpressiveIconButtonVariantEnum;
