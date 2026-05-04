# AGENTS.md — AI Coding Agent System Rules

> Binding rules for all AI coding agents (Copilot, Cursor, Windsurf, Cline, Aider, etc.) working in this repository.
> Violations produce code that will fail lint, type-check, or review. Follow every rule exactly.

---

## 1. CRITICAL CONSTRAINTS

### 1.1 File Manipulation

- **NEVER** use Python, sed, perl, awk, bash, or any scripting language for bulk file modifications.
- **NEVER** generate shell one-liners that pipe through `sed`, `perl`, `awk`, or similar to rewrite source files.
- All file edits MUST be performed through the agent's native file manipulation capabilities (in-context read → edit → write).
- If you need to change multiple files, change them one at a time using your built-in file editing tools.

### 1.2 Scope Discipline

- Only modify files explicitly requested or directly necessary for the task.
- Do NOT add comments, docstrings, or type annotations to code you did not change.
- Do NOT refactor, reorganize, or "improve" existing code unless explicitly asked.
- Do NOT add error handling for impossible scenarios.
- Do NOT create helper abstractions for one-time operations.

---

## 2. ENVIRONMENT & TOOLCHAIN

### 2.1 Dev Container

The project runs inside a **VS Code Dev Container** (`.devcontainer/devcontainer.json`).

| Setting         | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Base image      | `mcr.microsoft.com/devcontainers/typescript-node:24-trixie` |
| User            | `node`                                                      |
| Workspace       | `/workspaces`                                               |
| Post-create     | `make postcreate` (runs `npm install` + favicon generation) |
| Docker Compose  | `docker-compose.yml` + `docker-compose-devcontainer.yml`    |
| Node.js         | 24.x                                                        |
| Package manager | npm (no yarn, no pnpm)                                      |

VS Code extensions in container: `EditorConfig.EditorConfig`, `Tyriar.sort-lines`, `docker.docker`, `ms-vscode.makefile-tools`.

Editor settings enforced:

- `source.organizeImports`: always (on save)
- `files.insertFinalNewline`: true
- `files.trimFinalNewlines`: true
- `files.trimTrailingWhitespace`: true

### 2.2 Build Stack

| Tool       | Config                                                                                       | Notes                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| TypeScript | `tsconfig.json` → extends `@tomaschochola/tooling-typescript/src/browser_webpack_babel.json` | Strict, browser target                                                                           |
| Babel      | `babel.config.js` → `.presetEnv()`, `.presetTypeScript()`, `.presetReact()`, `.pluginReactCompiler()`                | React Compiler enabled                                                                           |
| Webpack    | `webpack.config.js` → `@tomaschochola/tooling-webpack`                                       | Entry: `storybook/index.ts` + `storybook/index.scss`                                             |
| PostCSS    | `postcss.config.js` → `@tomaschochola/tooling-postcss`                                       | `.presetEnv()` preset                                                                                  |
| ESLint     | `eslint.config.js`                                                                           | Flat config, includes: recommended, typescript, stylistic, react, jsx-a11y, react-hooks, sonarjs |
| Prettier   | `prettier.config.js`                                                                         | With XML plugin                                                                                  |
| Stylelint  | `stylelint.config.js`                                                                        | standard + prettier                                                                              |
| Playwright | `playwright.config.js`                                                                       | E2E tests, multi-browser (Chrome, Firefox, Safari, Edge, mobile)                                 |

### 2.3 Key Dependencies

**Runtime:**

- `react` ^19, `react-dom` ^19
- `react-aria` ^3.47, `react-stately` ^3.45 (Adobe accessibility primitives)
- `react-router` ^7.14 (routing)
- `sanitize.css` ^13 (CSS reset)
- `web-vitals` ^5 (performance metrics)
- `@opentelemetry/*` (full observability stack: traces, metrics, logs)
- `csstype` ^3.2 (CSS type definitions, used in dev)

**Dev:**

- `@playwright/test` + `@axe-core/playwright` (E2E + accessibility testing)
- All `@tomaschochola/tooling-*` packages from GitHub (babel, eslint, postcss, prettier, stylelint, typescript, webpack)
- `@types/react`, `@types/react-dom`

### 2.4 Make Targets

```
make commit      # distclean → update → fix → check (full CI pipeline)
make fix         # eslint_fix → prettier_fix → stylelint_fix → yq_fix
make check       # lint → stan → test → audit
make lint        # eslint_check → prettier_check → stylelint_check
make stan        # typescript_check (tsc --noEmit)
make test        # playwright_test
make start       # webpack-cli serve (dev server on :3000)
make build       # webpack-cli build (production)
```

### 2.5 Module System

- `"type": "module"` in package.json — all `.js` files are ESM.
- `"sideEffects": true` — no tree-shaking assumptions.
- Config files use `// eslint-disable-next-line no-restricted-exports` before `export default`.

---

## 3. FILE HEADER

**Every** `.ts`, `.tsx`, `.js`, `.scss`, `.css` file MUST start with this exact JSDoc block:

```typescript
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
```

For HTML files, use the HTML comment equivalent. For SCSS, use the `/** */` syntax.

---

## 4. TYPESCRIPT CONVENTIONS

### 4.1 Imports

- Use `import type { ... }` for type-only imports — separate from value imports.
- Group imports: React types first, then React values, then `react-aria`/`react-stately`, then internal (`../css/`, `../enums`, `./`).
- Imports are auto-organized on save. Write them in any order; they will be sorted.

### 4.2 Enums

- Define enums in `src/enums.ts` using TypeScript `enum` (not `const enum`, not union types).
- Enum naming: `Expressive{Domain}Enum` (e.g., `ExpressiveButtonVariantEnum`).
- Enum values: PascalCase keys, camelCase string values.

```typescript
export enum ExpressiveButtonVariantEnum {
  Filled = 'filled',
  Elevated = 'elevated',
  Tonal = 'tonal',
  Outlined = 'outlined',
  Text = 'text',
}
```

### 4.3 Type Assertions & Casts

- Avoid `as` casts. When unavoidable, add `// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion`.
- Prefer `satisfies` over `as` for type narrowing of object literals.

---

## 5. REACT COMPONENT PATTERNS

### 5.1 Component Structure (strict order)

```typescript
// 1. File header (JSDoc)
// 2. Type-only imports
// 3. Value imports
// 4. Props interface
// 5. Lookup objects (enum → value maps)
// 6. Styles object
// 7. Component function
// 8. Static enum assignments
```

### 5.2 Props Interface

- Name: `Expressive{Name}Props`.
- Extend the appropriate HTML/Aria attributes with `Omit<..., 'style' | 'children'>` (omit what you re-declare).
- All props MUST be `readonly`.
- `style` prop: always `CSSProperties` (from React), always optional.
- Interactive components extend from `react-aria` types (`AriaButtonProps`, `AriaLinkOptions`, `SeparatorProps`).

```typescript
export interface ExpressiveButtonProps extends Omit<AriaButtonProps, 'children' | 'style'> {
  readonly variant?: ExpressiveButtonVariantEnum;
  readonly size?: ExpressiveButtonSizeEnum;
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly style?: CSSProperties;
}
```

### 5.3 Component Function

- Named export, no `default` export.
- Return type: explicitly `ReactElement` (not `JSX.Element`, not `ReactNode`).
- Props parameter: `Readonly<ExpressiveButtonProps>` wrapper.
- Destructure props in parameter with default values.
- Use rest spreading: `...props` for remaining HTML attributes.

```typescript
export function ExpressiveButton({
  variant = ExpressiveButtonVariantEnum.Text,
  size = ExpressiveButtonSizeEnum.Small,
  symbol,
  label,
  style,
  ...props
}: Readonly<ExpressiveButtonProps>): ReactElement {
```

### 5.4 Static Enum Attachment

After the component function, attach related enums as static properties:

```typescript
ExpressiveButton.variant = ExpressiveButtonVariantEnum;
ExpressiveButton.size = ExpressiveButtonSizeEnum;
ExpressiveButton.shape = ExpressiveButtonShapeEnum;
```

### 5.5 Conditional Rendering

- Use ternary with `null`: `{condition ? <Component /> : null}`.
- For optional rendering based on prop existence: `{symbol !== undefined ? (<ExpressiveIcon ... />) : null}`.
- Never use `&&` short-circuit for rendering.

---

## 6. STYLING SYSTEM

### 6.1 Zero CSS-in-JS Libraries

Styles are pure `CSSProperties` objects. No styled-components, no emotion, no CSS modules for components. SCSS is only used for global styles and design token definitions.

### 6.2 Style Object Pattern

Define a module-level `styles` constant with this exact shape:

```typescript
const styles = {
  root: {
    base: {
      /* always-applied styles */
    },
    [EnumValue]: {
      /* variant-specific styles */
    },
    active: {
      /* state-specific styles */
    },
  },
  label: {
    base: {
      /* ... */
    },
  },
} as const satisfies Record<string, Record<string, StandardLonghandProperties>>;
```

Key rules:

- Import `StandardLonghandProperties` from `csstype`.
- Use `as const satisfies Record<string, Record<string, StandardLonghandProperties>>`.
- Never use shorthand CSS properties (use `paddingLeft`/`paddingRight`, not `padding`; use `borderTopStyle`/`borderTopWidth`/`borderTopColor`, not `border`).
- All border-radius properties must be set individually: `borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius`.
- Use CSS custom property references from `expressiveTokens` for all design token values.

### 6.3 Style Application

- Compose styles inline using `mergeStyles()` — never cache the result in a variable (call it directly in `style={}`).
- Order: base presets → component base → variant → size → conditional states → user `style` prop (last, highest priority).

```typescript
style={mergeStyles(
  internalPresets.base.button,
  expressivePresets.motion.effectsFast,
  styles.root.base,
  styles.root[variant],
  styles.root[size],
  isDisabled ? internalPresets.disabled.container : null,
  style,
)}
```

- `mergeStyles()` accepts `CSSProperties | null | undefined | boolean` — use `null` for inactive conditionals.

### 6.4 Lookup Objects for Prop-to-Value Resolution

Use lookup objects (keyed by enum values) instead of `if`/`switch`/ternary chains:

```typescript
const iconSizeByButtonSize = {
  [ExpressiveButtonSizeEnum.ExtraSmall]: 20,
  [ExpressiveButtonSizeEnum.Small]: 20,
  [ExpressiveButtonSizeEnum.Medium]: 24,
  [ExpressiveButtonSizeEnum.Large]: 32,
  [ExpressiveButtonSizeEnum.ExtraLarge]: 40,
} as const;

// Usage:
const iconSize = iconSizeByButtonSize[size];
```

### 6.5 Design Tokens

- Color, corner, motion, opacity, typography tokens: always use `expressiveTokens['md.sys.*']` (CSS custom property references).
- Typography presets: use `expressivePresets.typography[EnumValue]`.
- Motion presets: use `expressivePresets.motion[EnumValue]`.
- Elevation presets: use `expressivePresets.elevation[EnumValue]`.
- Internal base/disabled presets: use `internalPresets.base.*` and `internalPresets.disabled.*`.

### 6.6 Sizing

- Use `toRem(size)` helper to convert pixel numbers to rem: `calc(N / 16 * 1rem)`.
- Heights, widths, gaps, padding: use pixel string values (`'40px'`, `'16px'`).
- Font sizes come from design tokens (CSS custom properties).

---

## 7. ACCESSIBILITY (react-aria)

### 7.1 Interactive Components

All interactive components MUST use `react-aria` hooks:

| Element            | Hook           | Ref type            |
| ------------------ | -------------- | ------------------- |
| `<button>`         | `useButton`    | `HTMLButtonElement` |
| `<a>` (link)       | `useLink`      | `HTMLAnchorElement` |
| `<hr>` (separator) | `useSeparator` | —                   |

Additional hooks used together:

- `useHover` — for hover state (`isDisabled` passed through).
- `useFocusRing` — for keyboard focus visibility (`autoFocus` passed through).
- `mergeProps` — to combine hook outputs onto the element.

### 7.2 Hook Output Usage

After passing rest props into react-aria hooks, use the **hook output props** on the element, not the original rest props:

```typescript
const ref = useRef<HTMLButtonElement>(null);
const { buttonProps, isPressed } = useButton(props, ref);
const { hoverProps, isHovered } = useHover({ isDisabled });
const { focusProps, isFocusVisible } = useFocusRing({ autoFocus: isAutoFocus });

<button
  {...mergeProps(buttonProps, hoverProps, focusProps)}
  ref={ref}
  style={mergeStyles(...)}
>
```

### 7.3 State Layers

Interactive components render state layers in this order inside the element:

1. `<ExpressiveStateLayer>` for hover (opacity from `md.sys.opacity.state.hovered`)
2. `<ExpressiveStateLayer>` for press (opacity from `md.sys.opacity.state.pressed`)
3. `<ExpressiveStateLayer>` for focus (opacity from `md.sys.opacity.state.focused`)
4. Content (icon, label, etc.)
5. `<ExpressiveBorderLayer>` (if outlined variant)
6. `<ExpressiveFocusedOutlineLayer>` (always last)

### 7.4 Link `aria-current` Detection

For navigation links, detect active/current state from the hook output:

```typescript
const { linkProps, isPressed } = useLink(props, ref);
const isCurrent = Boolean(linkProps['aria-current']);
```

---

## 8. COMPONENT COMPOSITION PATTERNS

### 8.1 Layer Components

The design system uses absolute-positioned overlay layers inside `position: relative` containers:

- `ExpressiveStateLayer` — color overlay for hover/press/focus states.
- `ExpressiveActivationLayer` — scaled background for active/selected indicators.
- `ExpressiveBorderLayer` — border overlay for outlined variants.
- `ExpressiveFocusedOutlineLayer` — keyboard focus indicator (outline or inset border).

All layers: `position: absolute`, `inset: 0`, `pointerEvents: none`, `userSelect: none`, `borderRadius: inherit`.

### 8.2 ExpressiveIcon

Wraps SVG symbols with consistent sizing. Accepts `size` (number → rem conversion) and `symbol` (ReactNode).

### 8.3 ExpressiveHeadingContext

Auto-increments heading level (h1→h6) via React context. Nest `<ExpressiveHeadingContext>` to increase level. `<ExpressiveHeading>` reads the context.

---

## 9. STORYBOOK APPLICATION LAYER (`storybook/`)

### 9.1 Architecture

```
storybook/
├── index.ts          # Entry: preload styles, core-js, observability, SW registration, dynamic import bootstrap
├── index.html        # HTML template with meta tags, font preloads, favicon links
├── index.scss        # Global styles: imports color scheme + styles
├── observability.ts  # OpenTelemetry setup (traces, metrics, logs, web-vitals)
├── bootstrap.tsx     # React root: StrictMode, providers, router
├── router.tsx        # react-router browser router definition
├── boundaries/       # Error boundary components (class + hook-based)
├── helpers/          # Utility functions (promise wrapping)
├── lang/             # i18n: translations, locale provider, SEO hooks
├── routes/           # Route components (IndexRoute, NotFoundRoute, RootRoute)
├── suspenses/        # Suspense wrappers (SuspenseAwait, SuspenseValue)
└── types/            # Declaration files (aria router config, env vars, module declarations)
```

### 9.2 Bootstrap Chain

1. `index.ts`: convert preload links to stylesheets → import core-js → import observability → register service worker → dynamic `import('./bootstrap')`
2. `bootstrap.tsx`: create root div → create router → render `<StrictMode>` → `<ErrorBoundary>` → `<ExpressiveHeadingContext>` → `<AriaRouterProvider>` → `<LocaleProvider>` → `<RouterProvider>`

### 9.3 Router Integration

- `react-router` v7 with `createBrowserRouter`.
- `react-aria` `RouterProvider` integration: `navigate` and `useHref` bridged.
- Router config typed in `storybook/types/aria.d.ts`.

### 9.4 Route Components

- Functional components returning `ReactElement`.
- Use `useTrans()` for i18n strings.
- Use `useSeo()` hook for `<title>`, `<meta name="keywords">`, `<meta name="description">`.
- RootRoute: wraps `<Outlet>` with `data-testid="sentinel"` + `<ScrollRestoration>`.

### 9.5 i18n System

- Translations in `storybook/lang/en.ts` as plain object with dot-notation keys.
- Type-safe: `Strings` type exported.
- `useTrans()` returns `useLocalizedStringFormatter` from `react-aria`.
- `LocaleProvider` wraps `I18nProvider` with localStorage persistence.
- Locale strings loaded lazily with `wrapPromise()` for Suspense compatibility.

### 9.6 Error Boundaries

Three types, all dispatch `ErrorEvent` to `window` for observability:

- `ErrorBoundary` — class component, top-level.
- `RouteErrorBoundary` — hook-based (`useRouteError`).
- `AsyncErrorBoundary` — hook-based (`useAsyncError`).

### 9.7 Type Declarations

- `storybook/types/env.d.ts` — declares `process.env` shape (APP_ENV, APP_NAME, APP_VERSION, WEBPACK_MODE, OTLP_API_KEY, NODE_ENV).
- `storybook/types/aria.d.ts` — augments `@react-types/shared` `RouterConfig` for react-router integration.
- `storybook/types/modules.d.ts` — declares webpack asset modules (`?source`, `?resource`, `?inline`, `?asset`, `&as=avif`, etc.).

---

## 10. SCSS & GLOBAL STYLES

### 10.1 Structure

```
src/css/
├── styles.scss       # Entry: imports sanitize, base, colors, typography, scrollbar
├── sanitize.scss     # Imports sanitize.css
├── base.scss         # :root min-height: 100vh
├── colors.scss       # :root CSS vars for background, text, scrollbar colors
├── typography.scss   # Font families, heading/paragraph margins
├── scrollbar.scss    # Responsive scrollbar width (none/thin/auto by screen size)
└── sys.scss          # Design system CSS custom properties (corners, motion, opacity, typography)
```

### 10.2 Color Schemes

30 scheme files in `src/schemes/` — 3 variants × 5 colors × 2 modes:

- Variants: `cmf_`, `expressive_`, `neutral_`
- Colors: `blue`, `green`, `official`, `red`, `yellow`
- Modes: `light_`, `dark_`

Each defines 60+ CSS custom properties (`--md-sys-color-*`). Import one in `storybook/index.scss`:

```scss
@use '../src/schemes/cmf_light_official';
@use '../src/css/styles';
```

### 10.3 SCSS Rules

- No component-level SCSS — components use CSS-in-JS objects only.
- SCSS is for global tokens, resets, and scheme definitions only.
- Do NOT create new `.scss` files for components.

---

## 11. TESTING

### 11.1 Framework

- **Playwright** for E2E testing.
- **@axe-core/playwright** for accessibility assertions.

### 11.2 Test Pattern

```typescript
import { expect, test } from '@playwright/test';
import { en } from '../storybook/lang/en';
import { assertPage } from './test';

test('/', async ({ page }) => {
  await assertPage(page, '/');
  await expect(page).toHaveURL('/');
  await expect(page).toHaveTitle(en['routes.index.seo.title']);
});
```

### 11.3 Test Helpers (`tests/test.ts`)

- `waitForIdle(page)` — waits for load + domcontentloaded + networkidle.
- `assertAxe(page)` — runs axe accessibility check with WCAG 2.0/2.1/2.2 AA + best-practice + ACT + EN-301-549 tags.
- `assertPage(page, url)` — goto → waitForIdle → assert sentinel attached → assert no webpack overlay → assertAxe.

### 11.4 Accessibility Testing Tags

Tests enforce: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, `best-practice`, `ACT`, `EN-301-549`.

---

## 12. PRODUCTION & DEPLOYMENT

### 12.1 Docker Build

Multi-stage Dockerfile:

1. `base` — Node 24 on Debian Trixie, production env.
2. `development_deps` — npm install all deps.
3. `build` — copy source, run `tsc`.
4. `nginx` — nginx-unprivileged, copies built assets + nginx config, generates self-signed SSL cert.
5. `devcontainer` — dev image with yq, build tools, Playwright browsers.

### 12.2 Nginx

- Unprivileged nginx (port 8080).
- SPA fallback: `try_files $uri /index.html`.
- Immutable caching for `^~ /immutable.` paths (1 year, immutable).
- HTML files: `private, no-store`.
- Security headers: CSP, COEP, COOP, CORP, HSTS, X-Frame-Options deny, no-referrer.
- Health check: `/nginx_ping` returns "pong".

### 12.3 Webpack Production

In production mode, webpack adds: gzip compression, brotli compression, PWA (service worker).

---

## 13. SVG SYMBOL COMPONENTS

Located in `src/symbols/`. Pattern:

```typescript
import type { ReactElement, SVGAttributes } from 'react';

type ExpressiveSymbol{Name}Props = Omit<SVGAttributes<SVGSVGElement>, 'children'>;

export function ExpressiveSymbol{Name}({ ...props }: Readonly<ExpressiveSymbol{Name}Props>): ReactElement {
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* SVG content using fill="currentColor" */}
    </svg>
  );
}
```

- Use `currentColor` for fills/strokes to inherit parent color.
- ViewBox: `0 0 40 40` (standard).
- Width/height: `100%` (scales to container).

---

## 14. HOOKS (`src/hooks/media.ts`)

- Media query hooks use `useSyncExternalStore` (React 18+).
- Each hook returns a `boolean` matching a media query from `expressiveQueries`.
- Compound hooks (`useExpressiveDevice`, `useExpressiveScreen`) return enum values.
- Custom query: `useExpressiveMediaQuery(query: string): boolean`.

---

## 15. NAMING CONVENTIONS

| Entity             | Pattern                         | Example                       |
| ------------------ | ------------------------------- | ----------------------------- |
| Component file     | `Expressive{Name}.tsx`          | `ExpressiveButton.tsx`        |
| Component function | `Expressive{Name}`              | `ExpressiveButton`            |
| Props interface    | `Expressive{Name}Props`         | `ExpressiveButtonProps`       |
| Enum               | `Expressive{Domain}Enum`        | `ExpressiveButtonVariantEnum` |
| Enum values        | PascalCase key, camelCase value | `ExtraSmall = 'extraSmall'`   |
| CSS token          | `md.sys.{category}.{name}`      | `md.sys.color.primary`        |
| CSS variable       | `--md-sys-{category}-{name}`    | `--md-sys-color-primary`      |
| Hook               | `useExpressive{Name}`           | `useExpressiveCompactMedia`   |
| Symbol             | `ExpressiveSymbol{Shape}`       | `ExpressiveSymbolCircle`      |
| Route              | `{Name}Route`                   | `IndexRoute`                  |
| Boundary           | `{Name}Boundary`                | `ErrorBoundary`               |
| Test file          | `{route_name}.spec.ts`          | `index.spec.ts`               |
| Translation key    | `routes.{route}.{purpose}`      | `routes.index.seo.title`      |
| SCSS scheme        | `{variant}_{mode}_{color}.scss` | `cmf_light_official.scss`     |

---

## 16. CODE STYLE QUICK REFERENCE

- **Semicolons**: always.
- **Quotes**: single quotes for strings.
- **Trailing commas**: yes (ES5+).
- **Indentation**: 2 spaces.
- **Line endings**: LF.
- **Final newline**: yes.
- **Max line length**: managed by Prettier.
- **Object properties**: explicit values, no shorthand in style objects (e.g., `isDisabled: isDisabled` not just `isDisabled`).
- **Ternary style**: inline for short expressions, multi-line with parenthesized JSX for rendering.
- **Null over undefined**: use `null` as the "no value" in conditional style merging.
- **Boolean extraction**: `const isDisabled = Boolean(props.isDisabled);` — explicit Boolean conversion.
- **Ref pattern**: `const ref = useRef<HTMLButtonElement>(null);` — typed, initialized to null.
- **No default exports**: all exports are named. Config files that require `export default` use the `// eslint-disable-next-line no-restricted-exports` comment.
- **`as const`**: use liberally on lookup objects and style objects.
- **`satisfies`**: use on style objects for type checking without widening.
