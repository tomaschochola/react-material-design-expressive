import type { StandardLonghandProperties } from 'csstype';
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { mergeStyles } from '../helpers';

export interface ExpressiveStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
    readonly isVisible?: boolean;
    readonly opacity?: CSSProperties['opacity'];
    readonly style?: CSSProperties;
}

const styles = {
    root: {
        base: {
            backgroundColor: 'currentColor',
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
            bottom: '0px',
            left: '0px',
            opacity: 0,
            overflowX: 'hidden',
            overflowY: 'hidden',
            pointerEvents: 'none',
            position: 'absolute',
            right: '0px',
            top: '0px',
            transitionProperty: 'opacity',
            userSelect: 'none',
        },
        visible: {
            transitionDuration: '0ms',
        },
    },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveStateLayer({ isVisible = false, opacity, style, ...props }: Readonly<ExpressiveStateLayerProps>): ReactElement {
    return (
        <div
            style={mergeStyles(expressivePresets.motion.effectsSlow, styles.root.base, isVisible ? styles.root.visible : null, isVisible ? { opacity } : null, style)}
            {...props}
        />
    );
}
