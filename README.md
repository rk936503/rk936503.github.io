# Rahul Kumar's Portfolio Website 🌐

Source code for my personal portfolio, showcasing my skills, projects, certifications and experience as a backend-leaning full stack developer.

**Live site:** [rk936503.github.io](https://rk936503.github.io/)

## Table of Contents

- [About Me](#about-me)
- [Projects Featured](#projects-featured)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Screenshot](#screenshot)
- [Contact](#contact)

## About Me

I'm **Rahul Kumar**, a B.Tech CSE student at Lovely Professional University and a backend-leaning full stack developer with hands-on DevOps exposure. I build systems the way production teams do, with auth, rate limiting, observability and CI/CD included from day one. My projects focus on system design thinking: multi-tenancy, distributed rate limiting, circuit breakers and infrastructure as code.

## Projects Featured

| Project | Highlights | Stack |
| --- | --- | --- |
| **Aegis API** | 4-service microservices backend (API Gateway, Auth, User, Order), JWT auth, Redis-backed rate limiting, per-service circuit breakers, Prometheus + Grafana observability | Node.js, Prisma, PostgreSQL, Redis, Docker |
| **URL Shortener API** | Production REST API deployed to AWS EC2 via a Jenkins CI/CD pipeline, Terraform-provisioned infra, Kubernetes manifests, 13-panel Grafana dashboard | Express, Drizzle ORM, PostgreSQL, Jenkins, Terraform, Kubernetes |
| **Enterprise Knowledge Base API** *(in progress)* | Multi-tenant RAG-as-a-Service platform focused on retrieval quality and tenant isolation | FastAPI, PostgreSQL + pgvector, Docker |
| **Job Application Tracker** | Multi-user tracking app, live on Render, ledger-style UI, GitHub Actions CI/CD pipeline | Flask, PostgreSQL, Docker |

## Technologies Used

**Portfolio site:** HTML5, CSS3, vanilla JavaScript, SwiperJS, ScrollReveal, Remix Icon, Font Awesome, Google Fonts (Space Grotesk)

**Skills showcased:**

- **Backend:** Node.js / Express.js, REST APIs & JWT auth, Prisma / Drizzle ORM, PostgreSQL, MongoDB, Redis
- **Frontend:** HTML / CSS, JavaScript / TypeScript, React, Tailwind CSS
- **DevOps:** Docker & Kubernetes, AWS (EC2) & Terraform, Jenkins & GitHub Actions, Prometheus & Grafana, Linux

## Features

- Responsive layout with a mobile navigation menu
- Dark theme with smooth scrolling and scroll-reveal animations
- Typewriter effect in the hero section
- Sections for About, Qualification, Certifications, Services, Projects and Contact
- Downloadable resume and links to certificates
- Embedded Google Form for contact
- SEO meta tags

## Project Structure

```
.
├── index.html
├── main.css
├── assets/
│   ├── img/            # favicon and project screenshots
│   ├── certificates/   # certification PDFs
│   ├── js/main.js
│   └── rahul.jpeg
└── README.md
```

## Getting Started

```bash
git clone https://github.com/rk936503/rk936503.github.io.git
cd rk936503.github.io
```

Open `index.html` in your browser, or serve it locally:

```bash
npx serve .
```

## Screenshot

![Portfolio screenshot](./assets/img/screenshot.png)

## Contact

- Email: [rk936503@gmail.com](mailto:rk936503@gmail.com)
- LinkedIn: [Rahul Kumar](https://www.linkedin.com/in/rahul-kumar-2557aa28b/)
- GitHub: [rk936503](https://github.com/rk936503)

Feel free to explore the code and customize it for your own use. If you like it, give the repo a ⭐!
