import type { StandardLonghandProperties } from 'csstype';
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { expressivePresets } from '../css/presets';
import { expressiveTokens } from '../css/tokens';
import { mergeStyles } from '../helpers';

export interface ExpressiveActivationLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
    readonly isActive?: boolean;
    readonly style?: CSSProperties;
}

const styles = {
    root: {
        base: {
            backgroundColor: expressiveTokens['md.sys.color.secondary-container'],
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
            bottom: '0px',
            left: '0px',
            pointerEvents: 'none',
            position: 'absolute',
            right: '0px',
            top: '0px',
            transitionProperty: 'transform, opacity',
            userSelect: 'none',
        },
        active: {
            opacity: 1,
            transform: 'scaleX(100%)',
        },
        inactive: {
            opacity: 0,
            transform: 'scaleX(0%)',
        },
    },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;

export function ExpressiveActivationLayer({ isActive = false, style, ...props }: Readonly<ExpressiveActivationLayerProps>): ReactElement {
    return (
        <div
            style={mergeStyles(expressivePresets.motion.spatialFast, styles.root.base, isActive ? styles.root.active : styles.root.inactive, style)}
            {...props}
        />
    );
}
