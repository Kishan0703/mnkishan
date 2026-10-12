# Interactive Sketchbook & Retro Desk Portfolio

A highly interactive personal portfolio website blending a hand-drawn sketchbook/whiteboard aesthetic with a dynamic 3D workspace, retro hardware UIs, and tactile micro-interactions.

Built with **Next.js (App Router)**, **React**, **Three.js (React Three Fiber)**, **TypeScript**, and **Tailwind CSS**.

---

## Features

### Landing & Navigation (`src/sections/Landing.tsx`)
- Hero landing with responsive desktop (`NavBar`) and mobile (`MobileNavbar`) navigation.
- Loading screen driven by `LoadingContext`.

### Whiteboard About Section (`src/components/Whiteboard/`)
- Hand-drawn whiteboard theme with doodles, stickers, marker headings, and paper textures.
- Avatar card with magnetic hover, core abilities, stats, and a mobile carousel.

### Experience & Projects
- **Experience** (`ExperienceNew.tsx`): ticket-style cards (`ExperienceTicket`).
- **Projects** (`Projects.tsx`): ticket-based project cards with a dedicated `/projects` page.
- **GitHub integration** (`src/app/api/github/route.ts`): fetches repo data via the GitHub API.

### Skills (`src/sections/Skills.tsx`)
- Skill groups rendered from `src/lib/technology.ts` with icon tags.

### Resume (`src/sections/Resume.tsx` + `src/components/IPad/`)
- Realistic iPad replica with power button, screen states, and PDF export.
- Grid layout for Education, Experience, Honors, Projects, and Tech Stack.
- Resume files live in `public/resume/`.

### Contact (`src/sections/Contact.tsx` + `src/app/api/contact/route.ts`)
- Contact form backed by a Next.js API route using **Nodemailer** (Gmail).

### 3D Desk Workspace (`src/components/3-D/Scene.tsx`)
- React Three Fiber + Drei scene with a custom desk model (`public/models/`), OrbitControls, and loading/spawn animations.

### Social Devices (`src/components/Social_Contact/`)
- Interactive iPhone and MacBook widgets for social links.

---

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, tw-animate-css, custom animations |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Animation | Framer Motion, CSS transitions |
| UI | sketchbook-ui, shadcn-style components, Lucide / React Icons, Sonner |
| Forms | Nodemailer via `/api/contact` |

---

## Project Structure

```text
src/
├── app/                    # App Router pages & API routes
│   ├── api/contact/        # Nodemailer contact form endpoint
│   ├── api/github/         # GitHub repos endpoint
│   └── projects/           # Projects page
├── components/
│   ├── 3-D/                # React Three Fiber canvas scene
│   ├── IPad/               # iPad resume viewer + resume data/types
│   ├── Social_Contact/     # iPhone / Macbook social widgets
│   ├── Whiteboard/         # About-section whiteboard components
│   ├── projects/           # Experience & project ticket cards
│   └── ui/                 # NavBar, Doodles, Tags, Loader, etc.
├── sections/               # Page sections (Landing, About, Skills,
│                           # Experience, Projects, Resume, Contact, Footer)
├── context/                # LoadingContext
├── lib/                    # Data, colors, fonts, icons, utils
└── types/                  # Shared TypeScript types
public/
├── images/  doodles/  icons/  models/  projects/  resume/  skills/
```

---

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kishan0703/mnkishan.git
   cd mnkishan
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env.local` in the project root:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   GITHUB_TOKEN=your-github-personal-access-token   # optional, raises API rate limits
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Production build**:

   ```bash
   npm run build
   npm run start
   ```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## License

MIT
