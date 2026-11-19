# Dependency review — 19 November 2026

This review belongs to PR #206. All direct dependencies were checked against the
npm registry's stable tags, including the actual targets of the TypeScript aliases.
`pnpm outdated --format json` returned `{}`. Transitive versions remain constrained
by their parent packages; newer direct dependencies do not imply a clean security audit.

## Runtime and tooling

Node.js 24.22.3 LTS, Corepack 0.36.0, pnpm 12.21.0, Nuxt 4.6.4,
Nuxt Content 3.17.0, MDC 0.23.4, Tailwind 4.3.5, vite-svg-loader 5.1.3,
and vue-tsc 3.3.14. The static production image uses nginx
1.30.7 on Alpine 3.24. Native TypeScript 7.0.2 and the TypeScript 6.0.2
compatibility alias are intentional.

## Existing dependency PRs

All 40 open dependency PRs are represented below. These changes supersede their
requested upgrades in PR #206; the PRs remain open until the replacement is merged.
Old Yarn lockfile patches must not be applied to the pnpm lockfile.

| PR | Requested update | Result in the pnpm dependency tree |
| --- | --- | --- |
| [#216](https://github.com/ricardobalk/ricardobalk.nl/pull/216) | Bump nuxt from 3.7.3 to 4.6.2 | Nuxt 4.6.4 |
| [#215](https://github.com/ricardobalk/ricardobalk.nl/pull/215) | Bump source-map-js from 1.0.2 to 1.2.2 | source-map-js 1.2.2 |
| [#214](https://github.com/ricardobalk/ricardobalk.nl/pull/214) | Bump js-yaml from 4.1.0 to 4.3.2 | js-yaml 4.3.2 |
| [#213](https://github.com/ricardobalk/ricardobalk.nl/pull/213) | Bump svgo from 3.0.2 to 3.3.5 | svgo 3.3.5 |
| [#212](https://github.com/ricardobalk/ricardobalk.nl/pull/212) | Bump colord from 2.9.3 to 2.10.0 | colord is absent from the new dependency tree |
| [#211](https://github.com/ricardobalk/ricardobalk.nl/pull/211) | Bump browserslist from 4.21.10 to 4.28.8 | browserslist 4.29.6 |
| [#208](https://github.com/ricardobalk/ricardobalk.nl/pull/208) | Bump postcss from 8.4.31 to 8.5.23 | postcss 8.5.33 |
| [#207](https://github.com/ricardobalk/ricardobalk.nl/pull/207) | Bump socket.io-parser from 4.2.4 to 4.2.7 | socket.io-parser 4.2.7 |
| [#203](https://github.com/ricardobalk/ricardobalk.nl/pull/203) | Bump lodash from 4.17.21 to 4.18.1 | lodash is absent from the new dependency tree |
| [#202](https://github.com/ricardobalk/ricardobalk.nl/pull/202) | Bump node-forge from 1.3.1 to 1.4.0 | node-forge 1.4.3 |
| [#201](https://github.com/ricardobalk/ricardobalk.nl/pull/201) | Bump picomatch from 2.3.1 to 2.3.2 | picomatch 2.3.2 and 4.0.7 |
| [#200](https://github.com/ricardobalk/ricardobalk.nl/pull/200) | Bump h3 from 1.8.1 to 1.15.9 | h3 1.15.11 |
| [#197](https://github.com/ricardobalk/ricardobalk.nl/pull/197) | Bump rollup from 3.29.2 to 3.30.0 | Rollup 3 is absent; Rollup 4.68.7 is installed |
| [#194](https://github.com/ricardobalk/ricardobalk.nl/pull/194) | Bump undici from 5.26.3 to 5.29.0 | undici 8.12.4 |
| [#192](https://github.com/ricardobalk/ricardobalk.nl/pull/192) | Bump serialize-javascript from 6.0.1 to 6.0.2 | serialize-javascript 7.1.4 |
| [#188](https://github.com/ricardobalk/ricardobalk.nl/pull/188) | [Snyk] Upgrade @fortawesome/free-solid-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#187](https://github.com/ricardobalk/ricardobalk.nl/pull/187) | [Snyk] Upgrade @fortawesome/free-regular-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#186](https://github.com/ricardobalk/ricardobalk.nl/pull/186) | [Snyk] Upgrade @fortawesome/free-brands-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#185](https://github.com/ricardobalk/ricardobalk.nl/pull/185) | [Snyk] Upgrade @fortawesome/fontawesome-svg-core from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#184](https://github.com/ricardobalk/ricardobalk.nl/pull/184) | [Snyk] Upgrade @fortawesome/free-solid-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#183](https://github.com/ricardobalk/ricardobalk.nl/pull/183) | [Snyk] Upgrade @fortawesome/free-regular-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#182](https://github.com/ricardobalk/ricardobalk.nl/pull/182) | [Snyk] Upgrade @fortawesome/free-brands-svg-icons from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#181](https://github.com/ricardobalk/ricardobalk.nl/pull/181) | [Snyk] Upgrade @fortawesome/fontawesome-svg-core from 6.4.2 to 6.7.1 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#180](https://github.com/ricardobalk/ricardobalk.nl/pull/180) | [Snyk] Upgrade @fortawesome/free-solid-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#179](https://github.com/ricardobalk/ricardobalk.nl/pull/179) | [Snyk] Upgrade @fortawesome/free-regular-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#178](https://github.com/ricardobalk/ricardobalk.nl/pull/178) | [Snyk] Upgrade @fortawesome/free-brands-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#177](https://github.com/ricardobalk/ricardobalk.nl/pull/177) | [Snyk] Upgrade @fortawesome/fontawesome-svg-core from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#176](https://github.com/ricardobalk/ricardobalk.nl/pull/176) | [Snyk] Upgrade @fortawesome/free-solid-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#175](https://github.com/ricardobalk/ricardobalk.nl/pull/175) | [Snyk] Upgrade @fortawesome/free-regular-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#174](https://github.com/ricardobalk/ricardobalk.nl/pull/174) | [Snyk] Upgrade @fortawesome/free-brands-svg-icons from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#173](https://github.com/ricardobalk/ricardobalk.nl/pull/173) | [Snyk] Upgrade @fortawesome/fontawesome-svg-core from 6.4.2 to 6.6.0 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#172](https://github.com/ricardobalk/ricardobalk.nl/pull/172) | [Snyk] Upgrade: , , , , | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#171](https://github.com/ricardobalk/ricardobalk.nl/pull/171) | Bump micromatch from 4.0.5 to 4.0.8 | micromatch 4.0.8 |
| [#170](https://github.com/ricardobalk/ricardobalk.nl/pull/170) | [Snyk] Upgrade: , , , | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#168](https://github.com/ricardobalk/ricardobalk.nl/pull/168) | [Snyk] Upgrade: , , , | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#167](https://github.com/ricardobalk/ricardobalk.nl/pull/167) | Bump braces from 3.0.2 to 3.0.3 | braces 3.0.3 |
| [#166](https://github.com/ricardobalk/ricardobalk.nl/pull/166) | [Snyk] Upgrade @fortawesome/vue-fontawesome from 3.0.3 to 3.0.8 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#165](https://github.com/ricardobalk/ricardobalk.nl/pull/165) | [Snyk] Upgrade @fortawesome/vue-fontawesome from 3.0.3 to 3.0.6 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#164](https://github.com/ricardobalk/ricardobalk.nl/pull/164) | [Snyk] Upgrade @fortawesome/vue-fontawesome from 3.0.3 to 3.0.6 | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |
| [#163](https://github.com/ricardobalk/ricardobalk.nl/pull/163) | [Snyk] Upgrade: @fortawesome/fontawesome-svg-core, @fortawesome/free-brands-svg-icons, @fortawesome/free-regular-svg-icons, @fortawesome/free-solid-svg-icons | Font Awesome core/icons 7.3.1; Vue integration 3.3.3 |

## Outstanding upstream advisories

`pnpm audit --json` reports one high and one moderate advisory. No audit
suppression or cross-major dependency override has been added.

| Advisory | Dependency path | Remaining limitation |
| --- | --- | --- |
| [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5), high | `@nuxt/content@3.17.0 → zod@3.25.76`, also via `zod-to-json-schema` | The fixed version is Zod 4.6.6 or newer. Content's latest stable release requires Zod 3 and its schema conversion API. A forced major override would not be a verified compatible fix. |
| [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249), moderate | `nuxt → @nuxt/nitro-server → nitropack@2.13.6 → archiver@8.0.0 → readdir-glob@3.0.0 → minimatch@10.2.6` | Fixed minimatch versions start at 11.0.1. The latest archiver still requires readdir-glob 3, which requires minimatch 10. Await a compatible upstream update. |

Both paths are classified as development dependencies by the audit. The final
nginx image serves generated files and contains no Node.js application runtime.
That limits exposure in the static deployment; it does not remove the findings
from development/build environments or establish that arbitrary SSR deployments
are unaffected. Recheck with `pnpm audit` when upstream updates become available.

## Verification

Completed locally in Node.js 24.22.3 containers:

- A clean `pnpm install --frozen-lockfile --offline` in a separate directory,
  using the downloaded package store and running the postinstall preparation.
- `pnpm typecheck:native` and `pnpm typecheck`.
- `pnpm build`.
- `pnpm generate`, prerendering 29 routes.
- Full production Docker build, including clean dependency installation and
  static generation on Alpine, followed by the nginx production image.
- The standalone feature commit also passes `pnpm install --frozen-lockfile`.
- `pnpm outdated --format json` returned `{}`; the audit findings are listed above.

Both typechecks, the production build, and static generation passed again after
the history cleanup. CI repeats these checks and the production Docker build.

The homepage background image uses `/winder-bl.svg` from public assets,
avoiding requests for `/_nuxt/winder-bl.svg`.
