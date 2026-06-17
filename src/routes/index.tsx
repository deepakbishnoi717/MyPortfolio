import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Bot, Workflow, Sparkles, Code2, Database, MessageSquare, Globe,
  ArrowRight, Mail, CheckCircle2, Linkedin, Github, ShoppingBag,
  Zap, Phone, Cpu, ExternalLink, Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak Bishnoi — Web Developer & n8n Automation Specialist" },
      { name: "description", content: "Web Developer & n8n Automation Specialist. I build beautiful websites and intelligent automation workflows — from RAG chatbots to WhatsApp lead pipelines. Book a free consultation." },
      { property: "og:title", content: "Deepak Bishnoi — Web Developer & n8n Automation Specialist" },
      { property: "og:description", content: "Websites and n8n automation for small businesses — workflows, chatbots, and sites that convert." },
    ],
  }),
  component: Portfolio,
});

const WEBHOOK_URL = "https://deepaksihag.app.n8n.cloud/webhook/bd424352-d33b-497a-bc41-bbe167595692";

const projects = [
  {
    title: "Vidya Path Prep",
    stack: "Coaching Centre · Government Jobs · Lovable",
    description:
      "A complete coaching centre website for government job aspirants. Features course listings, study materials, and inquiry forms to capture student leads.",
    icon: Globe,
    href: "https://vidya-path-prep.lovable.app",
  },
  {
    title: "Gyan Dhara Tech Connect",
    stack: "Institute · Lead Capture · WhatsApp · n8n",
    description:
      "An institute website with built-in lead capture, n8n webhook automation, and WhatsApp automation for the owner. Inquiries instantly reach the CRM and owner's phone.",
    icon: Workflow,
    href: "https://gyandharainstitute.vercel.app/",
  },
  {
    title: "BoysZone Style Showcase",
    stack: "Clothing Store · E-commerce Demo · Lovable",
    description:
      "A modern storefront-style landing page for a clothing shop. Clean product showcase with inquiry forms connected to the owner's inbox for order tracking.",
    icon: ShoppingBag,
    href: "https://boyszone-style-showcase.lovable.app",
  },
  {
    title: "Dental Smile Form",
    stack: "Dental Clinic · Appointment Booking · Customer Support",
    description:
      "An appointment booking and customer support system for a dental clinic. Patients can schedule visits, submit inquiries, and receive automated confirmations.",
    icon: Calendar,
    href: "https://dental-smile-form.lovable.app",
  },
  {
    title: "RAG AI Chatbots & Support Agents",
    stack: "n8n · RAG · Pinecone · OpenAI",
    description:
      "Intelligent chatbots that answer customer queries using a knowledge base. Handles tier-1 support 24/7 and escalates complex issues automatically.",
    icon: Bot,
    href: "#",
  },
  {
    title: "Lovable Project Showcase",
    stack: "Lovable · AI Automation · Web App",
    description:
      "A custom project built and deployed on Lovable. Showcasing rapid AI-powered web development and automation capabilities.",
    icon: Zap,
    href: "https://lovable.dev/projects/34c119fd-c489-4cf5-8f47-6478e54dfb8c",
  },
  {
    title: "Email Automation & Lead Capture",
    stack: "n8n · Gmail · Google Sheets · OpenAI",
    description:
      "Fully automated email workflows: auto-replies, lead nurturing sequences, and inquiry routing to CRM + Sheets. No lead falls through the cracks.",
    icon: Mail,
    href: "#",
  },
  {
    title: "WhatsApp Business Automation",
    stack: "n8n · WhatsApp API · Webhooks",
    description:
      "WhatsApp automation for instant customer engagement. Auto-replies, order confirmations, and follow-up messages keep customers connected in real-time.",
    icon: MessageSquare,
    href: "#",
  },
];

const skills = [
  { name: "n8n", icon: Workflow },
  { name: "AI Automation", icon: Sparkles },
  { name: "RAG", icon: Database },
  { name: "AI Chatbots", icon: Bot },
  { name: "Web Development", icon: Code2 },
  { name: "Lovable", icon: Zap },
  { name: "Vibe Coding", icon: Code2 },
  { name: "Agentic AI", icon: Cpu },
  { name: "WhatsApp Automation", icon: Phone },
  { name: "Python", icon: Code2 },
  { name: "LangChain", icon: Bot },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">D</span>
          <span>Deepak</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <Button asChild size="sm" variant="hero">
          <a href="#contact">Hire Me</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="container-px mx-auto max-w-6xl pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-glow" />
            Available for new projects
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="text-gradient">Web Developer & n8n Automation Specialist</span>
            <br />
            <span className="text-foreground/90">I help small businesses save time with AI & n8n workflows</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            From smart chatbots to fully automated lead pipelines — I build systems that work for you 24/7, so you can focus on growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <a href="#contact">Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 text-left md:gap-10">
            <Stat value="3+" label="Websites built" />
            <Stat value="5+" label="Automations shipped" />
            <Stat value="24/7" label="Systems running" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold md:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-24">
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Building automations that <span className="text-gradient">work while you sleep</span>
          </h2>
        </div>
        <div className="space-y-4 text-muted-foreground md:col-span-3 md:text-lg">
          <p>
            Hi, I'm <span className="text-foreground font-medium">Deepak Bishnoi</span> — a Web Developer & n8n Automation Specialist. I specialize in creating beautiful, functional websites and intelligent automation workflows for small businesses.
          </p>
          <p>
            Currently pursuing my BCA degree, I work as a freelancer helping businesses streamline their operations through custom web solutions and n8n workflows. I combine modern web development with AI-powered automation to deliver transformative results.
          </p>
          <p>
            Whether you need a stunning website or a complex automation system — from RAG chatbots to WhatsApp lead pipelines — I'm here to deliver excellence.
          </p>
          <ul className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2">
            {["n8n workflow design", "RAG AI chatbots", "WhatsApp automation", "Conversion-focused sites", "Lead capture systems", "AI customer support"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel className="justify-center">Projects</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Selected automation work</h2>
        <p className="mt-3 text-muted-foreground">
          Real demos built for real use cases — from clinics to clothing stores.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 text-primary ring-1 ring-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  Case study
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs font-medium text-primary/90">{p.stack}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-6">
                <Button asChild variant="outline" size="sm">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    View Demo <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel className="justify-center">Tech Stack</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Skills & tools</h2>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Icon className="h-4 w-4 text-primary" />
              {s.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", businessType: "", message: "" });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (form.name.length > 100 || form.email.length > 255 || form.message.length > 2000) {
      toast.error("Input too long.");
      return;
    }
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "portfolio",
          submittedAt: new Date().toISOString(),
        }),
      });
      toast.success("Thanks! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", businessType: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-24">
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="bg-hero-glow p-8 md:p-12">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Let's automate <span className="text-gradient">your business</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell me about your business and what's slowing you down. I'll reply with a free consultation and a concrete automation idea — usually within 24 hours.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:sihagdeepak751@gmail.com" className="text-primary hover:text-primary/80 transition-colors">sihagdeepak751@gmail.com</a></div>
              <div className="flex items-center gap-3"><ExternalLink className="h-4 w-4 text-primary" /> <a href="https://www.fiverr.com/s/LdwWKEL" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors">Hire me on Fiverr</a></div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-primary" /> Free 20-min consult</div>
              <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-primary" /> Actionable automation roadmap</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 p-8 md:p-12">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required maxLength={100} value={form.name} onChange={onChange("name")} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} value={form.email} onChange={onChange("email")} placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business type</Label>
              <Input id="businessType" maxLength={100} value={form.businessType} onChange={onChange("businessType")} placeholder="e.g. Dental clinic, E-commerce, Agency" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What would you like to automate?</Label>
              <Textarea id="message" required maxLength={2000} value={form.message} onChange={onChange("message")} rows={5} placeholder="Briefly describe the workflow or problem..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Your details are sent securely to my inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Deepak. Built with Lovable.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:sihagdeepak751@gmail.com" aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.fiverr.com/s/LdwWKEL" target="_blank" rel="noreferrer" aria-label="Fiverr" className="transition-colors hover:text-foreground">
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary ${className}`}>
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}
