import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your description",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  if (!messages) {
    notFound(); // اگر زبان پشتیبانی نمی‌شه
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
