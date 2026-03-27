import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">
        Building SPAIK clone... {t("hero.title1")}
      </p>
    </main>
  );
}
