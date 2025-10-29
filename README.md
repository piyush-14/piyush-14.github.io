# Personal Resume Website

A modern, React-based resume website with live timezone display.

## 🚀 Development

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for production

```bash
npm run build
```

This creates a `dist` folder with your built site.

## 📦 Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` (see file in repo)
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push your code - automatic deployment!

### Option 2: Manual Deploy

```bash
npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f https://github.com/piyush-14/piyush-14.github.io.git main:gh-pages
cd ..
```

Then enable GitHub Pages from the `gh-pages` branch in Settings → Pages.

## ✏️ Customization

Edit `src/App.jsx` to update:

- Your name and information
- Social links
- Experience and projects
- All content sections

Edit `src/components/TimezoneDisplay.jsx` to change:

- Timezones displayed
- Time format
- Styling

## 🎨 Styling

- `src/App.css` - Main page styles
- `src/components/TimezoneDisplay.css` - Timezone component styles
- `src/index.css` - Global styles
