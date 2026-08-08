# Ayoub Dellaoui — Cinematic Portfolio

A cinematic scroll-scrub portfolio built with React, GSAP, and Lenis.
The scroll controls the video playback frame by frame.

---



## Tech Stack

- React + Vite
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- CSS Variables
- Google Fonts (Fraunces + Inter)

---

## Features

- Scroll-scrub video — scroll drives video playback frame by frame
- Smooth scroll with Lenis
- GSAP reveal animations on all sections
- Floating pill header — centered, glassmorphism
- Cinematic text sections floating over video
- Fully responsive — desktop and mobile
- Video loops seamlessly across the full scroll length

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Aybdell/cinematic-portfolio.git
cd cinematic-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Video Setup

The hero video is not included in this repository (file too large for GitHub).
You need to provide your own video to run the project locally.

**1. Get a free cinematic video:**
- [pexels.com/videos](https://pexels.com/videos)
- Recommended search: `cinematic dark technology` or `coding screen dark`
- Download in 1080p or 4K, duration between 15–30 seconds

**2. Encode it with FFmpeg for smooth scroll-scrub:**

Without this step the video will stutter — FFmpeg adds a keyframe
on every frame which is required for frame-by-frame scrubbing.

```bash
ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p public/hero.mp4
```

**3. Place the output file here:**

```
public/
└── hero.mp4   ← your encoded video goes here
```

> Without this file the video background will not appear,
> but the rest of the site works normally.

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        ← floating pill nav
│   ├── HeroSection.jsx   ← name, tagline, CTA buttons
│   ├── ProjectCard.jsx   ← reusable project card
│   ├── SkillsSection.jsx ← skill groups
│   ├── CTASection.jsx    ← contact links
│   └── Footer.jsx        ← name, copyright
├── App.jsx               ← video + scroll-scrub + GSAP context
├── App.css               ← all styles + CSS variables
└── main.jsx
```

---

## How the Scroll-Scrub Works

```
User scrolls down
      ↓
GSAP ScrollTrigger tracks scroll progress (0% → 100%)
      ↓
video.currentTime = progress × video.duration
      ↓
Video plays frame by frame — controlled by scroll
```

Lenis smooths the scroll so the scrub feels cinematic.
On mobile, scroll-scrub is disabled and the video plays on loop instead.

---


> Remember: do not push `public/hero.mp4` to GitHub.
> Add it to `.gitignore` and host the video separately if needed.

---

## Contact

- Email: [ayoub40dell@gmail.com](mailto:ayoub40dell@gmail.com)
- GitHub: [github.com/Aybdell](https://github.com/Aybdell)
- Portfolio: [ayybdell.vercel.app](https://ayybdell.vercel.app)
