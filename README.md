# ConstructEng Australia — Website

New site for constructeng.com.au, replacing the old Joomla build. Static site (Astro), content editable through a `/admin` panel (Decap CMS), forms handled by Netlify Forms — no traditional server or database to maintain.

## What's here

- `src/pages/` — the site's pages (home, about, disciplines, job seekers, employers, testimonials, contact)
- `src/content/vacancies/` — one file per job listing (editable via `/admin`)
- `src/content/testimonials/` — one file per testimonial (editable via `/admin`)
- `src/data/settings.json` — site-wide text: phone, email, hero copy, bio, stats (editable via `/admin`)
- `public/admin/` — the Decap CMS admin panel config
- `netlify.toml` — build settings + redirects from the old Joomla URLs so old links/SEO keep working

## Local development

```sh
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Going live — steps for Simon

I (Claude) can't create accounts or enter passwords on your behalf, so these steps need you. They're free and take about 10–15 minutes total.

### 1. Create a GitHub account (if you don't have one)
Go to github.com → sign up. This is where the site's code and content will live — you own it.

### 2. Create a new repository
On GitHub, click "New repository". Name it `constructeng-website`, keep it **Private**, don't add a README (we already have one). Once created, come back and tell me — I'll push this code to it.

### 3. Create a Netlify account
Go to netlify.com → sign up with your GitHub account (one click, no separate password). Then "Add new site" → "Import an existing project" → choose the `constructeng-website` repo. Build command and publish directory are already configured in `netlify.toml`, so you can accept the defaults.

### 4. Enable Netlify Identity + Git Gateway
This is what gives you the `/admin` login for editing content yourself:
- In your Netlify site dashboard → **Site configuration → Identity** → "Enable Identity"
- Under Identity settings → **Registration**, set to "Invite only" (so random people can't sign up)
- Under Identity → **Services**, enable **Git Gateway**
- Under Identity → **Invite users**, invite yourself (your email) — you'll get an email to set your own password, which only you ever see

Once that's done, you (and anyone you invite) can go to `https://constructeng.com.au/admin` and log in to add vacancies, edit testimonials, or update the phone number/bio text — no code, no developer needed.

### 5. Point your domain at Netlify
In Netlify → **Domain management** → add `constructeng.com.au` as a custom domain. Netlify will give you exact DNS records to add. You (or whoever manages your domain registrar) add those records there — this is the one step that touches your live domain, so double-check with your registrar's instructions or ask me to walk through it with you.

### 6. Set up the CV/employer-brief email notifications
In Netlify → **Forms**, you'll see the two forms (`cv-submission`, `employer-brief`) appear automatically after the first deploy. Under **Forms → Settings and usage → Form notifications**, add an email notification to simon@constructeng.com.au so you get notified the moment someone submits a CV or a hiring brief.

## Content model

- **Vacancies** — title, location, discipline, type, active toggle (untick to hide without deleting), display order, and a short description.
- **Testimonials** — quote, role, company, a "featured" toggle (featured ones show on the homepage; all of them show on the Testimonials page).
- **Settings** — the phone number, email, hero text, About page bio, and the stat numbers (years' experience, offer ratio, etc.) shown across the site.

Every change made in `/admin` is saved as a real commit to the GitHub repo, and Netlify automatically rebuilds and redeploys the live site within about a minute.
