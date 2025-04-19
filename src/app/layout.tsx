import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// export const metadata: Metadata = {
//   title: "Your App",
//   description: "Your description",
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const locale = await getLocale(); // دریافت زبان فعلی
//   const messages = await getMessages(); // دریافت ترجمه‌ها بر اساس زبان
//   console.log("LOCALE:", locale);
//   console.log("MESSAGES:", messages);

//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <Layout>{children}</Layout>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
