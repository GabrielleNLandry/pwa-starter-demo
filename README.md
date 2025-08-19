# My PWA Starter (Assignment-Ready)

This repo is a **minimal single-page site** enhanced into a **Progressive Web App (PWA)** and aligned with your professor’s requirements.

---

## ✅ What’s Included
- `index.html` – your simple web app
- `styles.css` – minimal styling
- `app.js` – registers the service worker and shows an Install button
- `manifest.json` – name, icons, theme color, start URL
- `service-worker.js` – cache-first offline support and installability
- `icons/icon-192.png`, `icons/icon-512.png` – required icons for Lighthouse

> You can swap the content for your own project or keep this as the starting point.

---

## 1) Start with a Simple Web App
Open this folder in VS Code and launch a local server (e.g., using the Live Server extension or `python -m http.server`).

---

## 2) Enhance with PWABuilder
1. Go to **https://www.pwabuilder.com/**
2. Enter your **local or deployed URL** (e.g., `http://127.0.0.1:5500/` or your GitHub Pages URL)
3. Follow suggestions (icons, manifest, service worker).  
   - You may **re-download** the `manifest.json` and `service-worker.js` if PWABuilder recommends changes.
4. Replace files in this project with the downloaded ones **if different**.

> PWABuilder checks installability and offline readiness and can package for app stores.

---

## 3) Update `index.html`
- Change the `<title>`, header text, and content to match your app.
- Keep the `<link rel="manifest" href="manifest.json">`
- Keep `app.js` which registers the service worker.

---

## 4) Deploy Your PWA
### Option A — GitHub Pages
1. Create a **new GitHub repository** and push this folder.
2. In the repo: **Settings → Pages → Deploy from branch → `main`/`docs`** (or root).
3. Wait for the green check. Your public URL will look like:
   `https://<your-username>.github.io/<repo-name>/`

### Option B — Netlify (Recommended in CMPS262)
1. Go to **https://app.netlify.com/**
2. Click **Add new site → Deploy manually** and **drag-and-drop** this folder.  
   – OR – connect your GitHub repo for continuous deployment.

### Option C — Vercel
1. Go to **https://vercel.com/**
2. **New Project → Import GitHub Repo → Deploy**.

> After deployment, verify the service worker is served from the **site root**. On GitHub Pages under a subpath, you may need to use **relative paths** and avoid leading slashes in `service-worker.js` and `app.js` requests.

---

## 5) Test Your PWA (Lighthouse)
1. Open your deployed site in **Chrome**.
2. **F12 → Lighthouse → PWA → Analyze page load**.
3. Confirm:
   - ✅ “**Installable**”
   - ✅ “**Works offline**”
4. Manually test:
   - Visit the site, then go **Offline** in DevTools → Network tab, and **Reload**.

---

## 6) 2–4 Minute Demo Video Script
Use this script outline (adjust wording to fit your app):

**Intro (10–15s):**  
“Hi, I’m <Your Name>. This is my Progressive Web App called ‘My PWA Starter’. It’s a single‑page site that I converted into a PWA using PWABuilder.”

**Code Walkthrough (45–60s):**  
- “Here’s `index.html` with a link to `manifest.json`, a theme color, and my app UI.”  
- “In `app.js`, I register the service worker and handle the `beforeinstallprompt` event to show an Install button.”  
- “`manifest.json` defines the app name, icons, colors, and `start_url`, which Lighthouse checks for installability.”  
- “`service-worker.js` uses a cache‑first strategy for app shell files so the site works offline.”

**Live Site + Install (45–60s):**  
- Open your deployed URL.  
- Show the browser’s **Install** option (or click the **Install App** button).  
- Launch the installed app window (standalone) to show the native‑like experience.

**Offline Test (20–30s):**  
- In DevTools → Network, toggle **Offline** and refresh.  
- Point out that content still loads thanks to the service worker cache.

**Wrap‑up (10–15s):**  
- “I confirmed PWA readiness with Lighthouse and deployed using <GitHub Pages / Netlify / Vercel>. Thanks!”

---

## Notes
- If your app is under a subpath (e.g., GitHub Pages), you can change the cache list in `service-worker.js` to **relative** paths (`'index.html'` instead of `'/index.html'`).  
- After any changes, **hard refresh** or **unregister** the old service worker in DevTools → Application → Service Workers.

---

## File Map
```
/
├─ index.html
├─ styles.css
├─ app.js
├─ manifest.json
├─ service-worker.js
└─ icons/
   ├─ icon-192.png
   └─ icon-512.png
```
