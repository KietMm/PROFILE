/**
 * Seed content, transcribed from cv/main_example.tex. It mirrors
 * frontend/src/data/cv.ts — if the CV changes, both files change.
 *
 * Nothing here is invented: the platforms below are internal company systems
 * with no public demo or repository, so those fields are simply absent.
 */

export const profileData = {
  name: "Chau Vu Kiet",
  title: "Full-stack / Platform Engineer",
  bio: "Full-stack platform engineer with 2+ years building production AI infrastructure across Python, TypeScript, Go, and Rust. Currently building a Next.js Module Federation microfrontend platform, a distributed agent runtime that streams Claude Code and other coding agents onto employee machines, and the OAuth2/OIDC identity provider behind both. Previously sole backend owner of a multi-tenant AI SaaS platform, driving architecture, integrations, billing, and production operations end to end.",
  avatar: "/TotNghiep.jpg",
  email: "chauvukietcma123@gmail.com",
  phone: "+84 837 541 890",
  location: "Ho Chi Minh City, Vietnam",
  socialLinks: {
    github: "https://github.com/KietMm",
    linkedin: "https://www.linkedin.com/in/chau-vu-kiet-59810735a"
  }
};

export const projectsData = [
  {
    title: "KDB Pro shell",
    description:
      "The shell/host of a runtime-resolved microfrontend platform (Next.js 16, Module Federation, six remotes): remote URLs live in Postgres and load at runtime, so modules ship without rebuilding the host. The window.kdb SDK is the shell-to-remote contract for auth, API calls, navigation, and locale, with OIDC route guards, single-flight token refresh, and a streaming proxy for SSE and chunked responses.",
    category: "Platform",
    technologies: ["Next.js 16", "Module Federation", "TypeScript", "Postgres", "OIDC"],
    featured: true
  },
  {
    title: "hada",
    description:
      "A cross-platform Rust CLI and daemon that turns employee machines into an agent fleet: a WebSocket control plane for registration, heartbeat, and task streaming, one streaming interface over Claude Code, Codex, Gemini, and Copilot, and capacity-aware routing with an exactly-once slot semaphore.",
    category: "Agent infrastructure",
    technologies: ["Rust", "WebSocket", "Claude Code", "Codex", "Gemini", "Copilot"],
    featured: true
  },
  {
    title: "KFM ID",
    description:
      "The company SSO and OAuth2/OIDC identity provider (Go API, Rust worker, Next.js): machine-to-machine service tokens, minted access tokens with roles, and an admin-configurable auth flow engine with passthrough to external IdPs.",
    category: "Identity",
    technologies: ["Go", "Rust", "Next.js", "OAuth2 / OIDC", "JWT / JWKS"],
    featured: true
  },
  {
    title: "autopilot",
    description:
      "Scheduled and event-driven agent runs (Go, Rust, Next.js) with cron schedules, filtered webhook triggers, and a visual builder mapping both ways to cron.",
    category: "Agent infrastructure",
    technologies: ["Go", "Rust", "Next.js", "cron", "Webhooks"],
    featured: false
  },
  {
    title: "Agent-X Platform",
    description:
      "A multi-tenant SaaS platform for deploying AI chatbots and agents across channels, owned end to end as the sole backend engineer: agent routing, workflow execution, real-time response streaming, strict tenant isolation and RBAC, an omnichannel webhook system (Facebook, TikTok, WhatsApp) with idempotent processing, and a credit-based billing engine integrated with VNPay and Casso.",
    category: "SaaS",
    technologies: ["FastAPI", "Supabase", "PostgreSQL", "AWS SQS", "S3", "CloudWatch"],
    featured: true
  }
];

export const skillsData = [
  {
    title: "Languages",
    description: "Languages shipped to production",
    icon: "code",
    category: "languages",
    technologies: ["TypeScript / JavaScript", "Python", "Go", "Rust", "SQL"]
  },
  {
    title: "Backend & APIs",
    description: "Service and API development",
    icon: "server",
    category: "backend",
    technologies: [
      "FastAPI",
      "Flask",
      "Go services",
      "Node.js",
      "REST",
      "SSE",
      "WebSocket",
      "async / event-driven design"
    ]
  },
  {
    title: "AI & Agent Platform",
    description: "Agent runtimes and orchestration",
    icon: "cpu",
    category: "ai",
    technologies: [
      "MCP servers and tool-calling",
      "agent harness and workflow orchestration",
      "streaming LLM responses",
      "human-in-the-loop",
      "multi-provider engines (Claude Code, Codex, Gemini, Copilot)"
    ]
  },
  {
    title: "Frontend",
    description: "Interfaces and microfrontend platforms",
    icon: "layout",
    category: "frontend",
    technologies: [
      "Next.js (App Router)",
      "React",
      "Module Federation microfrontends",
      "Tailwind",
      "shadcn",
      "i18n"
    ]
  },
  {
    title: "Auth & Security",
    description: "Identity and multi-tenant access control",
    icon: "shield",
    category: "auth",
    technologies: ["OAuth2 / OIDC", "JWT / JWKS", "SSO", "RBAC", "strict multi-tenant isolation"]
  },
  {
    title: "Data",
    description: "Data layer design and query performance",
    icon: "database",
    category: "data",
    technologies: [
      "PostgreSQL / Supabase (RPC, Row-Level Security, Realtime)",
      "MongoDB",
      "MySQL",
      "schema migrations",
      "indexing"
    ]
  },
  {
    title: "Cloud & Ops",
    description: "Deployment, delivery, and production operations",
    icon: "cloud",
    category: "devops",
    technologies: [
      "AWS (S3, SQS, CloudWatch)",
      "Docker",
      "Kubernetes ingress",
      "GitLab CI/CD",
      "cross-compiled binary distribution"
    ]
  }
];
