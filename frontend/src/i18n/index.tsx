import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { L, Lang } from "@/data/cv";

const STORAGE_KEY = "cvk.lang";

/** Interface copy. CV content lives in @/data/cv — this is only chrome. */
export const ui = {
  navHome: { en: "Overview", vi: "Tổng quan" },
  navSystems: { en: "Systems", vi: "Hệ thống" },
  navExperience: { en: "Experience", vi: "Kinh nghiệm" },
  navContact: { en: "Contact", vi: "Liên hệ" },

  railLocalTime: { en: "Local time", vi: "Giờ địa phương" },
  railStatus: { en: "Building at KingFoodMart", vi: "Đang xây dựng tại KingFoodMart" },

  emailMe: { en: "Email me", vi: "Gửi email" },
  viewSystems: { en: "See what I built", vi: "Xem tôi đã xây gì" },
  openMenu: { en: "Open menu", vi: "Mở menu" },
  closeMenu: { en: "Close menu", vi: "Đóng menu" },
  menu: { en: "Menu", vi: "Menu" },
  languageLabel: { en: "Language", vi: "Ngôn ngữ" },

  fleetTitle: { en: "Systems in the fleet", vi: "Hệ thống trong fleet" },
  fleetHint: {
    en: "Five platforms, two employers, four languages.",
    vi: "Năm nền tảng, hai nơi làm việc, bốn ngôn ngữ.",
  },
  nodes: { en: "nodes", vi: "node" },
  platforms: { en: "platforms", vi: "nền tảng" },
  roles: { en: "roles", vi: "vị trí" },
  statusLive: { en: "Building now", vi: "Đang xây" },
  statusShipped: { en: "Shipped", vi: "Đã ship" },
  legend: { en: "Legend", vi: "Chú giải" },

  vitalsTitle: { en: "By the numbers", vi: "Bằng con số" },
  summaryTitle: { en: "Summary", vi: "Tóm tắt" },
  stackTitle: { en: "Core competencies", vi: "Năng lực cốt lõi" },
  stackHint: {
    en: "Seven groups, as they appear on the CV.",
    vi: "Bảy nhóm, đúng như trên CV.",
  },

  systemsTitle: { en: "Systems", vi: "Hệ thống" },
  systemsLede: {
    en: "Every platform below is named in the CV, with the work described in the same words. Open one to read the detail.",
    vi: "Mọi nền tảng dưới đây đều được nêu trong CV, mô tả giữ nguyên câu chữ. Mở một mục để đọc chi tiết.",
  },
  whatIBuilt: { en: "What I built", vi: "Tôi đã xây gì" },
  stackLabel: { en: "Stack", vi: "Công nghệ" },

  experienceTitle: { en: "Experience", vi: "Kinh nghiệm" },
  experienceLede: {
    en: "Three roles, most recent first.",
    vi: "Ba vị trí, mới nhất trước.",
  },
  educationTitle: { en: "Education", vi: "Học vấn" },
  languagesTitle: { en: "Languages", vi: "Ngôn ngữ" },
  achievementsTitle: { en: "Achievements", vi: "Thành tựu" },
  currentRole: { en: "Current", vi: "Hiện tại" },

  contactTitle: { en: "Contact", vi: "Liên hệ" },
  contactLede: {
    en: "Reach me on any of these. Email is fastest.",
    vi: "Liên hệ qua bất kỳ kênh nào bên dưới. Email là nhanh nhất.",
  },
  fieldEmail: { en: "Email", vi: "Email" },
  fieldPhone: { en: "Phone", vi: "Điện thoại" },
  fieldLocation: { en: "Location", vi: "Nơi ở" },
  fieldLinkedin: { en: "LinkedIn", vi: "LinkedIn" },
  copy: { en: "Copy", vi: "Sao chép" },
  copied: { en: "Copied", vi: "Đã chép" },
  references: { en: "References available upon request.", vi: "Người tham chiếu sẵn sàng cung cấp khi được yêu cầu." },

  notFoundCode: { en: "No route registered", vi: "Không có route nào được đăng ký" },
  notFoundBody: {
    en: "The shell resolved this path and found nothing mounted at it.",
    vi: "Shell đã resolve đường dẫn này và không tìm thấy gì được mount ở đó.",
  },
  backHome: { en: "Back to overview", vi: "Về trang tổng quan" },

  footerNote: {
    en: "Built with React, Tailwind, and shadcn/ui.",
    vi: "Xây bằng React, Tailwind và shadcn/ui.",
  },
} satisfies Record<string, L>;

type UiKey = keyof typeof ui;

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  /** Resolve a bilingual value from the CV data. */
  t: (value: L) => string;
  /** Resolve a piece of interface copy by key. */
  c: (key: UiKey) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "vi") return stored;
  } catch {
    /* storage can be unavailable; fall through to the browser hint */
  }
  return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* nothing to do — the choice just will not persist */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const t = useCallback((value: L) => value[lang], [lang]);
  const c = useCallback((key: UiKey) => ui[key][lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t, c }), [lang, setLang, t, c]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
