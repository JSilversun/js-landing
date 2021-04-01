import { LANG_KEY } from "@/utils/constants/app";

export function getLanguage(): string {
  return (
    window.localStorage.getItem(LANG_KEY) ||
    window.navigator.language.slice(0, 2) ||
    process.env.VUE_APP_I18N_LOCALE ||
    "en"
  );
}
