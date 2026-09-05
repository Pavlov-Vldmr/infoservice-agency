/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly YMAP_API_KEY: string
    // перечислите остальные ключи...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}