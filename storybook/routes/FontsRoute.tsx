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
import { ExpressiveSpan } from '../../src/components/ExpressiveSpan';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function FontsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Typography"
      >
        <ExpressiveSpan
          font={ExpressiveSpan.font.DisplayLarge}
          style={{ display: 'block' }}
        >
          Display Large
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.DisplayMedium}
          style={{ display: 'block' }}
        >
          Display Medium
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.DisplaySmall}
          style={{ display: 'block' }}
        >
          Display Small
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.HeadlineLarge}
          style={{ display: 'block' }}
        >
          Headline Large
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.HeadlineMedium}
          style={{ display: 'block' }}
        >
          Headline Medium
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.HeadlineSmall}
          style={{ display: 'block' }}
        >
          Headline Small
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.TitleLarge}
          style={{ display: 'block' }}
        >
          Title Large
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.TitleMedium}
          style={{ display: 'block' }}
        >
          Title Medium
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.TitleSmall}
          style={{ display: 'block' }}
        >
          Title Small
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.BodyLarge}
          style={{ display: 'block' }}
        >
          Body Large
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.BodyMedium}
          style={{ display: 'block' }}
        >
          Body Medium
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.BodySmall}
          style={{ display: 'block' }}
        >
          Body Small
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.LabelLarge}
          style={{ display: 'block' }}
        >
          Label Large
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.LabelMedium}
          style={{ display: 'block' }}
        >
          Label Medium
        </ExpressiveSpan>
        <ExpressiveSpan
          font={ExpressiveSpan.font.LabelSmall}
          style={{ display: 'block' }}
        >
          Label Small
        </ExpressiveSpan>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
