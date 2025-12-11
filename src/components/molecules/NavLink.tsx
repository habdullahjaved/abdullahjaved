// src/
// │
// ├── app/
// │   ├── layout.tsx
// │   ├── page.tsx                   # Home page (uses HomeTemplate)
// │   ├── projects/
// │   │   ├── page.tsx               # All projects page
// │   │   └── [slug]/page.tsx        # Single project details
// │   ├── globals.css
// │   └── favicon.ico
// │
// ├── components/
// │   ├── atoms/                     # Smallest reusable UI pieces
// │   │   ├── Button.tsx
// │   │   ├── Heading.tsx
// │   │   ├── Text.tsx
// │   │   ├── Icon.tsx
// │   │   ├── Avatar.tsx
// │   │   └── Tag.tsx
// │   │
// │   ├── molecules/                 # Combination of atoms
// │   │   ├── NavLink.tsx
// │   │   ├── SocialIcon.tsx
// │   │   ├── ProjectCard.tsx
// │   │   ├── ContactFormField.tsx
// │   │   └── SkillBadge.tsx
// │   │
// │   ├── organisms/                 # Complex reusable sections
// │   │   ├── Navbar.tsx
// │   │   ├── HeroSection.tsx
// │   │   ├── AboutSection.tsx
// │   │   ├── ProjectsSection.tsx
// │   │   ├── ContactSection.tsx
// │   │   └── Footer.tsx
// │   │
// │   ├── templates/                 # Page layout templates
// │   │   ├── HomeTemplate.tsx
// │   │   └── ProjectTemplate.tsx
// │   │
// │   └── ui/                        # Optional: shared small UI utilities
// │       ├── Container.tsx
// │       └── SectionHeading.tsx
// │
// ├── data/                          # JSON or TS data files
// │   ├── projects.ts
// │   ├── experience.ts
// │   └── socialLinks.ts
// │
// ├── hooks/                         # Custom React hooks
// │   └── useScrollPosition.ts
// │
// ├── lib/                           # Utility or helper functions
// │   ├── utils.ts
// │   └── constants.ts
// │
// ├── styles/
// │   ├── animations.css             # Optional global animations
// │   └── typography.css
// │
// └── types/
//     ├── project.ts
//     ├── experience.ts
//     └── index.ts
