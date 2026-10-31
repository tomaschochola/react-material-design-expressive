import type { ReactElement } from 'react';
import { useEffect } from 'react';

export function expressiveDocumentStyle(style: Readonly<Record<string, string>>): void {
    const documentStyle = document.documentElement.style;

    for (const [key, value] of Object.entries(style)) {
        if (value === '') {
            documentStyle.removeProperty(key);
        } else {
            documentStyle.setProperty(key, value);
        }
    }
}

export interface ExpressiveDocumentStyleEffectProps {
    readonly style: Readonly<Record<string, string>>;
    readonly children?: ReactElement;
}

export function ExpressiveDocumentStyleEffect({ style, children }: Readonly<ExpressiveDocumentStyleEffectProps>): ReactElement | undefined {
    useEffect(() => {
        expressiveDocumentStyle(style);
    }, [style]);

    return children;
}
