# Ayoub Dellaoui — Cinematic Portfolio

A cinematic scroll-scrub portfolio built with React, GSAP, and Lenis.
Scroll drives the hero video frame by frame.

**Live:** [ayybdell.vercel.app](https://ayybdell.vercel.app)  
**Repo:** [github.com/Aybdell/scroll-scrub](https://github.com/Aybdell/scroll-scrub)

---

## Tech Stack

- React + Vite
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- CSS Variables
- Google Fonts (Fraunces + Inter)

---

## Features

- Scroll-scrub video — scroll drives playback frame by frame
- Smooth scrolling with Lenis
- GSAP reveal animations on all sections
- Floating pill header
- Text sections with subtle scrims over the video
- Responsive layout — desktop scrub, mobile video loop

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Aybdell/scroll-scrub.git
cd scroll-scrub

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The hero video is included at `public/hero.mp4`.

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ProjectCard.jsx
│   ├── SkillsSection.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── App.jsx          ← video + scroll-scrub + GSAP context
├── App.css          ← styles + CSS variables
└── main.jsx

public/
└── hero.mp4         ← scroll-scrub hero video
```

---

## How the Scroll-Scrub Works

```
User scrolls down
      ↓
GSAP ScrollTrigger tracks scroll progress (0 → 1)
      ↓
video.currentTime = (progress × duration × 3) % duration
      ↓
Video scrubs across 3 loops — controlled by scroll
```

Lenis smooths the scroll so scrubbing feels cinematic.
On mobile (≤768px), scrub is disabled and the video plays on loop.

---

## Optional: Re-encode Your Own Video

For the smoothest scrub, encode with a keyframe every frame:

```bash
ffmpeg -i input.mp4 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p public/hero.mp4
```

Keep the file under GitHub’s 100MB limit if you commit it.

---

## Contact

- Email: [ayoub40dell@gmail.com](mailto:ayoub40dell@gmail.com)
- GitHub: [github.com/Aybdell](https://github.com/Aybdell)
- Portfolio: [ayybdell.vercel.app](https://ayybdell.vercel.app)
