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
import { ExpressiveFontBodyLarge } from '../../src/components/ExpressiveFontBodyLarge';
import { ExpressiveFontBodyMedium } from '../../src/components/ExpressiveFontBodyMedium';
import { ExpressiveFontBodySmall } from '../../src/components/ExpressiveFontBodySmall';
import { ExpressiveFontDisplayLarge } from '../../src/components/ExpressiveFontDisplayLarge';
import { ExpressiveFontDisplayMedium } from '../../src/components/ExpressiveFontDisplayMedium';
import { ExpressiveFontDisplaySmall } from '../../src/components/ExpressiveFontDisplaySmall';
import { ExpressiveFontHeadlineLarge } from '../../src/components/ExpressiveFontHeadlineLarge';
import { ExpressiveFontHeadlineMedium } from '../../src/components/ExpressiveFontHeadlineMedium';
import { ExpressiveFontHeadlineSmall } from '../../src/components/ExpressiveFontHeadlineSmall';
import { ExpressiveFontLabelLarge } from '../../src/components/ExpressiveFontLabelLarge';
import { ExpressiveFontLabelMedium } from '../../src/components/ExpressiveFontLabelMedium';
import { ExpressiveFontLabelSmall } from '../../src/components/ExpressiveFontLabelSmall';
import { ExpressiveFontTitleLarge } from '../../src/components/ExpressiveFontTitleLarge';
import { ExpressiveFontTitleMedium } from '../../src/components/ExpressiveFontTitleMedium';
import { ExpressiveFontTitleSmall } from '../../src/components/ExpressiveFontTitleSmall';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function FontsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Typography"
      >
        <ExpressiveFontDisplayLarge
          block
        >
          Display Large
        </ExpressiveFontDisplayLarge>
        <ExpressiveFontDisplayMedium
          block
        >
          Display Medium
        </ExpressiveFontDisplayMedium>
        <ExpressiveFontDisplaySmall
          block
        >
          Display Small
        </ExpressiveFontDisplaySmall>
        <ExpressiveFontHeadlineLarge
          block
        >
          Headline Large
        </ExpressiveFontHeadlineLarge>
        <ExpressiveFontHeadlineMedium
          block
        >
          Headline Medium
        </ExpressiveFontHeadlineMedium>
        <ExpressiveFontHeadlineSmall
          block
        >
          Headline Small
        </ExpressiveFontHeadlineSmall>
        <ExpressiveFontTitleLarge
          block
        >
          Title Large
        </ExpressiveFontTitleLarge>
        <ExpressiveFontTitleMedium
          block
        >
          Title Medium
        </ExpressiveFontTitleMedium>
        <ExpressiveFontTitleSmall
          block
        >
          Title Small
        </ExpressiveFontTitleSmall>
        <ExpressiveFontBodyLarge
          block
        >
          Body Large
        </ExpressiveFontBodyLarge>
        <ExpressiveFontBodyMedium
          block
        >
          Body Medium
        </ExpressiveFontBodyMedium>
        <ExpressiveFontBodySmall
          block
        >
          Body Small
        </ExpressiveFontBodySmall>
        <ExpressiveFontLabelLarge
          block
        >
          Label Large
        </ExpressiveFontLabelLarge>
        <ExpressiveFontLabelMedium
          block
        >
          Label Medium
        </ExpressiveFontLabelMedium>
        <ExpressiveFontLabelSmall
          block
        >
          Label Small
        </ExpressiveFontLabelSmall>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
