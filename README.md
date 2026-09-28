# Expense Manager – phone app (installable web app)

This folder is a small "app shell". It gives Expense Manager its own icon and name, opens full-screen with no browser bar, and shows a splash screen and an offline message. Inside, it loads your live Apps Script app (the `/exec` link in `config.js`), so updates you deploy in Apps Script show up in the app automatically.

## 1. Put it online (free, one time)

Pick **one** of these two options.

### Option A: Netlify Drop (easiest, no account needed to start)
1. Go to <https://app.netlify.com/drop>.
2. Drag the **`pwa`** folder onto the page. You get a link like `https://random-name.netlify.app`.
3. Create a free Netlify account when asked, so the site is kept. Then, under **Site configuration → Change site name**, pick a name, e.g. `triporganiser` → `https://triporganiser.netlify.app`.
4. To update later, open the site in Netlify, go to **Deploys**, and drag the `pwa` folder again.

### Option B: GitHub Pages
1. Create a free account at github.com, then click **New repository**. Name it e.g. `expense-manager-app`, choose **Public**, and click **Create**.
2. Click **uploading an existing file**, drag in **everything inside** `pwa/` (index.html, config.js, manifest.webmanifest, sw.js and the icons folder), then click **Commit changes**.
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then **main** and **/ (root)**, and click **Save**.
4. After a minute your app is at `https://<your-username>.github.io/expense-manager-app/`.

## 2. Install it on a phone

**iPhone (Safari):**
1. Open the app link in Safari.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**, then **Add**.
3. Open **Expenses** from the home screen.

**Android (Chrome):**
1. Open the app link.
2. Tap **Install app** (or ⋮ → **Add to Home screen**), then **Install**.

People sign in once with their email and code, as usual.

## 3. Share it

- **Google Site:** add a button on https://sites.google.com/view/triporganiser/home. Use **Insert → Button**, label it "📱 Install the phone app", and link it to your Netlify or GitHub link.
- **WhatsApp:** send the link with the line "Open in Safari/Chrome, then Add to Home Screen".

## Changing things

| What | Where |
|---|---|
| The Apps Script `/exec` link | `config.js` |
| App name / short name / colours | `manifest.webmanifest` and `<meta>` tags in `index.html` |
| Icons | `icons/` (192, 512, maskable 512, apple-touch 180, favicon 32) |

After changing a file, upload the folder again, following step 1. If an old version sticks on a phone, open the app, pull down to refresh, or close and reopen it.

## Good to know
- **Sign-in:** the app keeps people signed in the same way the website does. iPhones may ask them to sign in again after a few weeks of not using it.
- **Pay via UPI app:** this works as it does in Safari or Chrome.
  - **Share on WhatsApp:** it may download the image instead of opening the share menu. Attach the downloaded image in WhatsApp.
- **Nothing is stored in the shell:** all data stays in your Google Sheet.
