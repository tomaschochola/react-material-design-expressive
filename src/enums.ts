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

type EnumValue<T> = T[keyof T];

export const ExpressiveSurfaceEnum = {
  Transparent: 'transparent',
  Lowest: 'lowest',
  Surface: 'surface',
  Low: 'low',
  Container: 'container',
  High: 'high',
  Highest: 'highest',
} as const;

export type ExpressiveSurfaceEnum = EnumValue<typeof ExpressiveSurfaceEnum>;

export const ExpressiveButtonVariantEnum = {
  Filled: 'filled',
  Elevated: 'elevated',
  Tonal: 'tonal',
  Outlined: 'outlined',
  Text: 'text',
} as const;

export type ExpressiveButtonVariantEnum = EnumValue<typeof ExpressiveButtonVariantEnum>;

export const ExpressiveButtonSizeEnum = {
  ExtraSmall: 'extraSmall',
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  ExtraLarge: 'extraLarge',
} as const;

export type ExpressiveButtonSizeEnum = EnumValue<typeof ExpressiveButtonSizeEnum>;

export const ExpressiveButtonShapeEnum = {
  Rounded: 'rounded',
  Square: 'square',
} as const;

export type ExpressiveButtonShapeEnum = EnumValue<typeof ExpressiveButtonShapeEnum>;

export const ExpressiveCardVariantEnum = {
  Filled: 'filled',
  Elevated: 'elevated',
  Outlined: 'outlined',
  Tonal: 'tonal',
} as const;

export type ExpressiveCardVariantEnum = EnumValue<typeof ExpressiveCardVariantEnum>;

export const ExpressiveIconButtonVariantEnum = {
  Standard: 'standard',
  Filled: 'filled',
  Tonal: 'tonal',
  Outlined: 'outlined',
} as const;

export type ExpressiveIconButtonVariantEnum = EnumValue<typeof ExpressiveIconButtonVariantEnum>;

export const ExpressiveDeviceEnum = {
  Phone: 'phone',
  Tablet: 'tablet',
  Desktop: 'desktop',
} as const;

export type ExpressiveDeviceEnum = EnumValue<typeof ExpressiveDeviceEnum>;

export const ExpressiveScreenEnum = {
  Compact: 'compact',
  Medium: 'medium',
  Expanded: 'expanded',
  Large: 'large',
  ExtraLarge: 'extraLarge',
} as const;

export type ExpressiveScreenEnum = EnumValue<typeof ExpressiveScreenEnum>;

export const ExpressiveTypographyEnum = {
  DisplayLarge: 'displayLarge',
  DisplayMedium: 'displayMedium',
  DisplaySmall: 'displaySmall',
  HeadlineLarge: 'headlineLarge',
  HeadlineMedium: 'headlineMedium',
  HeadlineSmall: 'headlineSmall',
  TitleLarge: 'titleLarge',
  TitleMedium: 'titleMedium',
  TitleSmall: 'titleSmall',
  BodyLarge: 'bodyLarge',
  BodyMedium: 'bodyMedium',
  BodySmall: 'bodySmall',
  LabelLarge: 'labelLarge',
  LabelMedium: 'labelMedium',
  LabelSmall: 'labelSmall',
} as const;

export type ExpressiveTypographyEnum = EnumValue<typeof ExpressiveTypographyEnum>;

export const ExpressiveMotionEnum = {
  SpatialFast: 'spatialFast',
  SpatialDefault: 'spatialDefault',
  SpatialSlow: 'spatialSlow',
  EffectsFast: 'effectsFast',
  EffectsDefault: 'effectsDefault',
  EffectsSlow: 'effectsSlow',
} as const;

export type ExpressiveMotionEnum = EnumValue<typeof ExpressiveMotionEnum>;

export const ExpressiveElevationEnum = {
  Level0: 'level0',
  Level1: 'level1',
  Level2: 'level2',
  Level3: 'level3',
  Level4: 'level4',
  Level5: 'level5',
} as const;

export type ExpressiveElevationEnum = EnumValue<typeof ExpressiveElevationEnum>;
