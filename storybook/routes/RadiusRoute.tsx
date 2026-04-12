import type { ReactElement } from 'react';
import { ExpressiveFontLabelLarge } from '../../src/components/ExpressiveFontLabelLarge';
import { expressiveTokens } from '../../src/css/tokens';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = {
  box: {
    alignItems: 'center',
    backgroundColor: expressiveTokens['md.sys.color.primary-container'],
    display: 'flex',
    height: '140px',
    justifyContent: 'center',
    paddingBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '16px',
    textAlign: 'center',
    width: '140px',
  },
  color: {
    color: expressiveTokens['md.sys.color.on-primary-container'],
  },
  topLeft: (radius: string | number) => ({
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderTopLeftRadius: radius,
    borderTopRightRadius: '0px',
  }),
  topRight: (radius: string | number) => ({
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: radius,
  }),
  bottomLeft: (radius: string | number) => ({
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: '0px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  }),
  bottomRight: (radius: string | number) => ({
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: radius,
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  }),
  allCorners: (radius: string | number) => ({
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  }),
} as const;

interface RadiusBoxProps {
  readonly label: string;
  readonly radius: string | number;
  readonly corner: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'all';
}

function RadiusBox({ label, radius, corner }: RadiusBoxProps): ReactElement {
  return (
    <div
      style={{
        ...styles.box,
        ...(corner === 'topLeft' ? styles.topLeft(radius) : null),
        ...(corner === 'topRight' ? styles.topRight(radius) : null),
        ...(corner === 'bottomLeft' ? styles.bottomLeft(radius) : null),
        ...(corner === 'bottomRight' ? styles.bottomRight(radius) : null),
        ...(corner === 'all' ? styles.allCorners(radius) : null),
      }}
    >
      <ExpressiveFontLabelLarge
        style={styles.color}
      >
        {label}
      </ExpressiveFontLabelLarge>
    </div>
  );
}

export function RadiusRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Items
        label="None"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.none']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.none']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.none']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.none']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.none']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Small"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.extra-small']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.extra-small']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.extra-small']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.extra-small']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.extra-small']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Small"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.small']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.small']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.small']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.small']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.small']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Medium"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.medium']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.medium']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.medium']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.medium']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.medium']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.large']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.large']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.large']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.large']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.large']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Large Increased"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.large-increased']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.large-increased']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.large-increased']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.large-increased']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.large-increased']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.extra-large']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.extra-large']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.extra-large']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.extra-large']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.extra-large']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Large Increased"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.extra-large-increased']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.extra-large-increased']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.extra-large-increased']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.extra-large-increased']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.extra-large-increased']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Extra Extra Large"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.extra-extra-large']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.extra-extra-large']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.extra-extra-large']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.extra-extra-large']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.extra-extra-large']}
          corner="all"
        />
      </StorybookDisplay.Items>

      <StorybookDisplay.Items
        label="Full"
      >
        <RadiusBox
          label="Top Left"
          radius={expressiveTokens['md.sys.radius.full']}
          corner="topLeft"
        />
        <RadiusBox
          label="Top Right"
          radius={expressiveTokens['md.sys.radius.full']}
          corner="topRight"
        />
        <RadiusBox
          label="Bottom Left"
          radius={expressiveTokens['md.sys.radius.full']}
          corner="bottomLeft"
        />
        <RadiusBox
          label="Bottom Right"
          radius={expressiveTokens['md.sys.radius.full']}
          corner="bottomRight"
        />
        <RadiusBox
          label="All Corners"
          radius={expressiveTokens['md.sys.radius.full']}
          corner="all"
        />
      </StorybookDisplay.Items>
    </StorybookDisplay>
  );
}
