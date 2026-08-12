# Portfolio Visual Design System

Use the supplied screenshots as the visual reference. Recreate the **outer visual design and design language** closely. Do not define page content, project content, copy, or section-specific information here.

## 1. Overall Style

**Aesthetic:** dark scrapbook × engineering notebook × handmade technical portfolio.

The website should feel like physical paper, notes, sketches, technical boards, and pinned documents placed on a dark workspace.

Core visual characteristics:

- dark charcoal canvas
- warm cream paper
- coral-red ink/annotations
- handwritten typography
- rough/torn paper edges
- masking tape
- thumbtacks/pins
- hand-drawn borders and arrows
- subtle paper grain
- imperfect rotations
- physical shadows
- notebook/grid textures
- occasional device/browser/terminal frames

Avoid making it look like a normal SaaS/developer portfolio.

---

## 2. Color Palette

```css
:root {
  --bg: #1A1A1A;
  --bg-deep: #131313;
  --surface-dark: #1D1D1D;

  --paper: #F5E1CD;
  --paper-light: #FFF8F0;
  --paper-soft: #FAEBD8;
  --paper-muted: #EAD3BB;
  --paper-shadow: #D9C0A5;

  --accent: #E25643;
  --accent-dark: #C94435;
  --accent-soft: #EF7966;

  --text-dark: #24211F;
  --text-light: #F5E1CD;
  --text-muted: #BDB4AA;

  --line-dark: #3A3734;
  --line-paper: #B9AA99;
  --white: #FFFFFF;
}
```

### Color usage

**Charcoal `#1A1A1A`**
- main page background
- dark technical boards
- outer workspace

**Cream `#F5E1CD`**
- paper sheets
- navigation paper
- notebook surfaces
- major physical panels

**Light cream `#FFF8F0`**
- sticky notes
- small paper cards
- lighter physical surfaces

**Coral `#E25643`**
- headings
- handwritten annotations
- borders
- active states
- icons
- highlights
- decorative marks

Use coral as an accent, not as the dominant UI background.

**Dark ink `#24211F`**
- borders
- text on paper
- illustrations

---

## 3. Typography

### Primary handwritten font

**Caveat**

Use for:
- navigation
- headings
- handwritten labels
- sticky notes
- buttons
- annotations

```css
font-family: "Caveat", cursive;
```

### Secondary handwritten font

**Patrick Hand**

Use for:
- small handwritten notes
- labels
- supporting annotations

```css
font-family: "Patrick Hand", cursive;
```

### Serif font

**DM Serif Text**

Use for:
- readable editorial/body text
- longer text on paper
- document-like areas

```css
font-family: "DM Serif Text", serif;
```

### Signature / brush font

Use a script/brush font for the large handwritten name treatment.

Recommended:
**Brittany Signature** or a close equivalent.

The name should feel like a real handwritten signature, not a normal cursive heading.

---

## 4. Typography Feel

Typography should be:

- handmade
- slightly irregular
- expressive
- readable
- personal

Do not use a generic modern SaaS font as the primary visual identity.

Avoid making everything uppercase.

Large headings should feel hand-written rather than geometric.

---

## 5. Paper Design

Paper should look physical.

Use:

- warm cream base
- very subtle grain
- slightly uneven edges
- dark ink border
- physical shadow
- occasional tiny imperfections

Suggested border:

```css
border: 2px solid #24211F;
```

Suggested shadow:

```css
box-shadow: 8px 10px 0 rgba(0, 0, 0, 0.28);
```

Do not use glossy gradients or glassmorphism.

---

## 6. Torn Paper

Major paper elements, especially the top navigation, should have an imperfect/torn edge.

Prefer:

- SVG masks
- SVG rough paths
- supplied paper assets
- subtle clip-paths

The edge should look handmade but controlled.

---

## 7. Tape

Use translucent warm beige tape.

```css
background: rgba(234, 211, 187, 0.78);
```

Tape should have:

- subtle texture
- slight rotation
- irregular edges
- tiny shadow

It should visually sit above the paper.

---

## 8. Pins / Thumbtacks

Use small physical pins to attach major paper pieces.

Visual structure:

```text
      ●
      │
  ─────────
    paper
```

Pins should have a dark head, small stem and subtle shadow.

---

## 9. Borders

Borders should feel hand-drawn rather than perfectly digital.

Use:

```css
--border-thin: 1px;
--border-medium: 2px;
--border-heavy: 3px;
```

Primary ink border:

```css
#24211F
```

Accent border:

```css
#E25643
```

Use dashed/dotted borders for notebook-style section divisions.

---

## 10. Grid / Notebook Background

Technical areas should use a subtle graph-paper grid.

Base:

```css
background: #1A1A1A;
```

Grid:

- thin warm-gray lines
- low opacity
- approximately 32–48px spacing

The grid should remain subtle.

---

## 11. Texture

Use very subtle texture throughout.

### Background
Fine dark grain.

### Paper
Soft paper grain.

### Tape
Slight translucent grain.

### Grid
Very subtle noise over the grid.

Keep texture restrained. It should be noticed subconsciously, not dominate the page.

---

## 12. Imperfect Positioning

Use controlled rotation for physical elements.

Typical range:

```text
-3deg → +3deg
```

Examples:

```css
transform: rotate(-2deg);
transform: rotate(1.5deg);
transform: rotate(-1deg);
```

Use rotation mainly on:

- notes
- polaroids
- tape
- decorative paper
- physical objects

Keep major layout containers aligned.

---

## 13. Physical Shadows

Use hard/subtle physical shadows rather than modern floating UI shadows.

```css
--shadow-note: 5px 6px 0 rgba(0, 0, 0, 0.25);
--shadow-paper: 8px 10px 0 rgba(0, 0, 0, 0.28);
--shadow-device: 0 18px 40px rgba(0, 0, 0, 0.45);
```

---

## 14. Spacing

Use generous editorial spacing.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
```

Do not make the interface overly dense.

---

## 15. Layering

Physical depth should follow:

```text
Background
↓
Decorations
↓
Paper
↓
Cards / Notes
↓
Tape
↓
Pins
↓
Navigation / foreground UI
```

Suggested z-index:

```css
--z-background: 0;
--z-decoration: 5;
--z-paper: 10;
--z-card: 20;
--z-tape: 30;
--z-pin: 40;
--z-navigation: 100;
```

---

## 16. Animation

Keep animation subtle and physical.

Use:

- tiny paper movement
- slight rotation correction on hover
- small vertical lift
- subtle entrance movement

Example:

```css
transition:
  transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
```

Avoid:

- excessive bouncing
- constant floating
- aggressive parallax
- excessive cursor effects
- animation everywhere

---

## 17. Hard No's

Do not introduce:

- glassmorphism
- purple/blue AI gradients
- neon cyberpunk styling
- generic SaaS cards
- excessive pill components
- excessive rounded containers
- huge gradient backgrounds
- random decorative stickers
- stock illustrations
- excessive shadows
- excessive animations
- generic modern developer-portfolio styling

The final result should feel like:

**a real engineering scrapbook / notebook that happens to be a website.**
