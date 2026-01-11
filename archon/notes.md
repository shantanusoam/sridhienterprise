# Archon Implementation Notes

## 2026-01-11-image-resize

- Goal: Address user request to "make the image little big and all".
- Analysis: Likely referring to either the main About section image (singular prominent image) or the Distributor logos in the carousel (plural but often referred to generically, and recently monitored).
- Implemented:
  - **About Section (`components/about-section.tsx`)**: Increased the container `max-height` from `600px` to `700px`, allowing the main image slideshow to appear larger on larger screens.
  - **Distributors Section (`components/distributors-section.tsx`)**: Reduced the padding around the logo images inside the cards from `p-4` to `p-2`. This makes the logos appear larger relative to the card size ("little big").

## 2026-01-11-footer-cleanup

- Goal: Clean up the `Footer.tsx` file to contain only the currently active information (Quick Links and Copyright), removing unused imports and commented-out sections.
- Implemented:
  - Removed unused `Input` import from `@/components/ui/input`.
  - Removed the commented-out "Follow Us" section and SVG icons.
  - Adjusted layout to center the "Quick Links" section using `flex justify-center` since it is the only content section remaining.
  - Kept the border lines and copyright notice.

## 2026-01-11-process-layout-tweak

- Goal: Balance the layout of the `OurProcess` component by moving the description text from the left navigation panel to the right visual panel.
- Implemented:
  - Removed description text block from the left column in `components/OurProcess.tsx`.
  - Added the description text block to the right column, below the `StepVisual` component.
  - Updated the right column container to use `flex-col` to stack the visual and description vertically.
  - Cleaned up unused imports (`CheckCircle2`).
