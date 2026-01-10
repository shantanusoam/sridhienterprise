# Archon Implementation Notes

## 2026-01-10-home-uiux

- Goal: elevate the homepage to a premium, cohesive, “award-winning” feel without discarding the existing warm/earthy theme.
- Constraints: keep current palette direction; avoid large content rewrites; favor layering, typography, spacing, and motion polish.
- Implemented:
  - Fixed duplicate header + nested `<main>` by removing `Header` from `app/page.tsx` (layout owns global chrome).
  - Upgraded `app/page.tsx` composition with ambient gradient “superposition”, a post-hero trust ribbon, and a premium CTA panel with proper link semantics + focus rings.
  - Standardized font plumbing: migrated deprecated `@next/font` usage to `next/font`, fixed stray `]` in `app/layout.tsx`, and set `body` to use Tailwind `font-body`.
  - Fixed `Header` color styling (previous Tailwind `bg-${hex}` classes were invalid) using CSS variables + Tailwind arbitrary values.
  - Restored stable `next build` on Windows by adding `pages/_document.tsx` + minimal `pages/404.tsx`/`pages/500.tsx` to satisfy build-time checks, and fixed a `searchParams` nullability type error in `app/products/page.tsx`.
  - Fixed hydration error caused by invalid HTML nesting in `components/about-section.tsx` (a `<div>` inside a `<p>` via `TooltipTrigger asChild`).

