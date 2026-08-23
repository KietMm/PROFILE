/**
 * Single source of truth for the site. Every string here is transcribed from
 * cv/main_example.tex — if the CV changes, this file changes, nothing else.
 */

export type Lang = "en" | "vi";
export type L = { en: string; vi: string };

export const t = (value: L, lang: Lang): string => value[lang];

export const profile = {
  firstName: "Chau",
  lastName: "Vu Kiet",
  fullName: "Chau Vu Kiet",
  handle: "chau-vu-kiet",
  role: {
    en: "Full-stack / Platform Engineer",
    vi: "Kỹ sư Full-stack / Platform",
  } satisfies L,
  location: {
    en: "Ho Chi Minh City, Vietnam",
    vi: "TP. Hồ Chí Minh, Việt Nam",
  } satisfies L,
  phone: "+84 837 541 890",
  phoneHref: "tel:+84837541890",
  email: "chauvukietcma123@gmail.com",
  linkedin: "https://www.linkedin.com/in/chau-vu-kiet-59810735a",
  /** The one line the hero streams in. Drawn from the CV's opening sentence. */
  thesis: {
    en: "I build the infrastructure that lets coding agents run on every machine in the company.",
    vi: "Tôi xây hạ tầng để coding agent chạy được trên mọi máy trong công ty.",
  } satisfies L,
  summary: {
    en: "Full-stack platform engineer with 2+ years building production AI infrastructure across Python, TypeScript, Go, and Rust. Currently building a Next.js Module Federation microfrontend platform, a distributed agent runtime that streams Claude Code and other coding agents onto employee machines, and the OAuth2/OIDC identity provider behind both. Previously sole backend owner of a multi-tenant AI SaaS platform, driving architecture, integrations, billing, and production operations end to end.",
    vi: "Kỹ sư platform full-stack với hơn 2 năm xây dựng hạ tầng AI chạy production trên Python, TypeScript, Go và Rust. Hiện xây một nền tảng microfrontend Module Federation trên Next.js, một agent runtime phân tán đưa Claude Code và các coding agent khác chạy trực tiếp trên máy nhân viên, cùng identity provider OAuth2/OIDC đứng sau cả hai. Trước đó là người duy nhất phụ trách backend của một nền tảng AI SaaS multi-tenant, tự quyết kiến trúc, tích hợp, billing và vận hành production từ đầu đến cuối.",
  } satisfies L,
};

/* ------------------------------------------------------------------ *
 * Systems — the things named in the CV, read as a fleet.
 * `live`    = built in the current role at KingFoodMart (Jun 2026–Present)
 * `shipped` = built in a prior role, no longer the one being worked on
 * ------------------------------------------------------------------ */

export type SystemStatus = "live" | "shipped";

export type SystemNode = {
  id: string;
  name: string;
  org: string;
  status: SystemStatus;
  /** A quantity that is literally stated in the CV. Never invented. */
  metric: { value: string; label: L };
  kind: L;
  summary: L;
  detail: L[];
  stack: string[];
};

export const systems: SystemNode[] = [
  {
    id: "kdb-pro",
    name: "KDB Pro shell",
    org: "KingFoodMart",
    status: "live",
    metric: { value: "6", label: { en: "remotes", vi: "remote" } },
    kind: { en: "Microfrontend platform", vi: "Nền tảng microfrontend" },
    summary: {
      en: "The shell/host of a runtime-resolved microfrontend platform. Remote URLs live in Postgres and load at runtime, so modules ship without rebuilding the host.",
      vi: "Shell/host của một nền tảng microfrontend resolve tại runtime. URL của remote nằm trong Postgres và được nạp lúc chạy, nên module deploy được mà không cần build lại host.",
    },
    detail: [
      {
        en: "Built the shell/host of a runtime-resolved microfrontend platform (Next.js 16, Module Federation, six remotes): remote URLs live in Postgres and load at runtime, so modules ship without rebuilding the host.",
        vi: "Xây shell/host cho nền tảng microfrontend resolve tại runtime (Next.js 16, Module Federation, sáu remote): URL remote lưu trong Postgres và nạp lúc chạy, nên module ship được mà không cần build lại host.",
      },
      {
        en: "Designed the window.kdb SDK as the shell-to-remote contract for auth, API calls, navigation, and locale, so each remote runs both standalone and embedded; added OIDC route guards, single-flight token refresh, and a streaming proxy for SSE and chunked responses.",
        vi: "Thiết kế SDK window.kdb làm hợp đồng giữa shell và remote cho auth, gọi API, điều hướng và locale, để mỗi remote chạy được cả độc lập lẫn nhúng; bổ sung OIDC route guard, single-flight token refresh và streaming proxy cho SSE và chunked response.",
      },
    ],
    stack: ["Next.js 16", "Module Federation", "TypeScript", "Postgres"],
  },
  {
    id: "hada",
    name: "hada",
    org: "KingFoodMart",
    status: "live",
    metric: { value: "4", label: { en: "agent engines", vi: "agent engine" } },
    kind: { en: "Distributed agent runtime", vi: "Agent runtime phân tán" },
    summary: {
      en: "A cross-platform Rust CLI and daemon that turns employee machines into an agent fleet, with one streaming interface over four coding agents.",
      vi: "CLI và daemon Rust đa nền tảng biến máy nhân viên thành một agent fleet, với một giao diện streaming duy nhất cho bốn coding agent.",
    },
    detail: [
      {
        en: "Wrote hada, a cross-platform Rust CLI and daemon that turns employee machines into an agent fleet: WebSocket control plane for registration, heartbeat, and task streaming, one streaming interface over Claude Code, Codex, Gemini, and Copilot, and capacity-aware routing with an exactly-once slot semaphore.",
        vi: "Viết hada, một CLI và daemon Rust đa nền tảng biến máy nhân viên thành agent fleet: control plane WebSocket cho đăng ký, heartbeat và task streaming, một giao diện streaming chung cho Claude Code, Codex, Gemini và Copilot, cùng cơ chế định tuyến theo capacity với slot semaphore đảm bảo exactly-once.",
      },
    ],
    stack: ["Rust", "WebSocket", "Claude Code", "Codex", "Gemini", "Copilot"],
  },
  {
    id: "kfm-id",
    name: "KFM ID",
    org: "KingFoodMart",
    status: "live",
    metric: { value: "3", label: { en: "languages in one service", vi: "ngôn ngữ trong một service" } },
    kind: { en: "SSO & identity provider", vi: "SSO & identity provider" },
    summary: {
      en: "The company SSO and OAuth2/OIDC identity provider, with an admin-configurable auth flow engine that can pass through to external IdPs.",
      vi: "SSO của công ty và identity provider OAuth2/OIDC, với auth flow engine admin cấu hình được và passthrough sang IdP bên ngoài.",
    },
    detail: [
      {
        en: "Built KFM ID, the company SSO and OAuth2/OIDC identity provider (Go API, Rust worker, Next.js): machine-to-machine service tokens, minted access tokens with roles, and an admin-configurable auth flow engine with passthrough to external IdPs.",
        vi: "Xây KFM ID, SSO của công ty và identity provider OAuth2/OIDC (Go API, Rust worker, Next.js): service token machine-to-machine, phát access token kèm role, và auth flow engine cho admin cấu hình với passthrough sang IdP bên ngoài.",
      },
    ],
    stack: ["Go", "Rust", "Next.js", "OAuth2 / OIDC", "JWT / JWKS"],
  },
  {
    id: "autopilot",
    name: "autopilot",
    org: "KingFoodMart",
    status: "live",
    metric: { value: "2", label: { en: "trigger types", vi: "loại trigger" } },
    kind: { en: "Agent scheduler", vi: "Bộ lập lịch agent" },
    summary: {
      en: "Scheduled and event-driven agent runs, with a visual builder that maps both ways to cron.",
      vi: "Chạy agent theo lịch và theo sự kiện, kèm visual builder ánh xạ hai chiều với cron.",
    },
    detail: [
      {
        en: "Shipped autopilot for scheduled and event-driven agent runs (Go, Rust, Next.js) with cron schedules, filtered webhook triggers, and a visual builder mapping both ways to cron.",
        vi: "Ship autopilot cho các lần chạy agent theo lịch và theo sự kiện (Go, Rust, Next.js) với cron schedule, webhook trigger có lọc, và visual builder ánh xạ hai chiều với cron.",
      },
    ],
    stack: ["Go", "Rust", "Next.js", "cron", "Webhooks"],
  },
  {
    id: "agent-x",
    name: "Agent-X",
    org: "Solazu JSC",
    status: "shipped",
    metric: { value: "1", label: { en: "backend engineer — me", vi: "kỹ sư backend — là tôi" } },
    kind: { en: "Multi-tenant AI SaaS", vi: "AI SaaS multi-tenant" },
    summary: {
      en: "A multi-tenant SaaS platform for deploying AI chatbots and agents across channels. I owned architecture, APIs, integrations, billing, and production operations.",
      vi: "Nền tảng SaaS multi-tenant để triển khai chatbot và agent AI trên nhiều kênh. Tôi phụ trách kiến trúc, API, tích hợp, billing và vận hành production.",
    },
    detail: [
      {
        en: "Designed end-to-end service architecture for agent routing, workflow execution, and real-time response streaming, with strict tenant isolation and RBAC across all API surfaces.",
        vi: "Thiết kế kiến trúc service đầu-cuối cho định tuyến agent, thực thi workflow và streaming phản hồi real-time, với tenant isolation chặt và RBAC trên toàn bộ API.",
      },
      {
        en: "Developed an omnichannel webhook system (Facebook, TikTok, WhatsApp) with idempotent processing, automatic retries, and message deduplication under high concurrency.",
        vi: "Phát triển hệ thống webhook đa kênh (Facebook, TikTok, WhatsApp) với xử lý idempotent, tự động retry và khử trùng lặp tin nhắn dưới tải đồng thời cao.",
      },
      {
        en: "Built a credit-based billing engine (allocation, per-interaction deduction, refunds, monthly resets) and integrated VNPay and Casso with callback verification and reconciliation.",
        vi: "Xây billing engine theo credit (cấp phát, trừ theo từng lượt tương tác, hoàn tiền, reset hằng tháng) và tích hợp VNPay, Casso với xác minh callback và đối soát.",
      },
    ],
    stack: ["FastAPI", "Supabase", "PostgreSQL", "AWS SQS", "S3", "VNPay", "Casso"],
  },
];

/* ------------------------------------------------------------------ *
 * Professional experience — verbatim from the CV.
 * ------------------------------------------------------------------ */

export type Role = {
  id: string;
  company: string;
  title: L;
  location: L;
  period: L;
  current: boolean;
  bullets: L[];
};

export const experience: Role[] = [
  {
    id: "kingfoodmart",
    company: "KingFoodMart",
    title: {
      en: "Full-stack / Platform Engineer, KDB Pro",
      vi: "Kỹ sư Full-stack / Platform, KDB Pro",
    },
    location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" },
    period: { en: "Jun 2026 — Present", vi: "06/2026 — Hiện tại" },
    current: true,
    bullets: [
      {
        en: "Built the shell/host of a runtime-resolved microfrontend platform (Next.js 16, Module Federation, six remotes): remote URLs live in Postgres and load at runtime, so modules ship without rebuilding the host.",
        vi: "Xây shell/host cho nền tảng microfrontend resolve tại runtime (Next.js 16, Module Federation, sáu remote): URL remote lưu trong Postgres và nạp lúc chạy, nên module ship được mà không cần build lại host.",
      },
      {
        en: "Designed the window.kdb SDK as the shell-to-remote contract for auth, API calls, navigation, and locale, so each remote runs both standalone and embedded; added OIDC route guards, single-flight token refresh, and a streaming proxy for SSE and chunked responses.",
        vi: "Thiết kế SDK window.kdb làm hợp đồng giữa shell và remote cho auth, gọi API, điều hướng và locale, để mỗi remote chạy được cả độc lập lẫn nhúng; bổ sung OIDC route guard, single-flight token refresh và streaming proxy cho SSE và chunked response.",
      },
      {
        en: "Wrote hada, a cross-platform Rust CLI and daemon that turns employee machines into an agent fleet: WebSocket control plane for registration, heartbeat, and task streaming, one streaming interface over Claude Code, Codex, Gemini, and Copilot, and capacity-aware routing with an exactly-once slot semaphore.",
        vi: "Viết hada, một CLI và daemon Rust đa nền tảng biến máy nhân viên thành agent fleet: control plane WebSocket cho đăng ký, heartbeat và task streaming, một giao diện streaming chung cho Claude Code, Codex, Gemini và Copilot, cùng định tuyến theo capacity với slot semaphore đảm bảo exactly-once.",
      },
      {
        en: "Built KFM ID, the company SSO and OAuth2/OIDC identity provider (Go API, Rust worker, Next.js): machine-to-machine service tokens, minted access tokens with roles, and an admin-configurable auth flow engine with passthrough to external IdPs.",
        vi: "Xây KFM ID, SSO của công ty và identity provider OAuth2/OIDC (Go API, Rust worker, Next.js): service token machine-to-machine, phát access token kèm role, và auth flow engine cho admin cấu hình với passthrough sang IdP bên ngoài.",
      },
      {
        en: "Shipped autopilot for scheduled and event-driven agent runs (Go, Rust, Next.js) with cron schedules, filtered webhook triggers, and a visual builder mapping both ways to cron.",
        vi: "Ship autopilot cho các lần chạy agent theo lịch và theo sự kiện (Go, Rust, Next.js) với cron schedule, webhook trigger có lọc, và visual builder ánh xạ hai chiều với cron.",
      },
    ],
  },
  {
    id: "solazu-agent-x",
    company: "Solazu JSC",
    title: {
      en: "Backend Engineer, Agent-X Platform",
      vi: "Kỹ sư Backend, nền tảng Agent-X",
    },
    location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" },
    period: { en: "Feb 2025 — May 2026", vi: "02/2025 — 05/2026" },
    current: false,
    bullets: [
      {
        en: "Sole backend engineer on a multi-tenant SaaS platform for deploying AI chatbots and agents across channels; owned architecture, API development, integrations, billing, and production operations.",
        vi: "Kỹ sư backend duy nhất của nền tảng SaaS multi-tenant để triển khai chatbot và agent AI trên nhiều kênh; phụ trách kiến trúc, phát triển API, tích hợp, billing và vận hành production.",
      },
      {
        en: "Designed end-to-end service architecture for agent routing, workflow execution, and real-time response streaming, with strict tenant isolation and RBAC across all API surfaces.",
        vi: "Thiết kế kiến trúc service đầu-cuối cho định tuyến agent, thực thi workflow và streaming phản hồi real-time, với tenant isolation chặt và RBAC trên toàn bộ API.",
      },
      {
        en: "Built the full authentication stack from scratch (email/password, Google OAuth, Facebook OAuth, SSO) integrated with Supabase Auth for secure multi-tenant access control.",
        vi: "Xây toàn bộ tầng xác thực từ đầu (email/mật khẩu, Google OAuth, Facebook OAuth, SSO) tích hợp Supabase Auth để kiểm soát truy cập multi-tenant an toàn.",
      },
      {
        en: "Architected the PostgreSQL data layer via Supabase RPC with composite indexes and optimized joins; built bulk SQL pipelines processing tens of thousands of AI training records per batch with Row-Level Security and Realtime.",
        vi: "Thiết kế tầng dữ liệu PostgreSQL qua Supabase RPC với composite index và join tối ưu; xây pipeline SQL hàng loạt xử lý hàng chục nghìn bản ghi huấn luyện AI mỗi batch với Row-Level Security và Realtime.",
      },
      {
        en: "Developed an omnichannel webhook system (Facebook, TikTok, WhatsApp) with idempotent processing, automatic retries, and message deduplication under high concurrency.",
        vi: "Phát triển hệ thống webhook đa kênh (Facebook, TikTok, WhatsApp) với xử lý idempotent, tự động retry và khử trùng lặp tin nhắn dưới tải đồng thời cao.",
      },
      {
        en: "Built a credit-based billing engine (allocation, per-interaction deduction, refunds, monthly resets) and integrated VNPay and Casso with callback verification and reconciliation; ran async processing on AWS SQS, assets on S3, and production debugging through CloudWatch.",
        vi: "Xây billing engine theo credit (cấp phát, trừ theo từng lượt tương tác, hoàn tiền, reset hằng tháng) và tích hợp VNPay, Casso với xác minh callback và đối soát; chạy xử lý bất đồng bộ trên AWS SQS, lưu asset trên S3 và debug production qua CloudWatch.",
      },
    ],
  },
  {
    id: "solazu-web-ai-agent",
    company: "Solazu JSC",
    title: {
      en: "Backend Developer, Web AI-Agent System",
      vi: "Lập trình viên Backend, hệ thống Web AI-Agent",
    },
    location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" },
    period: { en: "2024", vi: "2024" },
    current: false,
    bullets: [
      {
        en: "Designed and built RESTful APIs for AI agent interactions and core business logic; established backend patterns (error handling, service layering, validation) that became the foundation for Agent-X.",
        vi: "Thiết kế và xây dựng RESTful API cho tương tác agent AI và nghiệp vụ lõi; thiết lập các pattern backend (xử lý lỗi, phân tầng service, validation) trở thành nền móng cho Agent-X.",
      },
      {
        en: "Containerized all services with Docker and configured GitLab CI/CD pipelines for automated build, test, and deployment.",
        vi: "Đóng gói toàn bộ service bằng Docker và cấu hình pipeline GitLab CI/CD cho build, test và deploy tự động.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Core competencies — the CV's seven groups.
 * ------------------------------------------------------------------ */

export type Competency = { id: string; label: L; items: string[] };

export const competencies: Competency[] = [
  {
    id: "languages",
    label: { en: "Languages", vi: "Ngôn ngữ lập trình" },
    items: ["TypeScript / JavaScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    id: "backend",
    label: { en: "Backend & APIs", vi: "Backend & API" },
    items: ["FastAPI", "Flask", "Go services", "Node.js", "REST", "SSE", "WebSocket", "async / event-driven design"],
  },
  {
    id: "ai",
    label: { en: "AI & Agent Platform", vi: "Nền tảng AI & Agent" },
    items: [
      "MCP servers and tool-calling",
      "agent harness and workflow orchestration",
      "streaming LLM responses",
      "human-in-the-loop",
      "multi-provider engines (Claude Code, Codex, Gemini, Copilot)",
    ],
  },
  {
    id: "frontend",
    label: { en: "Frontend", vi: "Frontend" },
    items: ["Next.js (App Router)", "React", "Module Federation microfrontends", "Tailwind", "shadcn", "i18n"],
  },
  {
    id: "auth",
    label: { en: "Auth & Security", vi: "Xác thực & Bảo mật" },
    items: ["OAuth2 / OIDC", "JWT / JWKS", "SSO", "RBAC", "strict multi-tenant isolation"],
  },
  {
    id: "data",
    label: { en: "Data", vi: "Dữ liệu" },
    items: [
      "PostgreSQL / Supabase (RPC, Row-Level Security, Realtime)",
      "MongoDB",
      "MySQL",
      "schema migrations",
      "indexing",
    ],
  },
  {
    id: "cloud",
    label: { en: "Cloud & Ops", vi: "Cloud & Vận hành" },
    items: [
      "AWS (S3, SQS, CloudWatch)",
      "Docker",
      "Kubernetes ingress",
      "GitLab CI/CD",
      "cross-compiled binary distribution",
    ],
  },
];

/* ------------------------------------------------------------------ */

export const education = {
  school: {
    en: "University of Transport Ho Chi Minh City",
    vi: "Trường Đại học Giao thông Vận tải TP. Hồ Chí Minh",
  } satisfies L,
  degree: {
    en: "Bachelor of Information Technology",
    vi: "Cử nhân Công nghệ Thông tin",
  } satisfies L,
  location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" } satisfies L,
  period: "2020 — 2024",
};

export const spokenLanguages: { name: L; level: L }[] = [
  {
    name: { en: "Vietnamese", vi: "Tiếng Việt" },
    level: { en: "Native", vi: "Bản ngữ" },
  },
  {
    name: { en: "English", vi: "Tiếng Anh" },
    level: {
      en: "Professional reading, technical documentation",
      vi: "Đọc hiểu chuyên môn, tài liệu kỹ thuật",
    },
  },
];

export type Achievement = { id: string; title: L; body: L };

export const achievements: Achievement[] = [
  {
    id: "ramp-up",
    title: { en: "Fast ramp-up", vi: "Bắt nhịp nhanh" },
    body: {
      en: "Self-taught FastAPI, Supabase, and multi-tenant SaaS on the job at Solazu, then Go, Rust, and Module Federation at KingFoodMart; shipped production features within weeks each time.",
      vi: "Tự học FastAPI, Supabase và SaaS multi-tenant ngay trong lúc làm ở Solazu, rồi Go, Rust và Module Federation ở KingFoodMart; mỗi lần đều ship được tính năng lên production trong vài tuần.",
    },
  },
  {
    id: "ownership",
    title: { en: "Full ownership", vi: "Sở hữu trọn vẹn" },
    body: {
      en: "Sole backend engineer on Agent-X, from architecture design through deployment and monitoring; lead engineer on the KDB Pro shell and the hada agent runtime.",
      vi: "Kỹ sư backend duy nhất của Agent-X, từ thiết kế kiến trúc đến deploy và giám sát; kỹ sư chính của shell KDB Pro và agent runtime hada.",
    },
  },
  {
    id: "breadth",
    title: { en: "Breadth", vi: "Phạm vi rộng" },
    body: {
      en: "Contributed across eleven services in four languages in a single quarter, spanning frontend platform, identity, agent infrastructure, and BI.",
      vi: "Đóng góp vào mười một service bằng bốn ngôn ngữ chỉ trong một quý, trải từ nền tảng frontend, identity, hạ tầng agent đến BI.",
    },
  },
];

/** Headline numbers. Each one is a fact stated in the CV, not an estimate. */
export const vitals: { id: string; value: string; label: L }[] = [
  { id: "years", value: "2+", label: { en: "years in production", vi: "năm làm production" } },
  { id: "languages", value: "5", label: { en: "languages shipped", vi: "ngôn ngữ đã ship" } },
  { id: "services", value: "11", label: { en: "services in one quarter", vi: "service trong một quý" } },
  { id: "systems", value: "5", label: { en: "platforms built", vi: "nền tảng đã xây" } },
];
