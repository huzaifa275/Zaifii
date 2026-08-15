/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_GOOGLE_SEARCH_CONSOLE_VERIFICATION?: string;
  readonly VITE_BING_WEBMASTER_VERIFICATION?: string;
  readonly VITE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
