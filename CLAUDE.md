# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal homepage/portfolio site for Agus Sentosa Hermawan built with Next.js 14, React, TypeScript, and Tailwind CSS. The site is configured as a static export (`output: "export"`) with unoptimized images for deployment to static hosting.

## ⚠️ CRITICAL CONSTRAINT: NO JAVASCRIPT REQUIRED ⚠️

**This site MUST function completely without JavaScript enabled.** All interactivity is implemented using CSS-only techniques (`:checked` pseudo-class, peer selectors, transitions). This is a non-negotiable requirement.

### What This Means:

- **NO** `onClick`, `onChange`, or any event handlers
- **NO** `useState`, `useEffect`, or any React hooks
- **NO** client-side state management
- **NO** dynamic imports or code splitting for interactivity
- **NO** JavaScript-dependent animations or transitions
- React is used ONLY for server-side rendering and component composition

### How to Implement Interactivity:

Use the CSS checkbox pattern:
```tsx
<input id="unique-id" type="checkbox" className="peer hidden" />
<label htmlFor="unique-id">Clickable element</label>
<div className="peer-checked:...">Content that toggles</div>
```

**When making any changes, verify the site works with JavaScript disabled in your browser.**

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production (generates static export in /out)
npm run build

# Run production build locally
npm start

# Run ESLint
npm run lint
```

## Version Control: Jujutsu (jj)

**This project uses `jj` (Jujutsu), NOT `git`.**

When performing version control operations, use `jj` commands instead of `git`:

```bash
# Common jj commands (use these instead of git)
jj status          # Instead of: git status
jj diff            # Instead of: git diff
jj log             # Instead of: git log
jj describe        # Instead of: git commit (edit current change description)
jj new             # Create a new change
jj squash          # Squash changes
jj branch create   # Create a branch
jj branch set      # Move branch to current change
jj git push        # Push to remote (note: still uses 'git' in command)
jj git fetch       # Fetch from remote
```

**Do NOT use `git` commands directly** - use the `jj` equivalents. Jujutsu provides a different model for version control that's more flexible than Git.

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages
  - `page.tsx` - Main homepage with all sections
  - `layout.tsx` - Root layout with header and global styles
  - `not-found.tsx` - 404 page
  - `globals.css` - Global CSS and Tailwind directives
- `src/components/` - React components
  - `header.tsx` - Navigation header with responsive sidebar
  - `header.css` - Header-specific styles
  - `data/` - Content data files
    - `profile.ts` - Personal info, experience, projects, achievements
    - `header-links.tsx` - Navigation links configuration
- `public/images/` - Static assets (photos, logos)

### Data-Driven Content

All content (bio, experience, side projects, achievements) is centralized in `src/components/data/profile.ts`. To update site content, edit this file. The data structures are:

- `EXPERIENCE` - Work history with collapsible sections
- `SIDE_PROJECTS` - Projects with external links
- `ACHIEVEMENTS` - Awards/accomplishments with optional expandable details
- `NAME`, `BIO` - Personal information

Header navigation links are in `src/components/data/header-links.tsx`.

### CSS-Only Interactivity (NO JAVASCRIPT)

**CRITICAL**: All interactivity uses CSS only. Never add JavaScript event handlers or React hooks for UI interactivity.

Current CSS-only features:

1. **Collapsible Sections**: Hidden checkbox inputs with `:checked` pseudo-class and peer selectors toggle `max-height` on sibling elements
2. **Mobile Sidebar**: Same checkbox pattern controls sidebar width transitions
3. **Smooth Transitions**: Tailwind's transition utilities handle all animations

The core pattern (memorize this):
```tsx
<input id="toggle" type="checkbox" className="peer hidden" />
<label htmlFor="toggle">Click me</label>
<div className="max-h-0 peer-checked:max-h-[3999px] transition-height">
  Content
</div>
```

**Any new interactive features MUST use this CSS-only approach.**

### Path Aliases

TypeScript is configured with `@/*` alias mapping to `./src/*` for clean imports:
```typescript
import Header from "@/components/header";
import { NAME } from "@/components/data/profile";
```

### Styling

- Uses Tailwind CSS with custom spacing values:
  - `screen-bottom-1`: `calc(100vh - 1px)` for scroll-to-top button positioning
  - `footer`: `256px` for footer spacing
- Custom transition properties for width and height animations
- Mobile-first responsive design with `sm:` breakpoint modifiers
- Inter font from Google Fonts with `font-mono` override in layout

### Static Export Configuration

**This site is deployed as pure static files** - no server, no Node.js runtime, no JavaScript execution required.

In `next.config.mjs`:
- `output: "export"` generates static HTML/CSS files (Next.js bundles minimal hydration JS, but the site must work without it)
- `images.unoptimized: true` disables Next.js image optimization for static hosting
- Build output goes to `/out` directory

The `/out` directory can be served from any static file host (GitHub Pages, S3, CDN, etc.) and will work completely without JavaScript enabled in the browser.

## Component Patterns

### CollapsibleData Interface

Shared interface for Experience and Achievement sections:
```typescript
interface CollapsibleData {
  id: string;
  name: string;
  image: string;
  date: string;
  title?: string;
  sections?: {
    id: string;
    title?: string;
    date?: string;
    details: string[];
  }[];
}
```

If `sections` is undefined, the item displays as non-interactive. Otherwise, it becomes a collapsible accordion.

### Section Component Pattern

The `Section` component provides consistent title/hr/content layout used throughout the page. `GenericCollapsibleSection` extends this for accordion functionality.

## Tech Stack

- **Framework**: Next.js 14.2.7 (App Router, Static Export)
- **UI**: React 18, TypeScript 5
- **Styling**: Tailwind CSS 3.4.1, PostCSS
- **Icons**: Heroicons v2
- **Linting**: ESLint with Next.js config

## Testing Requirements

### Mandatory: Test Without JavaScript

Before considering any change complete, you MUST:

1. **Disable JavaScript in your browser**:
   - Chrome/Edge: DevTools → Settings → Debugger → Disable JavaScript
   - Firefox: `about:config` → `javascript.enabled` → false
   - Safari: Develop → Disable JavaScript

2. **Verify all functionality works**:
   - Collapsible sections expand/collapse
   - Mobile sidebar opens/closes
   - All links navigate correctly
   - Back-to-top button works
   - All content is visible and readable

3. **Test the production build**: Run `npm run build` and serve the `/out` directory to ensure the static export works as expected

**If any feature requires JavaScript to function, it is broken and must be reimplemented using CSS-only techniques.**
