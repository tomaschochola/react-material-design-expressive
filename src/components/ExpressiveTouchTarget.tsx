import type { StandardLonghandProperties } from 'csstype';
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { mergeStyles } from '../helpers';

export interface ExpressiveTouchTargetProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'> {
    readonly style?: CSSProperties;
}

const styles = {
    root: {
        base: {
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
            minHeight: '48px',
            minWidth: '48px',
            position: 'relative',
            verticalAlign: 'middle',
        },
    },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveTouchTarget({ children, style, ...props }: Readonly<ExpressiveTouchTargetProps>): ReactElement {
    return (
        <span
            style={mergeStyles(styles.root.base, style)}
            {...props}
        >
            {children}
        </span>
    );
}
