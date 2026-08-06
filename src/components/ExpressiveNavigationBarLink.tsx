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
import { mergeStyles } from '../helpers';
import { ExpressiveActivationLayer } from './ExpressiveActivationLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { useExpressiveNavigationBarContext } from './ExpressiveNavigationBarContext';
import { ExpressiveStateLayer } from './ExpressiveStateLayer';

export interface ExpressiveNavigationBarLinkProps extends Omit<AriaLinkOptions, 'children' | 'style'> {
  readonly symbol: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      borderBottomLeftRadius: expressiveTokens['md.sys.corner.radius.extra-small'],
      borderBottomRightRadius: expressiveTokens['md.sys.corner.radius.extra-small'],
      borderTopLeftRadius: expressiveTokens['md.sys.corner.radius.extra-small'],
      borderTopRightRadius: expressiveTokens['md.sys.corner.radius.extra-small'],
      color: expressiveTokens['md.sys.color.on-surface-variant'],
      position: 'relative',
      transitionProperty: 'color',
      whiteSpace: 'nowrap',
    },
    active: {
      color: expressiveTokens['md.sys.color.secondary'],
    },
  },
  mobileRoot: {
    base: {
      display: 'block',
      flexBasis: '0px',
      flexGrow: 1,
      flexShrink: 1,
      minWidth: '0px',
      paddingTop: '6px',
      textAlign: 'center',
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
  },
  label: {
    base: {
      marginTop: '4px',
      whiteSpace: 'nowrap',
    },
  },
  nonMobileRoot: {
    base: {
      alignItems: 'center',
      display: 'flex',
      flexBasis: '0px',
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      paddingBottom: '12px',
      paddingTop: '12px',
    },
  },
  pill: {
    base: {
      alignItems: 'center',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      borderTopLeftRadius: '50px',
      borderTopRightRadius: '50px',
      display: 'flex',
      paddingBottom: '8px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '8px',
      position: 'relative',
    },
    active: {
      color: expressiveTokens['md.sys.color.on-secondary-container'],
    },
  },
  pillLabel: {
    base: {
      marginLeft: '4px',
      position: 'relative',
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

  const horizontal = useExpressiveNavigationBarContext();

  if (!horizontal) {
    return (
      <a
        {...mergeProps(linkProps, hoverProps, focusProps)}
        ref={ref}
        style={mergeStyles(
          internalPresets.base.anchor,
          expressivePresets.typography.labelMedium,
          expressivePresets.motion.effectsFast,
          styles.root.base,
          styles.mobileRoot.base,
          isCurrent ? styles.root.active : null,
          isDisabled ? internalPresets.disabled.content : null,
          style,
        )}
      >
        <div style={mergeStyles(styles.indicator.base, isCurrent ? styles.indicator.active : null, isDisabled ? internalPresets.disabled.content : null)}>
          <ExpressiveActivationLayer isActive={isCurrent} />
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
          <ExpressiveIcon
            size={24}
            symbol={symbol}
          />
        </div>
        <div style={mergeStyles(internalPresets.base.ellipsis, styles.label.base)}>{label}</div>
        <ExpressiveFocusedOutlineLayer
          isFocusVisible={isFocusVisible}
          isInset
        />
      </a>
    );
  }

  return (
    <a
      {...mergeProps(linkProps, hoverProps, focusProps)}
      ref={ref}
      style={mergeStyles(
        internalPresets.base.anchor,
        expressivePresets.typography.labelMedium,
        expressivePresets.motion.effectsFast,
        styles.root.base,
        styles.nonMobileRoot.base,
        isCurrent ? styles.root.active : null,
        isDisabled ? internalPresets.disabled.content : null,
        style,
      )}
    >
      <div style={mergeStyles(styles.pill.base, isCurrent ? styles.pill.active : null, isDisabled ? internalPresets.disabled.content : null)}>
        <ExpressiveActivationLayer isActive={isCurrent} />
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
        <ExpressiveIcon
          size={24}
          symbol={symbol}
        />
        <div style={mergeStyles(styles.pillLabel.base)}>{label}</div>
      </div>
      <ExpressiveFocusedOutlineLayer
        isFocusVisible={isFocusVisible}
        isInset
      />
    </a>
  );
}
