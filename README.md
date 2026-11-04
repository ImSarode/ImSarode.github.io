# Ishaan Sarode — Portfolio

A static, responsive personal portfolio ready for GitHub Pages. No build step, no dependencies.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Backup your current portfolio repository.
2. Copy the contents of this folder (not the enclosing folder) to the root of your `ImSarode.github.io` GitHub repository.
3. Commit and push to the branch configured in **Settings → Pages**. If you use the standard Pages configuration, choose **Deploy from a branch → main → /(root)**.
4. Visit `https://imsarode.github.io/` after GitHub Pages deploys.

## Editing

- Update project cards and content in `index.html`. Cards appear in the requested order.
- Update colors, spacing, fonts, and layouts in `style.css`.
- Theme persistence, mobile navigation, and project filtering live in `script.js`.
- Add your resume PDF later and create a download link in the hero. No broken resume link is included.
- Local project images are under `images/misc/`; no remote project images are required.

The homepage keeps the user's existing education and contact details. Projects marked as ongoing remain described as research/work in progress.
