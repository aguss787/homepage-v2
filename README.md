# Personal Homepage

Personal portfolio website for Agus Sentosa Hermawan, built with Next.js 14 and deployed as a static site.

**Live site:** [agus.dev](https://agus.dev)

## 🎯 Project Goals

This website is built with two unique constraints:

1. **No JavaScript Required** - It must work completely without JavaScript enabled. This demonstrates that modern, interactive web experiences can be achieved using CSS-only techniques, without relying on client-side JavaScript.

2. **Claude Code Experiment** - This project serves as an experiment in using [Claude Code](https://claude.ai/code) for development. It explores how AI-assisted development can be integrated into the workflow, with comprehensive documentation in `CLAUDE.md` to guide future AI interactions.

### Key Features

- ✅ **No JavaScript Required** - All interactivity uses CSS (`:checked` pseudo-class, peer selectors)
- ✅ **Static Export** - Generates pure HTML/CSS files for any static host
- ✅ **Responsive Design** - Mobile-first approach with collapsible sidebar
- ✅ **Smooth Animations** - CSS Grid-based animations that adapt to content size
- ✅ **Data-Driven Content** - Easy updates through centralized data files

## 🚀 Getting Started

This project uses **`bun`** as the package manager.

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Start on custom host and port
bun run dev -- -H 0.0.0.0 -p 3001

# Build for production (outputs to /out directory)
bun run build

# Run linter
bun run lint
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Architecture

### CSS-Only Interactivity

All interactive features use the CSS checkbox pattern:

```tsx
<input id="toggle" type="checkbox" className="peer hidden" />
<label htmlFor="toggle">Click to expand</label>
<div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr] peer-checked:grid-rows-[1fr]">
  <div className="overflow-hidden min-h-0">
    <div className="p-4">Content here</div>
  </div>
</div>
```

This technique powers:
- Collapsible experience/achievement sections
- Mobile navigation sidebar
- Smooth expand/collapse animations

### Data Structure

All content is centralized in `src/components/data/profile.ts`:
- `EXPERIENCE` - Work history
- `SIDE_PROJECTS` - Personal projects
- `ACHIEVEMENTS` - Awards and accomplishments
- `NAME`, `BIO` - Personal information

### Static Export

The site is configured with Next.js static export (`output: "export"`):
- Builds to `/out` directory
- No server required
- Can be hosted on any static file host (GitHub Pages, S3, CDN, etc.)
- Images are unoptimized for static compatibility

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.7 (App Router, Static Export)
- **UI:** React 18, TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Heroicons v2
- **Linting:** ESLint with Next.js config
- **Package Manager:** Bun
- **Version Control:** Jujutsu (jj)

## 📝 Development Notes

### AI-Assisted Development

This project includes a `CLAUDE.md` file that provides comprehensive guidance for Claude Code when working in this repository. It documents:
- The critical JavaScript-free constraint
- CSS-only interactivity patterns
- Architecture and component patterns
- Development commands and workflows
- Testing requirements

If you're using Claude Code to work on this project, refer to `CLAUDE.md` for detailed guidelines.

### Version Control

This project uses **`jj` (Jujutsu)** instead of `git`. Common commands:

```bash
jj status          # Check status
jj diff            # View changes
jj describe        # Edit change description
jj new             # Create new change
jj bookmark set    # Move bookmark
jj git push        # Push to remote
```

### Testing JavaScript-Free Functionality

**Before deploying, always test with JavaScript disabled:**

1. **Chrome/Edge:** DevTools → Settings → Debugger → Disable JavaScript
2. **Firefox:** `about:config` → `javascript.enabled` → false
3. **Safari:** Develop → Disable JavaScript

Verify that all features work:
- Collapsible sections expand/collapse
- Mobile sidebar opens/closes
- All links navigate correctly
- All content is visible and readable

## 📄 License

Personal project - all rights reserved.

## 🔗 Links

- **Live Site:** [agus.dev](https://agus.dev)
- **Repository:** [github.com/aguss787/homepage-v2](https://github.com/aguss787/homepage-v2)
