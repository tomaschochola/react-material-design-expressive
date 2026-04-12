import type { Property } from 'csstype';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { expressiveTokens } from '../css/tokens';

export function applyDocumentBackground(
  background: Property.BackgroundColor = expressiveTokens['md.sys.color.surface-container'],
  color: Property.Color = expressiveTokens['md.sys.color.on-surface'],
  scrollbar: Property.ScrollbarColor = `${expressiveTokens['md.sys.color.outline']} transparent`,
): () => void {
  const style = document.documentElement.style;

  const oldBackground = style.getPropertyValue('background-color');
  const oldColor = style.getPropertyValue('color');
  const oldScrollbar = style.getPropertyValue('scrollbar-color');

  style.setProperty('background-color', background);
  style.setProperty('color', color);
  style.setProperty('scrollbar-color', scrollbar);

  return (): void => {
    if (oldBackground === '') {
      style.removeProperty('background-color');
    } else {
      style.setProperty('background-color', oldBackground);
    }

    if (oldColor === '') {
      style.removeProperty('color');
    } else {
      style.setProperty('color', oldColor);
    }

    if (oldScrollbar === '') {
      style.removeProperty('scrollbar-color');
    } else {
      style.setProperty('scrollbar-color', oldScrollbar);
    }
  };
}

export interface ExpressiveDocumentBackgroundEffectProps {
  readonly background?: Property.BackgroundColor;
  readonly color?: Property.Color;
  readonly scrollbar?: Property.ScrollbarColor;
  readonly children?: ReactElement;
}

export function ExpressiveDocumentBackgroundEffect({
  background,
  color,
  scrollbar,
  children,
}: Readonly<ExpressiveDocumentBackgroundEffectProps>): ReactElement | undefined {
  useEffect(() => {
    return applyDocumentBackground(background, color, scrollbar);
  }, [background, color, scrollbar]);

  return children;
}
