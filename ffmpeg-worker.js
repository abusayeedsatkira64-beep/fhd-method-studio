// Same-origin worker: avoids cross-origin Worker construction failures on GitHub Pages.
// Single-thread @ffmpeg/core; no SharedArrayBuffer or cross-origin isolation required.
import 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.15/dist/esm/worker.js';
