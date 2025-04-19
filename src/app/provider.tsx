"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const segments = pathname?.split("/") || [];
    const currentLocale = segments[1] || "en";

    setLocale(currentLocale);

    import(`../messages/${currentLocale}.json`)
      .then((mod) => setMessages(mod))
      .catch(() => setMessages(null));
  }, [pathname]);

  if (!messages) return null; // یا <Loading />

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
