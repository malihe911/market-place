import Image from "next/image";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/common/Localeswitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LocaleSwitcher />
      </div>
    </>
  );
}
