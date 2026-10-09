# Dr. Maya Reynolds, PsyD — Private Practice Website

A modern, responsive, and accessible therapist website built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

This project was developed for the **Grow My Therapy** Front-End Developer Internship practical assignment. It includes both the high-fidelity clone of the Conejo Valley Family Counseling homepage (preserved in Git history) and the redesigned, production-ready website for **Dr. Maya Reynolds, PsyD**, a Licensed Clinical Psychologist based in Santa Monica, California.

---

## 🌟 Features & Sections

- **Clinician Header & Navigation:** Sticky backdrop-blur navigation with anchor scrolling, dropdown menus, and accessible mobile drawer navigation.
- **Hero Section:** Clear clinical positioning, dual calls to action, and custom arched photo frames showcasing Dr. Maya Reynolds and her therapy office.
- **Empathy & Understanding:** Narrative addressing high-functioning anxiety, overthinking, and nervous system regulation.
- **Three Primary Practice Areas:** Structured 3-column service cards with key treatment highlights:
  1. *Anxiety & Panic Therapy*
  2. *Trauma & EMDR Therapy*
  3. *Burnout & Perfectionism*
- **Evidence-Based Modalities:** 4-card overview of Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness-Based Practices, and Somatics.
- **About Dr. Maya Reynolds:** Complete clinician biography, PsyD credentials, and collaborative, stabilization-first philosophy.
- **Our Santa Monica Office:** Dedicated section featuring the physical practice location (`123th Street 45 W, Santa Monica, CA 90401`), 2 verified sunlit office photos, and California-wide telehealth options.
- **Interactive FAQ Accordion:** Accessible questions and answers addressing client fit, session format, modalities, and getting started.
- **Consultation & Contact Form:** Interactive client inquiry form supporting session preference selection (In-Person Santa Monica vs. Telehealth) and instant confirmation state.
- **Practice Footer & Legal Disclaimer:** Location details, quick links, and healthcare legal notice.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React Server & Client Components)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (strict mode enabled)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens and CSS custom properties
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [Google Fonts](https://fonts.google.com/) via `next/font` (*Cormorant Infant* serif & *Mulish* sans)

---

## 📁 Project Structure

```text
Grow My Therapy/
├── app/
│   ├── globals.css          # Design tokens, CSS variables, and base typography
│   ├── layout.tsx           # Root layout, Google Fonts, and SEO metadata
│   └── page.tsx             # Homepage assembling all 11 sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Main navigation header & mobile drawer
│   │   └── Footer.tsx       # Practice footer and legal disclaimer
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero with portrait & office arches
│   │   ├── EmpathySection.tsx     # Empathy narrative & office photo
│   │   ├── WhoWeHelpSection.tsx   # Three Primary Services cards
│   │   ├── QuoteBanner.tsx        # Grounding philosophy banner
│   │   ├── AreasOfExpertise.tsx   # Evidence-based modalities grid
│   │   ├── HowWeWorkSection.tsx   # About Dr. Maya Reynolds section
│   │   ├── TransitionBanner.tsx   # Coastal California transition banner
│   │   ├── OfficeSection.tsx      # Santa Monica office & photo gallery
│   │   ├── FAQSection.tsx         # Interactive FAQ accordion
│   │   └── AppointmentCTA.tsx     # Consultation inquiry form
│   └── ui/
│       └── Button.tsx       # Reusable button component
├── data/
│   ├── mayaContent.ts       # Structured copy & verified profile data
│   └── cloneContent.ts      # Preserved Conejo Valley clone content
├── public/
│   └── images/
│       ├── maya/            # Verified headshot and office images
│       └── clone/           # Preserved reference assets
├── tailwind.config.ts       # Tailwind theme configuration
├── postcss.config.mjs       # PostCSS plugins
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.18+ or 20+
- **npm** (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Grow My Therapy"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

---

## 🧪 Quality Assurance & Build Commands

- **Typecheck:** Verify complete TypeScript type safety:
  ```bash
  npm run typecheck
  ```
- **Production Build:** Create an optimized static build:
  ```bash
  npm run build
  ```
- **Production Preview:** Run the production server locally:
  ```bash
  npm run start
  ```

---

## 📝 Consultation Form Note

The consultation form in `components/sections/AppointmentCTA.tsx` is an interactive front-end workflow with validation and an instant confirmation state. As this assignment is a front-end evaluation, no live SMTP or backend database is attached by default. For production deployment, this form can be connected to any backend handler or API endpoint (e.g., Next.js API route, Resend, or SendGrid).

---

## 🌐 Deployment Instructions

This project is fully compatible with one-click deployment on **Vercel**, **Netlify**, or any Node.js hosting platform:

1. Push the code to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. Build command: `npm run build` (or `next build`).
5. Output directory: `.next`.
6. Click **Deploy**.

---

## 📜 Historical Reference

The original Conejo Valley Family Counseling clone is preserved in Git history on the `main` branch (commit `48caa40`). To view the clone state at any time:
```bash
git checkout 48caa40
```
To return to the Dr. Maya Reynolds redesign:
```bash
git checkout main
```
