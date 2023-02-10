/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'staging' | 'production'

  readonly VITE_API_KEY: string
  readonly VITE_PORT?: string
  readonly VITE_HOST?: string

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
