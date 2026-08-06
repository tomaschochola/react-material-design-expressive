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
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { expressiveTokens } from '../css/tokens';
import { mergeStyles } from '../helpers';

export interface ExpressiveFocusedOutlineLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  readonly isFocusVisible?: boolean;
  readonly isInset?: boolean;
  readonly style?: CSSProperties;
}

const styles = {
  root: {
    base: {
      borderBottomColor: expressiveTokens['md.sys.color.secondary'],
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      borderBottomStyle: 'solid',
      borderBottomWidth: '0px',
      borderLeftColor: expressiveTokens['md.sys.color.secondary'],
      borderLeftStyle: 'solid',
      borderLeftWidth: '0px',
      borderRightColor: expressiveTokens['md.sys.color.secondary'],
      borderRightStyle: 'solid',
      borderRightWidth: '0px',
      borderTopColor: expressiveTokens['md.sys.color.secondary'],
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
      borderTopStyle: 'solid',
      borderTopWidth: '0px',
      bottom: '0px',
      left: '0px',
      outlineColor: expressiveTokens['md.sys.color.secondary'],
      outlineOffset: '2px',
      outlineStyle: 'solid',
      outlineWidth: '0px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      right: '0px',
      top: '0px',
      userSelect: 'none',
      zIndex: 90,
    },
    inset: {
      borderBottomWidth: '3px',
      borderLeftWidth: '3px',
      borderRightWidth: '3px',
      borderTopWidth: '3px',
    },
    outline: {
      outlineWidth: '3px',
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

function resolveFocusStyle(isFocusVisible: boolean, isInset: boolean): CSSProperties | null {
  if (!isFocusVisible) {
    return null;
  }

  return isInset ? styles.root.inset : styles.root.outline;
}

export function ExpressiveFocusedOutlineLayer({ isFocusVisible = false, isInset = false, style, ...props }: Readonly<ExpressiveFocusedOutlineLayerProps>): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element == null || !isFocusVisible) {
      return;
    }

    const computedStyle = getComputedStyle(element);
    const durationToken = computedStyle.getPropertyValue('--md-sys-motion-duration-long2').trim();
    const timingFunction = computedStyle.getPropertyValue('--md-sys-motion-easing-effects').trim();
    const rawDuration = Number.parseFloat(durationToken) * (durationToken.endsWith('ms') ? 1 : 1000);
    const duration = Number.isFinite(rawDuration) && rawDuration >= 0 ? rawDuration : 500;

    const animation = element.animate(
      isInset
        ? [
            {
              borderBottomWidth: '0px',
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderTopWidth: '0px',
            },
            {
              borderBottomWidth: '9px',
              borderLeftWidth: '9px',
              borderRightWidth: '9px',
              borderTopWidth: '9px',
              offset: 0.25,
            },
            {
              borderBottomWidth: '3px',
              borderLeftWidth: '3px',
              borderRightWidth: '3px',
              borderTopWidth: '3px',
            },
          ]
        : [
            {
              outlineWidth: '0px',
            },
            {
              outlineWidth: '9px',
              offset: 0.25,
            },
            {
              outlineWidth: '3px',
            },
          ],
      {
        duration,
        easing: timingFunction,
      },
    );

    return (): void => {
      animation.cancel();
    };
  }, [isFocusVisible, isInset]);

  return (
    <div
      ref={ref}
      style={mergeStyles(styles.root.base, resolveFocusStyle(isFocusVisible, isInset), style)}
      {...props}
    />
  );
}
