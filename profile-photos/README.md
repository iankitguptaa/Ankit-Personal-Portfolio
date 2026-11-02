# Profile photos (backup)

Originals of the portrait images used on the site. The live copies are in `public/`.

| File | Used in site? | Notes |
| --- | --- | --- |
| `ankit-hero-cutout-transparent.webp` | Yes (`public/ankit_hero_cutout.webp`) | Transparent background, red rim light. Used in Hero and About. |
| `ankit-red-neon-with-background.webp` | No | Same artwork with the black background. |
| `ankit-cutout-shirt.png` | No | Transparent cutout of the pink-shirt photo. |
| `ankit-original-photo.jpeg` | No | Original photo (city background). |

## Accent colour

The red rim light is baked into the hero image. The site recolours it at runtime with a CSS
`hue-rotate` filter driven by the `--portrait-hue` variable (set in `src/components/ThemeSwitcher.jsx`),
so no extra image per colour is needed. If you replace the image with one that has a different base
colour, update `PORTRAIT_BASE_HUE` in `ThemeSwitcher.jsx`.
