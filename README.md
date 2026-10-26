# Video Method Studio

Free static browser-based video processing starter using FFmpeg.wasm. Upload, choose quality, resolution (4K UHD, 2K/QHD, FHD, HD, SD or original), FPS (source, presets, or custom 1–120), process, download MP4. Remux copies streams without changing resolution or FPS. The selected resolution is a maximum bounding size and never upscales. Higher FPS does not invent real motion detail. Performance depends on browser, RAM, codec support and input size. Large 4K exports may fail on limited devices.

## Publish
Upload `index.html` to the root of a public GitHub repository. Settings > Pages > Deploy from a branch > main > /(root). Wait for the published URL. An internet connection is needed for FFmpeg CDN assets. Test a short video first.

No TikTok affiliation, no platform quality or reach guarantee.
