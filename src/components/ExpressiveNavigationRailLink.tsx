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
import { mergeStyles } from '../css/helpers';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { ExpressiveActivationLayer } from './ExpressiveActivationLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveNavigationRailLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly symbol?: ReactNode;
  readonly label?: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      borderBottomLeftRadius: expressiveTokens['md.sys.radius.large'],
      borderBottomRightRadius: expressiveTokens['md.sys.radius.large'],
      borderTopLeftRadius: expressiveTokens['md.sys.radius.large'],
      borderTopRightRadius: expressiveTokens['md.sys.radius.large'],
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      display: 'block',
      minWidth: '0px',
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
  label: {
    base: {
      marginTop: '4px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

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
        linkProps,
        hoverProps,
        focusProps,
      )}
      ref={ref}
      style={mergeStyles(
        expressivePresets.base.anchor,
        expressivePresets.font.labelMedium,
        expressivePresets.transition.effectsFast,
        styles.root.base,
        isCurrent || isHovered ? styles.root.active : null,
        Boolean(linkProps['aria-disabled']) ? styles.root.disabled : null,
        style,
      )}
    >
      <div
        style={mergeStyles(
          styles.indicator.base,
          isCurrent ? styles.indicator.active : null,
          Boolean(linkProps['aria-disabled']) ? styles.indicator.disabled : null,
        )}
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
        <ExpressiveIcon
          size={24}
          symbol={symbol}
        />
        <ExpressiveFocusedOutlineLayer
          isFocusVisible={isFocusVisible}
        />
      </div>
      <div
        style={mergeStyles(
          expressivePresets.base.ellipsis,
          styles.label.base,
        )}
      >
        {label}
      </div>
    </a>
  );
}
