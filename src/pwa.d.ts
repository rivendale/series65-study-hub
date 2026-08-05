/**
 * Type declarations for the virtual modules vite-plugin-pwa generates at build
 * time. They have no on-disk source, so TypeScript only knows about them
 * through this reference.
 *
 * Kept as its own file rather than a `types` entry in tsconfig.json so that
 * dropping the plugin means deleting one file, and so the reason for the
 * reference is written down next to it.
 */
/// <reference types="vite-plugin-pwa/react" />
