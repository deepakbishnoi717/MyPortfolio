# Deepak Bishnoi Portfolio

A modern personal portfolio for Deepak Bishnoi, a Web Developer and n8n Automation Specialist. The site presents services, project demos, automation skills, and a contact form connected to an n8n webhook for lead capture.

## Overview

This portfolio is built to show how I help small businesses save time with websites, AI automation, n8n workflows, RAG chatbots, WhatsApp automation, and lead capture systems.

The site includes:

- A conversion-focused hero section
- About section with services and business value
- Project showcase with live demo links
- Skills and tools section
- Contact form connected to an automation webhook
- Responsive layout for mobile and desktop
- Production build configured for Vercel/Nitro

## Portfolio Sections

### Hero

Introduces Deepak as a Web Developer and n8n Automation Specialist, with calls to action for a free consultation and project viewing.

### About

Explains the portfolio owner's focus: building functional websites and automation systems for small businesses while pursuing a BCA degree and freelancing.

### Projects

Showcases selected work and demos:

- Vidya Path Prep
- Gyan Dhara Tech Connect
- BoysZone Style Showcase
- Dental Smile Form
- RAG AI Chatbots and Support Agents
- Lovable Project Showcase
- Email Automation and Lead Capture
- WhatsApp Business Automation

### Skills

Highlights tools and capabilities:

- n8n
- AI Automation
- RAG
- AI Chatbots
- Web Development
- Lovable
- Vibe Coding
- Agentic AI
- WhatsApp Automation
- Python
- LangChain

### Contact

The contact form collects visitor details and sends them to an n8n webhook. It supports inquiries for automation projects, websites, business workflows, and consultation requests.

## Tech Stack

- React 19
- TypeScript
- TanStack Router
- TanStack Start
- Vite
- Tailwind CSS
- Radix UI
- shadcn-style UI components
- Lucide React icons
- Sonner toast notifications
- Nitro/Vercel output
- n8n webhook integration

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Format files:

```bash
npm run format
```

## Project Structure

```text
src/
  components/ui/       Reusable UI components
  hooks/               React hooks
  lib/                 Utilities, config, and server helpers
  routes/              TanStack route files and portfolio page
  router.tsx           Router setup
  server.ts            Server entry
  start.ts             Client start entry
  styles.css           Global styles and theme
```

Main portfolio page:

```text
src/routes/index.tsx
```

## Contact Details

- Email: <sihagdeepak751@gmail.com>
- Fiverr: <https://www.fiverr.com/s/LdwWKEL>

## Deployment

The app is configured for production builds through Vite, TanStack Start, Nitro, and Vercel output.

Recommended deployment flow:

1. Push changes to GitHub.
2. Connect the repository to Vercel.
3. Use `npm run build` as the build command.
4. Deploy the generated Vercel output.

## License

This is a personal portfolio project for Deepak Bishnoi. All portfolio content, project descriptions, and contact details belong to the owner.
