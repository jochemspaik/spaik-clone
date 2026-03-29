import { useLocale } from "next-intl";
import { routing } from "./routing";

type AppLocale = (typeof routing.locales)[number];

/** Type-safe locale hook — returns narrowed "nl" | "en" instead of string */
export function useTypedLocale(): AppLocale {
  const locale = useLocale();
  if (!routing.locales.includes(locale as AppLocale)) {
    throw new Error(`Unexpected locale: ${locale}`);
  }
  return locale as AppLocale;
}
