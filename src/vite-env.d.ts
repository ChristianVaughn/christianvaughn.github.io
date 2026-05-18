/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PALETTE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
