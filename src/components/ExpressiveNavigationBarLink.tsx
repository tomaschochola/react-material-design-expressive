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
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressiveStateLayer } from './ExpressiveStateLayer';

export interface ExpressiveNavigationBarLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly symbol: ReactNode;
  readonly label: ReactNode;
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
      flexBasis: '0px',
      flexGrow: 1,
      minWidth: '0px',
      paddingBottom: '16px',
      paddingTop: '12px',
      position: 'relative',
      textAlign: 'center',
      transitionProperty: 'color',
      whiteSpace: 'nowrap',
    },
    active: {
      color: expressiveTokens['md.sys.color.on-surface'],
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
      lineHeight: '32px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      textAlign: 'center',
      width: '56px',
    },
    active: {
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
  },
  label: {
    base: {
      marginTop: '4px',
      whiteSpace: 'nowrap',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveNavigationBarLink({ label, symbol, style, ...props }: Readonly<ExpressiveNavigationBarLinkProps>): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps, isPressed } = useLink(props, ref);

  const isCurrent = Boolean(linkProps['aria-current']);
  const isAutoFocus = Boolean(props.autoFocus);
  const isDisabled = Boolean(props.isDisabled);

  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled,
  });

  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: isAutoFocus,
  });

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
        isDisabled ? expressivePresets.disabled.content : null,
        style,
      )}
    >
      <div
        style={mergeStyles(
          styles.indicator.base,
          isCurrent ? styles.indicator.active : null,
          isDisabled ? expressivePresets.disabled.content : null,
        )}
      >
        <ExpressiveActivationLayer
          isActive={isCurrent}
        />
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
          size={24}
          symbol={symbol}
        />
        <ExpressiveFocusedOutlineLayer
          isFocusVisible={isFocusVisible}
          isInset
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
