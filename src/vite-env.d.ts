/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_NEWS_API_KEY: string;
  VITE_FIREBASE_APIKEY: string;
  VITE_FIREBASE_DOMAIN: string;
  VITE_FIREBASE_DATABASE: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
