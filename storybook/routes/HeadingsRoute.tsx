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

import type { ReactElement } from 'react';
import { ExpressiveHeading } from '../../src/components/ExpressiveHeading';
import { StorybookDisplay } from '../components/StorybookDisplay';

function HeadingLevel({ level }: { readonly level: 1 | 2 | 3 | 4 | 5 | 6 }): ReactElement {
  return (
    <>
      <ExpressiveHeading
        font={ExpressiveHeading.font.DisplayLarge}
        level={level}
      >
        Display Large
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.DisplayMedium}
        level={level}
      >
        Display Medium
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.DisplaySmall}
        level={level}
      >
        Display Small
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.HeadlineLarge}
        level={level}
      >
        Headline Large
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.HeadlineMedium}
        level={level}
      >
        Headline Medium
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.HeadlineSmall}
        level={level}
      >
        Headline Small
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.TitleLarge}
        level={level}
      >
        Title Large
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.TitleMedium}
        level={level}
      >
        Title Medium
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.TitleSmall}
        level={level}
      >
        Title Small
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.BodyLarge}
        level={level}
      >
        Body Large
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.BodyMedium}
        level={level}
      >
        Body Medium
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.BodySmall}
        level={level}
      >
        Body Small
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.LabelLarge}
        level={level}
      >
        Label Large
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.LabelMedium}
        level={level}
      >
        Label Medium
      </ExpressiveHeading>
      <ExpressiveHeading
        font={ExpressiveHeading.font.LabelSmall}
        level={level}
      >
        Label Small
      </ExpressiveHeading>
    </>
  );
}

export function HeadingsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="H1"
      >
        <HeadingLevel
          level={1}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="H2"
      >
        <HeadingLevel
          level={2}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="H3"
      >
        <HeadingLevel
          level={3}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="H4"
      >
        <HeadingLevel
          level={4}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="H5"
      >
        <HeadingLevel
          level={5}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="H6"
      >
        <HeadingLevel
          level={6}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
