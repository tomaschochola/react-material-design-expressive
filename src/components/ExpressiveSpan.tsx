import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { expressivePresets } from '../css/presets';
import { ExpressiveTypographyEnum } from '../enums';
import { mergeStyles } from '../helpers';

export interface ExpressiveSpanProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
    readonly font?: ExpressiveTypographyEnum;
    readonly children?: ReactNode;
    readonly style?: CSSProperties;
}

export function ExpressiveSpan({ font, children, style, ...props }: Readonly<ExpressiveSpanProps>): ReactElement {
    return (
        <span
            style={mergeStyles(font !== undefined ? expressivePresets.typography[font] : null, style)}
            {...props}
        >
            {children}
        </span>
    );
}

ExpressiveSpan.font = ExpressiveTypographyEnum;
