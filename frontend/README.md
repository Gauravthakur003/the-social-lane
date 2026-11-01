# The Social Lane — Website

A responsive multi-page React + Vite website for The Social Lane.

## Pages
- Home (`/`)
- About Us (`/about`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Blog (`/blog`)
- Contact (`/contact`)

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the project folder in VS Code.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  assets/images/
  components/
    layout/Navbar.jsx
    layout/Footer.jsx
    PageHero.jsx
    SectionHeading.jsx
  data/content.js
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Portfolio.jsx
    Blog.jsx
    Contact.jsx
  styles/
    variables.css
    global.css
    components.css
    responsive.css
```

## Before publishing
- Replace the generated text logo with the approved transparent brand logo if required.
- Add the approved Sahil Trivedi portrait to `src/assets/images/` and update the image import in `src/pages/About.jsx` (the current card uses an initials placeholder).
- Confirm public contact email, phone numbers, social profile URLs and campaign claims before deployment.
- The contact form opens the visitor's default email app; connect a backend or form service if you need submissions stored online.
