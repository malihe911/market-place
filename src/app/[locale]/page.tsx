"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPath = `/${nextLocale}${pathname.replace(/^\/(en|fa)/, "")}`;

    startTransition(() => {
      router.push(newPath);
    });
  };
  const t = useTranslations();

  return (
    <>
      <select
        defaultValue={pathname.split("/")[1]}
        onChange={handleLocaleChange}
        disabled={isPending}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
      <h1>{t("HomePage.title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}
