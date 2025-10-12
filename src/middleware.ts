import { NextResponse, NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const locales = ["pt"];

const defaultLocale = "pt";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Ignorar middleware para arquivos estáticos e imagens
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|json|css|js|map)$/)
  ) {
    return NextResponse.next();
  }

  // Redirecionar para o defaultLocale se a rota não incluir uma locale válida
  const isLocaleMissing = !locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (isLocaleMissing) {
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Fallback para o middleware do next-intl
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|static).*)"],
};
