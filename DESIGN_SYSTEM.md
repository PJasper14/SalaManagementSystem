# Barangay Sala — Design System

**Brand vibe:** Clean, professional, trustworthy. Government/civic feel with a touch of warmth.  
**Primary color:** `#0D9488` (teal) — authority + approachability.

---

## 1. Color Palette

| Role | Light mode | Dark mode | Usage |
|------|------------|-----------|--------|
| **Primary** | `#0D9488` | `#14B8A6` | Buttons, links, highlights |
| **Secondary** | `#0F766E` | `#0D9488` | Nav hover, badges |
| **Accent** | `#F59E0B` | `#FBBF24` | CTAs, alerts |
| **Neutral 50** | `#FAFAFA` | `#171717` | Page background |
| **Neutral 100** | `#F4F4F5` | `#262626` | Card/section bg |
| **Neutral 200** | `#E4E4E7` | `#404040` | Borders |
| **Neutral 500** | `#71717A` | `#A1A1AA` | Muted text |
| **Neutral 900** | `#18181B` | `#FAFAFA` | Body text |
| **Success** | `#22C55E` | `#4ADE80` | Success messages |
| **Error** | `#EF4444` | `#F87171` | Errors, destructive |
| **Info** | `#3B82F6` | `#60A5FA` | Info messages |

**Tailwind config keys:** `primary`, `secondary`, `accent`; use `zinc` / `neutral` for grays. Semantic colors via `green`, `red`, `blue`.

---

## 2. Typography

| Element | Font | Size | Line height | Weight |
|---------|------|------|-------------|--------|
| **h1** | DM Sans | 2.5rem (40px) | 1.2 | 700 |
| **h2** | DM Sans | 2rem (32px) | 1.25 | 700 |
| **h3** | DM Sans | 1.5rem (24px) | 1.3 | 600 |
| **h4** | DM Sans | 1.25rem (20px) | 1.35 | 600 |
| **Body** | DM Sans | 1rem (16px) | 1.6 | 400 |
| **Small** | DM Sans | 0.875rem (14px) | 1.5 | 400 |
| **Caption** | DM Sans | 0.75rem (12px) | 1.4 | 400 |

- **Font family:** `'DM Sans', sans-serif` (Google Fonts).  
- **Fallback:** `system-ui, sans-serif`.

---

## 3. Spacing Scale (4px base)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` (Tailwind: `1`→`32`).

- Section padding: `py-16 md:py-24`, `px-4 md:px-6 lg:px-8`.
- Card padding: `p-6` or `p-8`.
- Gap between elements: `gap-4`, `gap-6`, `gap-8`.

---

## 4. Shadows & Border Radius

- **Shadow sm:** `shadow-sm` — inputs, small elements.
- **Shadow md:** `shadow-md` — cards.
- **Shadow lg:** `shadow-lg` — modals, hero CTA.
- **Radius sm:** `rounded-lg` (8px) — buttons, inputs.
- **Radius md:** `rounded-xl` (12px) — cards.
- **Radius full:** `rounded-full` — pills, avatars.

---

## 5. Button Styles

| Variant | BG | Text | Border | Hover |
|--------|----|------|--------|-------|
| **Primary** | `bg-primary` | `text-white` | — | `hover:bg-primary/90` |
| **Secondary** | `bg-secondary` | `text-white` | — | `hover:bg-secondary/90` |
| **Outline** | transparent | `text-primary` | `border-2 border-primary` | `hover:bg-primary hover:text-white` |
| **Ghost** | transparent | `text-neutral-700` | — | `hover:bg-neutral-100` |

**Sizes:** `h-9 px-4 text-sm` (sm), `h-11 px-6 text-base` (md), `h-12 px-8 text-lg` (lg).  
Focus: `focus:ring-2 focus:ring-primary focus:ring-offset-2`.

---

## 6. Reusable Components (8–10)

### 6.1 Navbar

- **Description:** Sticky top nav with logo, links, dark mode toggle, mobile menu button.
- **Props:** `links: { href, label }[]`, `logo`, `theme`, `onThemeToggle`, `mobileOpen`, `onMobileToggle`.
- **Tailwind:** `fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800`, `flex items-center justify-between h-16 px-4 md:px-8`.

---

### 6.2 Hero

- **Description:** Full-width hero with headline, subheadline, CTA(s).
- **Props:** `title`, `subtitle`, `primaryCta`, `secondaryCta?`, `background?`.
- **Tailwind:** `min-h-[70vh] flex flex-col justify-center px-4 md:px-8 py-20`, `bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10`, `text-neutral-900 dark:text-white`.

---

### 6.3 Section

- **Description:** Page section with max-width, padding, optional title.
- **Props:** `title?`, `subtitle?`, `id?`, `children`, `className?`.
- **Tailwind:** `max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24`, `space-y-8`.

---

### 6.4 Card

- **Description:** Container for features, news previews, testimonials.
- **Props:** `title?`, `children`, `variant?: 'default' | 'elevated' | 'bordered'`, `href?` (optional link wrapper).
- **Tailwind:** `rounded-xl p-6 md:p-8`, `bg-white dark:bg-neutral-900`, `border border-neutral-200 dark:border-neutral-800`, `shadow-md` for elevated. Hover: `hover:shadow-lg transition-shadow` when clickable.

---

### 6.5 Button

- **Description:** Primary CTA and secondary actions.
- **Props:** `variant: 'primary' | 'secondary' | 'outline' | 'ghost'`, `size: 'sm' | 'md' | 'lg'`, `href?`, `children`, `className?`, `...rest`.
- **Tailwind:** See Button Styles above. Use `inline-flex items-center justify-center font-semibold rounded-lg transition-colors`.

---

### 6.6 Input (Form Input)

- **Description:** Text input, email, textarea with label and error.
- **Props:** `label`, `error?`, `type?`, `placeholder`, `required?`, `...rest`.
- **Tailwind:** `w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3`, `focus:ring-2 focus:ring-primary focus:border-primary`, `invalid:border-error`. Label: `block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1`.

---

### 6.7 Footer

- **Description:** Site footer with columns (links, contact), copyright.
- **Props:** `links`, `address`, `copyright`.
- **Tailwind:** `bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800`, `py-12 md:py-16 px-4 md:px-8`, `grid grid-cols-1 md:grid-cols-3 gap-8`, `text-neutral-600 dark:text-neutral-400`.

---

### 6.8 Badge

- **Description:** Tags, categories, status labels.
- **Props:** `children`, `variant?: 'default' | 'primary' | 'success' | 'error'`.
- **Tailwind:** `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`, `bg-primary/10 text-primary`, etc.

---

### 6.9 DarkModeToggle

- **Description:** Toggle light/dark theme; persists via `localStorage`.
- **Props:** `theme`, `onToggle`.
- **Tailwind:** `rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800`, icon swap (sun/moon).

---

### 6.10 FAQ Accordion

- **Description:** Expand/collapse FAQ items.
- **Props:** `items: { question, answer }[]`.
- **Tailwind:** `border-b border-neutral-200 dark:border-neutral-800`, each item `py-4`, trigger `flex justify-between items-center w-full text-left font-medium`, panel `pt-2 text-neutral-600 dark:text-neutral-400`.

---

*Use these in `components/ui/` and page-level components. Keep class names consistent with Tailwind config.*
