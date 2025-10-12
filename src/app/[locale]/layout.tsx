import "./globals.css";
import type { Metadata } from "next";
import CombinedHeader from "@/components/header/CombinedHeader";
import Providers from "@/components/layout/providers";
import { Footer } from "@/components/footer/footer";
import localFont from "next/font/local";

// Definindo a fonte URW Geometric como fonte principal
const urwFont = localFont({
  src: "./URWGeometricRegular.otf",
  variable: "--font-urw",
  display: "swap",
});
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";

const APP_NAME = "PedroRabelais";
const APP_DEFAULT_TITLE = "PedroRabelais";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "PedroRabelais!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const resolvedParams = await params;
  const messages = await getMessages(resolvedParams.locale as any);

  return (
    <html className={`${urwFont.variable} font-urw`} suppressHydrationWarning lang="pt-BR">
      {/* <Script defer data-domain="PedroRabelais.org" src="https://plausible.PedroRabelais.app/js/script.js" /> */}
      <body className={"font-urw"}>
        <Providers messages={messages} locale={resolvedParams.locale}>
          <CombinedHeader locale={resolvedParams.locale} />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
