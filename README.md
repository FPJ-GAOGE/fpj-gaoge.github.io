# Fong Pangkit — Academic Homepage

Bilingual academic homepage: https://fpj-gaoge.github.io/

This repository contains the public website files published from a separate private authoring repository. It includes the avatar and academic information already displayed on the homepage.

The site uses dependency-free HTML, CSS, and JavaScript. A Node.js build in the private authoring repository generates complete Chinese and English pages before publishing. No build runs in this deployment repository.

Chinese homepage: `/`; English homepage: `/en/`. Printable academic CVs: `/cv/` and `/cv/en/`. The pages include research diagrams, publication topic and type filters, paper figures with source links, expandable news, and contact links.

Academic content is stored in `profile.js`, templates in `render.js`, progressive interactions in `app.js`, and layout in `style.css` and `enhancements.css`. Image provenance is documented in `assets/papers/SOURCES.md`. The original private CV PDF is not included.

GitHub Pages publishes the `main` branch from the repository root. The `.nojekyll` file disables Jekyll processing.
