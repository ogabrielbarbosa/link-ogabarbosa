import type { Metadata, Viewport } from "next";
import { Effects } from "@/components/effects/Effects";
import { PROFILE, SITE_URL } from "@/content/links";
import { fontVariables } from "./fonts";
import "./globals.css";

const description = `${PROFILE.role} ${PROFILE.bio}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PROFILE.name} · links`,
  description,
  openGraph: { title: PROFILE.name, description, type: "profile", locale: "pt_BR" },
  twitter: { card: "summary", title: PROFILE.name, description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

// Antes do primeiro paint: esconde a página para ela se montar a partir dos bits (components/effects/pagebits.ts).
const ENTER = `if (!matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("entering")`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ENTER }} />
      </head>
      <body>
        <Effects />
        {children}
      </body>
    </html>
  );
}
