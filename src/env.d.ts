/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __META_PIXEL_DISABLED__?: boolean;
  __metaPixelGranted__?: boolean;
  updateMetaPixelConsent?: (granted: boolean) => void;
  fbq?: (...args: unknown[]) => void;
}
