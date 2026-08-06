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
import { mergeProps, useFocusRing, useHover, useLink, type AriaLinkOptions } from 'react-aria';
import { internalPresets } from '../css/internal';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveButtonShapeEnum, ExpressiveButtonSizeEnum, ExpressiveButtonVariantEnum } from '../enums';
import { mergeStyles } from '../helpers';
import { ExpressiveBorderLayer } from './ExpressiveBorderLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressiveStateLayer } from './ExpressiveStateLayer';

export interface ExpressiveLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly variant?: ExpressiveButtonVariantEnum;
  readonly size?: ExpressiveButtonSizeEnum;
  readonly shape?: ExpressiveButtonShapeEnum;
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const iconSizeByButtonSize = {
  [ExpressiveButtonSizeEnum.ExtraSmall]: 20,
  [ExpressiveButtonSizeEnum.Small]: 20,
  [ExpressiveButtonSizeEnum.Medium]: 24,
  [ExpressiveButtonSizeEnum.Large]: 32,
  [ExpressiveButtonSizeEnum.ExtraLarge]: 40,
} as const;

const fontPresetByButtonSize = {
  [ExpressiveButtonSizeEnum.ExtraSmall]: expressivePresets.typography.labelLarge,
  [ExpressiveButtonSizeEnum.Small]: expressivePresets.typography.labelLarge,
  [ExpressiveButtonSizeEnum.Medium]: expressivePresets.typography.titleMedium,
  [ExpressiveButtonSizeEnum.Large]: expressivePresets.typography.headlineSmall,
  [ExpressiveButtonSizeEnum.ExtraLarge]: expressivePresets.typography.headlineLarge,
} as const;

const styles = {
  root: {
    base: {
      alignItems: 'center',
      borderBottomLeftRadius: expressiveTokens['md.sys.corner.radius.full'],
      borderBottomRightRadius: expressiveTokens['md.sys.corner.radius.full'],
      borderTopLeftRadius: expressiveTokens['md.sys.corner.radius.full'],
      borderTopRightRadius: expressiveTokens['md.sys.corner.radius.full'],
      display: 'inline-flex',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      transitionProperty: 'background-color, color, border-color',
      whiteSpace: 'nowrap',
    },
    [ExpressiveButtonVariantEnum.Filled]: {
      backgroundColor: expressiveTokens['md.sys.color.primary'],
      color: expressiveTokens['md.sys.color.on-primary'],
    },
    [ExpressiveButtonVariantEnum.Elevated]: {
      backgroundColor: expressiveTokens['md.sys.color.surface-container-low'],
      color: expressiveTokens['md.sys.color.primary'],
    },
    [ExpressiveButtonVariantEnum.Tonal]: {
      backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
    [ExpressiveButtonVariantEnum.Outlined]: {
      backgroundColor: 'transparent',
      color: expressiveTokens['md.sys.color.primary'],
    },
    [ExpressiveButtonVariantEnum.Text]: {
      backgroundColor: 'transparent',
      color: expressiveTokens['md.sys.color.primary'],
    },
    [ExpressiveButtonSizeEnum.ExtraSmall]: {
      columnGap: '4px',
      height: '32px',
      paddingLeft: '12px',
      paddingRight: '12px',
    },
    [ExpressiveButtonSizeEnum.Small]: {
      columnGap: '8px',
      height: '40px',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    [ExpressiveButtonSizeEnum.Medium]: {
      columnGap: '8px',
      height: '56px',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    [ExpressiveButtonSizeEnum.Large]: {
      columnGap: '12px',
      height: '96px',
      paddingLeft: '48px',
      paddingRight: '48px',
    },
    [ExpressiveButtonSizeEnum.ExtraLarge]: {
      columnGap: '16px',
      height: '136px',
      paddingLeft: '64px',
      paddingRight: '64px',
    },
  },
  textPadding: {
    [ExpressiveButtonSizeEnum.ExtraSmall]: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
    [ExpressiveButtonSizeEnum.Small]: {
      paddingLeft: '12px',
      paddingRight: '12px',
    },
    [ExpressiveButtonSizeEnum.Medium]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    [ExpressiveButtonSizeEnum.Large]: {
      paddingLeft: '44px',
      paddingRight: '44px',
    },
    [ExpressiveButtonSizeEnum.ExtraLarge]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
  },
  squareRadius: {
    [ExpressiveButtonSizeEnum.ExtraSmall]: {
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },
    [ExpressiveButtonSizeEnum.Small]: {
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },
    [ExpressiveButtonSizeEnum.Medium]: {
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
    },
    [ExpressiveButtonSizeEnum.Large]: {
      borderBottomLeftRadius: '28px',
      borderBottomRightRadius: '28px',
      borderTopLeftRadius: '28px',
      borderTopRightRadius: '28px',
    },
    [ExpressiveButtonSizeEnum.ExtraLarge]: {
      borderBottomLeftRadius: '28px',
      borderBottomRightRadius: '28px',
      borderTopLeftRadius: '28px',
      borderTopRightRadius: '28px',
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

export function ExpressiveLink({
  variant = ExpressiveButtonVariantEnum.Text,
  size = ExpressiveButtonSizeEnum.Small,
  shape = ExpressiveButtonShapeEnum.Rounded,
  symbol,
  label,
  style,
  ...props
}: Readonly<ExpressiveLinkProps>): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps, isPressed } = useLink(props, ref);

  const isDisabled = Boolean(props.isDisabled);
  const isAutoFocus = Boolean(props.autoFocus);

  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: isAutoFocus,
  });

  const iconSize = iconSizeByButtonSize[size];
  const fontPreset = fontPresetByButtonSize[size];

  return (
    <a
      {...mergeProps(linkProps, hoverProps, focusProps)}
      ref={ref}
      style={mergeStyles(
        internalPresets.base.anchor,
        expressivePresets.motion.effectsFast,
        styles.root.base,
        styles.root[variant],
        styles.root[size],
        variant === ExpressiveButtonVariantEnum.Text ? styles.textPadding[size] : null,
        shape === ExpressiveButtonShapeEnum.Square ? styles.squareRadius[size] : null,
        isDisabled && variant !== ExpressiveButtonVariantEnum.Text ? internalPresets.disabled.container : null,
        isDisabled ? internalPresets.disabled.content : null,
        style,
      )}
    >
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.state.hovered']}
        isVisible={isHovered}
      />
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.state.pressed']}
        isVisible={isPressed}
      />
      <ExpressiveStateLayer
        opacity={expressiveTokens['md.sys.opacity.state.focused']}
        isVisible={isFocusVisible}
      />
      {symbol !== undefined ? (
        <ExpressiveIcon
          size={iconSize}
          symbol={symbol}
        />
      ) : null}
      <span style={mergeStyles(fontPreset, styles.label.base)}>{label}</span>
      {variant === ExpressiveButtonVariantEnum.Outlined ? <ExpressiveBorderLayer isDisabled={isDisabled} /> : null}
      <ExpressiveFocusedOutlineLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}

ExpressiveLink.variant = ExpressiveButtonVariantEnum;
ExpressiveLink.size = ExpressiveButtonSizeEnum;
ExpressiveLink.shape = ExpressiveButtonShapeEnum;
