# 🍽️ nine2Eleven

> **Food That Feels Like Home, Every Single Day.**

nine2Eleven is a modern, beautifully designed web platform for an all-in-one food service business. It showcases four primary offerings: Mess Facility, Canteen, Restaurant, and Catering & Events. The project is built with a focus on immersive aesthetics, smooth animations, and a seamless user experience.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using modern CSS-first configuration)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** TypeScript

---

## 🎨 Design System

The application uses a curated, typography-driven design system:
- **Fonts:** Playfair Display (Headings) & Nunito (Body)
- **Color Palette:**
  - 🟠 **Saffron:** `#E8930A` (Primary Accent)
  - 🟤 **Mahogany:** `#2E1503` (Primary Text)
  - ⚪ **Cream:** `#FDF6EC` (Background)
  - 🟢 **Forest:** `#2D6A4F` (Secondary Accent)
  - 🟤 **Warm Gray:** `#7A6652` (Secondary Text)

*Note: All custom theme variables are managed directly in `app/globals.css` using the new Tailwind v4 `@theme` directive rather than a `tailwind.config` file.*

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v20+ recommended) and `npm` installed.

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd nine2Eleven
npm install
```

### 3. Run the Development Server
Start the local Next.js development server with Turbopack for faster reloads:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📂 Project Structure

A quick overview of the key directories in the project:

```text
nine2Eleven/
├── app/                  # Next.js App Router pages and global layouts
│   ├── layout.tsx        # Global HTML layout and metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Tailwind v4 configuration (@theme) and global styles
├── components/           # Reusable React components
│   ├── layout/           # Navbar, Footer, Loader, WhatsApp Button
│   ├── sections/         # Landing page sections (Hero, About, Services, etc.)
│   └── ui/               # Generic UI components (Buttons, Badges, etc.)
├── public/               # Static assets (images, icons, etc.)
└── package.json          # Project dependencies and scripts
```

---

## 🛠️ Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the application for production.
- `npm start` - Runs the built application in production mode.
- `npm run lint` - Lints the codebase using ESLint.

---

## 🤝 Contributing

We welcome contributions to make nine2Eleven even better!

1. **Branching:** Please create a feature branch (`git checkout -b feature/your-feature-name`) instead of committing directly to `main`.
2. **Components:** When adding new UI elements, try to reuse the existing color tokens and fonts defined in `globals.css` to maintain visual consistency.
3. **Animations:** We heavily rely on `framer-motion`. Please ensure any custom `ease` properties use `as const` or proper `Variants` typing to prevent TypeScript errors.

Happy coding! 🎉
