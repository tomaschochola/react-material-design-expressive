import type { ReactElement } from 'react';
import { ExpressiveBorderLayer } from '../../src/components/ExpressiveBorderLayer';
import { ExpressiveFontLabelLarge } from '../../src/components/ExpressiveFontLabelLarge';
import { expressiveTokens } from '../../src/css/tokens';
import { StorybookDisplay } from '../components/StorybookDisplay';

const globalStyles = {
  box: {
    alignItems: 'center',
    borderBottomLeftRadius: expressiveTokens['md.sys.radius.large'],
    borderBottomRightRadius: expressiveTokens['md.sys.radius.large'],
    borderTopLeftRadius: expressiveTokens['md.sys.radius.large'],
    borderTopRightRadius: expressiveTokens['md.sys.radius.large'],
    display: 'flex',
    height: '140px',
    justifyContent: 'center',
    paddingBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '16px',
    position: 'relative',
    textAlign: 'center',
    width: '140px',
  },
  color: (color: string) => ({
    color,
  }),
} as const;

interface ColorBoxProps {
  readonly name: string;
  readonly color: string;
  readonly text: string;
}

function ColorBox({ name, color, text }: ColorBoxProps): ReactElement {
  return (
    <div
      style={{
        backgroundColor: color,
        ...globalStyles.box,
      }}
    >
      <ExpressiveFontLabelLarge
        style={globalStyles.color(text)}
      >
        {name}
      </ExpressiveFontLabelLarge>
      <ExpressiveBorderLayer />
    </div>
  );
}

export function ColorsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="Primary colors"
      >
        <ColorBox
          name="Primary"
          color={expressiveTokens['md.sys.color.primary']}
          text={expressiveTokens['md.sys.color.on-primary']}
        />
        <ColorBox
          name="On primary"
          color={expressiveTokens['md.sys.color.on-primary']}
          text={expressiveTokens['md.sys.color.primary']}
        />
        <ColorBox
          name="Primary container"
          color={expressiveTokens['md.sys.color.primary-container']}
          text={expressiveTokens['md.sys.color.on-primary-container']}
        />
        <ColorBox
          name="On primary container"
          color={expressiveTokens['md.sys.color.on-primary-container']}
          text={expressiveTokens['md.sys.color.primary-container']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Secondary colors"
      >
        <ColorBox
          name="Secondary"
          color={expressiveTokens['md.sys.color.secondary']}
          text={expressiveTokens['md.sys.color.on-secondary']}
        />
        <ColorBox
          name="On secondary"
          color={expressiveTokens['md.sys.color.on-secondary']}
          text={expressiveTokens['md.sys.color.secondary']}
        />
        <ColorBox
          name="Secondary container"
          color={expressiveTokens['md.sys.color.secondary-container']}
          text={expressiveTokens['md.sys.color.on-secondary-container']}
        />
        <ColorBox
          name="On secondary container"
          color={expressiveTokens['md.sys.color.on-secondary-container']}
          text={expressiveTokens['md.sys.color.secondary-container']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Tertiary colors"
      >
        <ColorBox
          name="Tertiary"
          color={expressiveTokens['md.sys.color.tertiary']}
          text={expressiveTokens['md.sys.color.on-tertiary']}
        />
        <ColorBox
          name="On tertiary"
          color={expressiveTokens['md.sys.color.on-tertiary']}
          text={expressiveTokens['md.sys.color.tertiary']}
        />
        <ColorBox
          name="Tertiary container"
          color={expressiveTokens['md.sys.color.tertiary-container']}
          text={expressiveTokens['md.sys.color.on-tertiary-container']}
        />
        <ColorBox
          name="On tertiary container"
          color={expressiveTokens['md.sys.color.on-tertiary-container']}
          text={expressiveTokens['md.sys.color.tertiary-container']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Error colors"
      >
        <ColorBox
          name="Error"
          color={expressiveTokens['md.sys.color.error']}
          text={expressiveTokens['md.sys.color.on-error']}
        />
        <ColorBox
          name="On error"
          color={expressiveTokens['md.sys.color.on-error']}
          text={expressiveTokens['md.sys.color.error']}
        />
        <ColorBox
          name="Error container"
          color={expressiveTokens['md.sys.color.error-container']}
          text={expressiveTokens['md.sys.color.on-error-container']}
        />
        <ColorBox
          name="On error container"
          color={expressiveTokens['md.sys.color.on-error-container']}
          text={expressiveTokens['md.sys.color.error-container']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Surface colors"
      >
        <ColorBox
          name="Surface"
          color={expressiveTokens['md.sys.color.surface']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="On surface"
          color={expressiveTokens['md.sys.color.on-surface']}
          text={expressiveTokens['md.sys.color.surface']}
        />
        <ColorBox
          name="Surface variant"
          color={expressiveTokens['md.sys.color.surface-variant']}
          text={expressiveTokens['md.sys.color.on-surface-variant']}
        />
        <ColorBox
          name="On surface variant"
          color={expressiveTokens['md.sys.color.on-surface-variant']}
          text={expressiveTokens['md.sys.color.surface-variant']}
        />
        <ColorBox
          name="Surface container highest"
          color={expressiveTokens['md.sys.color.surface-container-highest']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Surface container high"
          color={expressiveTokens['md.sys.color.surface-container-high']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Surface container"
          color={expressiveTokens['md.sys.color.surface-container']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Surface container low"
          color={expressiveTokens['md.sys.color.surface-container-low']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Surface container lowest"
          color={expressiveTokens['md.sys.color.surface-container-lowest']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Inverse surface"
          color={expressiveTokens['md.sys.color.inverse-surface']}
          text={expressiveTokens['md.sys.color.inverse-on-surface']}
        />
        <ColorBox
          name="Inverse on surface"
          color={expressiveTokens['md.sys.color.inverse-on-surface']}
          text={expressiveTokens['md.sys.color.inverse-surface']}
        />
        <ColorBox
          name="Surface tint"
          color={expressiveTokens['md.sys.color.surface-tint']}
          text={expressiveTokens['md.sys.color.on-primary']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Outline colors"
      >
        <ColorBox
          name="Outline"
          color={expressiveTokens['md.sys.color.outline']}
          text={expressiveTokens['md.sys.color.surface']}
        />
        <ColorBox
          name="Outline variant"
          color={expressiveTokens['md.sys.color.outline-variant']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Add-ons / Primary colors"
      >
        <ColorBox
          name="Primary fixed"
          color={expressiveTokens['md.sys.color.primary-fixed']}
          text={expressiveTokens['md.sys.color.on-primary-fixed']}
        />
        <ColorBox
          name="On primary fixed"
          color={expressiveTokens['md.sys.color.on-primary-fixed']}
          text={expressiveTokens['md.sys.color.primary-fixed']}
        />
        <ColorBox
          name="Primary fixed dim"
          color={expressiveTokens['md.sys.color.primary-fixed-dim']}
          text={expressiveTokens['md.sys.color.on-primary-fixed']}
        />
        <ColorBox
          name="On primary fixed variant"
          color={expressiveTokens['md.sys.color.on-primary-fixed-variant']}
          text={expressiveTokens['md.sys.color.primary-fixed']}
        />
        <ColorBox
          name="Inverse primary"
          color={expressiveTokens['md.sys.color.inverse-primary']}
          text={expressiveTokens['md.sys.color.inverse-surface']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Add-ons / Secondary colors"
      >
        <ColorBox
          name="Secondary fixed"
          color={expressiveTokens['md.sys.color.secondary-fixed']}
          text={expressiveTokens['md.sys.color.on-secondary-fixed']}
        />
        <ColorBox
          name="On secondary fixed"
          color={expressiveTokens['md.sys.color.on-secondary-fixed']}
          text={expressiveTokens['md.sys.color.secondary-fixed']}
        />
        <ColorBox
          name="Secondary fixed dim"
          color={expressiveTokens['md.sys.color.secondary-fixed-dim']}
          text={expressiveTokens['md.sys.color.on-secondary-fixed']}
        />
        <ColorBox
          name="On secondary fixed variant"
          color={expressiveTokens['md.sys.color.on-secondary-fixed-variant']}
          text={expressiveTokens['md.sys.color.secondary-fixed']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Add-ons / Tertiary colors"
      >
        <ColorBox
          name="Tertiary fixed"
          color={expressiveTokens['md.sys.color.tertiary-fixed']}
          text={expressiveTokens['md.sys.color.on-tertiary-fixed']}
        />
        <ColorBox
          name="On tertiary fixed"
          color={expressiveTokens['md.sys.color.on-tertiary-fixed']}
          text={expressiveTokens['md.sys.color.tertiary-fixed']}
        />
        <ColorBox
          name="Tertiary fixed dim"
          color={expressiveTokens['md.sys.color.tertiary-fixed-dim']}
          text={expressiveTokens['md.sys.color.on-tertiary-fixed']}
        />
        <ColorBox
          name="On tertiary fixed variant"
          color={expressiveTokens['md.sys.color.on-tertiary-fixed-variant']}
          text={expressiveTokens['md.sys.color.tertiary-fixed']}
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Add-ons / Surface colors"
      >
        <ColorBox
          name="Background"
          color={expressiveTokens['md.sys.color.background']}
          text={expressiveTokens['md.sys.color.on-background']}
        />
        <ColorBox
          name="On background"
          color={expressiveTokens['md.sys.color.on-background']}
          text={expressiveTokens['md.sys.color.background']}
        />
        <ColorBox
          name="Surface bright"
          color={expressiveTokens['md.sys.color.surface-bright']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Surface dim"
          color={expressiveTokens['md.sys.color.surface-dim']}
          text={expressiveTokens['md.sys.color.on-surface']}
        />
        <ColorBox
          name="Scrim"
          color={expressiveTokens['md.sys.color.scrim']}
          text={expressiveTokens['md.sys.color.surface']}
        />
        <ColorBox
          name="Shadow"
          color={expressiveTokens['md.sys.color.shadow']}
          text={expressiveTokens['md.sys.color.surface']}
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
