# Ankit Kumar | Personal Portfolio

A fast, animated, fully responsive developer portfolio built with React, Vite and Tailwind CSS.
Dark theme, parallax hero, an orbiting tech-stack section and a one-click accent colour switcher.

**Live site:** https://ankit-portfolio-three-woad.vercel.app/

## Sections

- **Hero:** portrait with scroll and mouse parallax, ghost "PORTFOLIO" wordmark
- **About:** short bio, focus areas, stats and education
- **Skills:** animated orbit of logos plus categorised skill chips
- **Experience:** timeline of internships and work
- **Projects:** expanding accordion with screenshots, live demo and source links
- **Certificates:** gallery with a full-size lightbox
- **Resume:** inline PDF preview with download button
- **Contact:** form that opens WhatsApp with the message pre-filled, plus social links

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite |
| Styling | Tailwind CSS v4, custom CSS variables |
| Animation | Framer Motion |
| Icons | lucide-react, react-icons |
| Hosting | Vercel |

## Project structure

```
.
├── public/              # static files served as-is (images, resume PDF, favicon)
│   ├── certificates/    # certificate images shown on the site
│   └── projects/        # project screenshots
├── certificates/        # backup copies of the certificate images
├── profile-photos/      # backup copies of the portrait images (see its README)
├── resume/              # backup copy of the resume PDF
└── src/
    ├── components/      # one component per section, plus Navbar, Footer, ThemeSwitcher
    ├── data/
    │   └── portfolioData.js   # all content lives here
    ├── App.jsx
    ├── index.css        # theme variables and section styles
    └── main.jsx
```

## Customising

All text content (profile, experience, projects, skills, certificates) is in
[`src/data/portfolioData.js`](src/data/portfolioData.js). Edit it and the sections update automatically.

- **Add a project:** add an object to `PROJECTS` with a screenshot in `public/projects/`.
- **Add a certificate:** drop the image in `public/certificates/` and add an entry to `CERTIFICATIONS`.
- **Replace the resume:** overwrite `public/ANKIT_KUMAR_RESUME.pdf`.
- **Change the portrait:** replace `public/ankit_hero_cutout.webp` (a transparent PNG/WebP works best).
- **Default accent colour:** set `DEFAULT_ACCENT` in `src/components/ThemeSwitcher.jsx`.
  The portrait's red rim light is recoloured at runtime with a CSS `hue-rotate` filter;
  if you use a portrait with a different base colour, update `PORTRAIT_BASE_HUE` in the same file.

## Deployment

The site is a static Vite build, so it deploys anywhere. On Vercel, import the repository and use the defaults
(framework: Vite, build command: `npm run build`, output directory: `dist`).

## Contact

- Email: iankitgupta04@gmail.com
- LinkedIn: https://www.linkedin.com/in/ankit-kumar-gupta04/
- GitHub: https://github.com/iankitguptaa
- LeetCode: https://leetcode.com/u/theankitguptaa/
