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

import type { ReactElement, ReactNode } from 'react';
import { ExpressiveHeading } from '../../src/components/ExpressiveHeading';
import { ExpressiveWiggleHorizontalDivider } from '../../src/components/ExpressiveWiggleHorizontalDivider';
import { expressivePresets } from '../../src/css/presets';
import { expressiveTokens } from '../../src/css/tokens';
import { ExpressiveTypographyEnum } from '../../src/enums';
import { mergeStyles } from '../../src/helpers';

interface StorybookLayoutProps {
  readonly title: ReactNode;
  readonly paragraph: ReactNode;
  readonly children: ReactNode;
}

interface StorybookSectionProps {
  readonly label: ReactNode;
  readonly children: ReactNode;
}

interface StorybookRowProps {
  readonly children: ReactNode;
}

function StorybookRow({ children }: Readonly<StorybookRowProps>): ReactElement {
  return (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      {children}
    </div>
  );
}

function StorybookSection({ label, children }: Readonly<StorybookSectionProps>): ReactElement {
  return (
    <div>
      <div
        style={mergeStyles(expressivePresets.typography.titleSmall, {
          color: expressiveTokens['md.sys.color.primary'],
          marginBottom: '1lh',
          textAlign: 'center',
        })}
      >
        {label}
      </div>
      <section
        style={{
          backgroundColor: '#E2E0F9',
          display: 'grid',
          gap: '64px',
          paddingBottom: '64px',
          paddingLeft: '64px',
          paddingRight: '64px',
          paddingTop: '64px',
          borderTopLeftRadius: expressiveTokens['md.sys.corner.radius.extra-large'],
          borderTopRightRadius: expressiveTokens['md.sys.corner.radius.extra-large'],
          borderBottomLeftRadius: expressiveTokens['md.sys.corner.radius.extra-large'],
          borderBottomRightRadius: expressiveTokens['md.sys.corner.radius.extra-large'],
        }}
      >
        {children}
      </section>
    </div>
  );
}

StorybookSection.Row = StorybookRow;

export function StorybookLayout({ title, paragraph, children }: Readonly<StorybookLayoutProps>): ReactElement {
  return (
    <div
      style={{
        paddingBottom: '24px',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '24px',
        maxWidth: '1024px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div
        style={{
          backgroundColor: expressiveTokens['md.sys.color.surface-container-lowest'],
          borderTopLeftRadius: expressiveTokens['md.sys.corner.radius.extra-extra-large'],
          borderTopRightRadius: expressiveTokens['md.sys.corner.radius.extra-extra-large'],
          borderBottomLeftRadius: expressiveTokens['md.sys.corner.radius.extra-extra-large'],
          borderBottomRightRadius: expressiveTokens['md.sys.corner.radius.extra-extra-large'],
          paddingBottom: '32px',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '32px',
        }}
      >
        <ExpressiveHeading font={ExpressiveTypographyEnum.DisplayMedium}>{title}</ExpressiveHeading>
        <p
          style={mergeStyles(expressivePresets.typography.bodyLarge, {
            maxWidth: '40em',
          })}
        >
          {paragraph}
        </p>
        <ExpressiveWiggleHorizontalDivider
          style={{
            marginBottom: '32px',
            marginTop: '32px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

StorybookLayout.Section = StorybookSection;
