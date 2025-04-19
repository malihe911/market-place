"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function setLocale(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;

    startTransition(() => {
      router.replace(`/${locale}${pathname.replace(/^\/(fa|en)/, "")}`);
    });
  }

  return (
    <div className="p-4 flex gap-2">
      <button
        className="border border-amber-600 p-2 disabled:opacity-50"
        onClick={() => setLocale("en")}
        disabled={isPending}
      >
        English
      </button>
      <button
        className="border border-amber-600 p-2 disabled:opacity-50"
        onClick={() => setLocale("fa")}
        disabled={isPending}
      >
        فارسی
      </button>
    </div>
  );
}
