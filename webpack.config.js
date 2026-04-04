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

import { Webpack } from '@tomaschochola/tooling-webpack';

// eslint-disable-next-line no-restricted-exports
export default function (env, argv) {
  let webpack = new Webpack(env, argv)
    .entry({
      index: ['./storybook/index.ts', './storybook/index.scss'],
    })
    .browserslist()
    .environment()
    .environment({
      APP_NAME: env.APP_NAME ?? argv.appName ?? process.env.APP_NAME ?? process.env.npm_package_name ?? null,
      APP_VERSION: env.APP_VERSION ?? argv.appVersion ?? process.env.APP_VERSION ?? process.env.npm_package_version ?? null,
    })
    .define()
    .html({
      template: './storybook/index.html',
      filename: 'index.html',
    })
    .copy();

  if (webpack.isProduction) {
    webpack = webpack.gzip().brotli().pwa();
  }

  return webpack.build();
}
