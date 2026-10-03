---
name: design-system
description: "Comprehensive guide, tokens, component blueprints, and strict rules for the 'Frosted Glass Cathedral at Midnight' dark-first design system."
---

# AuthKit — Style Reference
> Frosted glass cathedral at midnight

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position.

AuthKit renders a midnight product-launch aesthetic: a near-black canvas with frosted-glass surfaces, a grid of faint blueprint lines, and luminous text that appears lit from behind a glass layer. Type is almost entirely white-on-dark with one vivid violet as the single functional accent — every interactive surface wears a soft inset hairline of cool blue-white rather than a hard border. Components sit on translucent layers stacked above ambient glows, with cards that look like glass plates lit from below rather than paper panels. Spacing is generous and rhythmic; the hero is a single full-bleed illuminated wordmark surrounded by floating glass cards rather than a conventional split layout.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Canvas | `#05060f` | `--color-midnight-canvas` / `--color-canvas` | Page background, deepest card surface, badge fills — the near-black base everything else floats on |
| Steel Plate | `#2f343e` | `--color-steel-plate` / `--color-steel` | Elevated surface, button fills for ghost/secondary actions, subtle panel backing |
| Fog Veil | `#9da7ba` | `--color-fog-veil` / `--color-fog` | Muted body copy, card text — readable but stepped back from headlines |
| Moon Mist | `#c7d3ea` | `--color-moon-mist` / `--color-mist` | Body text, secondary labels, muted helper copy |
| Frost Glow | `#d1e4fa` | `--color-frost-glow` / `--color-frost` | Primary text fill for body and links, badge text, icon fills — the default luminous foreground |
| Ice Highlight | `linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)` | `--color-ice-highlight` / `--color-ice` | Light text on dark surfaces, inverse labels, and high-contrast captions. Headline gradient — top-to-bottom fade from Ice Highlight to soft blue, used on the wordmark and key headings |
| Pure White | `#ffffff` | `--color-pure-white` / `--color-white` | Button text, input text, maximum-emphasis foreground |
| Void Violet | `#663af3` | `--color-void-violet` / `--color-violet` | Primary CTA fill — the only chromatic accent, used exclusively for the Continue/Submit CTA inside conversion forms |
| Blueprint Blue | `#b6d9fc` | `--color-blueprint-blue` / `--color-blueprint` | Decorative icon accent, soft highlight wash on feature illustrations |
| Ember Glow | `#e46d4c` | `--color-ember-glow` | Error states and validation feedback — the only warm color allowed |
| Signal Blue | `#027dea` | `--color-signal-blue` | Customization swatch grids & brand highlight demos |
| Deep Teal | `#269684` | `--color-deep-teal` | Customization swatch grids & brand highlight demos |
| Gridline Blue | `#3f4959` | `--color-gridline-blue` / `--color-gridline` | Shadow color for outer card drop-shadows |
| Glass Edge | `rgba(186, 215, 247, 0.12)` | `--color-glass-edge` | Hairline borders on buttons, inputs, and links — inset 1px stroke of frosted blue-white |
| Luminous Fill | `rgba(199, 211, 234, 0.12)` | `--color-luminous-fill` / `--color-luminous` | Badge fill and soft surface tint |

---

## Tokens — Typography

### Untitled Sans / Inter — Body, UI, buttons, inputs, badges, small headings
- **Substitute:** `Inter` (`--font-inter`)
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 24px
- **Line height:** 1.17, 1.20, 1.33, 1.43, 1.50
- **Letter spacing:** -0.0100em

### aeonikPro / Space Grotesk — Display headings only
- **Substitute:** `Space Grotesk` (`--font-space-grotesk`)
- **Weights:** 400, 500 (Never 600+)
- **Sizes:** 28px, 44px, 48px
- **Line height:** 1.14, 1.16, 1.17, 1.20
- **Letter spacing:** normal

### dotDigital / JetBrains Mono — All-caps eyebrow labels
- **Substitute:** `JetBrains Mono` (`--font-jetbrains`)
- **Weights:** 400
- **Sizes:** 15px
- **Line height:** 1.20
- **Letter spacing:** 0.1000em
- **OpenType features:** `"tnum" on`

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | Inter | 400/500 | 12px | 1.33 | 0px | `--text-caption` |
| body-sm | Inter | 400/500 | 14px | 1.43 | 0px | `--text-body-sm` |
| body | Inter | 400/500 | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | Inter | 500 | 18px | 1.33 | 0px | `--text-subheading` |
| heading-sm | Space Grotesk | 500 | 24px | 1.17 | -0.24px | `--text-heading-sm` |
| heading | Space Grotesk | 500 | 28px | 1.14 | 0px | `--text-heading` |
| heading-lg | Space Grotesk | 500 | 44px | 1.16 | 0px | `--text-heading-lg` |
| display | Space Grotesk | 500 | 48px | 1.17 | 0px | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px | **Density:** comfortable

### Border Radius Hierarchy (Strict)

| Element | Value | Class |
|---------|-------|-------|
| Cards & Modals | 16px | `rounded-[16px]` |
| Badges & Inputs | 6px | `rounded-[6px]` |
| Buttons & Pills | 999px | `rounded-[999px]` |
| Icon Containers & Avatars | 9999px | `rounded-[9999px]` |

### Shadows & Elevation

| Name | Value | Token |
|------|-------|-------|
| Hairline | `inset 0 0 0 1px rgba(186, 215, 247, 0.12)` | `--shadow-hairline` / `--shadow-subtle` |
| Hairline Focus | `inset 0 0 0 1px rgba(186, 215, 247, 0.24)` | `--shadow-hairline-focus` |
| Feature Card | `inset 0 1px 1px rgba(199, 211, 234, 0.12), inset 0 24px 48px rgba(199, 211, 234, 0.05), 0 24px 32px rgba(6, 6, 14, 0.7)` | `--shadow-card` / `--shadow-subtle-4` |
| Modal / Elevated Card | `inset 0 1px 1px rgba(216, 236, 248, 0.2), inset 0 24px 48px rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)` | `--shadow-modal` / `--shadow-subtle-6` |
| Glow Halo (Hero Wordmark) | `0 0 6px rgba(186, 207, 247, 0.32), 0 0 12px rgba(238, 186, 247, 0.24)` | `--shadow-glow` / `--shadow-sm` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 24px
- **Element gap:** 16px

---

## Component Blueprints

### Pill Button (Primary Ghost)
999px radius, padding 8px 16px, background `rgba(186,214,247,0.06)`, text `#ffffff`, 1px inset hairline `rgba(186,215,247,0.12)`. Weight 500, 14px. Hover lightens to `rgba(186,214,247,0.12)`.

### Pill Button (Outlined)
999px radius, padding 8px 16px, transparent background, text `#d1e4fa`, 1px inset hairline `rgba(186,215,247,0.12)`.

### Violet CTA Button
Solid fill `#663af3`, white text, 999px radius, padding 12px 24px, weight 500. Exactly **ONE** per page on the main inquiry/conversion CTA.

### Glass Card (Feature)
16px radius, background `rgba(186,214,247,0.03)`, padding 24px, no hard border. Elevation built from inset frost highlight + soft outer halo.

### Elevated Modal Card
16px radius, background `rgba(5,6,15,0.97)`, padding 24–32px. Multi-layer inset frost + modal halo.

### Text Input & Textarea
6px radius, background `rgba(199,211,234,0.06)`, text `#ffffff`, placeholder `#c7d3ea` at ~60%, 1px inset hairline `rgba(186,215,247,0.12)`. Focus raises opacity to 0.24. Errors highlight in `#e46d4c`.

### Section Eyebrow Label
15px JetBrains Mono, weight 400, letter-spacing 0.10em, color `#c7d3ea`, centered. Flanked by fading hairlines (`transparent → rgba(186,215,247,0.12) → transparent`).

### Feature Icon Tile
9999px radius (perfect circle), 56–64px square, background `rgba(186,214,247,0.06)`, outlined line-art icon (1.5px stroke) in `#d1e4fa`.

### Badge / Tag
6px radius, background `rgba(199,211,234,0.12)`, text `#d1e4fa`, padding 4px 8px, 12px weight 500 with hairline shadow.

### Background Grid Layer
Full-bleed layer with 1px lines at `rgba(186,215,247,0.06)` on an 80px grid, masked with radial fade, topped by a center conic spotlight:
`conic-gradient(at 50% -5%, transparent 45%, rgba(124,145,182,0.3) 49%, rgba(124,145,182,0.5) 50%, rgba(124,145,182,0.3) 51%, transparent 55%)`

---

## Do's and Don'ts

### Do
- Use 999px radius for all buttons/pills; 16px for cards/modals, 6px for badges/inputs, 9999px for icon tiles/avatars.
- Build elevation from inset frost highlights + soft outer halos rather than conventional drop-shadows.
- Use Void Violet (`#663af3`) exclusively for the primary conversion CTA — never decoratively.
- Set headline text in Space Grotesk weight 500 at 44–48px with Skywash vertical gradient (`#d8ecf8 → #98c0ef`).
- Place all-caps eyebrow labels centered and flanked by fading horizontal lines at `rgba(186,215,247,0.12)`.
- Use `rgba(186,215,247,0.12)` as the universal hairline border — never solid strokes.
- Set section gaps at 120px and card padding at 24px for a cathedral-like rhythm.
- Render text in the `#d8ecf8` → `#d1e4fa` → `#c7d3ea` → `#9da7ba` progression.

### Don't
- Do not introduce additional chromatic accents.
- Do not use solid borders (`border-0` only).
- Do not use bold weights (600+) on display headings.
- Do not apply conventional drop shadows.
- Do not mix radius families on the same component type.
- Do not use the Skywash gradient on body text or buttons.
- Do not introduce light-theme modes into the marketing surfaces.
