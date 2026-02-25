# VillageFive Website

## Project Overview
VillageFive is a YouTube channel focused on disaster documentaries. This website serves as the channel's home base for SEO traffic, blog content, and email list building.

## Tech Stack
- **Framework:** Astro
- **Hosting:** Vercel
- **Domain:** villagefive.com (DNS via GoDaddy, pointed to Vercel)
- **Styling:** Custom CSS using design system tokens (see /src/styles/design-system.html). No Tailwind needed.
- **Blog:** Astro Content Collections (markdown files in /src/content/blog/)
- **Newsletter:** Beehiiv (embedded form)

## Design System

### IMPORTANT: Canonical Design Reference
The complete design system is defined in `/src/styles/design-system.html`. This file is the single source of truth for all visual decisions. It contains:
- Full color palette with CSS custom properties (ash, ember, signal, static token families)
- Typography scale (Bebas Neue for display, Barlow Condensed for labels, Barlow for body)
- 8px spacing system with named tokens
- Border radius, elevation/shadow, and motion/easing tokens
- Complete component library: buttons (4 variants, 4 sizes), cards, badges, tags, chips, forms, toggles, checkboxes, accordions, modals, toasts, tooltips, navigation, tabs, video player bar, pagination, loading skeletons, empty states, spinners, dividers
- Hero block example
- Footer layout
- WCAG contrast ratios verified for all color pairings

### Key Design Tokens (quick reference)
```css
--ash-900: #0D0D0D    /* Background */
--ash-800: #141414    /* Cards/raised surfaces */
--ember-400: #E8420A  /* Primary CTA accent */
--ash-000: #F5F5F0    /* Primary text (off-white) */

--font-display: 'Bebas Neue'        /* Headlines */
--font-condensed: 'Barlow Condensed' /* Labels, UI text */
--font-body: 'Barlow'               /* Body copy */
```

### Design Rules
- Dark theme throughout. Tone is cinematic, serious, gripping.
- Use design system tokens for ALL colors, spacing, typography. Never use raw hex values.
- No em dashes in any copy. Use commas, periods, or colons instead.
- Mobile-first responsive design.
- Subtle ember glow accents on interactive elements (--shadow-glow-ember).
- Corner bracket accents on hero sections.
- Prefer shadow and elevation over visible borders.

## Pages

### Home (/)
- Hero section: Channel name "VILLAGEFIVE", tagline "Disaster Documentaries", YouTube subscribe button
- Latest Video: Embedded YouTube player with most recent upload
- Recent Videos: Grid of 6 video cards (thumbnail, title, date) linking to YouTube
- Newsletter CTA: "Get new disaster stories in your inbox" + Beehiiv signup form
- Footer: Links to YouTube, social profiles (@theroberthu on X), copyright

### About (/about)
- Channel story: What VillageFive is about, why forgotten disasters matter
- What to expect: Types of content (Top 5 lists, deep dives, Shorts)
- Subscribe CTA: Link to YouTube channel
- Photo/branding section

### Blog (/blog)
- Article list page: Cards with title, excerpt, date, estimated read time
- Individual article pages: Generated from markdown in /src/content/blog/
- Each article should have: title, description, publishDate, tags, youtubeVideoId (optional) in frontmatter
- If youtubeVideoId exists, embed the video at the top of the article
- Related articles section at bottom
- AdSense ad slots: one after intro paragraph, one at end of article
- Amazon Associates: placeholder divs for product/book recommendations

### Newsletter (/newsletter)
- Value proposition for subscribing
- Beehiiv embedded signup form
- "What you'll get" section: weekly disaster stories, behind-the-scenes, early access

## Blog Article Frontmatter Schema
```yaml
---
title: "5 Forgotten Disasters Nobody Talks About"
description: "Five catastrophic disasters that killed thousands. You've probably never heard of any of them."
publishDate: 2025-02-22
tags: ["forgotten disasters", "top 5", "historical"]
youtubeVideoId: "optional_video_id"
featuredImage: "/images/blog/forgotten-disasters.jpg"
---
```

## SEO Requirements
- Unique title and meta description on every page
- Open Graph tags (og:title, og:description, og:image) on every page
- Automatic sitemap generation (Astro built-in)
- Structured data (JSON-LD) for blog articles (Article schema)
- Canonical URLs
- Alt text on all images

## Monetization Slots
- Google AdSense: Ad container divs with class "ad-slot" placed in blog articles and sidebar
- Amazon Associates: Container divs with class "affiliate-slot" in blog articles for relevant product/book links
- These are placeholder divs for now. Actual ad code will be added after AdSense approval.

## File Structure
```
/
├── src/
│   ├── components/
│   │   ├── Header.astro        (nav: Home, About, Blog, Newsletter)
│   │   ├── Footer.astro        (social links, copyright)
│   │   ├── VideoCard.astro     (thumbnail + title card)
│   │   ├── BlogCard.astro      (article preview card)
│   │   ├── NewsletterForm.astro (Beehiiv signup)
│   │   ├── YouTubeEmbed.astro  (responsive YouTube player)
│   │   └── AdSlot.astro        (placeholder for monetization)
│   ├── content/
│   │   └── blog/
│   │       └── *.md            (blog articles in markdown)
│   ├── layouts/
│   │   ├── Base.astro          (HTML shell, meta tags, fonts)
│   │   └── BlogPost.astro      (article layout with sidebar)
│   ├── pages/
│   │   ├── index.astro         (home)
│   │   ├── about.astro         (about)
│   │   ├── newsletter.astro    (newsletter signup)
│   │   └── blog/
│   │       └── [...slug].astro (dynamic blog routes)
│   └── styles/
│       ├── design-system.html  (canonical design reference - DO NOT MODIFY)
│       └── global.css          (imports design tokens, global styles)
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── CLAUDE.md
```

## YouTube Video Data
Videos are stored as a simple JSON array in /src/data/videos.json. Updated manually when new videos are published. Format:
```json
[
  {
    "id": "youtube_video_id",
    "title": "5 Forgotten Disasters Nobody Talks About",
    "publishDate": "2025-02-22",
    "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
  }
]
```

## Deployment
- Push to main branch on GitHub (theroberthu/villagefive)
- Vercel auto-deploys from main
- Custom domain villagefive.com configured in Vercel + GoDaddy DNS

## Content Workflow
1. Write video script
2. Produce video (InVideo or manual)
3. Upload to YouTube
4. Convert script to markdown blog post
5. Add to /src/content/blog/
6. Update /src/data/videos.json with new video
7. Push to GitHub via Claude Code
8. Vercel auto-deploys

## Commands
- `npm run dev` - local development server
- `npm run build` - production build
- `npm run preview` - preview production build locally
