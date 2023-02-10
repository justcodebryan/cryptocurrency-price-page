/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'staging' | 'production'

  readonly API_KEY: string
  readonly PORT?: string
  readonly HOST?: string

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
