---
name: design-system
description: "Guidelines, tokens, components, and strict rules for the 'Frosted Glass Cathedral at Midnight' dark-first design system in this repository."
---

# Design System: Frosted Glass Cathedral at Midnight

This skill provides the design tokens, component standards, and aesthetic rules for the Old But Gold engineering studio marketing website and applications.

---

## 1. Aesthetic Identity & Philosophy

- **Dark-First Only**: No light theme. The canvas is a deep midnight void (`#05060f`) overlaid with a faint 80px blueprint grid and top-center conic spotlight.
- **Glass Plate Elevation**: Elements read as luminous glass plates lit from below or within, never opaque paper cards with drop shadows.
- **Calm & Architectural**: Quiet authority achieved through large scale, generous spacing (120px section rhythm), and strict mathematical alignment.

---

## 2. Core Design Rules (Enforce Everywhere)

1. **One Chromatic Accent**:
   - **Void Violet** (`#663af3`) appears **ONLY** on the primary conversion CTA ("Start a project" / inquiry form submit).
   - Never use on secondary buttons, badges, icons, borders, or text.
   - Exactly **one** `variant="primary"` button rendered per page.

2. **No Solid Borders**:
   - Every edge is a 1px inset hairline: `box-shadow: inset 0 0 0 1px rgba(186,215,247,0.12)`.
   - Focus state raises opacity to `rgba(186,215,247,0.24)`.
   - `grep -rn "border-" components/` must return only `border-0` or `border-none`.

3. **No Conventional Drop Shadows**:
   - Elevation = Inset frost highlight + inset glow + dark halo:
     - Hairline: `inset 0 0 0 1px rgba(186, 215, 247, 0.12)`
     - Card: `inset 0 1px 1px rgba(199, 211, 234, 0.12), inset 0 24px 48px rgba(199, 211, 234, 0.05), 0 24px 32px rgba(6, 6, 14, 0.7)`
     - Elevated/Modal: `inset 0 1px 1px rgba(216, 236, 248, 0.2), inset 0 24px 48px rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)`

4. **Radius Families (Never Mix)**:
   - **Buttons & Pills**: `rounded-[999px]` (Pill)
   - **Cards & Modals**: `rounded-[16px]`
   - **Badges & Inputs**: `rounded-[6px]`
   - **Icon Containers & Avatars**: `rounded-[9999px]` (Circle)

5. **Text Luminance Ladder**:
   - **Heading (Ice)**: `#d8ecf8`
   - **Body (Frost)**: `#d1e4fa`
   - **Muted (Mist)**: `#c7d3ea`
   - **Helper/Meta (Fog)**: `#9da7ba`
   - **Errors Only**: `#e46d4c` (the only warm tone permitted)

6. **Skywash Gradient**:
   - `linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)` (via `.text-skywash`).
   - Used **ONLY** on the hero wordmark and 44–48px section headings.
   - Never on body text or buttons.

7. **Display Typography**:
   - Display headings are weight **500**, never 600+. Authority comes from scale, not boldness.
   - Fonts:
     - `Space Grotesk` (`var(--font-space-grotesk)`) for headings & wordmark.
     - `Inter` (`var(--font-inter)`) for body and UI.
     - `JetBrains Mono` (`var(--font-jetbrains)`) for eyebrows, metrics, code snippets.

8. **Section Rhythm**:
   - Centered eyebrow label flanked by fading hairlines.
   - Centered display heading (weight 500, Skywash gradient).
   - Muted description text (max-width 640px).
   - 120px section gaps, 24px card padding, 16px element gaps, 1200px max container.

9. **Zero Stock Photos**:
   - Visuals must be interactive glass UI mockups, code snippets, SVG waveform charts, or circular frosted icon tiles.

10. **Data Separation**:
    - All marketing copy, client logos, case studies, team bios, and services live in `content/*.ts`.

---

## 3. UI Component Library Reference

### `<BackgroundGrid />`
Fixed full-bleed layer with 80px blueprint grid and top-center conic spotlight.
```tsx
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
<BackgroundGrid />
```

### `<Eyebrow>`
Monospace uppercase label with flanked fading hairlines.
```tsx
import { Eyebrow } from "@/components/ui/Eyebrow";
<Eyebrow>WHAT WE BUILD</Eyebrow>
```

### `<SectionHeader>`
Eyebrow + 44px display heading + muted description copy.
```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
<SectionHeader
  eyebrow="SELECTED WORK"
  heading="Engineered for high-stakes environments"
  body="A detailed breakdown of architectural decisions."
/>
```

### `<Button>`
Variants: `ghost`, `outline`, `primary` (Void Violet).
```tsx
import { Button } from "@/components/ui/Button";

// Secondary actions
<Button variant="ghost" href="/work">View our work</Button>
<Button variant="outline" href="/contact">Discuss project</Button>

// Primary conversion CTA (ONE per page)
<Button variant="primary" href="/contact">Start a project</Button>
```

### `<GlassCard>`
Frosted glass card with hairline and optional elevated modal styling.
```tsx
import { GlassCard } from "@/components/ui/GlassCard";

<GlassCard interactive className="p-8">
  <h3>Feature Card</h3>
</GlassCard>

<GlassCard elevated className="p-8">
  <h3>Elevated Modal / Mockup</h3>
</GlassCard>
```

### `<IconTile>`
Circular frosted tile with 1.5px stroke monochrome icon.
```tsx
import { IconTile } from "@/components/ui/IconTile";
import { Globe } from "lucide-react";

<IconTile size="md">
  <Globe size={24} strokeWidth={1.5} className="text-[#d1e4fa]" />
</IconTile>
```

### `<Badge>`
6px radius luminous tag pill.
```tsx
import { Badge } from "@/components/ui/Badge";
<Badge>Next.js 15+</Badge>
<Badge active>Active Filter</Badge>
```

### `<Input>` & `<Textarea>`
6px radius, dark glass fill, hairline focus, and warm error state.
```tsx
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

<Input placeholder="name@company.com" error={errors.email?.[0]} />
<Textarea rows={4} placeholder="Project details..." />
```
